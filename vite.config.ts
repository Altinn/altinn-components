import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [react()],
    build: {
      cssCodeSplit: true,
      lib: {
        entry: ['./lib/index.ts', './lib/css/global.css'],
        name: 'altinn-components',
        formats: ['es'],
      },
      rollupOptions: {
        external: ['./lib/**/*.stories.tsx', '.storybook', '.idea'],
      },
    },
  });
};
