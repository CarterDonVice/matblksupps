'use client';

import * as React from 'react';
import Image from 'next/image';
import { X, Minus, Plus, Trash2, Truck, Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { scrollToId } from '@/lib/scroll';

const FREE_SHIPPING_THRESHOLD = 2;

export function CartDrawer() {
  const {
    items,
    itemCount,
    subtotal,
    freeShippingEligible,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
  } = useCart();

  React.useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, closeCart]);

  const itemsNeededForFreeShipping = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - itemCount,
  );

  return (
    <>
      <div
        aria-hidden
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-ink text-bone border-l border-ink-600 shadow-[-8px_0_40px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="px-5 h-14 sm:h-16 flex items-center justify-between border-b border-ink-600 shrink-0">
          <h2 className="font-display text-2xl tracking-[0.04em] text-white">
            Your Cart
            {itemCount > 0 && (
              <span className="ml-2 text-bone-600 text-base tabular-nums">
                ({itemCount})
              </span>
            )}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <EmptyState onClose={closeCart} />
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {/* Free shipping bar */}
              <div className="rounded-xl border border-ink-600 bg-ink-800 p-3 mb-4 flex items-center gap-3">
                {freeShippingEligible ? (
                  <>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-success/15 text-success shrink-0">
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <div>
                      <p className="text-success text-[11px] tracking-[0.16em] uppercase font-semibold">
                        Free shipping unlocked
                      </p>
                      <p className="text-bone text-[12px]">
                        Your order qualifies for free shipping.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 text-bone shrink-0">
                      <Truck className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-bone-600 text-[11px] tracking-[0.16em] uppercase font-semibold">
                        Almost there
                      </p>
                      <p className="text-bone text-[12px]">
                        Add{' '}
                        <span className="text-white font-medium">
                          {itemsNeededForFreeShipping} more
                        </span>{' '}
                        for free shipping.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Line items */}
              <ul className="space-y-3">
                {items.map((item) => {
                  const lineTotal = item.unitPrice * item.quantity;
                  return (
                    <li
                      key={item.id}
                      className="flex gap-3 rounded-xl border border-ink-600 bg-ink-800/60 p-3"
                    >
                      <div className="relative h-20 w-20 shrink-0 rounded-lg bg-ink overflow-hidden">
                        {item.productImage && (
                          <Image
                            src={item.productImage}
                            alt={item.productName}
                            fill
                            sizes="80px"
                            className="object-contain p-1"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="font-condensed text-sm font-extrabold tracking-[0.12em] uppercase text-white truncate">
                              {item.productName}
                            </h3>
                            <p className="text-bone-600 text-[12px] truncate">
                              {item.flavorName} ·{' '}
                              {item.purchaseType === 'subscribe'
                                ? 'Subscribe & Save'
                                : 'One Time'}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.productName} from cart`}
                            className="-m-1 inline-flex h-8 w-8 items-center justify-center rounded-md text-bone-500 hover:text-white hover:bg-ink/60 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" strokeWidth={1.75} />
                          </button>
                        </div>

                        <div className="mt-2 flex items-center justify-between gap-3">
                          <QtyControl
                            value={item.quantity}
                            onChange={(q) => updateQuantity(item.id, q)}
                          />
                          <span className="font-condensed text-base font-bold text-white tabular-nums">
                            ${lineTotal.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-ink-600 px-5 py-4 space-y-3 shrink-0">
              <div className="flex items-baseline justify-between">
                <span className="label-eyebrow">Subtotal</span>
                <span className="font-display text-3xl text-white tabular-nums">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-bone-500 text-[11px]">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                onClick={() => {
                  // TODO: wire Shopify checkout
                  alert('Checkout coming soon. Shopify integration in progress.');
                }}
                className="w-full h-12 rounded-xl bg-white text-ink font-condensed text-sm font-extrabold tracking-[0.16em] uppercase inline-flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] hover:bg-bone active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-bone shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full text-center text-bone-500 hover:text-bone text-xs tracking-[0.16em] uppercase font-semibold transition-colors py-1"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

function QtyControl({
  value,
  onChange,
}: {
  value: number;
  onChange: (q: number) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-lg border border-ink-600 overflow-hidden">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(value - 1)}
        className="inline-flex h-8 w-8 items-center justify-center text-bone hover:text-white hover:bg-ink-700 transition-colors"
      >
        <Minus className="h-3 w-3" strokeWidth={2} />
      </button>
      <span className="w-8 text-center font-display text-base text-white tabular-nums">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(value + 1)}
        className="inline-flex h-8 w-8 items-center justify-center text-bone hover:text-white hover:bg-ink-700 transition-colors"
      >
        <Plus className="h-3 w-3" strokeWidth={2} />
      </button>
    </div>
  );
}

function EmptyState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-4">
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-ink-600 text-bone-500">
        <Truck className="h-7 w-7" strokeWidth={1.5} />
      </span>
      <h3 className="font-display text-3xl text-white tracking-[0.01em]">
        Your cart is empty
      </h3>
      <p className="text-bone-600 text-sm max-w-xs">
        Add a tub of TENET to get started.
      </p>
      <button
        type="button"
        onClick={() => {
          onClose();
          scrollToId('purchase');
        }}
        className="h-12 px-6 rounded-xl bg-white text-ink font-condensed text-sm font-extrabold tracking-[0.16em] uppercase transition-all duration-200 hover:scale-[1.02] hover:bg-bone"
      >
        Shop Now
      </button>
    </div>
  );
}
