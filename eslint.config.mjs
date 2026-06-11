import coreWebVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  ...coreWebVitals,
  {
    ignores: ['.next/**', 'node_modules/**', 'scripts/**', 'next-env.d.ts'],
  },
  {
    rules: {
      // Copy is authored with literal apostrophes/quotes throughout; escaping
      // them adds noise without changing rendered output.
      'react/no-unescaped-entities': 'off',
      // The contexts hydrate client-only state (localStorage) inside effects,
      // which is the correct SSR-safe pattern; this new rule flags it anyway.
      'react-hooks/set-state-in-effect': 'off',
    },
  },
];

export default eslintConfig;
