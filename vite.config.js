import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  // server: {
  //   host: true, // enables network access
  //   port: 5173, // you can change the port if needed
  // },
})
