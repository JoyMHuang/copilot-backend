import { Injectable, NotFoundException } from '@nestjs/common';
import { MOCK_FUNDS } from './data/fund-mock.data';
import { MOCK_FUND_DETAILS, getFundDetailsById } from './data/fund-details-mock.data';
import { FundDto } from './dto/fund.dto';
import { FundDetailsDto } from './dto/fund-details.dto';

@Injectable()
export class FundService {
  findAll(): FundDto[] {
    return MOCK_FUNDS;
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
