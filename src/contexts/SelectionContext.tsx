'use client';

import * as React from 'react';
import { blackoutDailyDriver } from '@/lib/products';
import type { FlavorId, PurchaseTypeId } from '@/lib/types';

interface SelectionContextValue {
  flavorId: FlavorId;
  purchaseType: PurchaseTypeId;
  setFlavor: (id: FlavorId) => void;
  setPurchaseType: (t: PurchaseTypeId) => void;
  unitPrice: number;
  cartCount: number;
  bumpCart: () => void;
}

const SelectionContext = React.createContext<SelectionContextValue | null>(null);

export function SelectionProvider({ children }: { children: React.ReactNode }) {
  const [flavorId, setFlavorId] = React.useState<FlavorId>('midnight-limeade');
  const [purchaseType, setPurchaseTypeState] =
    React.useState<PurchaseTypeId>('subscribe');
  const [cartCount, setCartCount] = React.useState(0);

  const unitPrice =
    purchaseType === 'subscribe'
      ? blackoutDailyDriver.subscribePrice
      : blackoutDailyDriver.price;

  const bumpCart = React.useCallback(() => {
    setCartCount((c) => c + 1);
  }, []);

  const value: SelectionContextValue = {
    flavorId,
    purchaseType,
    setFlavor: setFlavorId,
    setPurchaseType: setPurchaseTypeState,
    unitPrice,
    cartCount,
    bumpCart,
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const ctx = React.useContext(SelectionContext);
  if (!ctx) throw new Error('useSelection must be used inside SelectionProvider');
  return ctx;
}
