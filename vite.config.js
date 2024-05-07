import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fetching-api2/',
  plugins: [react()],
  /*
  server: {
    port: 3005,
  },
   */ 
  
});
