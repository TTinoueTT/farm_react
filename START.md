
## プロジェクトの作成
```bash
npm create vite@latest my-app -- --template react-swc-ts
```

```bash
npm install -D typescript @types/react @types/react-dom @swc/core
```

tsconfig.jsonの設定を変更

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

vite.config.tsの設定を変更

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})
```

.js/.jsx ファイルを .ts/.tsx に拡張子を変更
これで TypeScript + SWC の環境が整います。SWC は Babel の代替として高速なトランスパイルを提供します。
参考：
https://vitejs.dev/guide/
https://swc.rs/docs/configuration/swcrc


## vite の設定
https://ja.vite.dev/config/


## biome の設定
```bash
npm install -D @biomejs/biome
```

設定ファイルの作成
```bash
npx biome init
```
:::info

ローカルマシンに biome コマンドがない場合は、
```bash
brew install biome
```
でパッケージをインストール

biome の設定ファイルは `biome.config.ts` と `biome.json` の2つが作成されます。
:::









