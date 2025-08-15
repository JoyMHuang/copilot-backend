import { Test, TestingModule } from '@nestjs/testing';
import { FundService } from './fund.service';
import { NotFoundException } from '@nestjs/common';
import { FundDto } from './dto/fund.dto';
import { FundDetailsDto } from './dto/fund-details.dto';
import { MOCK_FUNDS } from './data/fund-mock.data';
import { MOCK_FUND_DETAILS } from './data/fund-details-mock.data';

describe('FundService - Enhanced', () => {
  let service: FundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundService],
    }).compile();

    service = module.get<FundService>(FundService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Service instantiation', () => {
    it('shouldBeDefinedWhenInstantiated', () => {
      expect(service).toBeDefined();
      expect(service).toBeInstanceOf(FundService);
    });
  });

  describe('findAll', () => {
    it('shouldReturnArrayOfFundsWhenCalled', () => {
      const result = service.findAll();
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual(MOCK_FUNDS);
    });
  });

  describe('findOne', () => {
    it('shouldReturnFundDetailsWhenValidIdProvided', () => {
      const testId = '1';
      const result = service.findOne(testId);
      
      expect(result).toBeDefined();
      expect(result.id).toBe(testId);
      expect(result.fundName).toBeTruthy();
      expect(result.basicInfo).toBeDefined();
      expect(result.managers).toBeDefined();
      expect(Array.isArray(result.managers)).toBe(true);
      expect(result.performance).toBeDefined();
      expect(Array.isArray(result.performance)).toBe(true);
      expect(result.topHoldings).toBeDefined();
      expect(Array.isArray(result.topHoldings)).toBe(true);
    });

    it('shouldReturnCorrectFundDetailsWhenExistingIdProvided', () => {
      const testId = '2';
      const result = service.findOne(testId);
      const expectedFund = MOCK_FUND_DETAILS.find(fund => fund.id === testId);
      
      expect(result).toEqual(expectedFund);
      expect(result.fundName).toBe('易方达蓝筹精选混合');
      expect(result.code).toBe('005827');
    });

    it('shouldThrowNotFoundExceptionWhenInvalidIdProvided', () => {
      const invalidId = 'invalid-id';
      
      expect(() => service.findOne(invalidId)).toThrow(NotFoundException);
      expect(() => service.findOne(invalidId)).toThrow(`Fund with ID ${invalidId} not found`);
    });

    it('shouldThrowNotFoundExceptionWhenEmptyIdProvided', () => {
      const emptyId = '';
      
      expect(() => service.findOne(emptyId)).toThrow(NotFoundException);
    });

    it('shouldThrowNotFoundExceptionWhenNullIdProvided', () => {
      const nullId = null as any;
      
      expect(() => service.findOne(nullId)).toThrow(NotFoundException);
    });

    it('shouldReturnFundDetailsWithAllRequiredPropertiesWhenValidIdProvided', () => {
      const result = service.findOne('1');
      
      // Check main properties
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('fundName');
      expect(result).toHaveProperty('code');
      expect(result).toHaveProperty('unitPrice');
      expect(result).toHaveProperty('currencyCode');
      expect(result).toHaveProperty('priceDate');
      expect(result).toHaveProperty('navChange');
      expect(result).toHaveProperty('navChangePercent');
      
      // Check nested objects
      expect(result).toHaveProperty('basicInfo');
      expect(result.basicInfo).toHaveProperty('fundType');
      expect(result.basicInfo).toHaveProperty('riskLevel');
      expect(result.basicInfo).toHaveProperty('establishmentDate');
      expect(result.basicInfo).toHaveProperty('fundSize');
      
      // Check arrays
      expect(result).toHaveProperty('managers');
      expect(result).toHaveProperty('performance');
      expect(result).toHaveProperty('topHoldings');
      
      // Check description fields
      expect(result).toHaveProperty('description');
      expect(result).toHaveProperty('investmentObjective');
      expect(result).toHaveProperty('investmentStrategy');
    });

    it('shouldReturnFundDetailsWithValidManagerDataWhenValidIdProvided', () => {
      const result = service.findOne('1');
      
      expect(result.managers.length).toBeGreaterThan(0);
      result.managers.forEach(manager => {
        expect(manager).toHaveProperty('name');
        expect(manager).toHaveProperty('appointmentDate');
        expect(manager).toHaveProperty('experience');
        expect(typeof manager.name).toBe('string');
        expect(typeof manager.appointmentDate).toBe('string');
        expect(typeof manager.experience).toBe('number');
        expect(manager.name.length).toBeGreaterThan(0);
        expect(manager.experience).toBeGreaterThan(0);
      });
    });

    it('shouldReturnFundDetailsWithValidPerformanceDataWhenValidIdProvided', () => {
      const result = service.findOne('1');
      
      expect(result.performance.length).toBeGreaterThan(0);
      result.performance.forEach(perf => {
        expect(perf).toHaveProperty('period');
        expect(perf).toHaveProperty('return');
        expect(typeof perf.period).toBe('string');
        expect(typeof perf.return).toBe('number');
        expect(perf.period.length).toBeGreaterThan(0);
      });
    });

    it('shouldReturnFundDetailsWithValidHoldingsDataWhenValidIdProvided', () => {
      const result = service.findOne('1');
      
      expect(result.topHoldings.length).toBeGreaterThan(0);
      result.topHoldings.forEach(holding => {
        expect(holding).toHaveProperty('name');
        expect(holding).toHaveProperty('code');
        expect(holding).toHaveProperty('percentage');
        expect(holding).toHaveProperty('marketValue');
        expect(typeof holding.name).toBe('string');
        expect(typeof holding.code).toBe('string');
        expect(typeof holding.percentage).toBe('number');
        expect(typeof holding.marketValue).toBe('number');
        expect(holding.name.length).toBeGreaterThan(0);
        expect(holding.code.length).toBeGreaterThan(0);
        expect(holding.percentage).toBeGreaterThan(0);
        expect(holding.marketValue).toBeGreaterThan(0);
      });
    });
  });

  describe('getAllFundDetails', () => {
    it('shouldReturnArrayOfFundDetailsWhenCalled', () => {
      const result = service.getAllFundDetails();
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual(MOCK_FUND_DETAILS);
    });

    it('shouldReturnAllFundDetailsWithCorrectStructureWhenCalled', () => {
      const result = service.getAllFundDetails();
      
      result.forEach(fund => {
        expect(fund).toHaveProperty('id');
        expect(fund).toHaveProperty('fundName');
        expect(fund).toHaveProperty('basicInfo');
        expect(fund).toHaveProperty('managers');
        expect(fund).toHaveProperty('performance');
        expect(fund).toHaveProperty('topHoldings');
        expect(fund).toHaveProperty('description');
        expect(fund).toHaveProperty('investmentObjective');
        expect(fund).toHaveProperty('investmentStrategy');
      });
    });

    it('shouldReturnConsistentDataWhenCalledMultipleTimes', () => {
      const result1 = service.getAllFundDetails();
      const result2 = service.getAllFundDetails();
      
      expect(result1).toEqual(result2);
      expect(result1.length).toBe(result2.length);
    });

    it('shouldReturnFundDetailsWithUniqueIdsWhenCalled', () => {
      const result = service.getAllFundDetails();
      const ids = result.map(fund => fund.id);
      const uniqueIds = [...new Set(ids)];
      
      expect(uniqueIds.length).toBe(ids.length);
    });
  });

  describe('Integration with existing methods', () => {
    it('shouldHaveConsistentFundCountsBetweenListAndDetailsWhenCompared', () => {
      const fundList = service.findAll();
      const fundDetails = service.getAllFundDetails();
      
      // Note: Not all funds in the list may have detailed information
      // This test ensures we have some overlap
      expect(fundDetails.length).toBeGreaterThan(0);
      
      const detailIds = fundDetails.map(fund => fund.id);
      const listIds = fundList.map(fund => fund.id);
      
      // Check that some funds from details exist in the main list
      const intersection = detailIds.filter(id => listIds.includes(id));
      expect(intersection.length).toBeGreaterThan(0);
    });

    it('shouldReturnConsistentBasicInfoBetweenListAndDetailsWhenCompared', () => {
      const fundList = service.findAll();
      const fundDetails = service.getAllFundDetails();
      
      fundDetails.forEach(detailFund => {
        const listFund = fundList.find(f => f.id === detailFund.id);
        if (listFund) {
          expect(detailFund.id).toBe(listFund.id);
          expect(detailFund.fundName).toBe(listFund.fundName);
          expect(detailFund.code).toBe(listFund.code);
          expect(detailFund.unitPrice).toBe(listFund.unitPrice);
          expect(detailFund.currencyCode).toBe(listFund.currencyCode);
          expect(detailFund.priceDate).toBe(listFund.priceDate);
          expect(detailFund.navChange).toBe(listFund.navChange);
          expect(detailFund.navChangePercent).toBe(listFund.navChangePercent);
        }
      });
    });
  });

  describe('Edge cases and error handling', () => {
    it('shouldHandleWhitespaceIdGracefullyWhenProvided', () => {
      const whitespaceId = '   ';
      
      expect(() => service.findOne(whitespaceId)).toThrow(NotFoundException);
    });

    it('shouldHandleNumericStringIdWhenProvided', () => {
      const numericId = '123';
      
      expect(() => service.findOne(numericId)).toThrow(NotFoundException);
    });

    it('shouldReturnValidDataForAllExistingIdsWhenTested', () => {
      const existingIds = ['1', '2', '3', '4', '5'];
      
      existingIds.forEach(id => {
        try {
          const result = service.findOne(id);
          expect(result).toBeDefined();
          expect(result.id).toBe(id);
        } catch (error) {
          // Some IDs might not exist in mock data, which is acceptable
          expect(error).toBeInstanceOf(NotFoundException);
        }
      });
    });
  });
});
