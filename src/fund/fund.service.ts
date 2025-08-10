import { Injectable } from '@nestjs/common';
import { mockFunds } from '../mock-data/fund.mock';

@Injectable()
export class FundService {
  findAll() {
    return mockFunds;
  }
}
