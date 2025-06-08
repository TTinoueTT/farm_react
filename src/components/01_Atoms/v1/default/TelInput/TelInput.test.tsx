import { TelInput } from "@/components/01_Atoms/v1/default/TelInput/TelInput"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("TelInput Component", () => {
	let inputElement: HTMLElement

	beforeEach(() => {
		render(<TelInput />)
		inputElement = screen.getByRole("textbox")
	})

	test("コンポーネントが正しく描画される", () => {
		expect(inputElement).toBeInTheDocument()
	})

	test("デフォルトのプレースホルダーが表示される", () => {
		expect(inputElement).toHaveAttribute("placeholder", "090-1234-5678")
	})

	test("電話番号が入力可能", async () => {
		const user = userEvent.setup()
		await user.type(inputElement, "09012345678")
		expect(inputElement).toHaveValue("09012345678")
	})

	test("inputModeがnumericに設定されている", () => {
		expect(inputElement).toHaveAttribute("inputMode", "numeric")
	})

	test("pattern属性が正しく設定されている", () => {
		expect(inputElement).toHaveAttribute("pattern", "^[0-9-]+$")
	})
})
