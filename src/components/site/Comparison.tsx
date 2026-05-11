interface Row {
  label: string;
  tenet: string;
  typical: string;
}

const rows: Row[] = [
  {
    label: 'Clinical doses on every ingredient',
    tenet: 'Yes, every milligram',
    typical: 'Underdosed to cut costs',
  },
  {
    label: 'Pump system',
    tenet: 'DUAL PUMP PATHWAYS (Citrulline + Nitrate)',
    typical: 'Single pathway, often weak dose',
  },
  {
    label: 'Caffeine system',
    tenet: 'DUAL CAFFEINE SYSTEM (sustained)',
    typical: 'Single source (crash risk)',
  },
  {
    label: 'Absorption enhancer',
    tenet: 'Piperine (95%) for bioavailability',
    typical: 'Often missing entirely',
  },
  {
    label: 'Proprietary blends',
    tenet: 'Never',
    typical: 'Common',
  },
  {
    label: 'Fillers like maltodextrin',
    tenet: 'Never',
    typical: 'Common',
  },
  {
    label: 'Label transparency',
    tenet: 'Every milligram disclosed',
    typical: 'Often hidden',
  },
  {
    label: 'Daily use safe',
    tenet: 'Yes at 233mg moderate stim',
    typical: 'Varies',
  },
  {
    label: 'Made in USA',
    tenet: 'Carrollton, TX',
    typical: 'Varies',
  },
  {
    label: 'GMP compliant facility',
    tenet: 'Yes',
    typical: 'Not always',
  },
];

export function Comparison() {
  return (
    <section
      aria-labelledby="whats-different"
      className="bg-ink-800 py-16 sm:py-24 border-y border-ink-600"
    >
      <div className="container max-w-5xl">
        <header className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="label-eyebrow mb-3">Why TENET</p>
          <h2
            id="whats-different"
            className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92] mb-3"
          >
            What's Different
          </h2>
          <p className="text-bone-600 text-[15px] sm:text-base">
            Most pre workouts hide doses behind blends. We don't.
          </p>
        </header>

        {/* Desktop table */}
        <div className="hidden md:block rounded-2xl border border-ink-600 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="bg-ink p-5 label-eyebrow text-bone-600 align-bottom"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="bg-white text-ink p-5 align-bottom"
                >
                  <span className="font-condensed text-lg font-extrabold tracking-[0.16em] uppercase">
                    TENET
                  </span>
                </th>
                <th
                  scope="col"
                  className="bg-ink-700 text-bone-600 p-5 align-bottom"
                >
                  <span className="font-condensed text-sm font-bold tracking-[0.16em] uppercase">
                    Typical Pre Workout
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-700">
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className="bg-ink-800/70 hover:bg-ink-800 transition-colors"
                >
                  <th
                    scope="row"
                    className="p-5 text-bone text-sm font-medium align-top border-r border-ink-700"
                  >
                    {r.label}
                  </th>
                  <td className="p-5 align-top border-r border-ink-700">
                    <p className="text-white font-medium text-sm leading-snug">
                      ✓ {r.tenet}
                    </p>
                  </td>
                  <td className="p-5 align-top">
                    <p className="text-bone-600 text-sm leading-snug">
                      {r.typical}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <ul className="md:hidden space-y-3">
          {rows.map((r, i) => (
            <li
              key={i}
              className="rounded-xl border border-ink-600 bg-ink-800/60 p-4"
            >
              <p className="label-eyebrow mb-3">{r.label}</p>
              <dl className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white text-ink px-3 py-2.5">
                  <dt className="font-condensed text-[10px] font-extrabold tracking-[0.18em] uppercase mb-1">
                    TENET
                  </dt>
                  <dd className="text-[13px] leading-snug font-medium">
                    ✓ {r.tenet}
                  </dd>
                </div>
                <div className="rounded-lg bg-ink-700 px-3 py-2.5">
                  <dt className="font-condensed text-[10px] font-bold tracking-[0.18em] uppercase mb-1 text-bone-600">
                    Typical
                  </dt>
                  <dd className="text-bone-600 text-[13px] leading-snug">
                    {r.typical}
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
