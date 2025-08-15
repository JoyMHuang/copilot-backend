import { Injectable, NotFoundException } from '@nestjs/common';
import { Fund, FundPerformance } from '../mock-data';
import { mockFunds, mockFundPerformances } from '../mock-data';

@Injectable()
export class FundService {
  private funds: Fund[] = [...mockFunds];

  findAll(): Fund[] {
    return this.funds;
  }

  findOne(id: string): Fund {
    const fund = this.funds.find(f => f.id === id);
    if (!fund) throw new NotFoundException('Fund not found');
    return fund;
  }

  create(fund: Fund): Fund {
    this.funds.push(fund);
    return fund;
  }

  update(id: string, update: Partial<Fund>): Fund {
    const fund = this.findOne(id);
    Object.assign(fund, update);
    return fund;
  }

  remove(id: string): void {
    const idx = this.funds.findIndex(f => f.id === id);
    if (idx === -1) throw new NotFoundException('Fund not found');
    this.funds.splice(idx, 1);
  }

  // 获取某基金的业绩
  getPerformance(fundId: string): FundPerformance[] {
    return mockFundPerformances.filter(perf => perf.fundId === fundId);
  }

  // 获取所有基金的最新业绩（按fundId分组，取最新日期）
  getLatestPerformances(): FundPerformance[] {
    const latest: { [fundId: string]: FundPerformance } = {};
    for (const perf of mockFundPerformances) {
      if (!latest[perf.fundId] || perf.date > latest[perf.fundId].date) {
        latest[perf.fundId] = perf;
      }
    }
    return Object.values(latest);
  }
}
