import UnpluginTypia from "@ryoppippi/unplugin-typia/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		UnpluginTypia({ tsconfig: "./tsconfig.json" }),
		tailwindcss(),
		sveltekit(),
	],
});
