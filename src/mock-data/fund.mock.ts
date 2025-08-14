import { Fund } from './interfaces/fund.interface';

export const mockFunds: Fund[] = [
  {
    id: 'FUND001',
    name: 'Manulife Growth Fund',
    code: 'MGF',
    type: 'Equity',
    netValue: 1.2345,
    currency: 'USD',
    riskLevel: 'High',
    description: 'A high-growth equity fund.'
  },
  {
    id: 'FUND002',
    name: 'Manulife Bond Fund',
    code: 'MBF',
    type: 'Bond',
    netValue: 0.9876,
    currency: 'USD',
    riskLevel: 'Low',
    description: 'A stable bond fund.'
  }
];
