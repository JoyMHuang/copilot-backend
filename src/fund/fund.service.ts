import { Injectable } from '@nestjs/common';
<<<<<<< Updated upstream
=======
import { mockFunds, mockFundPerformances } from '../mock-data';
import { fundMockData } from './fund.mock';
>>>>>>> Stashed changes

@Injectable()
export class FundService {
  findAll() {
<<<<<<< Updated upstream
    return [];
=======
    return fundMockData;
  }

  findOne(id: string) {
    return mockFunds.find(fund => fund.id === id);
  }

  getFundPerformance(id: string) {
    return mockFundPerformances.filter(perf => perf.fundId === id);
>>>>>>> Stashed changes
  }
}
