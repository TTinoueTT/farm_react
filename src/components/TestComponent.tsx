import { useState } from "react"

export const TestComponent = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<h3>TestComponent</h3>
			<p>Count: {count}</p>
			<button
				type="button"
				onClick={() => setCount((count) => count + 1)}
			>
				Increment
			</button>
		</div>
	)
}

// export default TestComponent
