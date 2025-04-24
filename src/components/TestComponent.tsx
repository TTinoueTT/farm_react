import { useState } from "react"

export const TestComponent = () => {
	const [count, setCount] = useState(0)
	// React では、count と setCount のことをステート変数とステート関数と呼びます
	const onClickChange = () => {
		setCount((count) => count + 1)
		setCount((count) => count * 2)
	}

	return (
		<div>
			<h3>TestComponent</h3>
			<p>Count: {count}</p>
			<button type="button" onClick={onClickChange}>
				1 足した後に 2 倍する
			</button>
		</div>
	)
}

// export default TestComponent
