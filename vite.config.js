import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    target: 'esnext',  // Asegúrate de que esto esté configurado correctamente
    outDir: 'dist',    // El directorio de salida del build
    sourcemap: true,   // Habilita el mapa de fuente si es necesario para depurar
  },
});
