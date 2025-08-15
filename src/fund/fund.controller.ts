import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FundService } from './fund.service';

@ApiTags('Fund')
@Controller('fund')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  @Get()
  @ApiOperation({ summary: 'Get all funds' })
  @ApiResponse({ status: 200, description: 'List of funds' })
  findAll() {
    return this.fundService.findAll();
  }

  @Get(':id/detail')
  @ApiOperation({ summary: 'Get fund detail by id' })
  @ApiResponse({ status: 200, description: 'Fund detail' })
  getDetail(@Param('id') id: string) {
    return this.fundService.getDetailById(id);
  }
}
