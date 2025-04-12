import { FizzBuzz } from "@/components/Sample/FizzBuzz"
import { fireEvent, render } from "@testing-library/react"
// 要件
describe("Fizz Buzz 問題の答えを表示する", () => {
	// 仕様
	it.todo("1 から 100 までの数字を入力する")
	it.todo('入力エリアに 3 の倍数を入力したら、出力エリアに "Fizz" を表示する')
	it.todo('入力エリアに 5 の倍数を入力したら、出力エリアに "Buzz" を表示する')
	it.todo(
		'ただし、入力エリアに 3 と 5 の倍数を入力したら、出力エリアに "Fizz Buzz" を表示する'
	)
	describe("それ以外の数字を入力したら、そのまま出力エリアに表示する", () => {
		// テストケース
		it("1 を入力したら、出力エリアに '1' を表示する", () => {
			// 準備（arrange）
			const { getByTestId } = render(<FizzBuzz />)
			const inputElement = getByTestId("input") // `data-testid="input"` の要素を取得
			const outputElement = getByTestId("output") // `data-testid="output"` の要素を取得
			// 実行(act)
			fireEvent.change(inputElement, { target: { value: "1" } })
			// 検証(assertion)
			expect(outputElement.textContent).toBe("1")
		})
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
		it.todo("4 を入力したら、出力エリアに '4' を表示する")
		it.todo("7 を入力したら、出力エリアに '7' を表示する")
		it.todo("11 を入力したら、出力エリアに '11' を表示する")
	})
})
