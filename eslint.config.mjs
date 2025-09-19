import antfu from '@antfu/eslint-config';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default antfu(
  {
    react: true,
    stylistic: {
      semi: true,
    },
    plugins: {
      '@tanstack/query': pluginQuery,
    },
    rules: {
      '@tanstack/query/exhaustive-deps': 'error',
    },
    ignores: [
      'scripts',
      'dist',
      'tsconfig.json',
      'tsconfig.app.json',
      'tsconfig.node.json',
    ],
  },
);
