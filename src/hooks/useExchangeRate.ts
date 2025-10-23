'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { clampRate, percentDiff } from '@/utils/currency';

export interface UseExchangeRateResult {
  real: number;
  used: number;
  trend: 'up' | 'down' | 'flat';
  isFixedEnabled: boolean;
  fixedRate: number | null;
  setFixedRate: (v: number | null) => void;
  setFixedEnabled: (v: boolean) => void;
  lastUpdatedAt: number;
  autoDisabled: boolean;
  clearAutoDisabled: () => void;
}

const TICK_MS = 3000;
const INITIAL_REAL = 1.1;
const MAX_STEP = 0.05; // ±0.05
const MAX_REL_DEV = 0.02; // 2%

export function useExchangeRate(): UseExchangeRateResult {
  const [real, setReal] = useState<number>(INITIAL_REAL);
  const [lastReal, setLastReal] = useState<number>(INITIAL_REAL);
  const [isFixedEnabled, setIsFixedEnabled] = useState<boolean>(false);
  const [fixedRate, setFixedRateState] = useState<number | null>(null);
  const [autoDisabled, setAutoDisabled] = useState<boolean>(false);
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number>(Date.now());

  const intervalRef = useRef<number | null>(null);

  const trend: 'up' | 'down' | 'flat' = useMemo(() => {
    if (real > lastReal) return 'up';
    if (real < lastReal) return 'down';
    return 'flat';
  }, [real, lastReal]);

  const used = useMemo(() => {
    return isFixedEnabled && fixedRate != null ? fixedRate : real;
  }, [isFixedEnabled, fixedRate, real]);

  const setFixedRate = useCallback((v: number | null) => {
    if (v == null) {
      setFixedRateState(null);
      return;
    }
    setFixedRateState(clampRate(v));
  }, []);

  const setFixedEnabled = useCallback((v: boolean) => {
    // Si on active sans valeur, on copie le taux réel courant
    if (v && (fixedRate == null || !isFinite(fixedRate))) {
      setFixedRateState(real);
    }
    setIsFixedEnabled(v);
  }, [fixedRate, real]);

  const clearAutoDisabled = useCallback(() => setAutoDisabled(false), []);


  useEffect(() => {
    // Tick de mise à jour du taux réel
    intervalRef.current = window.setInterval(() => {
      setLastReal((prev) => prev); // pour dépendances
      setReal((prev) => {
        const delta = (Math.random() * (2 * MAX_STEP)) - MAX_STEP; // [-0.05, +0.05]
        const next = clampRate(prev + delta);
        setLastReal(prev);
        setLastUpdatedAt(Date.now());
        return next;
      });
    }, TICK_MS) as unknown as number;

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Désactivation auto si écart > 2% entre fixed et real
    if (isFixedEnabled && fixedRate != null) {
      const dev = percentDiff(fixedRate, real);
      if (dev > MAX_REL_DEV) {
        setIsFixedEnabled(false);
        setAutoDisabled(true);
      }
    }
  }, [real, isFixedEnabled, fixedRate]);

  return {
    real,
    used,
    trend,
    isFixedEnabled,
    fixedRate,
    setFixedRate,
    setFixedEnabled,
    lastUpdatedAt,
    autoDisabled,
    clearAutoDisabled,
  };
}
