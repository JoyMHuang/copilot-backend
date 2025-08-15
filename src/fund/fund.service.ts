import { Injectable, NotFoundException } from '@nestjs/common';
import { mockFunds } from '../mock-data/fund.mock';
import { MOCK_FUND_DETAILS, getFundDetailsById } from './data/fund-details-mock.data';
import { FundDto } from './dto/fund.dto';
import { FundDetailsDto } from './dto/fund-details.dto';

@Injectable()
export class FundService {
  findAll(): FundDto[] {
    return mockFunds;
  }

  findOne(id: string): FundDetailsDto {
    const fundDetails = getFundDetailsById(id);
    if (!fundDetails) {
      throw new NotFoundException(`Fund with ID ${id} not found`);
    }
    return fundDetails;
  }

  getAllFundDetails(): FundDetailsDto[] {
    return MOCK_FUND_DETAILS;
  }
}
