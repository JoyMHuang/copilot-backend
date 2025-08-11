import { Injectable } from '@nestjs/common';
import { fundMockData } from './fund.mock';

@Injectable()
export class FundService {
  findAll() {
    return fundMockData;
  }

  findOne(id: number) {
    return fundMockData.find(fund => fund.id === id);
  }
}
