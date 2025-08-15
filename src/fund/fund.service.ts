import { Injectable } from '@nestjs/common';
import { MOCK_FUNDS } from './data/fund-mock.data';
import { FundDto } from './dto/fund.dto';

@Injectable()
export class FundService {
  findAll(): FundDto[] {
    return MOCK_FUNDS;
  }
}
