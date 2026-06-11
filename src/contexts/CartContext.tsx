'use client';

import * as React from 'react';
import type { CartItem } from '@/lib/types';

const STORAGE_KEY = 'tenet:cart';
/** Item count at which an order ships free. Single source of truth. */
export const FREE_SHIPPING_THRESHOLD = 2;

interface CartValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  freeShippingEligible: boolean;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (input: Omit<CartItem, 'id'>) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

const CartContext = React.createContext<CartValue | null>(null);

function makeLineId(input: Pick<CartItem, 'productId' | 'flavorId' | 'purchaseType'>) {
  return `${input.productId}-${input.flavorId}-${input.purchaseType}`;
}

const MAX_QUANTITY = 99;

/** Shape check for persisted cart lines so corrupted storage can't render NaN prices. */
function isCartItem(value: unknown): value is CartItem {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.productId === 'string' &&
    typeof v.productName === 'string' &&
    typeof v.productImage === 'string' &&
    typeof v.flavorId === 'string' &&
    typeof v.flavorName === 'string' &&
    (v.purchaseType === 'subscribe' || v.purchaseType === 'one-time') &&
    typeof v.unitPrice === 'number' &&
    Number.isFinite(v.unitPrice) &&
    typeof v.quantity === 'number' &&
    Number.isInteger(v.quantity) &&
    v.quantity > 0
  );
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const hydrated = React.useRef(false);

  // Hydrate from localStorage
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed.filter(isCartItem));
      }
    } catch {
      /* noop */
    }
    hydrated.current = true;
  }, []);

  // Persist
  React.useEffect(() => {
    if (!hydrated.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* noop */
    }
  }, [items]);

  const itemCount = React.useMemo(
    () => items.reduce((n, item) => n + item.quantity, 0),
    [items],
  );

  const subtotal = React.useMemo(
    () => items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [items],
  );

  const freeShippingEligible = itemCount >= FREE_SHIPPING_THRESHOLD;

  const addItem = React.useCallback((input: Omit<CartItem, 'id'>) => {
    const id = makeLineId(input);
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + input.quantity } : i,
        );
      }
      return [...prev, { ...input, id }];
    });
  }, []);

  const updateQuantity = React.useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id
            ? { ...i, quantity: Math.max(0, Math.min(MAX_QUANTITY, quantity)) }
            : i,
        )
        .filter((i) => i.quantity > 0),
    );
  }, []);

  const removeItem = React.useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clear = React.useCallback(() => setItems([]), []);

  const value: CartValue = {
    items,
    itemCount,
    subtotal,
    freeShippingEligible,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    updateQuantity,
    removeItem,
    clear,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
