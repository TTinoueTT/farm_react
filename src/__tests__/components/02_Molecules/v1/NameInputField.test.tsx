import { NameInputField } from "@/components/02_Molecules/v1/NameInputField/NameInputField"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("NameInputField Component", () => {
	beforeEach(() => {
		render(<NameInputField id="nameInputTest1" />)
	})

	test("コンポーネントが正しく描画される", () => {
		expect(
			screen.getByRole("textbox", { name: "名前" })
		).toBeInTheDocument()
		expect(screen.getByText("名前")).toBeInTheDocument()
	})

	test("必須マークが表示される", () => {
		expect(screen.getByText("*")).toBeInTheDocument()
	})

	test("エラーメッセージが表示される", async () => {
		const user = userEvent.setup()
		await user.type(
			screen.getByRole("textbox", { name: "名前" }),
			"藤原嵐月花鳥風月御影千尋鏡花水月燦然栄光天翔龍閃煌輝聖瑞煌瞬輝耀鬼"
		)
		expect(
			screen.getByText("名前は32文字以内で入力してください")
		).toBeInTheDocument()
	})

	test("onChangeが呼び出される", async () => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		render(<NameInputField id="nameInputTest2" onChange={onChange} />)
		await user.type(
			screen.getByRole("textbox", { name: "名前" }),
			"山田太郎"
		)
		expect(onChange).toHaveBeenCalledWith("山田太郎")
	})
})
