// src/utils/currency.ts
import { Currency } from '@/types';

export function formatCurrency(value: number, currency: Currency, locale = 'fr-FR'): string {
  if (!isFinite(value)) return '';
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}

export function parseNumericInput(raw: string): number | null {
  // Autoriser virgule comme séparateur décimal
  const normalized = raw.replace(/\s/g, '').replace(',', '.');
  const n = Number(normalized);
  return Number.isFinite(n) ? n : null;
}

export function roundTo(value: number, digits = 2): number {
  const p = 10 ** digits;
  return Math.round(value * p) / p;
}

export function clampRate(rate: number): number {
  return Math.max(0.0001, Number(rate.toFixed(4)));
}

export function percentDiff(a: number, b: number): number {
  // Différence relative par rapport à b
  return Math.abs(a - b) / b;
}
