import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import babel from '@rollup/plugin-babel'

export default defineConfig({
  plugins: [
    vue(),
    babel({
      include: './src/**/*.{js,ts}',
      babelHelpers: 'bundled',
      extensions: ['.js', '.ts', '.tsx'],
      presets: ['@babel/preset-env', '@babel/preset-typescript']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})