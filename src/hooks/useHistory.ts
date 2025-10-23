'use client';

import { useCallback, useState } from 'react';
import { ConversionHistoryItem, Currency } from '@/types';

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export interface UseHistoryResult {
  items: ConversionHistoryItem[];
  add: (params: {
    realRate: number;
    usedRate: number;
    fromCurrency: Currency;
    toCurrency: Currency;
    inputValue: number;
    outputValue: number;
  }) => void;
  clear: () => void;
}

export function useHistory(max = 5): UseHistoryResult {
  const [items, setItems] = useState<ConversionHistoryItem[]>([]);

  const add: UseHistoryResult['add'] = useCallback(
    ({ realRate, usedRate, fromCurrency, toCurrency, inputValue, outputValue }) => {
      const item: ConversionHistoryItem = {
        id: uid(),
        timestamp: Date.now(),
        realRate,
        usedRate,
        fromCurrency,
        toCurrency,
        inputValue,
        outputValue,
      };
      setItems((prev) => {
        const next = [item, ...prev];
        if (next.length > max) next.pop();
        return next;
      });
    },
    [max]
  );

  const clear = useCallback(() => setItems([]), []);

  return { items, add, clear };
}
