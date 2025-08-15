import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FundService } from './fund.service';
import { FundDto } from './dto/fund.dto';

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
}
