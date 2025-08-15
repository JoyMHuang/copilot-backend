import { Controller, Get, Post, Put, Delete, Param, Body, Query, StreamableFile } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
// import { Response } from 'express';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FundService } from './fund.service';
import { Fund, FundPerformance } from '../mock-data';

@ApiTags('Fund')
@Controller('fund')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  @Get(':id/performance/pdf')
  @ApiOperation({ summary: 'Export fund performance as PDF report' })
  @ApiResponse({ status: 200, description: 'PDF report' })
  async exportPerformancePdf(@Param('id') id: string, @Query('latest') latest?: string): Promise<StreamableFile> {
    const fund = this.fundService.findOne(id);
    const performances = latest === 'true'
      ? this.fundService.getPerformance(id).slice(-1)
      : this.fundService.getPerformance(id);

    // 兼容 CommonJS 和 ESM 的 pdfkit 导入
    const PDFKitModule = await import('pdfkit');
    const PDFDocument = PDFKitModule.default || PDFKitModule;
    const doc = new PDFDocument();
    const chunks: Buffer[] = [];
    doc.on('data', (chunk) => chunks.push(chunk));

    return new Promise<StreamableFile>((resolve) => {
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(chunks);
        resolve(new StreamableFile(pdfBuffer, {
          type: 'application/pdf',
          disposition: `attachment; filename="${fund.name}-performance.pdf"`
        }));
      });

      doc.fontSize(18).text(`${fund.name} (${fund.code}) Performance Report`, { align: 'center' });
      doc.moveDown();
      doc.fontSize(12).text(`Fund Type: ${fund.type}`);
      doc.text(`Risk Level: ${fund.riskLevel}`);
      doc.text(`Currency: ${fund.currency}`);
      doc.moveDown();
      doc.text('Performance History:', { underline: true });

      performances.forEach(perf => {
        doc.moveDown(0.5);
        doc.text(`Date: ${perf.date}`);
        doc.text(`NAV: ${perf.nav}`);
        doc.text(`YTD Return: ${perf.returnYTD}%`);
        doc.text(`1Y Return: ${perf.return1Y}%`);
        doc.text(`3Y Return: ${perf.return3Y}%`);
        doc.text(`5Y Return: ${perf.return5Y}%`);
      });

      doc.end();
    });
  }

  @Get()
  @ApiOperation({ summary: 'Get all funds' })
  @ApiResponse({ status: 200, description: 'List of funds' })
  findAll() {
    return this.fundService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get fund by id' })
  @ApiResponse({ status: 200, description: 'Fund detail' })
  findOne(@Param('id') id: string) {
    return this.fundService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a fund' })
  @ApiResponse({ status: 201, description: 'Fund created' })
  create(@Body() fund: Fund) {
    return this.fundService.create(fund);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a fund' })
  @ApiResponse({ status: 200, description: 'Fund updated' })
  update(@Param('id') id: string, @Body() update: Partial<Fund>) {
    return this.fundService.update(id, update);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a fund' })
  @ApiResponse({ status: 204, description: 'Fund deleted' })
  remove(@Param('id') id: string) {
    this.fundService.remove(id);
    return { message: 'Deleted' };
  }

  @Get(':id/performance')
  @ApiOperation({ summary: 'Get performance history for a fund' })
  @ApiResponse({ status: 200, description: 'Performance history', type: Object })
  getPerformance(@Param('id') id: string) {
    return this.fundService.getPerformance(id);
  }

  @Get('performance/latest')
  @ApiOperation({ summary: 'Get latest performance for all funds' })
  @ApiResponse({ status: 200, description: 'Latest performance', type: Object })
  getLatestPerformances() {
    return this.fundService.getLatestPerformances();
  }
}
