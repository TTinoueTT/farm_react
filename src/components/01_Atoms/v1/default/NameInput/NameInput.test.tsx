import { NameInput } from "@/components/01_Atoms/v1/default/NameInput/NameInput"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("NameInput Component", () => {
	let inputElement: HTMLElement

	beforeEach(() => {
		render(<NameInput />)
		inputElement = screen.getByRole("textbox")
	})

	test("コンポーネントが正しく描画される", () => {
		expect(inputElement).toBeInTheDocument()
	})

	test("デフォルトのプレースホルダーが表示される", () => {
		expect(inputElement).toHaveAttribute("placeholder", "山田太郎")
	})

	test("漢字、カタカナ、ひらがなが入力可能", async () => {
		const user = userEvent.setup()
		await user.type(inputElement, "山田タロウやまだ")
		expect(inputElement).toHaveValue("山田タロウやまだ")
	})

	test("最小文字数が1文字", () => {
		expect(inputElement).toHaveAttribute("minLength", "1")
	})

	test("最大文字数が32文字", () => {
		expect(inputElement).toHaveAttribute("maxLength", "32")
	})
})
