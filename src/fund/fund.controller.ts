import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { FundService } from './fund.service';
import { FundDto } from './dto/fund.dto';
import { FundDetailsDto } from './dto/fund-details.dto';

@ApiTags('fund')
@Controller('fund')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  @Get()
  @ApiOperation({ summary: '获取所有基金' })
  @ApiResponse({ 
    status: 200, 
    description: '成功获取基金列表',
    type: [FundDto]
  })
  findAll(): FundDto[] {
    return this.fundService.findAll();
  }

  @Get('details')
  @ApiOperation({ summary: '获取所有基金详情' })
  @ApiResponse({ 
    status: 200, 
    description: '成功获取基金详情列表',
    type: [FundDetailsDto]
  })
  getAllFundDetails(): FundDetailsDto[] {
    return this.fundService.getAllFundDetails();
  }

  @Get(':id')
  @ApiOperation({ summary: '根据ID获取基金详情' })
  @ApiResponse({ 
    status: 200, 
    description: '成功获取基金详情',
    type: FundDetailsDto
  })
  @ApiResponse({ 
    status: 404, 
    description: '基金未找到'
  })
  @ApiParam({ name: 'id', description: '基金ID', example: '1' })
  findOne(@Param('id') id: string): FundDetailsDto {
    console.log(`📈 Fund Details API called for fund: ${id} at ${new Date().toISOString()}`);
    return this.fundService.findOne(id);
  }
}
