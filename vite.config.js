import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import fs from 'fs';

const tailwindConfig = require('./tailwind.config.js')

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    }
  },
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
        http: require.resolve('rollup-plugin-node-builtins'),
        path: require.resolve('rollup-plugin-node-builtins'),
        fs: require.resolve('rollup-plugin-node-builtins'),
        os: require.resolve('rollup-plugin-node-builtins'),
        tslib: require.resolve('rollup-plugin-node-builtins'),
        child_process: require.resolve('rollup-plugin-node-builtins'),
        crypto: require.resolve('rollup-plugin-node-builtins'),
        stream: require.resolve('rollup-plugin-node-builtins'),
        https: require.resolve('rollup-plugin-node-builtins'),
        http2: require.resolve('rollup-plugin-node-builtins'),
        process: require.resolve('rollup-plugin-node-builtins'),
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
})
