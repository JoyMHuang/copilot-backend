import { ApiProperty } from '@nestjs/swagger';

export class FundDto {
  @ApiProperty({ description: '基金ID', example: '1' })
  id: string;

  @ApiProperty({ description: '基金名称', example: 'Alpha Growth Fund' })
  fundName: string;

  @ApiProperty({ description: '基金代码', example: 'AGF001' })
  code: string;

  @ApiProperty({ description: '单位净值', example: 1.23 })
  unitPrice: number;

  @ApiProperty({ description: '币种代码', example: 'USD' })
  currencyCode: string;

  @ApiProperty({ description: '净值日期', example: '2024-06-01' })
  priceDate: string;

  @ApiProperty({ description: '净值变动', example: 0.02 })
  navChange: number;

  @ApiProperty({ description: '净值变动百分比', example: 1.65 })
  navChangePercent: number;
}
