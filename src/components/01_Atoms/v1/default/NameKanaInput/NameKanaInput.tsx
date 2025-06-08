import {
	TextInput,
	type TextInputProps
} from "@/components/01_Atoms/v1/default/TextInput/TextInput"

export interface NameKanaInputProps extends Omit<TextInputProps, "type"> {
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const NameKanaInput: React.FC<NameKanaInputProps> = ({
	value,
	onChange,
	...props
}) => {
	return (
		<TextInput
			type="text"
			pattern="^[\u30A0-\u30FF]+$"
			inputMode="text"
			placeholder="ヤマダタロウ"
			minLength={1}
			maxLength={32}
			value={value}
			onChange={onChange}
			{...props}
		/>
	)
}
