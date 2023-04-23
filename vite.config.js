import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),    
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest:{
        "short_name": "Speechboard",
        "name": "Speechboard",
        "icons": [
          {
            "src": "/images/speechboard_icon_1000.svg",
            "type": "image/svg+xml",
            "sizes": "1000x1000"
          },
          {
            "src": "/images/speechboard_icon_192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "/images/speechboard_icon_512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
        "dir": "ltr",
        "start_url": "/speechboard/",
        "background_color": "#3367D6",
        "display": "standalone",
        "scope": "/speechboard/",
        "theme_color": "#3367D6",    
        "description": "Buttons that utters words when clicking on them"  ,
        "display_override": [
          "standalone",
          "fullscreen",
          "minimal-ui"
        ] 
      },
      devOptions: {
        enabled: true
    } })],
  base: '/speechboard/'
  
})
