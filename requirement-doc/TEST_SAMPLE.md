# TDD 開発のサンプル

## 開発の流れ

1. テストを書く
2. テストに失敗する処理の実装
3. テストを実行する(Red)
4. テストに成功する処理の実装
5. テストを実行する(Green)
6. リファクタリング

### テストが動くかの確認

components/Input/TextInput.test.tsx と components/Input/TextInput.tsx で動作確認はできています。

### テストファイルの配置を `__tests__` にする理由

テストファイルは `__tests__` に配置することで、テストファイルを識別しやすくなります。

動作確認含めて、__tests__ フォルダー内のテストファイルを実行してみます。
```tsx: src/__tests__/FizzBuzz.test.tsx
it.todo("FizzBuzz テスト")
```

vitest のコマンドでテストを実行します。

```bash
npm run test src/__tests__/FizzBuzz.test.tsx 

> farm_react@0.0.0 test
> vitest src/__tests__/FizzBuzz.test.tsx


 DEV  v3.1.1 /Users/farm_react

 ↓ src/__tests__/FizzBuzz.test.tsx (1 test | 1 skipped)
   ↓ FizzBuzz テスト

 Test Files  1 skipped (1)
      Tests  1 todo (1)
   Start at  12:46:42
   Duration  337ms (transform 12ms, setup 77ms, collect 3ms, tests 0ms, environment 135ms, prepare 32ms)

 PASS  Waiting for file changes...
       press h to show help, press q to quit
```
vitest がテストファイルの変更を検知して、テストを実行します。
`it.todo` はテストのプレースホルダーなので、実装はされず、実際にはテストが実行されていません。
結果として、テストファイルは「スキップされた（もしくは未実装の状態）」と表示され、1件の `todo` テストが登録された状態になっています。
また、テスト実行後はウォッチモードになり、`「Waiting for file changes...」`と表示され、ファイルの変更を待っています。

## テストの種類

フロントエンドにおけるテストは以下に分類されます。

| テストの種類 | 説明 |
| ------------ | ---- |
| 単体テスト | 単体テストは、関数やメソッドが正しく動作するかを確認するテストです。 |
| 結合テスト | 結合テストは、複数の関数やメソッドが正しく連携して動作するかを確認するテストです。 |
| システムテスト | システムテストは、システム全体が正しく動作するかを確認するテストです。 |
| スナップショットテスト | スナップショットテストは、UIのスナップショットを撮り、それが正しいかを確認するテストです。 |
| インテグレーションテスト | インテグレーションテストは、複数のシステムが正しく連携して動作するかを確認するテストです。 |
| エンドツーエンドテスト | エンドツーエンドテストは、システム全体が正しく動作するかを確認するテストです。 |

コンポーネント単体のテストでは、個々の関数だけでなく、UIのレンダリングや内部状態、イベントハンドリングなど複数の要素が連携して動作することを検証します。


## Fizz Buzz 要件

### 要件

1. 1 から 100 までの数字を入力する
2. 3 の倍数の場合は Fizz と出力する
3. 5 の倍数の場合は Buzz と出力する
4. 3 と 5 の倍数の場合は Fizz Buzz と出力する
5. それ以外の数字を入力したら、そのまま出力エリアに表示する

### テストコード
この要件をテストコードに実行します。まずはスキップするテストを作成します。
```ts
// 要件
describe("Fizz Buzz 問題の答えを表示する", () => {
	// 仕様
	it.todo("1 から 100 までの数字を入力する")
	it.todo('入力エリアに 3 の倍数を入力したら、出力エリアに "Fizz" を表示する')
	it.todo('入力エリアに 5 の倍数を入力したら、出力エリアに "Buzz" を表示する')
	it.todo(
		'ただし、入力エリアに 3 と 5 の倍数を入力したら、出力エリアに "Fizz Buzz" を表示する'
	)
	it.todo("それ以外の数字を入力したら、そのまま出力エリアに表示する")
})
```
vitest がテストファイルの検知をして、テスト実行されていれば OK です。

