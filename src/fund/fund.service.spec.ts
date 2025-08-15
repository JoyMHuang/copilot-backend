import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { FundService } from './fund.service';
import { FundDto } from './dto/fund.dto';
import { FundDetailDto } from './dto/fund-detail.dto';

// Test data constants - avoid hardcoding values that may change
const MOCK_FUND_DATA = [
  {
    id: 'FUND_001',
    name: 'Global Equity Fund',
    type: 'Equity',
    nav: 125.75,
    performance: 8.45
  },
  {
    id: 'FUND_002',
    name: 'Corporate Bond Fund',
    type: 'Bond',
    nav: 102.30,
    performance: 4.12
  },
  {
    id: 'FUND_003',
    name: 'Money Market Fund',
    type: 'Money Market',
    nav: 100.05,
    performance: 2.35
  }
];

const MOCK_FUND_DETAIL_DATA = [
  {
    id: 'FUND_001',
    name: 'Global Equity Fund',
    type: 'Equity',
    nav: 125.75,
    performance: 8.45,
    description: 'Diversified global equity portfolio',
    manager: 'John Smith',
    inceptionDate: '2018-03-15',
    totalAssets: 2500000000
  },
  {
    id: 'FUND_002',
    name: 'Corporate Bond Fund',
    type: 'Bond',
    nav: 102.30,
    performance: 4.12,
    description: 'Investment grade corporate bonds',
    manager: 'Sarah Johnson',
    inceptionDate: '2017-09-20',
    totalAssets: 1800000000
  },
  {
    id: 'FUND_003',
    name: 'Money Market Fund',
    type: 'Money Market',
    nav: 100.05,
    performance: 2.35,
    description: 'Short-term money market instruments',
    manager: 'Michael Brown',
    inceptionDate: '2020-01-10',
    totalAssets: 950000000
  }
];

// Mock the data modules to ensure isolated testing
jest.mock('./dto/fund.mock-data', () => ({
  mockFundData: [
    {
      id: 'FUND_001',
      name: 'Global Equity Fund',
      type: 'Equity',
      nav: 125.75,
      performance: 8.45
    },
    {
      id: 'FUND_002',
      name: 'Corporate Bond Fund',
      type: 'Bond',
      nav: 102.30,
      performance: 4.12
    },
    {
      id: 'FUND_003',
      name: 'Money Market Fund',
      type: 'Money Market',
      nav: 100.05,
      performance: 2.35
    }
  ]
}));

jest.mock('./dto/fund-detail.mock-data', () => ({
  mockFundDetailData: [
    {
      id: 'FUND_001',
      name: 'Global Equity Fund',
      type: 'Equity',
      nav: 125.75,
      performance: 8.45,
      description: 'Diversified global equity portfolio',
      manager: 'John Smith',
      inceptionDate: '2018-03-15',
      totalAssets: 2500000000
    },
    {
      id: 'FUND_002',
      name: 'Corporate Bond Fund',
      type: 'Bond',
      nav: 102.30,
      performance: 4.12,
      description: 'Investment grade corporate bonds',
      manager: 'Sarah Johnson',
      inceptionDate: '2017-09-20',
      totalAssets: 1800000000
    },
    {
      id: 'FUND_003',
      name: 'Money Market Fund',
      type: 'Money Market',
      nav: 100.05,
      performance: 2.35,
      description: 'Short-term money market instruments',
      manager: 'Michael Brown',
      inceptionDate: '2020-01-10',
      totalAssets: 950000000
    }
  ]
}));

