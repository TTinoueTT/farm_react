import {
	TextInput,
	type TextInputProps
} from "@/components/01_Atoms/v1/default/TextInput/TextInput"

export interface TelInputProps extends Omit<TextInputProps, "type"> {
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TelInput: React.FC<TelInputProps> = ({
	value,
	onChange,
	...props
}) => {
	return (
		<TextInput
			type="tel"
			pattern="^[0-9-]+$"
			inputMode="numeric"
			placeholder="090-1234-5678"
			value={value}
			onChange={onChange}
			{...props}
		/>
	)
}
