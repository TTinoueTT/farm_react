import { TextInput } from "@/components/01_Atoms/v1/default/TextInput/TextInput"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("TextInput Component", () => {
	// 前準備（arrange）
	let inputElement: HTMLElement

	beforeEach(() => {
		render(<TextInput value="" onChange={() => {}} />)
		inputElement = screen.getByRole("textbox")
	})

	test("コンポーネントが正しく描画される", () => {
		expect(inputElement).toBeInTheDocument()
	})

	test("ユーザー入力により値が更新される", async () => {
		const user = userEvent.setup()
		await user.type(inputElement, "Vitest Test!")
		expect(inputElement).toHaveValue("Vitest Test!")
	})
})
