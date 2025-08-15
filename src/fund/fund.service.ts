import { Injectable } from '@nestjs/common';
import { fundMockData } from '../mock-data/fund.mock';
import { fundDetailMockData } from '../mock-data/fund-detail.mock';

@Injectable()
export class FundService {
  findAll() {
    return fundMockData;
  }

  getDetailById(id: string) {
    return fundDetailMockData.find(fund => fund.id === id) || null;
  }
}
