/// <reference types="vitest" />
import path from 'node:path';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';

const envPrefix = ['API_', 'VITE_'];

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_APP_TITLE } = loadEnv(mode, __dirname, envPrefix);

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
      }),
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            title: VITE_APP_TITLE,
          },
        },
      }),
      svgr({
        svgrOptions: {
          ref: true,
          icon: true,
        },
      }),
    ],

    server: {
      port: 8710,
      host: true,
    },
  };
});
