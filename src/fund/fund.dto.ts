import { IsNumber, IsString, IsDate } from 'class-validator';

export class FundDto {
  id: number;
  fundName: string;
  code: string;
  unitPrice: number;
  currencyCode: string;
  priceDate: Date;
  navChange: number;
  navChangePercent: number;
}
