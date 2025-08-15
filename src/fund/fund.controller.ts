import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FundService } from './fund.service';
import { FundDto } from './dto/fund.dto';

@ApiTags('Fund')
@Controller('fund')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  @Get()
  @ApiOperation({ summary: 'Get all funds' })
  @ApiResponse({ status: 200, description: 'List of funds', type: [FundDto] })
  findAll(): FundDto[] {
    return this.fundService.findAll();
  }

  @Get('/:code')
  @ApiOperation({ summary: 'Get fund detail by code' })
  @ApiResponse({ status: 200, description: 'Fund detail', type: FundDto })
  findByCode(@Param('code') code: string): FundDto {
    const fund = this.fundService.findByCode(code);
    if (!fund) {
      throw new NotFoundException(`Fund with code '${code}' not found`);
    }
    return fund;
  }
}
