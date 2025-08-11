import { ApiProperty } from '@nestjs/swagger';

export class FundDto {
  @ApiProperty({ description: '基金ID' })
  id: string;

  @ApiProperty({ description: '基金名称' })
  fundName: string;

  @ApiProperty({ description: '基金代码' })
  code: string;

  @ApiProperty({ description: '单位净值' })
  unitPrice: number;

  @ApiProperty({ description: '币种代码' })
  currencyCode: string;

  @ApiProperty({ description: '净值日期', example: '2025-08-11' })
  priceDate: string;

  @ApiProperty({ description: '净值涨跌' })
  navChange: number;

  @ApiProperty({ description: '净值涨跌幅(%)' })
  navChangePercent: number;
}
