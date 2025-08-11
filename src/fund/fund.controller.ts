import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FundService } from './fund.service';
import { fundMockData } from '../mock-data/fund-list.mock';
import { fundDetailMockData } from '../mock-data/fund-detail.mock';

@ApiTags('Fund')
@Controller('fund')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  @Get()
  @ApiOperation({ summary: 'Get all funds' })
  @ApiResponse({ status: 200, description: 'List of funds' })
  findAll() {
    return fundMockData;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get fund detail by id' })
  @ApiResponse({ status: 200, description: 'Fund detail' })
  findOne() {
    return fundDetailMockData;
  }
}
