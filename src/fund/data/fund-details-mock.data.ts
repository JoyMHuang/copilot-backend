import { FundDetailsDto, FundPerformanceDto, FundManagerDto, FundHoldingDto, FundBasicInfoDto } from '../dto/fund-details.dto';

export const MOCK_FUND_DETAILS: FundDetailsDto[] = [
  {
    id: '1',
    fundName: '华夏成长混合',
    code: '000001',
    unitPrice: 1.2345,
    currencyCode: 'CNY',
    priceDate: '2024-01-15T00:00:00.000Z',
    navChange: 0.0123,
    navChangePercent: 1.01,
    basicInfo: {
      fundType: '混合型',
      riskLevel: '中风险',
      establishmentDate: '2015-06-20',
      fundSize: 156789.5,
      managementFeeRate: 1.5,
      custodyFeeRate: 0.25,
      salesServiceFeeRate: 0.4
    },
    managers: [
      {
        name: '张华',
        appointmentDate: '2020-01-15',
        experience: 8
      },
      {
        name: '李明',
        appointmentDate: '2021-06-01',
        experience: 6
      }
    ],
    performance: [
      { period: '近1月', return: 2.5 },
      { period: '近3月', return: 8.2 },
      { period: '近6月', return: 15.6 },
      { period: '近1年', return: 28.9 },
      { period: '近3年', return: 65.4 },
      { period: '成立以来', return: 123.5 }
    ],
    topHoldings: [
      { name: '贵州茅台', code: '600519', percentage: 8.5, marketValue: 125000000 },
      { name: '腾讯控股', code: '00700', percentage: 7.2, marketValue: 106000000 },
      { name: '宁德时代', code: '300750', percentage: 6.8, marketValue: 100000000 },
      { name: '五粮液', code: '000858', percentage: 5.9, marketValue: 87000000 },
      { name: '美团', code: '03690', percentage: 5.1, marketValue: 75000000 },
      { name: '比亚迪', code: '002594', percentage: 4.7, marketValue: 69000000 },
      { name: '阿里巴巴', code: '09988', percentage: 4.3, marketValue: 63000000 },
      { name: '平安银行', code: '000001', percentage: 3.9, marketValue: 57000000 },
      { name: '招商银行', code: '600036', percentage: 3.6, marketValue: 53000000 },
      { name: '隆基绿能', code: '601012', percentage: 3.2, marketValue: 47000000 }
    ],
    description: '本基金主要投资于具有良好成长潜力的上市公司股票，通过精选个股的方式，在控制风险的前提下，力争实现基金资产的长期稳健增值。基金采用积极的资产配置策略，根据宏观经济环境、市场流动性等因素动态调整股票、债券等资产的配置比例。',
    investmentObjective: '在控制风险的前提下，追求基金资产的长期稳健增值，力争为投资者创造持续稳定的投资回报。',
    investmentStrategy: '采用自上而下的资产配置策略，结合自下而上的个股精选方法。重点关注具备核心竞争力、成长性较好、估值合理的优质上市公司，通过深入的基本面分析，构建投资组合。'
  },
  {
    id: '2',
    fundName: '易方达蓝筹精选混合',
    code: '005827',
    unitPrice: 2.1678,
    currencyCode: 'CNY',
    priceDate: '2024-01-15T00:00:00.000Z',
    navChange: -0.0234,
    navChangePercent: -1.07,
    basicInfo: {
      fundType: '混合型',
      riskLevel: '中高风险',
      establishmentDate: '2018-03-12',
      fundSize: 245678.9,
      managementFeeRate: 1.5,
      custodyFeeRate: 0.25,
      salesServiceFeeRate: 0.4
    },
    managers: [
      {
        name: '王强',
        appointmentDate: '2018-03-12',
        experience: 12
      }
    ],
    performance: [
      { period: '近1月', return: -1.2 },
      { period: '近3月', return: 5.8 },
      { period: '近6月', return: 12.3 },
      { period: '近1年', return: 22.1 },
      { period: '近3年', return: 78.9 },
      { period: '成立以来', return: 116.8 }
    ],
    topHoldings: [
      { name: '中国平安', code: '601318', percentage: 9.2, marketValue: 225000000 },
      { name: '招商银行', code: '600036', percentage: 8.1, marketValue: 198000000 },
      { name: '万科A', code: '000002', percentage: 7.5, marketValue: 184000000 },
      { name: '海康威视', code: '002415', percentage: 6.8, marketValue: 167000000 },
      { name: '格力电器', code: '000651', percentage: 6.2, marketValue: 152000000 },
      { name: '美的集团', code: '000333', percentage: 5.9, marketValue: 145000000 },
      { name: '恒瑞医药', code: '600276', percentage: 5.4, marketValue: 133000000 },
      { name: '立讯精密', code: '002475', percentage: 4.8, marketValue: 118000000 },
      { name: '三一重工', code: '600031', percentage: 4.3, marketValue: 106000000 },
      { name: '兴业银行', code: '601166', percentage: 4.1, marketValue: 101000000 }
    ],
    description: '本基金重点投资于大盘蓝筹股票，通过深入的基本面研究，精选具有持续竞争优势、业绩稳定增长、估值合理的优质上市公司。基金注重风险控制，采用严格的风险管理体系，力求在承担适度风险的前提下获得长期稳定的投资收益。',
    investmentObjective: '通过投资于优质蓝筹股票，在严格控制风险的前提下，追求基金资产的长期稳健增值。',
    investmentStrategy: '以价值投资为核心理念，重点关注大盘蓝筹股票，通过深度研究和长期持有获得投资收益。采用定性和定量相结合的分析方法，构建均衡的投资组合。'
  },
  {
    id: '3',
    fundName: '南方成份精选股票A',
    code: '202005',
    unitPrice: 1.8956,
    currencyCode: 'CNY',
    priceDate: '2024-01-15T00:00:00.000Z',
    navChange: 0.0156,
    navChangePercent: 0.83,
    basicInfo: {
      fundType: '股票型',
      riskLevel: '高风险',
      establishmentDate: '2007-05-14',
      fundSize: 189567.2,
      managementFeeRate: 1.5,
      custodyFeeRate: 0.25,
      salesServiceFeeRate: 0.6
    },
    managers: [
      {
        name: '陈涛',
        appointmentDate: '2019-08-01',
        experience: 10
      },
      {
        name: '赵敏',
        appointmentDate: '2022-03-15',
        experience: 5
      }
    ],
    performance: [
      { period: '近1月', return: 1.8 },
      { period: '近3月', return: 6.5 },
      { period: '近6月', return: 14.2 },
      { period: '近1年', return: 25.7 },
      { period: '近3年', return: 58.9 },
      { period: '成立以来', return: 189.5 }
    ],
    topHoldings: [
      { name: '中信证券', code: '600030', percentage: 7.8, marketValue: 148000000 },
      { name: '东方财富', code: '300059', percentage: 7.2, marketValue: 137000000 },
      { name: '工商银行', code: '601398', percentage: 6.9, marketValue: 131000000 },
      { name: '中国石化', code: '600028', percentage: 6.5, marketValue: 123000000 },
      { name: '中国移动', code: '600941', percentage: 5.8, marketValue: 110000000 },
      { name: '药明康德', code: '603259', percentage: 5.4, marketValue: 102000000 },
      { name: '中国中车', code: '601766', percentage: 4.9, marketValue: 93000000 },
      { name: '紫金矿业', code: '601899', percentage: 4.5, marketValue: 86000000 },
      { name: '中国建筑', code: '601668', percentage: 4.2, marketValue: 80000000 },
      { name: '中国电信', code: '601728', percentage: 3.9, marketValue: 74000000 }
    ],
    description: '本基金主要投资于沪深300指数成份股及其备选成份股，通过精选个股的投资策略，在严格控制风险的前提下，追求超越业绩比较基准的投资回报。基金注重价值发现与成长投资相结合，力求为投资者创造长期稳定的收益。',
    investmentObjective: '通过投资于沪深300指数成份股，在控制风险的前提下，力争实现超越业绩比较基准的投资回报。',
    investmentStrategy: '以沪深300指数为基础，通过深入的基本面分析和量化模型相结合的方法，精选具有投资价值的个股。采用适度集中的投资策略，控制组合风险。'
  },
  {
    id: '4',
    fundName: '汇添富消费行业混合',
    code: '000248',
    unitPrice: 3.4521,
    currencyCode: 'CNY',
    priceDate: '2024-01-15T00:00:00.000Z',
    navChange: 0.0298,
    navChangePercent: 0.87,
    basicInfo: {
      fundType: '混合型',
      riskLevel: '中高风险',
      establishmentDate: '2013-05-08',
      fundSize: 567234.1,
      managementFeeRate: 1.5,
      custodyFeeRate: 0.25,
      salesServiceFeeRate: 0.4
    },
    managers: [
      {
        name: '刘建位',
        appointmentDate: '2013-05-08',
        experience: 15
      }
    ],
    performance: [
      { period: '近1月', return: 3.2 },
      { period: '近3月', return: 9.8 },
      { period: '近6月', return: 18.5 },
      { period: '近1年', return: 32.1 },
      { period: '近3年', return: 89.6 },
      { period: '成立以来', return: 245.2 }
    ],
    topHoldings: [
      { name: '贵州茅台', code: '600519', percentage: 12.3, marketValue: 698000000 },
      { name: '五粮液', code: '000858', percentage: 10.8, marketValue: 612000000 },
      { name: '泸州老窖', code: '000568', percentage: 8.9, marketValue: 505000000 },
      { name: '伊利股份', code: '600887', percentage: 7.6, marketValue: 431000000 },
      { name: '海天味业', code: '603288', percentage: 6.8, marketValue: 386000000 },
      { name: '双汇发展', code: '000895', percentage: 5.9, marketValue: 335000000 },
      { name: '安井食品', code: '603345', percentage: 5.2, marketValue: 295000000 },
      { name: '洋河股份', code: '002304', percentage: 4.7, marketValue: 267000000 },
      { name: '绝味食品', code: '603517', percentage: 4.1, marketValue: 233000000 },
      { name: '涪陵榨菜', code: '002507', percentage: 3.8, marketValue: 216000000 }
    ],
    description: '本基金专注于消费行业投资，通过深入研究消费行业的发展趋势和投资机会，精选优质消费类上市公司进行投资。基金重点关注食品饮料、家用电器、纺织服装、商业贸易等细分消费领域，力求分享中国消费升级的长期投资机会。',
    investmentObjective: '通过投资于消费行业优质上市公司，分享中国消费升级带来的长期投资机会，力争实现基金资产的长期稳健增值。',
    investmentStrategy: '采用自上而下的行业配置和自下而上的个股精选相结合的投资策略。深入研究消费行业发展趋势，重点投资具有品牌优势、渠道优势和管理优势的消费类公司。'
  },
  {
    id: '5',
    fundName: '广发稳健增长混合A',
    code: '270002',
    unitPrice: 1.5432,
    currencyCode: 'CNY',
    priceDate: '2024-01-15T00:00:00.000Z',
    navChange: -0.0087,
    navChangePercent: -0.56,
    basicInfo: {
      fundType: '混合型',
      riskLevel: '中风险',
      establishmentDate: '2004-07-26',
      fundSize: 234567.8,
      managementFeeRate: 1.5,
      custodyFeeRate: 0.25,
      salesServiceFeeRate: 0.4
    },
    managers: [
      {
        name: '程琨',
        appointmentDate: '2017-04-10',
        experience: 14
      },
      {
        name: '张东一',
        appointmentDate: '2020-09-01',
        experience: 8
      }
    ],
    performance: [
      { period: '近1月', return: -0.8 },
      { period: '近3月', return: 4.2 },
      { period: '近6月', return: 10.6 },
      { period: '近1年', return: 18.9 },
      { period: '近3年', return: 52.3 },
      { period: '成立以来', return: 454.3 }
    ],
    topHoldings: [
      { name: '工商银行', code: '601398', percentage: 6.8, marketValue: 159000000 },
      { name: '建设银行', code: '601939', percentage: 6.2, marketValue: 145000000 },
      { name: '中国石油', code: '601857', percentage: 5.9, marketValue: 138000000 },
      { name: '农业银行', code: '601288', percentage: 5.5, marketValue: 129000000 },
      { name: '中国银行', code: '601988', percentage: 5.1, marketValue: 119000000 },
      { name: '中国人寿', code: '601628', percentage: 4.8, marketValue: 112000000 },
      { name: '中国石化', code: '600028', percentage: 4.5, marketValue: 105000000 },
      { name: '中国平安', code: '601318', percentage: 4.2, marketValue: 98000000 },
      { name: '交通银行', code: '601328', percentage: 3.9, marketValue: 91000000 },
      { name: '中国神华', code: '601088', percentage: 3.7, marketValue: 87000000 }
    ],
    description: '本基金秉承稳健投资理念，通过积极的资产配置和精选个股，在有效控制风险的前提下，追求基金资产的稳健增长。基金重点投资于业绩稳定、估值合理的大盘蓝筹股票，同时适度配置成长性较好的中小盘股票。',
    investmentObjective: '在严格控制风险的前提下，通过积极的投资管理，力争实现基金资产的稳健增长，为投资者提供长期稳定的投资回报。',
    investmentStrategy: '采用稳健的投资策略，重点投资于估值合理、业绩稳定的优质上市公司。通过分散投资和严格的风险控制，降低投资组合的波动性。'
  }
];

// 根据 ID 获取基金详情的函数
export function getFundDetailsById(id: string): FundDetailsDto | undefined {
  return MOCK_FUND_DETAILS.find(fund => fund.id === id);
}
