import { Test, TestingModule } from '@nestjs/testing';
import { FundService } from './fund.service';
import { mockFunds, mockFundPerformances } from '../mock-data/fund.mock';

describe('FundService', () => {
  let service: FundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundService],
    }).compile();

    service = module.get<FundService>(FundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return all funds', () => {
    expect(service.findAll()).toEqual(mockFunds);
  });

  it('findOne should return the correct fund by id', () => {
    const fund = mockFunds[0];
    expect(service.findOne(fund.id)).toEqual(fund);
  });

  it('getFundPerformance should return performances for a fund', () => {
    const performances = mockFundPerformances.filter(p => p.fundId === 'FUND001');
    expect(service.getFundPerformance('FUND001')).toEqual(performances);
  });
});
