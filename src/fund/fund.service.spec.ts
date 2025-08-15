import { Test, TestingModule } from '@nestjs/testing';
import { FundService } from './fund.service';
import { fundMockData } from '../mock-data/fund.mock';
import { fundDetailMockData } from '../mock-data/fund-detail.mock';

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
    expect(service.findAll()).toEqual(fundMockData);
    expect(service.findAll().length).toBe(fundMockData.length);
  });

  it('getDetailById should return correct fund detail', () => {
    const detail = service.getDetailById('1');
    expect(detail).toEqual(fundDetailMockData.find(f => f.id === '1'));
  });

  it('getDetailById should return null if not found', () => {
    expect(service.getDetailById('not-exist')).toBeNull();
  });
});
