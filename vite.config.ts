import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	base: "./", 
	root: ".", // index.html があるディレクトリ
	plugins: [react()],
	publicDir: resolve(__dirname, "public"),
	build: {
		// distフォルダに出力
		outDir: resolve(__dirname, "dist"),
		// 存在しないときはフォルダを作成する
		emptyOutDir: true,
		copyPublicDir: true,
		rollupOptions: {
			// entry pointがあるindex.htmlのパス
			input: {
				"": resolve(__dirname, "index.html"),
			},
			// bundle.jsを差し替えする
			output: {
				entryFileNames: "assets/bundle.js",
			},
		},
	},
	server: {
		port: 3010, // 希望するポート番号
		strictPort: true, // 指定したポートが使用中の場合にエラーにする（falseなら別のポートを使用）
		host: true,
	},
});