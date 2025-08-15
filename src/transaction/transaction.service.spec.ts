import { Test, TestingModule } from '@nestjs/testing';
import { TransactionService } from './transaction.service';

// 模拟被服务依赖的 mock 数据模块，提供稳定数据用于断言
jest.mock('../mock-data', () => {
  const mockTransactionHistory = [
    { id: 'txn-1', customerId: 'cust-1', fundId: 'fund-1' },
    { id: 'txn-2', customerId: 'cust-1', fundId: 'fund-2' },
    { id: 'txn-3', customerId: 'cust-2', fundId: 'fund-1' },
    { id: 'txn-4', customerId: 'cust-3', fundId: 'fund-3' },
  ];
  return { mockTransactionHistory };
});

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionService],
    }).compile();

    service = module.get<TransactionService>(TransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll 应返回所有交易记录', () => {
    const all = service.findAll();
    expect(Array.isArray(all)).toBe(true);
    expect(all).toHaveLength(4);
    expect(all.map((t: any) => t.id)).toEqual(['txn-1', 'txn-2', 'txn-3', 'txn-4']);
  });

  it('findByCustomerId 应按 customerId 过滤', () => {
    const list1 = service.findByCustomerId('cust-1');
    expect(list1.map((t: any) => t.id)).toEqual(['txn-1', 'txn-2']);

    const list2 = service.findByCustomerId('cust-2');
    expect(list2.map((t: any) => t.id)).toEqual(['txn-3']);
  });

  it('findByCustomerId 无匹配时返回空数组', () => {
    const list = service.findByCustomerId('cust-x');
    expect(list).toEqual([]);
  });

  it('findByFundId 应按 fundId 过滤', () => {
    const list1 = service.findByFundId('fund-1');
    expect(list1.map((t: any) => t.id)).toEqual(['txn-1', 'txn-3']);

    const list2 = service.findByFundId('fund-2');
    expect(list2.map((t: any) => t.id)).toEqual(['txn-2']);
  });

  it('findByFundId 无匹配时返回空数组', () => {
    const list = service.findByFundId('fund-x');
    expect(list).toEqual([]);
  });
});
