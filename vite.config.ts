import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        pdfPreview: path.resolve(__dirname, "src/pages/pdfPreview/index.html"),
        signContract: path.resolve(
          __dirname,
          "src/pages/signContract/index.html"
        ),
        PDFViewer: path.resolve(__dirname, "src/pages/PDFViewer/index.html"),

        usa: path.resolve(
          __dirname,
          "src/pages/immigrateProgramIntro/usa/index.html"
        ),
        canada: path.resolve(
          __dirname,
          "src/pages/immigrateProgramIntro/canada/index.html"
        ),
        CanadaBCSheng: path.resolve(
          __dirname,
          "src/pages/immigrateProjectDetail/CanadaBCSheng/index.html"
        ),
        CanadaKuiSheng: path.resolve(
          __dirname,
          "src/pages/immigrateProjectDetail/CanadaKuiSheng/index.html"
        ),
        CanadaUnion: path.resolve(
          __dirname,
          "src/pages/immigrateProjectDetail/CanadaUnion/index.html"
        ),
        EB1A: path.resolve(
          __dirname,
          "src/pages/immigrateProjectDetail/EB1A/index.html"
        ),
        EB2NIW: path.resolve(
          __dirname,
          "src/pages/immigrateProjectDetail/EB2NIW/index.html"
        ),
        OINPAnSheng: path.resolve(
          __dirname,
          "src/pages/immigrateProjectDetail/OINPAnSheng/index.html"
        ),
        SINPSaSheng: path.resolve(
          __dirname,
          "src/pages/immigrateProjectDetail/SINPSaSheng/index.html"
        ),
        SUVCanadaUnion: path.resolve(
          __dirname,
          "src/pages/immigrateProjectDetail/SUVCanadaUnion/index.html"
        ),
      },
      output: {
        // assetFileNames: "static/css/[name]-[hash].css",
        // chunkFileNames: "static/js/[name]-[hash].js",
        // entryFileNames: "static/js/[name]-[hash].js",
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 10086,
  },
});
