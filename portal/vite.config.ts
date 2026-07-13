import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Anvil (a Bear dependency) statically imports 'vue' for its Vue
      // composables entry; the portal is React-only, so stub it out.
      vue: resolve(__dirname, 'src/shims/vue-stub.ts'),
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@constants': resolve(__dirname, 'src/constants'),
      '@constants/': resolve(__dirname, 'src/constants/'),
      '@types': resolve(__dirname, 'src/types'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@utils/': resolve(__dirname, 'src/utils/'),
      '@pages': resolve(__dirname, 'src/pages'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});

