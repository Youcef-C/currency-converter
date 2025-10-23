'use client';

import { Card, CardContent, CardHeader, Divider, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, Typography, Collapse } from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { ConversionHistoryItem } from '@/types';
import { formatCurrency } from '@/utils/currency';
import { useState, useEffect } from 'react';

export default function HistoryCard({
  items,
  onClear,
}: {
  items: ConversionHistoryItem[];
  onClear: () => void;
}) {
  const [expanded, setExpanded] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Card className="shadow-md">
      <CardHeader
        title={<span className="font-semibold">Historique (5 dernières)</span>}
        action={
          <Tooltip title="Vider l'historique">
            <span>
              <IconButton onClick={onClear} aria-label="Vider l'historique" disabled={items.length === 0}>
                <DeleteSweepIcon />
              </IconButton>
            </span>
          </Tooltip>
        }
      />
      <Divider />
      <CardContent>
        {/* Mobile: cartes empilées */}
        <div className="md:hidden space-y-3">
          {items.map((it) => (
            <Collapse key={it.id} in={expanded} appear timeout={300}>
              <div className="p-3 rounded-xl border border-gray-200 animate-enter">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Taux réel</span>
                  <span className="tabular-nums">{it.realRate.toFixed(4)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Taux utilisé</span>
                  <span className="tabular-nums">{it.usedRate.toFixed(4)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Entrée</span>
                  <span>{formatCurrency(it.inputValue, it.fromCurrency)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Sortie</span>
                  <span>{formatCurrency(it.outputValue, it.toCurrency)}</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {isMounted ? new Date(it.timestamp).toLocaleTimeString() : '...'}
                </div>
              </div>
            </Collapse>
          ))}
          {items.length === 0 && (
            <Typography variant="body2" className="text-gray-500">
              Aucune conversion enregistrée pour le moment.
            </Typography>
          )}
        </div>

        {/* Desktop: tableau */}
        <div className="hidden md:block overflow-x-auto">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Taux réel</TableCell>
                <TableCell>Taux utilisé</TableCell>
                <TableCell>Entrée</TableCell>
                <TableCell>Sortie</TableCell>
                <TableCell>Horodatage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((it) => (
                <TableRow key={it.id} className="animate-enter">
                  <TableCell className="tabular-nums">{it.realRate.toFixed(4)}</TableCell>
                  <TableCell className="tabular-nums">{it.usedRate.toFixed(4)}</TableCell>
                  <TableCell>{formatCurrency(it.inputValue, it.fromCurrency)}</TableCell>
                  <TableCell>{formatCurrency(it.outputValue, it.toCurrency)}</TableCell>
                  <TableCell className="whitespace-nowrap">
                    {isMounted ? new Date(it.timestamp).toLocaleTimeString() : '...'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {items.length === 0 && (
            <Typography variant="body2" className="text-gray-500 mt-2">
              Aucune conversion enregistrée pour le moment.
            </Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
