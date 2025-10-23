// src/types/index.ts
export type Currency = 'EUR' | 'USD';

export type Trend = 'up' | 'down' | 'flat';

export interface ExchangeRate {
  real: number;               // Taux réel dynamique EUR→USD
  used: number;               // Taux utilisé (fixe ou réel)
  isFixedEnabled: boolean;    // Taux fixe activé ?
  fixedRate: number | null;   // Valeur de taux fixe si activée
  trend: Trend;               // Indicateur de tendance
  lastUpdatedAt: number;      // Timestamp ms
}

export interface ConversionHistoryItem {
  id: string;
  timestamp: number;
  realRate: number;
  usedRate: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  inputValue: number;
  outputValue: number;
}
