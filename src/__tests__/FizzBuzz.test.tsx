import { FizzBuzz } from "@/components/Sample/FizzBuzz"
import { fireEvent, render } from "@testing-library/react"
// 要件
describe("Fizz Buzz 問題の答えを表示する", () => {
	// 仕様
	// 前準備（arrange）
	let inputElement: HTMLElement
	let outputElement: HTMLElement
	beforeEach(() => {
		const { getByTestId } = render(<FizzBuzz />)
		inputElement = getByTestId("input")
		outputElement = getByTestId("output")
	})
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
	it.todo('入力エリアに 3 の倍数を入力したら、出力エリアに "Fizz" を表示する')
	it.todo('入力エリアに 5 の倍数を入力したら、出力エリアに "Buzz" を表示する')
	it.todo(
		'ただし、入力エリアに 3 と 5 の倍数を入力したら、出力エリアに "Fizz Buzz" を表示する'
	)

	describe("それ以外の数字を入力したら、そのまま出力エリアに表示する", () => {
		// テストケース
		it("1 を入力したら、出力エリアに '1' を表示する", () => {
			// 実行(act)
			fireEvent.change(inputElement, { target: { value: "1" } })
			// 検証(assertion)
			expect(outputElement.textContent).toBe("1")
		})
		it("2 を入力したら、出力エリアに '2' を表示する", () => {
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
