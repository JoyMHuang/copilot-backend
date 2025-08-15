export interface Fund {
  id: string;
  name: string;
  code: string;
  type: string;
  netValue: number;
  currency: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  description?: string;
}
