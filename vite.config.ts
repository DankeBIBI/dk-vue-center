import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueTsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
function resolvePath(dir: string) {
	return resolve(__dirname, ".", dir);
}
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueTsx()],
	server: {
		port: 8080,
		host: "0.0.0.0",
	},
	resolve: {
		alias: {
			"@": resolvePath("src"),
		},
	},
});
