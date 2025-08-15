import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString, IsOptional, IsPositive } from 'class-validator';

export class UpdateFundDto {
  @ApiPropertyOptional({ description: '基金名称', example: '华夏成长混合' })
  @IsOptional()
  @IsString()
  fundName?: string;

  @ApiPropertyOptional({ description: '基金代码', example: '000001' })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiPropertyOptional({ description: '单位净值', example: 1.2345 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 4 })
  @IsPositive()
  unitPrice?: number;

  @ApiPropertyOptional({ description: '货币代码', example: 'CNY' })
  @IsOptional()
  @IsString()
  currencyCode?: string;

  @ApiPropertyOptional({ description: '净值日期', example: '2024-01-15T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  priceDate?: string;

  @ApiPropertyOptional({ description: '净值变动', example: 0.0123 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 4 })
  navChange?: number;

  @ApiPropertyOptional({ description: '净值变动百分比', example: 1.23 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  navChangePercent?: number;
}
