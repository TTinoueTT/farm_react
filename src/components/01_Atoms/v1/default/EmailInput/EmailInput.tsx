import {
	TextInput,
	type TextInputProps
} from "@/components/01_Atoms/v1/default/TextInput/TextInput"

export interface EmailInputProps extends Omit<TextInputProps, "type"> {
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const EmailInput: React.FC<EmailInputProps> = ({
	value,
	onChange,
	...props
}) => (
	<TextInput
		type="email"
		pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
		inputMode="email"
		value={value}
		onChange={onChange}
		{...props}
	/>
)
