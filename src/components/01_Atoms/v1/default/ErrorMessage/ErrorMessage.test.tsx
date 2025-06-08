import { ErrorMessage } from "@/components/01_Atoms/v1/default/ErrorMessage/ErrorMessage"
import { render, screen } from "@testing-library/react"

describe("ErrorMessage Component", () => {
	test("エラーメッセージが正しく表示される", () => {
		const errorMessage = "エラーが発生しました"
		render(<ErrorMessage>{errorMessage}</ErrorMessage>)
		expect(screen.getByText(errorMessage)).toBeInTheDocument()
	})

	test("role属性がalertとして設定されている", () => {
		render(<ErrorMessage>エラー</ErrorMessage>)
		expect(screen.getByRole("alert")).toBeInTheDocument()
	})

	test("デフォルトのクラスが適用されている", () => {
		render(<ErrorMessage>エラー</ErrorMessage>)
		const errorElement = screen.getByRole("alert")
		expect(errorElement).toHaveClass("text-red-500", "text-sm", "mt-1")
	})

	test("カスタムクラスが適用される", () => {
		const customClass = "custom-error-class"
		render(<ErrorMessage className={customClass}>エラー</ErrorMessage>)
		expect(screen.getByRole("alert")).toHaveClass(customClass)
	})
})
