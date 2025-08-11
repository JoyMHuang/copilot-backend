import { Injectable } from '@nestjs/common';
import { DashboardDataDto, PortfolioDataDto, WealthSpecialistDto, TransactionDto } from './dto/portfolio.dto';
import { mockCustomers, mockDashboardData } from '../mock-data';

@Injectable()
export class CustomerService {
  findAll() {
    return mockCustomers;
  }

  getDashboardData(customerId: string): DashboardDataDto {
    // 将mock data转换为DTO格式
    const portfolioData: PortfolioDataDto = {
      ...mockDashboardData.portfolioData
    };

    const wealthSpecialist: WealthSpecialistDto = {
      ...mockDashboardData.wealthSpecialist
    };

    const transactions: TransactionDto[] = mockDashboardData.transactions
      .filter(transaction => transaction.customerId === customerId)
      .map(transaction => ({
        ...transaction
      }));

    return {
      portfolioData,
      wealthSpecialist,
      transactions
    };
  }

  getPortfolioData(customerId: string): PortfolioDataDto {
    return this.getDashboardData(customerId).portfolioData;
  }

  getWealthSpecialist(customerId: string): WealthSpecialistDto {
    return this.getDashboardData(customerId).wealthSpecialist;
  }

  getTransactions(customerId: string): TransactionDto[] {
    return mockDashboardData.transactions.filter(transaction => transaction.customerId === customerId);
  }
}
