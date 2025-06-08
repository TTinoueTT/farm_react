import { NameKanaInput } from "@/components/01_Atoms/v1/default/NameKanaInput/NameKanaInput"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("NameKanaInput Component", () => {
	let inputElement: HTMLElement

	beforeEach(() => {
		render(<NameKanaInput />)
		inputElement = screen.getByRole("textbox")
	})

	test("コンポーネントが正しく描画される", () => {
		expect(inputElement).toBeInTheDocument()
	})

	test("デフォルトのプレースホルダーが表示される", () => {
		expect(inputElement).toHaveAttribute("placeholder", "ヤマダタロウ")
	})

	test("カタカナのみが入力可能", async () => {
		const user = userEvent.setup()
		await user.type(inputElement, "ヤマダタロウ")
		expect(inputElement).toHaveValue("ヤマダタロウ")
	})

	test("最小文字数が1文字", () => {
		expect(inputElement).toHaveAttribute("minLength", "1")
	})

	test("最大文字数が32文字", () => {
		expect(inputElement).toHaveAttribute("maxLength", "32")
	})
})
