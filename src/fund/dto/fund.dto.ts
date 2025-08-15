import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString, IsOptional, IsPositive } from 'class-validator';

export class FundDto {
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
  @IsPositive()
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
}
