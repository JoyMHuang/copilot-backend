import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { FundService } from './fund.service';
import { FundDto } from './dto/fund.dto';
import { FundDetailDto } from './dto/fund-detail.dto';

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

  @Get(':id')
  @ApiOperation({ summary: 'Get fund detail by ID' })
  @ApiResponse({ status: 200, description: 'Fund detail information', type: FundDetailDto })
  @ApiResponse({ status: 404, description: 'Fund not found' })
  @ApiParam({ name: 'id', description: 'Fund ID' })
  findOne(@Param('id') id: string): FundDetailDto {
    console.log(`📊 Fund Detail API called for fund: ${id} at ${new Date().toISOString()}`);
    return this.fundService.findOne(id);
  }
}
