import { Test, TestingModule } from '@nestjs/testing';
import { FundService } from './fund.service';
import { mockFunds } from '../mock-data/fund.mock';

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

  it('shouldReturnAllFundsWhenFindAllIsCalled', () => {
    // Arrange & Act
    const result = service.findAll();
    // Assert
    expect(result).toEqual(mockFunds);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(mockFunds.length);
  });

  it('shouldReturnEmptyArrayWhenMockFundsIsEmpty', () => {
    // Arrange
    const original = [...mockFunds];
    (mockFunds as any).length = 0;
    // Act
    const result = service.findAll();
    // Assert
    expect(result).toEqual([]);
    // Cleanup
    original.forEach(f => mockFunds.push(f));
  });

  it('shouldNotMutateMockFundsArrayWhenFindAllIsCalled', () => {
    // Arrange
    const before = [...mockFunds];
    // Act
    service.findAll();
    // Assert
    expect(mockFunds).toEqual(before);
  });
});
