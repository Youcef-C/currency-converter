'use client';

import { Card, CardContent, CardHeader, Divider, FormControlLabel, Switch, TextField, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useMemo, useState } from 'react';

import { UseExchangeRateResult } from '@/hooks/useExchangeRate';
import clsx from 'clsx';

export default function ExchangeRateCard({ exchange }: { exchange: UseExchangeRateResult }) {
  const { real, used, trend, isFixedEnabled, fixedRate, setFixedRate, setFixedEnabled, lastUpdatedAt } = exchange;

  const [fixedInput, setFixedInput] = useState<string>(fixedRate != null ? String(fixedRate) : '');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // maintenir la saisie alignée si fixedRate change de l'extérieur
    if (fixedRate != null) setFixedInput(String(fixedRate));
  }, [fixedRate]);

  const TrendIcon = useMemo(() => {
    if (trend === 'up') return <ArrowUpwardIcon className="text-green-600" aria-label="Taux en hausse" />;
    if (trend === 'down') return <ArrowDownwardIcon className="text-red-600" aria-label="Taux en baisse" />;
    return <RemoveIcon className="text-gray-400" aria-label="Taux stable" />;
  }, [trend]);

  const helper = isFixedEnabled
    ? 'Taux fixe actif: utilisez le champ pour définir une valeur personnalisée'
    : 'Taux réel en temps réel (actualisé toutes les 3 secondes)';

  return (
    <>
      <Card className="shadow-md">
        <CardHeader
          title={<span className="font-semibold">Taux EUR→USD</span>}
          subheader={
            <span aria-live="polite">
              Dernière mise à jour: {isMounted ? new Date(lastUpdatedAt).toLocaleTimeString() : '...'}
            </span>
          }
        />
        <Divider />
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tooltip title={`Tendance: ${trend}`}>
                <span aria-hidden className="inline-flex">{TrendIcon}</span>
              </Tooltip>
              <div className="text-sm text-gray-600">Taux actuel</div>
            </div>
            <div className={clsx('text-lg font-semibold tabular-nums', trend === 'up' ? 'text-green-700' : trend === 'down' ? 'text-red-700' : 'text-gray-900', 'animate-highlight')}>
              {real.toFixed(4)}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">Taux utilisé</div>
            <div className="text-lg font-semibold tabular-nums">{used.toFixed(4)}</div>
          </div>

          <FormControlLabel
            control={
              <Switch
                checked={isFixedEnabled}
                onChange={(e) => setFixedEnabled(e.target.checked)}
                inputProps={{ 'aria-label': 'Activer le taux fixe' }}
                color="primary"
              />
            }
            label="Activer le taux fixe"
          />

          <TextField
            size="small"
            type="number"
            inputMode="decimal"
            label="Taux fixe (EUR→USD)"
            placeholder="1.1000"
            value={fixedInput}
            onChange={(e) => setFixedInput(e.target.value)}
            onBlur={() => {
              const n = Number(fixedInput);
              if (Number.isFinite(n) && n > 0) {
                setFixedRate(n);
              }
            }}
            disabled={!isFixedEnabled}
            helperText={helper}
            fullWidth
          />
        </CardContent>
      </Card>
    </>
  );
}
