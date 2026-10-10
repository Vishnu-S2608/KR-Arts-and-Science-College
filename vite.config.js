import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "public",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        department: resolve(__dirname, "department.html"),
        events: resolve(__dirname, "events.html"),
        clubs: resolve(__dirname, "clubs.html"),
        contact: resolve(__dirname, "contact.html"),
        apply: resolve(__dirname, "apply.html"),
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
