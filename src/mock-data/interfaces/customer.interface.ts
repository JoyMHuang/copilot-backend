export interface Customer {
  id: number;
  name: string;
  email: string;
}

export interface Allocation {
  name: string;
  percentage: number;
  amount: number;
  color: string;
}

export interface PortfolioData {
  id: string;
  name: string;
  cifNumber: string;
  totalValue: number;
  unrealizedProfitLoss: number;
  riskProfile: 'Conservative' | 'Moderate' | 'Aggressive';
  lastUpdated: string;
  allocations: Allocation[];
}

export interface WealthSpecialist {
  name: string;
  email: string;
  phone: string;
}

export interface Transaction {
  customerId: string;
  id: string;
  fundId: string;
  fundName: string;
  type: 'Subscribe' | 'Switch' | 'Redeem';
  amount: number;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

export interface DashboardData {
  portfolioData: PortfolioData;
  wealthSpecialist: WealthSpecialist;
  transactions: Transaction[];
}
