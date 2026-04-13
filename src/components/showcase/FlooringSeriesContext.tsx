'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import type { FlooringSeriesId } from '@/lib/flooring-series';

type FlooringSeriesContextValue = {
  activeSeriesId: FlooringSeriesId;
  setActiveSeriesId: (seriesId: FlooringSeriesId) => void;
};

const FlooringSeriesContext = createContext<FlooringSeriesContextValue | null>(null);

type FlooringSeriesProviderProps = {
  initialSeriesId: FlooringSeriesId;
  children: ReactNode;
};

export function FlooringSeriesProvider({
  initialSeriesId,
  children,
}: FlooringSeriesProviderProps) {
  const [activeSeriesId, setActiveSeriesId] = useState(initialSeriesId);

  useEffect(() => {
    setActiveSeriesId(initialSeriesId);
  }, [initialSeriesId]);

  return (
    <FlooringSeriesContext.Provider value={{ activeSeriesId, setActiveSeriesId }}>
      {children}
    </FlooringSeriesContext.Provider>
  );
}

export function useFlooringSeries() {
  return useContext(FlooringSeriesContext);
}