describe('FundService', () => {
  let service: FundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundService],
    }).compile();

    service = module.get<FundService>(FundService);
  });

  afterEach(() => {
    // Clean up any resources or data created during the test
    jest.clearAllMocks();
  });

  describe('Service Initialization', () => {
    it('shouldBeDefinedWhenServiceIsCreated', () => {
      // Validate service is properly instantiated
      expect(service).toBeDefined();
      expect(service).toBeInstanceOf(FundService);
    });
  });

  describe('findAll', () => {
    it('shouldReturnAllFundsWhenMethodIsCalled', () => {
      // Act
      const result: any[] = service.findAll();
      
      // Assert - Validate output structure and content
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(3);
      expect(result[0].id).toBe('FUND_001');
      expect(result[1].id).toBe('FUND_002');
      expect(result[2].id).toBe('FUND_003');
    });

    it('shouldReturnFundsWithCorrectPropertiesWhenMethodIsCalled', () => {
      // Act
      const result: any[] = service.findAll();
      
      // Assert - Validate each fund has required properties and correct data types
      result.forEach((fund: any) => {
        expect(fund).toHaveProperty('id');
        expect(fund).toHaveProperty('name');
        expect(fund).toHaveProperty('type');
        expect(fund).toHaveProperty('nav');
        expect(fund).toHaveProperty('performance');
        
        // Validate data types
        expect(typeof fund.id).toBe('string');
        expect(typeof fund.name).toBe('string');
        expect(typeof fund.type).toBe('string');
        expect(typeof fund.nav).toBe('number');
        expect(typeof fund.performance).toBe('number');
      });
    });

    it('shouldReturnSpecificFundDataWhenMethodIsCalled', () => {
      // Act
      const result: any[] = service.findAll();
      
      // Assert - Check specific fund data matches expectations
      expect(result[0].id).toBe('FUND_001');
      expect(result[0].name).toBe('Global Equity Fund');
      expect(result[0].type).toBe('Equity');
      expect(result[0].nav).toBe(125.75);
      expect(result[0].performance).toBe(8.45);
      
      expect(result[1].id).toBe('FUND_002');
      expect(result[1].name).toBe('Corporate Bond Fund');
      expect(result[1].type).toBe('Bond');
    });

    it('shouldReturnNonEmptyArrayWhenFundsExist', () => {
      // Act
      const result: any[] = service.findAll();
      
      // Assert - Validate non-empty result
      expect(result.length).toBeGreaterThan(0);
      expect(result).not.toEqual([]);
    });
  });

  describe('findOne', () => {
    it('shouldReturnFundDetailWhenValidIdIsProvided', () => {
      // Arrange
      const validId = 'FUND_001';
      
      // Act
      const result: any = service.findOne(validId);
      
      // Assert - Validate complete fund detail structure
      expect(result).toBeDefined();
      expect(result.id).toBe(validId);
      expect(result.name).toBe('Global Equity Fund');
      expect(result.type).toBe('Equity');
      expect(result.nav).toBe(125.75);
      expect(result.performance).toBe(8.45);
      expect(result.description).toBe('Diversified global equity portfolio');
      expect(result.manager).toBe('John Smith');
      expect(result.inceptionDate).toBe('2018-03-15');
      expect(result.totalAssets).toBe(2500000000);
    });

    it('shouldReturnCorrectFundDetailWhenDifferentValidIdIsProvided', () => {
      // Arrange
      const validId = 'FUND_002';
      
      // Act
      const result: any = service.findOne(validId);
      
      // Assert - Validate different fund's data
      expect(result).toBeDefined();
      expect(result.id).toBe(validId);
      expect(result.name).toBe('Corporate Bond Fund');
      expect(result.type).toBe('Bond');
      expect(result.description).toBe('Investment grade corporate bonds');
      expect(result.manager).toBe('Sarah Johnson');
      expect(result.inceptionDate).toBe('2017-09-20');
      expect(result.totalAssets).toBe(1800000000);
    });

    it('shouldReturnThirdFundDetailWhenThirdValidIdIsProvided', () => {
      // Arrange
      const validId = 'FUND_003';
      
      // Act
      const result: any = service.findOne(validId);
      
      // Assert - Validate third fund's data
      expect(result).toBeDefined();
      expect(result.id).toBe(validId);
      expect(result.name).toBe('Money Market Fund');
      expect(result.type).toBe('Money Market');
      expect(result.description).toBe('Short-term money market instruments');
      expect(result.manager).toBe('Michael Brown');
    });

    it('shouldReturnCompleteStructureWhenValidIdIsProvided', () => {
      // Arrange
      const validId = 'FUND_001';
      
      // Act
      const result: any = service.findOne(validId);
      
      // Assert - Validate complete structure and data types
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('type');
      expect(result).toHaveProperty('nav');
      expect(result).toHaveProperty('performance');
      expect(result).toHaveProperty('description');
      expect(result).toHaveProperty('manager');
      expect(result).toHaveProperty('inceptionDate');
      expect(result).toHaveProperty('totalAssets');
      
      // Validate data types
      expect(typeof result.id).toBe('string');
      expect(typeof result.name).toBe('string');
      expect(typeof result.type).toBe('string');
      expect(typeof result.nav).toBe('number');
      expect(typeof result.performance).toBe('number');
      expect(typeof result.description).toBe('string');
      expect(typeof result.manager).toBe('string');
      expect(typeof result.inceptionDate).toBe('string');
      expect(typeof result.totalAssets).toBe('number');
    });

    it('shouldThrowNotFoundExceptionWhenInvalidIdIsProvided', () => {
      // Arrange
      const invalidId = 'INVALID_FUND_ID';
      
      // Act & Assert - Validate exception is thrown
      expect(() => {
        service.findOne(invalidId);
      }).toThrow(NotFoundException);
      
      // Validate exception message
      expect(() => {
        service.findOne(invalidId);
      }).toThrow(`Fund with ID ${invalidId} not found`);
    });

    it('shouldThrowNotFoundExceptionWhenEmptyStringIsProvided', () => {
      // Arrange
      const emptyId = '';
      
      // Act & Assert - Test edge case with empty string
      expect(() => {
        service.findOne(emptyId);
      }).toThrow(NotFoundException);
      
      expect(() => {
        service.findOne(emptyId);
      }).toThrow(`Fund with ID ${emptyId} not found`);
    });

    it('shouldThrowNotFoundExceptionWhenNullIsProvided', () => {
      // Arrange
      const nullId = null as any;
      
      // Act & Assert - Test edge case with null value
      expect(() => {
        service.findOne(nullId);
      }).toThrow(NotFoundException);
    });

    it('shouldThrowNotFoundExceptionWhenUndefinedIsProvided', () => {
      // Arrange
      const undefinedId = undefined as any;
      
      // Act & Assert - Test edge case with undefined value
      expect(() => {
        service.findOne(undefinedId);
      }).toThrow(NotFoundException);
    });

    it('shouldThrowNotFoundExceptionWhenWhitespaceOnlyIdIsProvided', () => {
      // Arrange
      const whitespaceId = '   ';
      
      // Act & Assert - Test edge case with whitespace
      expect(() => {
        service.findOne(whitespaceId);
      }).toThrow(NotFoundException);
      
      expect(() => {
        service.findOne(whitespaceId);
      }).toThrow(`Fund with ID ${whitespaceId} not found`);
    });

    // Parameterized tests for repetitive logic with different input values
    const invalidIdTestCases = [
      { id: 'NON_EXISTENT', description: 'non-existent ID' },
      { id: '999', description: 'numeric string ID' },
      { id: 'FUND_999', description: 'non-existent fund format ID' },
      { id: 'invalid-id', description: 'invalid format ID' },
      { id: '!@#$%', description: 'special characters ID' },
      { id: 'FUND_', description: 'incomplete fund ID' },
      { id: 'fund_001', description: 'lowercase fund ID' }
    ];

    invalidIdTestCases.forEach(testCase => {
      it(`shouldThrowNotFoundExceptionWhen${testCase.description.replace(/\s+/g, '')}IsProvided`, () => {
        // Act & Assert - Validate exception for various invalid IDs
        expect(() => {
          service.findOne(testCase.id);
        }).toThrow(NotFoundException);
        
        expect(() => {
          service.findOne(testCase.id);
        }).toThrow(`Fund with ID ${testCase.id} not found`);
      });
    });

    // Additional edge cases for thorough testing
    it('shouldThrowNotFoundExceptionWhenNumericZeroIsProvided', () => {
      // Arrange
      const zeroId = '0';
      
      // Act & Assert
      expect(() => {
        service.findOne(zeroId);
      }).toThrow(NotFoundException);
    });

    it('shouldThrowNotFoundExceptionWhenVeryLongIdIsProvided', () => {
      // Arrange
      const longId = 'A'.repeat(1000);
      
      // Act & Assert - Test with extremely long ID
      expect(() => {
        service.findOne(longId);
      }).toThrow(NotFoundException);
    });
  });
});