```bash
npm run test src/__tests__/FizzBuzz.test.tsx

 ↓ src/__tests__/FizzBuzz.test.tsx (5 tests | 5 skipped)
   ↓ Fizz Buzz 問題の答えを表示する > 1 から 100 までの数字を入力する
   ↓ Fizz Buzz 問題の答えを表示する > 入力エリアに 3 の倍数を入力したら、出力エリアに "Fizz" を表示する
   ↓ Fizz Buzz 問題の答えを表示する > 入力エリアに 5 の倍数を入力したら、出力エリアに "Buzz" を表示する
   ↓ Fizz Buzz 問題の答えを表示する > ただし、入力エリアに 3 と 5 の倍数を入力したら、出力エリアに "Fizz Buzz" を表示する
   ↓ Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する

 Test Files  1 skipped (1)
      Tests  5 todo (5)
   Start at  12:53:49
   Duration  32ms

 PASS  Waiting for file changes...
```

テストを書く順番は、テスト容易性が高くて、重要度も高いものから書いていきます。

- テスト容易性が高い
  - テストが簡単に書ける、または初期段階で実装しやすい部分。
- 重要度が高い
  - アプリケーションのコアな機能、または不具合が発生すると大きな影響を与える部分。

つまり、まずは実装に直接影響する重要なロジックを確実にカバーできるよう、テストしやすい部分からテストを作成し、徐々に他の部分のテストを追加していくというアプローチを示しています。

"それ以外の数字を入力したら、そのまま出力エリアに表示する" を describe で囲むと、テストケースが増えていくので、テストケースを分けます。
```ts
describe("それ以外の数字を入力したら、そのまま出力エリアに表示する", () => {
    // テストケース
    it.todo("1 を入力したら、出力エリアに '1' を表示する")
    it.todo("2 を入力したら、出力エリアに '2' を表示する")
    it.todo("4 を入力したら、出力エリアに '4' を表示する")
    it.todo("7 を入力したら、出力エリアに '7' を表示する")
    it.todo("11 を入力したら、出力エリアに '11' を表示する")
})
```

テストの assertion を書いていきます。
```ts
it("1 を入力したら、出力エリアに '1' を表示する", () => {
    // テストケースの assertion
    expect(1).toBe(1)
})
```

### テストの実行

ユニットテストの場合、シンプルに関数の実行になります。その関数の戻り値が測定され、検証されます。
しかし、UI を伴うテストは、**実行は入力エリアに数字を入力する**ことになります。

そして、戻り値に相当するものが出力エリアに表示される文字列です。これを測定し、検証します。その上でアサーションを書き直します。

```ts
it("1 を入力したら、出力エリアに '1' を表示する", () => {
	// 実行(act)
	fireEvent.change(inputElement, { target: { value: "1" } })
	// 検証(assertion)
	expect(1).toBe(1)
})
```

ここからテスト対象となる実装ファイルを用意します。

```tsx
export const FizzBuzz = () => {
	return (
		<div>
			<div></div>
		</div>
	)
}
```

この状態で、テストファイルに入力エリアと出力エリアの要素を取得する処理を追加します。

```tsx
it("1 を入力したら、出力エリアに '1' を表示する", () => {
	// 準備（arrange）
	const { getByTestId } = render(<FizzBuzz />)
	const inputElement = getByTestId("input") // `data-testid="input"` の要素を取得
	const outputElement = getByTestId("output") // `data-testid="output"` の要素を取得
	// 実行(act)
	fireEvent.change(inputElement, { target: { value: "1" } })
	// 検証(assertion)
	expect(outputElement.textContent).toBe('1')
})
```

このテストを実行すると、テストが失敗します。

```bash
 RERUN  src/components/Sample/FizzBuzz.tsx x11 
        Filename pattern: src/__tests__/FizzBuzz.test.tsx

 ❯ src/__tests__/FizzBuzz.test.tsx (9 tests | 1 failed | 8 skipped) 18ms
   ↓ Fizz Buzz 問題の答えを表示する > 1 から 100 までの数字を入力する
   ↓ Fizz Buzz 問題の答えを表示する > 入力エリアに 3 の倍数を入力したら、出力エリアに "Fizz" を表示する
   ↓ Fizz Buzz 問題の答えを表示する > 入力エリアに 5 の倍数を入力したら、出力エリアに "Buzz" を表示する
   ↓ Fizz Buzz 問題の答えを表示する > ただし、入力エリアに 3 と 5 の倍数を入力したら、出力エリアに "Fizz Buzz" を表示する
   × Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 1 を入力したら、出力エリアに '1' を表示する 17ms
     → Unable to find an element by: [data-testid="input"]

Ignored nodes: comments, script, style
<body>
  <div>
    <div>
      <div />
    </div>
  </div>
</body>
   ↓ Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 2 を入力したら、出力エリアに '2' を表示する
   ↓ Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 4 を入力したら、出力エリアに '4' を表示する
   ↓ Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 7 を入力したら、出力エリアに '7' を表示する
   ↓ Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 11 を入力したら、出力エリアに '11' を表示する

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/__tests__/FizzBuzz.test.tsx > Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 1 を入力したら、出力エリアに '1' を表示する
TestingLibraryElementError: Unable to find an element by: [data-testid="input"]

Ignored nodes: comments, script, style
<body>
  <div>
    <div>
      <div />
    </div>
  </div>
</body>
 ❯ Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 ❯ getByTestId node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 ❯ src/__tests__/FizzBuzz.test.tsx:17:25
     15|    // 準備（arrange）
     16|    const { getByTestId } = render(<FizzBuzz />)
     17|    const inputElement = getByTestId("input") // `data-testid="input"` の要素を取得
       |                         ^
     18|    const outputElement = getByTestId("output") // `data-testid="output"` の要素を取得
     19|    // 実行(act)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed (1)
      Tests  1 failed | 8 todo (9)
   Start at  13:34:40
   Duration  194ms

 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit
```

