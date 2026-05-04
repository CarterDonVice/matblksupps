'use client';

import * as React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useSelection } from '@/contexts/SelectionContext';
import { blackoutDailyDriver } from '@/lib/products';
import { openCouponPopup } from '@/components/marketing/CouponPopup';

export function StickyAddToCart() {
  const { unitPrice, purchaseType, flavorId, bumpCart } = useSelection();
  const flavor = blackoutDailyDriver.flavors.find((f) => f.id === flavorId);

  const onAdd = React.useCallback(() => {
    bumpCart();
    openCouponPopup('add-to-cart');
  }, [bumpCart]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 pointer-events-none">
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.6) 60%, transparent 100%)',
        }}
      />
      <div className="relative container pb-[calc(12px+env(safe-area-inset-bottom))] pt-2 pointer-events-auto">
        <button
          type="button"
          onClick={onAdd}
          className="group relative w-full h-14 sm:h-15 rounded-xl bg-white text-ink overflow-hidden flex items-center justify-between px-5 transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-bone shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
        >
          <span className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5" strokeWidth={2.25} />
            <span className="font-condensed text-base font-extrabold tracking-[0.16em] uppercase">
              Add to Cart
            </span>
          </span>
          <span className="flex items-baseline gap-2">
            <span className="font-display text-2xl leading-none">
              ${unitPrice.toFixed(2)}
            </span>
            {purchaseType === 'subscribe' && (
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase opacity-60">
                /mo
              </span>
            )}
          </span>
        </button>
        <p className="mt-2 text-center text-[10px] tracking-[0.18em] uppercase text-bone-500 truncate">
          {flavor?.name} ·{' '}
          {purchaseType === 'subscribe' ? 'Subscribe & Save' : 'One Time Purchase'}
        </p>
      </div>
    </div>
  );
}
