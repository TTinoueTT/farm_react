import { Label } from "@/components/01_Atoms/v1/default/Label/Label"
import { render, screen } from "@testing-library/react"

describe("Label Component", () => {
	test("children と htmlFor 属性が正しく反映される", () => {
		render(<Label htmlFor="test-id">Test Label</Label>)
		const label = screen.getByText("Test Label")
		expect(label).toBeInTheDocument() // ラベルが存在するか
		expect(label).toHaveAttribute("for", "test-id") // htmlFor 属性が正しいか
	})

	test("variant=required のときアスタリスクが表示される", () => {
		render(<Label variant="required">Required</Label>)
		expect(screen.getByText("*")).toBeInTheDocument()
	})

	test("visuallyHidden=true のとき .srOnly クラスが付与される", () => {
		const { container } = render(<Label visuallyHidden>Hidden</Label>)
		expect(container.firstChild).toHaveAttribute(
			"class",
			expect.stringMatching(/srOnly/)
		)
	})
})
