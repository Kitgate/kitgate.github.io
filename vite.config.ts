import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import fs from "node:fs/promises";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		{
			name: "404 copier",
			async generateBundle(options, bundle) {
				this.emitFile({
					type: "asset",
					fileName: "404.html",
					source: await fs.readFile(
						new URL("./index.html", import.meta.url)
					),
				});
			},
		},
		vue(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	server: {
		port: 3621,
	},
	css: {
		postcss: {
			plugins: [autoprefixer],
		},
	},
});
