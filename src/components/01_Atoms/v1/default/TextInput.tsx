import { type ChangeEvent, useState } from "react"

export const TextInput = () => {
	const [text, setText] = useState<string>("")

	return (
		<div>
			<input
				type="text"
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setText(e.target.value)
				}
				value={text}
				placeholder="Enter some text"
			/>
			<p>{text}</p>
		</div>
	)
}
