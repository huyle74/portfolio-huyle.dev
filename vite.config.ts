import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "url";

const config = defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    devtools(),
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),

    tanstackStart({
      prerender: {
        autoSubfolderIndex: true,
        enabled: true,
        onSuccess: ({ page }) => {
          console.log(`Rendered ${page.path}!`);
        },
      },
    }),
    viteReact(),
  ],
});

export default config;
