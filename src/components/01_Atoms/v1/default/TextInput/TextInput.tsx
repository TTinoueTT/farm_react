import { useState } from "react"

export interface TextInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	id?: string
	name?: string
	type?: "text" | "tel" | "email" | "url"
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	required?: boolean
	pattern?: string
	inputMode?:
		| "none"
		| "text"
		| "tel"
		| "url"
		| "email"
		| "numeric"
		| "decimal"
		| "search"
		| undefined
	minLength?: number
	maxLength?: number
}

export const TextInput: React.FC<TextInputProps> = ({
	id = "textInput",
	name = "textInput",
	type = "text",
	value: externalValue = "",
	onChange: externalOnChange = () => {},
	placeholder = "",
	required = false,
	pattern = "",
	inputMode = "text",
	minLength = 0,
	maxLength = 100,
	...rest
}) => {
	const [internalValue, setInternalValue] = useState(externalValue)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value
		setInternalValue(newValue)
		externalOnChange(e)
	}

	return (
		<input
			id={id}
			name={name}
			type={type}
			value={internalValue}
			onChange={handleChange}
			placeholder={placeholder}
			required={required}
			pattern={pattern}
			inputMode={inputMode}
			minLength={minLength}
			maxLength={maxLength}
			{...rest}
			// className="border rounded p-2 w-full"
		/>
	)
}
