import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const aliases = {
  '@': path.resolve(__dirname, 'src') // Replace 'src' with your actual source directory
};
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases
  }
});