これはステータス Red ですが、想定したとおりの失敗のため、このまま進めます。
次は、テストに成功する処理の実装を行います。重要なのはテストに失敗し、それを成功させるということです。

テストの失敗から、必要なことは
- 入力エリアと出力エリアの要素を用意をする
- 出力エリアに 「1」 を表示する

これを実装します。

```html
<div>
	<p>
		入力:
		<input type="number" data-testid="input" />
	</p>
	<p>
		出力:<span data-testid="output">1</span>
	</p>
</div>
```
これで、テストを実行するとテストが成功します。

```bash
✓ Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 1 を入力したら、出力エリアに '1' を表示する 20ms

...
 Test Files  1 passed (1)
      Tests  1 passed | 8 todo (9)
...
```

### 三角測量のテストを書く
テストは無事に成功しましたが、これは仮実装による成功です。

ここから、実際の要求に近づけていきます。同じ仕様に対して、もう一つのテストケースを追加していくことを三角測量のテストといいます。

```ts
it.todo("2 を入力したら、出力エリアに '2' を表示する")
```
つまり、このテストをクリアするために、動的な入力値に対するテストを書き実装していきます。

```ts
it("2 を入力したら、出力エリアに '2' を表示する", () => {
	// 準備（arrange）
	const { getByTestId } = render(<FizzBuzz />)
	const inputElement = getByTestId("input") // `data-testid="input"` の要素を取得
	const outputElement = getByTestId("output") // `data-testid="output"` の要素を取得
	// 実行(act)
	fireEvent.change(inputElement, { target: { value: "2" } })
	// 検証(assertion)
	expect(outputElement.textContent).toBe("2")
})
```

このテストを実行すると、テストが失敗します。

```bash
 RERUN  src/__tests__/FizzBuzz.test.tsx x15 
        Filename pattern: src/__tests__/FizzBuzz.test.tsx

 ❯ src/__tests__/FizzBuzz.test.tsx (9 tests | 1 failed | 7 skipped) 25ms
   ↓ Fizz Buzz 問題の答えを表示する > 1 から 100 までの数字を入力する
   ↓ Fizz Buzz 問題の答えを表示する > 入力エリアに 3 の倍数を入力したら、出力エリアに "Fizz" を表示する
   ↓ Fizz Buzz 問題の答えを表示する > 入力エリアに 5 の倍数を入力したら、出力エリアに "Buzz" を表示する
   ↓ Fizz Buzz 問題の答えを表示する > ただし、入力エリアに 3 と 5 の倍数を入力したら、出力エリアに "Fizz Buzz" を表示する
   ✓ Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 1 を入力したら、出力エリアに '1' を表示する 15ms
   × Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 2 を入力したら、出力エリアに '2' を表示する 9ms
     → expected '1' to be '2' // Object.is equality
   ↓ Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 4 を入力したら、出力エリアに '4' を表示する
   ↓ Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 7 を入力したら、出力エリアに '7' を表示する
   ↓ Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 11 を入力したら、出力エリアに '11' を表示する

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/__tests__/FizzBuzz.test.tsx > Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 2 を入力したら、出力エリアに '2' を表示する
AssertionError: expected '1' to be '2' // Object.is equality

Expected: "2"
Received: "1"

 ❯ src/__tests__/FizzBuzz.test.tsx:32:38
     30|    fireEvent.change(inputElement, { target: { value: "2" } })
     31|    // 検証(assertion)
     32|    expect(outputElement.textContent).toBe("2")
       |                                      ^
     33|   })
     34|   it.todo("4 を入力したら、出力エリアに '4' を表示する")

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed (1)
      Tests  1 failed | 1 passed | 7 todo (9)
   Start at  15:04:50
   Duration  192ms

 FAIL  Tests failed. Watching for file changes...
```

