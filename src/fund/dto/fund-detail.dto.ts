import { ApiProperty } from '@nestjs/swagger';

export class FundManagerDto {
  @ApiProperty({ description: '基金经理姓名' })
  name: string;

  @ApiProperty({ description: '从业年限' })
  experience: number;

  @ApiProperty({ description: '教育背景' })
  education: string;
}

export class PerformanceDto {
  @ApiProperty({ description: '时间周期', example: '1Y' })
  period: string;

  @ApiProperty({ description: '收益率百分比' })
  return: number;

  @ApiProperty({ description: '基准收益率' })
  benchmark: number;

  @ApiProperty({ description: '超额收益' })
  excess: number;
}

export class FeeStructureDto {
  @ApiProperty({ description: '管理费率' })
  managementFee: number;

  @ApiProperty({ description: '托管费率' })
  custodianFee: number;

  @ApiProperty({ description: '申购费率' })
  subscriptionFee: number;

  @ApiProperty({ description: '赎回费率' })
  redemptionFee: number;
}

export class HoldingDto {
  @ApiProperty({ description: '持仓名称' })
  name: string;

  @ApiProperty({ description: '持仓代码' })
  code: string;

  @ApiProperty({ description: '持仓比例' })
  percentage: number;

  @ApiProperty({ description: '持仓价值' })
  value: number;
}

export class RiskMetricsDto {
  @ApiProperty({ description: '夏普比率' })
  sharpeRatio: number;

  @ApiProperty({ description: '最大回撤' })
  maxDrawdown: number;

  @ApiProperty({ description: '波动率' })
  volatility: number;

  @ApiProperty({ description: 'Beta系数' })
  beta: number;

  @ApiProperty({ description: '风险等级', enum: ['低风险', '中低风险', '中风险', '中高风险', '高风险'] })
  riskLevel: '低风险' | '中低风险' | '中风险' | '中高风险' | '高风险';
}

export class FundDetailDto {
  @ApiProperty({ description: '基金ID' })
  id: string;

  @ApiProperty({ description: '基金名称' })
  fundName: string;

  @ApiProperty({ description: '基金代码' })
  code: string;

  @ApiProperty({ description: '基金类型', example: '混合型' })
  fundType: string;

  @ApiProperty({ description: '基金规模（万元）' })
  fundSize: number;

  @ApiProperty({ description: '成立日期' })
  establishDate: string;

  @ApiProperty({ description: '单位净值' })
  unitPrice: number;

  @ApiProperty({ description: '累计净值' })
  accumulatedNav: number;

  @ApiProperty({ description: '货币代码', example: 'USD' })
  currencyCode: string;

  @ApiProperty({ description: '净值日期' })
  priceDate: string;

  @ApiProperty({ description: '净值变化' })
  navChange: number;

  @ApiProperty({ description: '净值变化百分比' })
  navChangePercent: number;

  @ApiProperty({ description: '基金经理信息', type: [FundManagerDto] })
  fundManagers: FundManagerDto[];

  @ApiProperty({ description: '历史业绩', type: [PerformanceDto] })
  performance: PerformanceDto[];

  @ApiProperty({ description: '费率结构', type: FeeStructureDto })
  feeStructure: FeeStructureDto;

  @ApiProperty({ description: '前十大持仓', type: [HoldingDto] })
  topHoldings: HoldingDto[];

  @ApiProperty({ description: '风险指标', type: RiskMetricsDto })
  riskMetrics: RiskMetricsDto;

  @ApiProperty({ description: '投资目标' })
  investmentObjective: string;

  @ApiProperty({ description: '投资策略' })
  investmentStrategy: string;

  @ApiProperty({ description: '适合投资者类型' })
  suitableInvestors: string;

  @ApiProperty({ description: '基金状态', enum: ['正常申购赎回', '暂停申购', '暂停赎回', '暂停交易'] })
  status: '正常申购赎回' | '暂停申购' | '暂停赎回' | '暂停交易';

  @ApiProperty({ description: '最小申购金额' })
  minSubscription: number;

  @ApiProperty({ description: '最小赎回份额' })
  minRedemption: number;
}