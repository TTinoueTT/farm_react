import {
	TextInput,
	type TextInputProps
} from "@/components/01_Atoms/v1/default/TextInput/TextInput"

export interface NameInputProps extends Omit<TextInputProps, "type"> {
	value?: string
	// onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	// onChange?: (value: string) => void
}

export const NameInput: React.FC<NameInputProps> = ({
	value,
	// onChange,
	...props
}) => (
	<TextInput
		type="text"
		pattern="^[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]+$"
		inputMode="text"
		placeholder="山田太郎"
		minLength={1}
		maxLength={32}
		value={value}
		// onChange={onChange}
		// onChange={(e) => onChange?.(e.target.value)}
		{...props}
	/>
)
