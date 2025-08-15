import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class FundPerformanceDto {
  @ApiProperty({ description: '期间', example: '1年' })
  @IsString()
  period: string;

  @ApiProperty({ description: '收益率(%)', example: 15.6 })
  @IsNumber({ maxDecimalPlaces: 2 })
  return: number;
}

export class FundManagerDto {
  @ApiProperty({ description: '基金经理姓名', example: '张三' })
  @IsString()
  name: string;

  @ApiProperty({ description: '任职日期', example: '2020-01-15' })
  @IsDateString()
  appointmentDate: string;

  @ApiProperty({ description: '管理经验(年)', example: 8 })
  @IsNumber()
  experience: number;
}

export class FundHoldingDto {
  @ApiProperty({ description: '股票/债券名称', example: '贵州茅台' })
  @IsString()
  name: string;

  @ApiProperty({ description: '股票代码', example: '600519' })
  @IsString()
  code: string;

  @ApiProperty({ description: '持仓比例(%)', example: 8.5 })
  @IsNumber({ maxDecimalPlaces: 2 })
  percentage: number;

  @ApiProperty({ description: '持仓市值', example: 125000000 })
  @IsNumber()
  marketValue: number;
}

export class FundBasicInfoDto {
  @ApiProperty({ description: '基金类型', example: '混合型' })
  @IsString()
  fundType: string;

  @ApiProperty({ description: '风险等级', example: '中风险' })
  @IsString()
  riskLevel: string;

  @ApiProperty({ description: '成立日期', example: '2015-06-20' })
  @IsDateString()
  establishmentDate: string;

  @ApiProperty({ description: '基金规模(万元)', example: 156789.5 })
  @IsNumber({ maxDecimalPlaces: 2 })
  fundSize: number;

  @ApiProperty({ description: '管理费率(%)', example: 1.5 })
  @IsNumber({ maxDecimalPlaces: 2 })
  managementFeeRate: number;

  @ApiProperty({ description: '托管费率(%)', example: 0.25 })
  @IsNumber({ maxDecimalPlaces: 2 })
  custodyFeeRate: number;

  @ApiProperty({ description: '销售服务费率(%)', example: 0.4 })
  @IsNumber({ maxDecimalPlaces: 2 })
  salesServiceFeeRate: number;
}

export class FundDetailsDto {
  @ApiProperty({ description: '基金ID', example: '1' })
  @IsString()
  id: string;

  @ApiProperty({ description: '基金名称', example: '华夏成长混合' })
  @IsString()
  fundName: string;

  @ApiProperty({ description: '基金代码', example: '000001' })
  @IsString()
  code: string;

  @ApiProperty({ description: '单位净值', example: 1.2345 })
  @IsNumber({ maxDecimalPlaces: 4 })
  unitPrice: number;

  @ApiProperty({ description: '货币代码', example: 'CNY' })
  @IsString()
  currencyCode: string;

  @ApiProperty({ description: '净值日期', example: '2024-01-15T00:00:00.000Z' })
  @IsDateString()
  priceDate: string;

  @ApiProperty({ description: '净值变动', example: 0.0123 })
  @IsNumber({ maxDecimalPlaces: 4 })
  navChange: number;

  @ApiProperty({ description: '净值变动百分比', example: 1.23 })
  @IsNumber({ maxDecimalPlaces: 2 })
  navChangePercent: number;

  @ApiProperty({ description: '基金基本信息', type: FundBasicInfoDto })
  @ValidateNested()
  @Type(() => FundBasicInfoDto)
  basicInfo: FundBasicInfoDto;

  @ApiProperty({ description: '基金经理信息', type: [FundManagerDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FundManagerDto)
  managers: FundManagerDto[];

  @ApiProperty({ description: '历史业绩', type: [FundPerformanceDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FundPerformanceDto)
  performance: FundPerformanceDto[];

  @ApiProperty({ description: '前十大持仓', type: [FundHoldingDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FundHoldingDto)
  topHoldings: FundHoldingDto[];

  @ApiProperty({ description: '基金描述', example: '本基金主要投资于具有良好成长潜力的上市公司股票...' })
  @IsString()
  description: string;

  @ApiProperty({ description: '投资目标', example: '在控制风险的前提下，追求基金资产的长期稳健增值' })
  @IsString()
  investmentObjective: string;

  @ApiProperty({ description: '投资策略', example: '采用自上而下的资产配置策略...' })
  @IsString()
  investmentStrategy: string;
}
