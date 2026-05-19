/**
 * SEO content block for the product detail page. Adds rich descriptive H2s
 * that crawlers can index without changing the existing PDP layout/design.
 * Asterisks (*) reference the FDA disclaimer in the global footer.
 */
export function ProductSEOContent() {
  return (
    <section
      aria-labelledby="product-seo"
      className="bg-ink-800 py-14 sm:py-20 border-t border-ink-600"
    >
      <div className="container max-w-3xl space-y-10 sm:space-y-12">
        <header>
          <p className="label-eyebrow mb-3">The Product</p>
          <h2
            id="product-seo"
            className="font-display text-4xl sm:text-5xl text-white tracking-[0.01em] leading-[0.95]"
          >
            TENET Daily Driver Pre Workout
          </h2>
          <p className="mt-3 font-condensed text-sm sm:text-base font-bold tracking-[0.14em] uppercase text-bone-600">
            Clinically Dosed, Transparent Label, Moderate Stim
          </p>
        </header>

        <p className="text-bone-600 text-[15px] sm:text-base leading-relaxed">
          TENET is a transparent label, moderate stim daily driver pre workout
          built around four research backed ingredients: 6g L-citrulline, 3.2g
          beta-alanine, 600mg Alpha-GPC, and 100mg caffeine anhydrous. Every
          dose is what's used in the actual studies, not a token amount tucked
          behind a proprietary blend. No fillers. The full panel is printed on
          the label, because the lifters we built this for are the ones who
          read it.*
        </p>

        <Detail title="What's in TENET">
          <p>
            TENET contains four research backed ingredients at the doses used
            in published research:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2 text-bone-600">
            <li>6g L-citrulline</li>
            <li>3.2g beta-alanine</li>
            <li>600mg Alpha-GPC</li>
            <li>100mg caffeine anhydrous</li>
          </ul>
          <p className="mt-3">
            Every ingredient and every dose is printed on the supplement panel.
            No proprietary blends. No fillers.
          </p>
        </Detail>

        <Detail title="Why 6g of L-citrulline, not 4g">
          <p>
            L-citrulline supports nitric oxide production, which supports
            healthy blood flow to working muscles and supports muscle pumps
            during training.* The clinical research on citrulline for pumps and
            endurance uses doses in the 6 to 8g range. Many pre workouts cut
            citrulline to 3 to 4g to save formula cost. TENET runs the full 6g.
          </p>
        </Detail>

        <Detail title="Why 3.2g of beta-alanine">
          <p>
            Beta-alanine supports muscular endurance and helps delay muscle
            fatigue during high intensity exercise.* The research dose is 3.2g
            per serving, taken consistently. Beta-alanine works by saturating
            intracellular carnosine over time, so it's the daily dose that
            matters, not a single huge hit. TENET runs the research dose every
            scoop.
          </p>
        </Detail>

        <Detail title="Why 600mg of Alpha-GPC">
          <p>
            Alpha-GPC supports focus during training, supports mental clarity,
            and supports mind muscle connection.* The studies on Alpha-GPC for
            cognitive performance and power output use 600mg. Many pre workouts
            include Alpha-GPC at 150 to 300mg, which is under the dose where
            the research effects appear. TENET runs the full 600mg.
          </p>
        </Detail>

        <Detail title="Why 100mg of caffeine anhydrous, not 300mg">
          <p>
            TENET is a moderate stim daily driver pre workout. 100mg of
            caffeine anhydrous, roughly one cup of coffee, supports energy
            levels and supports alertness during training.* It's paired with
            133mg of Di Caffeine Malate for sustained release as part of
            TENET's DUAL CAFFEINE SYSTEM. This is a deliberate choice.
            High stim formulas at 300 to 400mg of caffeine work for some
            lifters and not for others. TENET is built for the lifter who
            wants clinically dosed performance ingredients without the
            high stim load.
          </p>
        </Detail>

        <Detail title="No proprietary blends. Every ingredient. Every dose.">
          <p>
            A proprietary blend lets a brand list ingredients without listing
            how much of each is in the formula. It almost always means at
            least one of those ingredients is underdosed. TENET has no
            proprietary blends. Every ingredient and every dose is printed on
            the supplement panel. If it's in the formula, it's on the label.
          </p>
        </Detail>

        <Detail title="How TENET compares to other clinically dosed pre workouts">
          <p>
            TENET hits the clinically researched doses across the four
            headline ingredients. That puts it in line with the transparent-
            label pre workouts that don't underdose. Many pre workouts list
            ingredients but cut L-citrulline to 3 to 4g or hide totals behind
            a proprietary blend. TENET runs the full 6g of L-citrulline and
            shows the rest of the panel openly.
          </p>
        </Detail>

        <Detail title="Who TENET is built for">
          <p>
            TENET is built for serious lifters and advanced trainees who read
            the supplement panel before they buy. If you've been looking for a
            pre workout that isn't underdosed, doesn't hide behind a
            proprietary blend, and uses ingredients at the doses they were
            actually researched at, TENET is built for you.
          </p>
        </Detail>

        <Detail title="How and when to take TENET">
          <p>
            Take TENET 20 to 30 minutes before training. Mix one scoop with 8
            to 12oz of cold water.
          </p>
        </Detail>
      </div>
    </section>
  );
}

function Detail({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-condensed text-xl sm:text-2xl font-extrabold tracking-[0.04em] uppercase text-white leading-snug mb-3">
        {title}
      </h3>
      <div className="text-bone-600 text-[15px] sm:text-base leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
