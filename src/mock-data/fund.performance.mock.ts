
export type { Fund } from '../mock-data/interfaces/fund.interface';

export interface FundPerformance {
  fundId: string;
  date: string;
  nav: number;
  returnYTD: number;
  return1Y: number;
  return3Y: number;
  return5Y: number;
}

export const mockFundPerformances: FundPerformance[] = [
  {
    fundId: 'FUND001',
    date: '2025-08-01',
    nav: 1.2345,
    returnYTD: 8.2,
    return1Y: 12.5,
    return3Y: 28.1,
    return5Y: 55.3
  },
  {
    fundId: 'FUND002',
    date: '2025-08-01',
    nav: 0.9876,
    returnYTD: 2.1,
    return1Y: 4.8,
    return3Y: 10.2,
    return5Y: 20.7
  }
];
