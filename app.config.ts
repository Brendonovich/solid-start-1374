import { defineConfig } from '@solidjs/start/config';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  ssr: false,
  vite: {
    plugins: [
      AutoImport({
        resolvers: [IconsResolver({ prefix: 'Icon', extension: 'jsx' })],
        dts: './src/auto-imports.d.ts',
      }),
      Icons({ compiler: 'solid' }),
    ],
  },
});
