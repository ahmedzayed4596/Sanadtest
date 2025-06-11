import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import flowbiteReact from "flowbite-react/plugin/vite"
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), flowbiteReact(), tailwindcss()],
  server: {
    host: true, 
    port: 5173, 
  },
})