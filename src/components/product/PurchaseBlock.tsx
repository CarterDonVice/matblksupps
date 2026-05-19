'use client';

import * as React from 'react';
import { ShoppingBag, ShieldCheck } from 'lucide-react';
import { useSelection } from '@/contexts/SelectionContext';
import { useCart } from '@/contexts/CartContext';
import { FlavorSelector } from './FlavorSelector';
import { PurchaseTypeSelector } from './PurchaseTypeSelector';
import { QuantitySelector } from './QuantitySelector';
import { NutritionFacts } from './NutritionFacts';
import { TrustBadges } from './TrustBadges';
import { QuickTestimonial } from './QuickTestimonial';
import { FillerBand } from '@/components/site/FillerBand';
import { tenet } from '@/lib/products';

export function PurchaseBlock() {
  const { flavorId, purchaseType, quantity, unitPrice } = useSelection();
  const { addItem, openCart } = useCart();

  const onAdd = React.useCallback(() => {
    const flavor = tenet.flavors.find((f) => f.id === flavorId);
    if (!flavor) return;
    addItem({
      productId: tenet.id,
      productName: tenet.name,
      productImage: tenet.images.find((src) => !!src) ?? '',
      flavorId,
      flavorName: flavor.name,
      purchaseType,
      unitPrice,
      quantity,
    });
    openCart();
  }, [addItem, openCart, flavorId, purchaseType, quantity, unitPrice]);

  return (
    <div className="space-y-6 lg:space-y-4">
      <FlavorSelector />
      <PurchaseTypeSelector />
      <QuantitySelector />

      <div className="space-y-3 pt-1 lg:pt-0">
        <button
          type="button"
          onClick={onAdd}
          className="group relative w-full h-14 sm:h-15 rounded-xl bg-white text-ink overflow-hidden flex items-center justify-between px-5 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] hover:bg-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-bone shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
        >
          <span className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5" strokeWidth={2.25} />
            <span className="font-condensed text-base font-extrabold tracking-[0.16em] uppercase">
              Add to Cart
            </span>
          </span>
          <span className="font-display text-2xl leading-none tabular-nums">
            ${unitPrice.toFixed(2)}
          </span>
        </button>

        {/* Band 2 — quiet reassurance under the cart button */}
        <FillerBand
          variant="inline-soft"
          text="Fast onset, extended curve, smooth finish."
        />

        <p className="flex items-center gap-2 text-bone-600 text-[12px]">
          <ShieldCheck
            className="h-4 w-4 shrink-0 text-bone"
            strokeWidth={1.75}
          />
          <span>
            <span className="text-bone font-medium">100% Satisfaction Guarantee</span>{' '}
            — Love it or we make it right.
          </span>
        </p>

        <TrustBadges />

        {/* Desktop-only pull quote — fills the right-column space below trust badges */}
        <div className="hidden lg:block">
          <QuickTestimonial />
        </div>

        {/* Mobile-only nutrition facts dropdown */}
        <NutritionFacts variant="dropdown" className="lg:hidden" />
      </div>
    </div>
  );
}
