import { Injectable, NotFoundException } from '@nestjs/common';
import { FundDto } from './dto/fund.dto';
import { FundDetailDto } from './dto/fund-detail.dto';
import { mockFundData } from './dto/fund.mock-data';
import { mockFundDetailData } from './dto/fund-detail.mock-data';

@Injectable()
export class FundService {
  findAll(): FundDto[] {
    return mockFundData;
  }

  findOne(id: string): FundDetailDto {
    const fundDetail = mockFundDetailData.find(fund => fund.id === id);
    
    if (!fundDetail) {
      throw new NotFoundException(`Fund with ID ${id} not found`);
    }
    
    return fundDetail;
  }
}
