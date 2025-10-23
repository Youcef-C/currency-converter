'use client';

import { Card, CardActions, CardContent, CardHeader, IconButton, TextField, Tooltip, Typography, Button } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { UseConversionResult } from '@/hooks/useConversion';
import { UseExchangeRateResult } from '@/hooks/useExchangeRate';
import { formatCurrency } from '@/utils/currency';
import { useMemo } from 'react';

export default function ConverterCard({
  conversion,
  exchange,
  onCommit,
}: {
  conversion: UseConversionResult;
  exchange: UseExchangeRateResult;
  onCommit: () => void;
}) {
  const { from, to, amountIn, setAmountIn, isValid, numericIn, amountOut, invert } = conversion;

  const helper = useMemo(() => {
    return exchange.isFixedEnabled ? 'Conversion avec taux fixe' : 'Conversion avec taux réel';
  }, [exchange.isFixedEnabled]);

  return (
    <Card className="shadow-md">
      <CardHeader title={<span className="font-semibold">Convertisseur</span>} />
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Typography variant="body2" className="text-gray-600">
            De
          </Typography>
          <Typography variant="body2" className="font-medium">
            {from}
          </Typography>
        </div>

        <TextField
          label={`Montant en ${from}`}
          inputMode="decimal"
          placeholder="0.00"
          value={amountIn}
          onChange={(e) => setAmountIn(e.target.value)}
          error={!isValid}
          helperText={!isValid ? 'Veuillez saisir un nombre positif' : helper}
          fullWidth
        />

        <div className="flex items-center justify-between">
          <Typography variant="body2" className="text-gray-600">
            Vers
          </Typography>
          <Typography variant="body2" className="font-medium">
            {to}
          </Typography>
        </div>

        <div aria-live="polite" className="p-3 rounded-xl bg-gray-50 flex items-baseline justify-between">
          <div className="text-sm text-gray-500">Résultat</div>
          <div className="text-xl font-semibold">
            {formatCurrency(amountOut, to)}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Taux utilisé</span>
          <span className="tabular-nums">{exchange.used.toFixed(4)} (EUR→USD)</span>
        </div>
      </CardContent>

      <CardActions className="flex items-center justify-between">
        <Tooltip title="Inverser EUR ↔ USD (la sortie devient l'entrée)">
          <IconButton color="primary" onClick={invert} aria-label="Inverser la conversion">
            <SwapHorizIcon />
          </IconButton>
        </Tooltip>

        <Button
          variant="contained"
          color="primary"
          onClick={onCommit}
          disabled={!isValid || !Number.isFinite(numericIn)}
        >
          Ajouter à l'historique
        </Button>
      </CardActions>
    </Card>
  );
}
