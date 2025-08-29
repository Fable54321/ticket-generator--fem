import { defineConfig } from 'vite';
import tailwnidcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwnidcss()],
});
