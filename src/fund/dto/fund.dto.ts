import { ApiProperty } from '@nestjs/swagger';

export class FundDto {
  @ApiProperty({ description: 'Fund ID' })
  id: string;

  @ApiProperty({ description: 'Fund Name' })
  fundName: string;

  @ApiProperty({ description: 'Fund Code' })
  code: string;

  @ApiProperty({ description: 'Unit Net Value' })
  unitPrice: number;

  @ApiProperty({ description: 'Currency Code' })
  currencyCode: string;

  @ApiProperty({ description: 'Net Value Date' })
  priceDate: string;

  @ApiProperty({ description: 'Net Value Change' })
  navChange: number;

  @ApiProperty({ description: 'Net Value Change Percent' })
  navChangePercent: number;
}
