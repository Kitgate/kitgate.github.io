import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import fs from "node:fs/promises";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		{
			name: "404 copier",
			generateBundle: {
				order: "post",
				async handler(options, bundle) {
					this.emitFile({ 
						type: "asset",
						fileName: "404.html",
						source: "source" in bundle["index.html"] ? bundle["index.html"].source : bundle["index.html"].code
					 })
				},
			},
		},
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
