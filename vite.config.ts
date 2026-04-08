import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
      plugins: [
        ['@swc/plugin-styled-components', {
          displayName: true, // Имена компонентов в инспекторе (напр. <Button /> вместо <sc-xyz />)
          ssr: true         // Поддержка серверного рендеринга
        }]
      ]
    }
  )],
  base: ''
})
