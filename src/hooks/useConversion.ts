'use client';

import { useCallback, useMemo, useState } from 'react';
import { Currency } from '@/types';
import { parseNumericInput, roundTo } from '@/utils/currency';

export interface UseConversionResult {
  from: Currency;
  to: Currency;
  amountIn: string;
  setAmountIn: (v: string) => void;
  isValid: boolean;
  numericIn: number;
  amountOut: number;
  invert: () => void;
  setFrom: (c: Currency) => void;
}

export function useConversion(initialFrom: Currency, rate: number): UseConversionResult {
  const [from, setFrom] = useState<Currency>(initialFrom);
  const to: Currency = from === 'EUR' ? 'USD' : 'EUR';
  const [amountIn, setAmountIn] = useState<string>('100');

  const numericIn = useMemo(() => {
    const n = parseNumericInput(amountIn);
    return n == null ? NaN : n;
  }, [amountIn]);

  const isValid = useMemo(() => Number.isFinite(numericIn) && numericIn >= 0, [numericIn]);

  const amountOut = useMemo(() => {
    if (!isValid) return 0;
    if (from === 'EUR') {
      return roundTo(numericIn * rate, 2);
    } else {
      return roundTo(numericIn / rate, 2);
    }
  }, [from, isValid, numericIn, rate]);

  const invert = useCallback(() => {
    const nextFrom: Currency = to; // swap
    // L'ancienne sortie devient la nouvelle entrée
    const nextIn = Number.isFinite(amountOut) ? String(amountOut) : '0';
    setFrom(nextFrom);
    setAmountIn(nextIn);
  }, [to, amountOut]);

  return { from, to, amountIn, setAmountIn, isValid, numericIn, amountOut, invert, setFrom };
}
