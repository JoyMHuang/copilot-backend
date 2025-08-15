import { TransactionDto, TransactionStatus } from '../transaction/dto/transaction.dto';

export const mockTransactions: TransactionDto[] = [
  {
    id: 'txn-001',
    transactionName: 'Subscription - Equity Fund',
    transactionDate: '2025-07-01',
    transactionAmount: 10000,
    status: TransactionStatus.Completed,
  },
  {
    id: 'txn-002',
    transactionName: 'Redemption - Bond Fund',
    transactionDate: '2025-07-03',
    transactionAmount: 5000,
    status: TransactionStatus.Pending,
  },
  {
    id: 'txn-003',
    transactionName: 'Switch - Balanced to Growth',
    transactionDate: '2025-07-05',
    transactionAmount: 2500.5,
    status: TransactionStatus.Completed,
  },
  {
    id: 'txn-004',
    transactionName: 'Subscription - Money Market',
    transactionDate: '2025-07-07',
    transactionAmount: 8000,
    status: TransactionStatus.Completed,
  },
  {
    id: 'txn-005',
    transactionName: 'Redemption - Equity Fund',
    transactionDate: '2025-07-09',
    transactionAmount: 3000,
    status: TransactionStatus.Failed,
  },
  {
    id: 'txn-006',
    transactionName: 'Subscription - Bond Fund',
    transactionDate: '2025-07-11',
    transactionAmount: 12000,
    status: TransactionStatus.Completed,
  },
  {
    id: 'txn-007',
    transactionName: 'Switch - Growth to Balanced',
    transactionDate: '2025-07-13',
    transactionAmount: 4000,
    status: TransactionStatus.Pending,
  },
  {
    id: 'txn-008',
    transactionName: 'Redemption - Money Market',
    transactionDate: '2025-07-14',
    transactionAmount: 1500,
    status: TransactionStatus.Completed,
  },
  {
    id: 'txn-009',
    transactionName: 'Subscription - Balanced Fund',
    transactionDate: '2025-07-16',
    transactionAmount: 9500.75,
    status: TransactionStatus.Completed,
  },
  {
    id: 'txn-010',
    transactionName: 'Redemption - Balanced Fund',
    transactionDate: '2025-07-18',
    transactionAmount: 2200,
    status: TransactionStatus.Failed,
  },
];
