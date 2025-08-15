import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsEnum } from 'class-validator';

export enum TransactionStatus {
  Pending = 'Pending',
  Completed = 'Completed',
  Failed = 'Failed',
}

export class TransactionDto {
  @ApiProperty({ description: '交易ID' })
  @IsString()
  id: string;

  @ApiProperty({ description: '交易名称' })
  @IsString()
  transactionName: string;

  @ApiProperty({ description: '交易日期', example: '2025-07-15' })
  @IsString()
  transactionDate: string;

  @ApiProperty({ description: '交易金额' })
  @IsNumber()
  transactionAmount: number;

  @ApiProperty({ description: '交易状态', enum: TransactionStatus })
  @IsEnum(TransactionStatus)
  status: TransactionStatus;
}
