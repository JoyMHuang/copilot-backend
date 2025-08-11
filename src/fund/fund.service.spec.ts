import { Test, TestingModule } from '@nestjs/testing';
import { FundService } from './fund.service';

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

  it('should return all funds', () => {
    const funds = service.findAll();
    expect(Array.isArray(funds)).toBe(true);
    expect(funds.length).toBe(20);
    expect(funds[0]).toHaveProperty('id');
    expect(funds[0]).toHaveProperty('fundName');
  });

  it('should return fund by id', () => {
    const fund = service.findOne(1);
    expect(fund).toBeDefined();
    expect(fund?.id).toBe(1);
    expect(fund?.fundName).toBe('Alpha Growth Fund');
  });

  it('should return undefined for non-existent id', () => {
    const fund = service.findOne(999);
    expect(fund).toBeUndefined();
  });
});
