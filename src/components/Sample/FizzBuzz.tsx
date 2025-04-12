import { useState } from "react"

export const FizzBuzz = () => {
	// const [inputVal, setInputVal] = useState("")
	const [output, setOutput] = useState("")
	const convertFizzBuzz = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		// setInputVal(value)
		if (value === "" || Number(value) < 1 || Number(value) > 100) {
			setOutput("1~100 の数字を入力してください。")
		} else {
			setOutput(value)
		}
	}
	return (
		<div>
			<h3>FizzBuzz</h3>
			<p>
				入力：
				<input
					type="number"
					data-testid="input"
					// value={inputVal}
					onChange={convertFizzBuzz}
				/>
			</p>
			<p>
				出力：<span data-testid="output">{output}</span>
			</p>
		</div>
	)
}
