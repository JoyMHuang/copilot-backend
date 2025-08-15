import { Test, TestingModule } from '@nestjs/testing';
import { FundService } from './fund.service';
import { FundDto } from './dto/fund.dto';
import { MOCK_FUNDS } from './data/fund-mock.data';

describe('FundService', () => {
  let service: FundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundService],
    }).compile();

    service = module.get<FundService>(FundService);
  });

  afterEach(() => {
    // Clean up any resources if needed in the future
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
      // Act
      const result = service.findAll();
      
      // Assert
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('shouldReturnMockFundsDataWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert
      expect(result).toEqual(MOCK_FUNDS);
      expect(result).toHaveLength(MOCK_FUNDS.length);
    });

    it('shouldReturnFundsWithRequiredPropertiesWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert - Check that each fund has all required properties
      expect(result.length).toBeGreaterThan(0);
      
      result.forEach(fund => {
        expect(fund).toHaveProperty('id');
        expect(fund).toHaveProperty('fundName');
        expect(fund).toHaveProperty('code');
        expect(fund).toHaveProperty('unitPrice');
        expect(fund).toHaveProperty('currencyCode');
        expect(fund).toHaveProperty('priceDate');
        expect(fund).toHaveProperty('navChange');
        expect(fund).toHaveProperty('navChangePercent');
      });
    });

    it('shouldReturnFundsWithCorrectDataTypesWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert - Validate data types for each property
      expect(result.length).toBeGreaterThan(0);
      
      result.forEach(fund => {
        expect(typeof fund.id).toBe('string');
        expect(typeof fund.fundName).toBe('string');
        expect(typeof fund.code).toBe('string');
        expect(typeof fund.unitPrice).toBe('number');
        expect(typeof fund.currencyCode).toBe('string');
        expect(typeof fund.priceDate).toBe('string');
        expect(typeof fund.navChange).toBe('number');
        expect(typeof fund.navChangePercent).toBe('number');
      });
    });

    it('shouldReturnFundsWithNonEmptyRequiredFieldsWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert - Validate that required string fields are not empty
      result.forEach(fund => {
        expect(fund.id).toBeTruthy();
        expect(fund.id.length).toBeGreaterThan(0);
        expect(fund.fundName).toBeTruthy();
        expect(fund.fundName.length).toBeGreaterThan(0);
        expect(fund.code).toBeTruthy();
        expect(fund.code.length).toBeGreaterThan(0);
        expect(fund.currencyCode).toBeTruthy();
        expect(fund.currencyCode.length).toBeGreaterThan(0);
        expect(fund.priceDate).toBeTruthy();
        expect(fund.priceDate.length).toBeGreaterThan(0);
      });
    });

    it('shouldReturnFundsWithPositiveUnitPricesWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert - Unit prices should always be positive
      result.forEach(fund => {
        expect(fund.unitPrice).toBeGreaterThan(0);
        expect(fund.unitPrice).not.toBeNaN();
        expect(fund.unitPrice).not.toEqual(Infinity);
      });
    });

    it('shouldReturnFundsWithValidCurrencyCodeWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert - All funds should have CNY currency code
      result.forEach(fund => {
        expect(fund.currencyCode).toBe('CNY');
      });
    });

    it('shouldReturnFundsWithValidDateFormatWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert - Date should be in ISO format and valid
      const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
      
      result.forEach(fund => {
        expect(fund.priceDate).toMatch(isoDateRegex);
        
        const date = new Date(fund.priceDate);
        expect(date).toBeInstanceOf(Date);
        expect(isNaN(date.getTime())).toBe(false);
      });
    });

    it('shouldReturnConsistentDataWhenCalledMultipleTimes', () => {
      // Act
      const result1 = service.findAll();
      const result2 = service.findAll();
      const result3 = service.findAll();
      
      // Assert - Results should be identical across multiple calls
      expect(result1).toEqual(result2);
      expect(result2).toEqual(result3);
      expect(result1.length).toBe(result2.length);
    });

    it('shouldReturnExpectedNumberOfFundsWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert - Should return the same number as mock data
      expect(result.length).toBe(MOCK_FUNDS.length);
      expect(result.length).toBeGreaterThan(0);
    });

    it('shouldReturnFundsWithUniqueIdsWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert - All fund IDs should be unique
      const ids = result.map(fund => fund.id);
      const uniqueIds = [...new Set(ids)];
      
      expect(uniqueIds.length).toBe(ids.length);
      expect(uniqueIds.length).toBe(result.length);
    });

    it('shouldReturnFundsWithUniqueCodesWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert - All fund codes should be unique
      const codes = result.map(fund => fund.code);
      const uniqueCodes = [...new Set(codes)];
      
      expect(uniqueCodes.length).toBe(codes.length);
      expect(uniqueCodes.length).toBe(result.length);
    });

    it('shouldReturnFundsWithValidNavChangeValuesWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert - NAV change values should be valid numbers
      result.forEach(fund => {
        expect(typeof fund.navChange).toBe('number');
        expect(fund.navChange).not.toBeNaN();
        expect(fund.navChange).not.toEqual(Infinity);
        expect(fund.navChange).not.toEqual(-Infinity);
      });
    });

    it('shouldReturnFundsWithValidNavChangePercentValuesWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert - NAV change percent values should be valid numbers
      result.forEach(fund => {
        expect(typeof fund.navChangePercent).toBe('number');
        expect(fund.navChangePercent).not.toBeNaN();
        expect(fund.navChangePercent).not.toEqual(Infinity);
        expect(fund.navChangePercent).not.toEqual(-Infinity);
      });
    });

    it('shouldReturnFundsDtoInstancesWhenCalled', () => {
      // Act
      const result = service.findAll();
      
      // Assert - Each result should conform to FundDto structure
      result.forEach(fund => {
        // Verify that the fund object has all FundDto properties
        const expectedProperties = [
          'id', 'fundName', 'code', 'unitPrice', 
          'currencyCode', 'priceDate', 'navChange', 'navChangePercent'
        ];
        
        expectedProperties.forEach(property => {
          expect(fund).toHaveProperty(property);
        });
        
        // Verify no extra unexpected properties
        const actualProperties = Object.keys(fund);
        expect(actualProperties.sort()).toEqual(expectedProperties.sort());
      });
    });

    // Parameterized test for specific fund validation
    it.each([
      ['first fund', 0],
      ['middle fund', Math.floor(MOCK_FUNDS.length / 2)],
      ['last fund', MOCK_FUNDS.length - 1]
    ])('shouldReturnValidFundDataWhenAccessingThe%s', (description: string, index: number) => {
      // Act
      const result = service.findAll();
      
      // Assert - Test specific fund at given index
      expect(result[index]).toBeDefined();
      expect(result[index]).toEqual(MOCK_FUNDS[index]);
      
      const fund = result[index];
      expect(fund.id).toBeTruthy();
      expect(fund.fundName).toBeTruthy();
      expect(fund.code).toBeTruthy();
      expect(fund.unitPrice).toBeGreaterThan(0);
      expect(fund.currencyCode).toBe('CNY');
    });

    it('shouldReturnSharedDataReferenceWhenCalled', () => {
      // Note: Current implementation returns direct reference to MOCK_FUNDS
      // This means modifications affect all subsequent calls
      // Consider returning a deep copy for true immutability in the future
      
      // Act
      const result1 = service.findAll();
      const result2 = service.findAll();
      
      // Modify the first result
      if (result1.length > 0) {
        const originalFundName = result1[0].fundName;
        result1[0].fundName = 'Modified Fund Name';
        
        // Assert - Both results reference the same data
        expect(result1).toBe(result2); // Same reference
        expect(result2[0].fundName).toBe('Modified Fund Name');
        
        // Cleanup - restore original value for other tests
        result1[0].fundName = originalFundName;
      }
    });
  });
});
