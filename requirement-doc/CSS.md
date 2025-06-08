## QA

### css のクラス名がキャメルケースである理由はありますか？

CSS Modules では定義したセレクタ名が JS 側ではオブジェクトのプロパティ名になるから、キャメルケースのほうが dot.アクセスしやすいんだよね。


Label.module.css で
```css
.srOnly { … }
.requiredMark { … }
```

と書くと、JS 側で
```ts
import styles from "./Label.module.css";
console.log(styles.srOnly);      // OK
console.log(styles.requiredMark); // OK
```

もし kebab-case（例：.required-mark）で書くと、デフォルトの Vite（localsConvention: 'camelCaseOnly'）では

```ts
styles.requiredMark // ← camelCase に変換されるけど
styles['required-mark'] // 使えない
```

になってしまう。

つまりハイフン入りをそのまま使いたいなら、vite.config.ts に以下を追加して localsConvention を変える必要がある：

```ts
export default defineConfig({
  css: {
    modules: {
      localsConvention: "dashesOnly" // もしくは "asIs"
    }
  }
});
```

まとめると「CSS Modules は JS 側でプロパティとして参照する都合上、キャメルケースで書くのが標準でラクだから」です