再び、Red になったため、正しい実装をして、テストを成功させましょう。

```tsx
const [num, setNum] = useState("")

const convertFizzBuzz = (e: React.ChangeEvent<HTMLInputElement>) => {
	setNum(e.target.value)
}
return (
	<div>
		<p>
			入力:
			<input
				type="text"
				data-testid="input"
				onChange={convertFizzBuzz}
			/>
		</p>
		<p>
			出力:<span data-testid="output">{num}</span>
		</p>
	</div>
)
```

これで、テストが成功します。

```bash
   ✓ Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 1 を入力したら、出力エリアに '1' を表示する 24ms
   ✓ Fizz Buzz 問題の答えを表示する > それ以外の数字を入力したら、そのまま出力エリアに表示する > 2 を入力したら、出力エリアに '2' を表示する 4ms
```

これで、ステータスは Green になりました。

:::warning

実際に正しい実装になっているかは分かりません。これはあくまでテストが通る実装であることを確認できただけだからです。

しかし、仕様書をベースとしたテストコードに対して実装を書くことで、テストコードが仕様を満たしていることを確認できます。**テストを成功させるためのテストではなく、テストを成功させるための実装**を書いていることが重要です。

テストコードを変更することは仕様を変更することです。つまり、テストに失敗するからといって、実装のコードを変えてはいけません。
:::


### リファクタリング

実装のリファクタリングをしていきます。一般的にリファクタリングというと、外部からみた動作を変えずに内部の構造を整理することです。
しかし、**TDD におけるリファクタリングでは、成功しているテストが成功するまま**で、実装のコードを書き換えることを指します。

リファクタリングにはメリットともにリスクが伴います。それは、現在動作しているものが動かなくなる可能性です。
**テストが成功し続けているうちは、その動作は保証**されます。

これにより、安全性を得ることができ、大胆かつ積極的にリファクタリングすることができます。

> FizzBuzz のリファクタリングを行います。

```tsx
<input
	type="number"  // text ではなく number であるべき
	data-testid="input"
	onChange={convertFizzBuzz}
/>
```

まだ、Green のままで、実装をリファクタリングすることができた。
テストコードのリファクタリングを行います。

```ts
const { getByTestId } = render(<FizzBuzz />)
const inputElement = getByTestId("input")
const outputElement = getByTestId("output")
```

の部分が重複しているので、beforeEach で各テストの実行前に毎回実行するようにします。


```ts
// 前準備（arrange）
let inputElement: HTMLElement
let outputElement: HTMLElement
beforeEach(() => {
	const { getByTestId } = render(<FizzBuzz />)
	inputElement = getByTestId("input")
	outputElement = getByTestId("output")
})

// describe("それ以外の数字を入力したら、そのまま出力エリアに表示する", の直前に書く
```

変わらず、テストが成功したままです。

### 二つ目の仕様のテストを書く

次は "1 から 100 までの数字を入力する" をテストしましょう。

```tsx
describe("1 から 100 までの数字を入力する", () => {
	// テストケース
	it("無効な数字（例:0）を入力した場合、出力エリアにも '1~100 の数字を入力してください。' と表示される", () => {
		// 実行(act)
		fireEvent.change(inputElement, { target: { value: "0" } })
		// 検証(assertion)
		console.log(outputElement.textContent)
		expect(outputElement.textContent).toBe(
			"1~100 の数字を入力してください。"
		)
	})
	it("無効な数字（例:101）を入力した場合、出力エリアにも '1~100 の数字を入力してください。' と表示される", () => {
		// 実行(act)
		fireEvent.change(inputElement, { target: { value: "101" } })
		// 検証(assertion)
		expect(outputElement.textContent).toBe(
			"1~100 の数字を入力してください。"
		)
	})
	it("有効な数字(例:50)を入力した場合、バリデーションメッセージがクリアされ、出力エリアに '50' を表示する", () => {
		// 実行(act)
		fireEvent.change(inputElement, { target: { value: "50" } })
		// 検証(assertion)
		expect(outputElement.textContent).toBe("50")
	})
})
```
