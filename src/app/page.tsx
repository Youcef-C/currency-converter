'use client';

import { Container } from '@mui/material';
import ExchangeRateCard from '@/components/ExchangeRateCard';
import ConverterCard from '@/components/ConverterCard';
import HistoryCard from '@/components/HistoryCard';
import { useExchangeRate } from '@/hooks/useExchangeRate';
import { useConversion } from '@/hooks/useConversion';
import { useHistory } from '@/hooks/useHistory';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const exchange = useExchangeRate();
  const conversion = useConversion('EUR', exchange.used);
  const history = useHistory(5);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCommit = () => {
    if (!Number.isFinite(conversion.numericIn) || conversion.numericIn < 0) return;
    history.add({
      realRate: exchange.real,
      usedRate: exchange.used,
      fromCurrency: conversion.from,
      toCurrency: conversion.to,
      inputValue: conversion.numericIn,
      outputValue: conversion.amountOut,
    });
  };

  if (!isMounted) {
    return (
      <Container maxWidth="lg" className="px-4 py-6 md:py-10 space-y-4 md:space-y-6">
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold">Convertisseur EUR/USD</h1>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className="px-4 py-6 md:py-10 space-y-4 md:space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl md:text-3xl font-bold">Convertisseur EUR/USD</h1>
        <p className="text-gray-600">Taux actualisé toutes les 3 secondes, option de taux fixe et historique des conversions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-4">
          <ExchangeRateCard exchange={exchange} />
          <ConverterCard conversion={conversion} exchange={exchange} onCommit={handleCommit} />
        </div>
        <div>
          <HistoryCard items={history.items} onClear={history.clear} />
        </div>
      </div>
    </Container>
  );
}
