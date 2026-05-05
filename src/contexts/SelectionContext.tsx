'use client';

import * as React from 'react';
import { tenet } from '@/lib/products';
import type { FlavorId, PurchaseTypeId } from '@/lib/types';

interface SelectionContextValue {
  flavorId: FlavorId;
  purchaseType: PurchaseTypeId;
  quantity: number;
  setFlavor: (id: FlavorId) => void;
  setPurchaseType: (t: PurchaseTypeId) => void;
  setQuantity: (q: number | ((prev: number) => number)) => void;
  unitPrice: number;
  totalPrice: number;
  cartCount: number;
  bumpCart: (amount?: number) => void;
}

const SelectionContext = React.createContext<SelectionContextValue | null>(null);

export function SelectionProvider({ children }: { children: React.ReactNode }) {
  const [flavorId, setFlavorId] = React.useState<FlavorId>('midnight-limeade');
  const [purchaseType, setPurchaseTypeState] =
    React.useState<PurchaseTypeId>('subscribe');
  const [quantity, setQuantityState] = React.useState(1);
  const [cartCount, setCartCount] = React.useState(0);

  const unitPrice =
    purchaseType === 'subscribe'
      ? tenet.subscribePrice
      : tenet.price;
  const totalPrice = unitPrice * quantity;

  const setQuantity = React.useCallback((q: number | ((prev: number) => number)) => {
    setQuantityState((prev) => {
      const next = typeof q === 'function' ? q(prev) : q;
      return Math.max(1, Math.min(99, next));
    });
  }, []);

  const bumpCart = React.useCallback((amount: number = 1) => {
    setCartCount((c) => c + amount);
  }, []);

  const value: SelectionContextValue = {
    flavorId,
    purchaseType,
    quantity,
    setFlavor: setFlavorId,
    setPurchaseType: setPurchaseTypeState,
    setQuantity,
    unitPrice,
    totalPrice,
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
