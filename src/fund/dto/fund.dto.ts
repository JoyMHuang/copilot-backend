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

  @ApiProperty({ description: '净值日期' })
  priceDate: string;

  @ApiProperty({ description: '净值变动' })
  navChange: number;

  @ApiProperty({ description: '净值变动百分比' })
  navChangePercent: number;
}
