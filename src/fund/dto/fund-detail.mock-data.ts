import { FundDetailDto } from './fund-detail.dto';

export const mockFundDetailData: FundDetailDto[] = [
  {
    id: '1',
    fundName: '易方达蓝筹精选混合',
    code: '005827',
    fundType: '混合型',
    fundSize: 126850.32,
    establishDate: '2018-03-21',
    unitPrice: 2.1456,
    accumulatedNav: 2.1456,
    currencyCode: 'CNY',
    priceDate: '2024-01-15',
    navChange: 0.0234,
    navChangePercent: 1.10,
    fundManagers: [
      {
        name: '张坤',
        experience: 12,
        education: '清华大学MBA'
      }
    ],
    performance: [
      { period: '1M', return: 1.10, benchmark: 0.85, excess: 0.25 },
      { period: '3M', return: 5.23, benchmark: 4.12, excess: 1.11 },
      { period: '6M', return: 12.45, benchmark: 9.87, excess: 2.58 },
      { period: '1Y', return: 28.67, benchmark: 22.15, excess: 6.52 },
      { period: '3Y', return: 89.34, benchmark: 67.89, excess: 21.45 }
    ],
    feeStructure: {
      managementFee: 1.50,
      custodianFee: 0.25,
      subscriptionFee: 1.20,
      redemptionFee: 0.50
    },
    topHoldings: [
      { name: '贵州茅台', code: '600519', percentage: 8.92, value: 112456.78 },
      { name: '腾讯控股', code: '00700', percentage: 7.45, value: 94523.16 },
      { name: '招商银行', code: '600036', percentage: 6.23, value: 78956.43 },
      { name: '五粮液', code: '000858', percentage: 5.87, value: 74325.21 },
      { name: '比亚迪', code: '002594', percentage: 5.34, value: 67734.55 }
    ],
    riskMetrics: {
      sharpeRatio: 1.85,
      maxDrawdown: -18.56,
      volatility: 22.34,
      beta: 1.12,
      riskLevel: '中高风险'
    },
    investmentObjective: '本基金通过精选具有核心竞争优势的蓝筹股票进行投资，在严格控制风险的前提下，力争为投资者获取长期稳定的投资回报。',
    investmentStrategy: '采用自上而下的宏观配置策略结合自下而上的个股精选策略，重点投资于具有良好基本面、估值合理、成长性突出的蓝筹股票。',
    suitableInvestors: '适合风险承受能力较强，投资期限较长的投资者',
    status: '正常申购赎回',
    minSubscription: 10.00,
    minRedemption: 10.00
  },
  {
    id: '2',
    fundName: '华夏回报混合A',
    code: '002001',
    fundType: '混合型',
    fundSize: 85643.21,
    establishDate: '2003-09-05',
    unitPrice: 1.8932,
    accumulatedNav: 4.2156,
    currencyCode: 'CNY',
    priceDate: '2024-01-15',
    navChange: -0.0156,
    navChangePercent: -0.82,
    fundManagers: [
      {
        name: '蔡向阳',
        experience: 15,
        education: '北京大学经济学博士'
      }
    ],
    performance: [
      { period: '1M', return: -0.82, benchmark: -0.45, excess: -0.37 },
      { period: '3M', return: 2.15, benchmark: 1.78, excess: 0.37 },
      { period: '6M', return: 8.96, benchmark: 7.23, excess: 1.73 },
      { period: '1Y', return: 18.45, benchmark: 15.67, excess: 2.78 },
      { period: '3Y', return: 45.23, benchmark: 38.96, excess: 6.27 }
    ],
    feeStructure: {
      managementFee: 1.50,
      custodianFee: 0.25,
      subscriptionFee: 1.20,
      redemptionFee: 0.50
    },
    topHoldings: [
      { name: '中国平安', code: '601318', percentage: 7.89, value: 67589.45 },
      { name: '宁德时代', code: '300750', percentage: 6.78, value: 58123.67 },
      { name: '美的集团', code: '000333', percentage: 5.92, value: 50734.89 },
      { name: '恒瑞医药', code: '600276', percentage: 5.45, value: 46701.23 },
      { name: '格力电器', code: '000651', percentage: 4.87, value: 41723.56 }
    ],
    riskMetrics: {
      sharpeRatio: 1.32,
      maxDrawdown: -22.34,
      volatility: 25.67,
      beta: 0.98,
      riskLevel: '中风险'
    },
    investmentObjective: '通过资产配置和积极投资管理，在控制风险的前提下追求基金资产的长期稳定增值。',
    investmentStrategy: '采用均衡配置策略，在股票、债券等资产类别间进行灵活配置，通过主动管理获取超额收益。',
    suitableInvestors: '适合风险承受能力中等，寻求长期资本增值的投资者',
    status: '正常申购赎回',
    minSubscription: 1.00,
    minRedemption: 1.00
  },
  {
    id: '11',
    fundName: 'Vanguard S&P 500 ETF',
    code: 'VOO',
    fundType: 'ETF',
    fundSize: 8500000.00,
    establishDate: '2010-09-09',
    unitPrice: 425.67,
    accumulatedNav: 425.67,
    currencyCode: 'USD',
    priceDate: '2024-01-15',
    navChange: 3.45,
    navChangePercent: 0.82,
    fundManagers: [
      {
        name: 'Michael Buek',
        experience: 18,
        education: 'Wharton School MBA'
      }
    ],
    performance: [
      { period: '1M', return: 0.82, benchmark: 0.82, excess: 0.00 },
      { period: '3M', return: 4.56, benchmark: 4.56, excess: 0.00 },
      { period: '6M', return: 11.23, benchmark: 11.23, excess: 0.00 },
      { period: '1Y', return: 24.67, benchmark: 24.67, excess: 0.00 },
      { period: '3Y', return: 42.15, benchmark: 42.15, excess: 0.00 }
    ],
    feeStructure: {
      managementFee: 0.03,
      custodianFee: 0.00,
      subscriptionFee: 0.00,
      redemptionFee: 0.00
    },
    topHoldings: [
      { name: 'Apple Inc', code: 'AAPL', percentage: 7.12, value: 605020000 },
      { name: 'Microsoft Corp', code: 'MSFT', percentage: 6.89, value: 585650000 },
      { name: 'Amazon.com Inc', code: 'AMZN', percentage: 3.45, value: 293250000 },
      { name: 'NVIDIA Corp', code: 'NVDA', percentage: 2.98, value: 253300000 },
      { name: 'Alphabet Inc Class A', code: 'GOOGL', percentage: 2.67, value: 226950000 }
    ],
    riskMetrics: {
      sharpeRatio: 1.45,
      maxDrawdown: -23.93,
      volatility: 18.23,
      beta: 1.00,
      riskLevel: '中风险'
    },
    investmentObjective: 'To track the performance of the Standard & Poor\'s 500 Index that measures the investment return of large-capitalization stocks.',
    investmentStrategy: 'Uses a passive management approach designed to track the performance of the S&P 500 Index.',
    suitableInvestors: 'Suitable for investors seeking broad exposure to U.S. large-cap stocks',
    status: '正常申购赎回',
    minSubscription: 1.00,
    minRedemption: 1.00
  }
];