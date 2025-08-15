import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { mockTransactions } from '../mock-data/transactions.mock';

@ApiTags('Transaction')
@Controller('transaction-history')
export class TransactionController {
  @Get()
  @ApiOperation({ summary: 'Get all transactions' })
  @ApiResponse({ status: 200, description: 'List of transactions' })
  findAll() {
    return mockTransactions;
  }
}
