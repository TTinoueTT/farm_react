import { useState } from "react"

export const FizzBuzz = () => {
	const [num, setNum] = useState("")

	const convertFizzBuzz = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNum(e.target.value)
	}
	return (
		<div>
			<p>
				入力:
				<input
					type="number"
					data-testid="input"
					onChange={convertFizzBuzz}
				/>
			</p>
			<p>
				出力:<span data-testid="output">{num}</span>
			</p>
		</div>
	)
}
