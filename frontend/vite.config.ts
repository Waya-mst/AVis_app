import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // モードごとの .env ファイルをロード
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Vite にプラグインを登録
    plugins: [
      react(), // React 17+ JSX 自動変換対応
    ],

    optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-force-graph-2d',
      'react-slider'
    ],
    // 必要なら exclude: [...]
    },


    // import のパスエイリアスを設定
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      // 拡張子の省略を許可
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    },

    // dev サーバ設定
    server: {
      port: Number(env.VITE_PORT) || 3000,
      open: true,
      // API プロキシ設定（/api へのリクエストをバックエンドに転送）
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL || 'http://localhost:3001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
        },
      },
    },

    // ビルド設定
    build: {
      outDir: 'dist',
      sourcemap: mode !== 'production',
      rollupOptions: {
        // 例えば大きいライブラリを外部化して CDN から読み込む場合など
        external: [],
      },
    },

    // 環境変数の定義をそのまま使えるように expose
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});
