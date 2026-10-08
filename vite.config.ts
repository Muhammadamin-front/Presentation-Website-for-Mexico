import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // VS Code «compilets» kengaytmasi src/*.ts yoniga .js nusxa yozadi; .ts manbasi ustun bo‘lsin
  resolve: { extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx", ".json"] },
});
