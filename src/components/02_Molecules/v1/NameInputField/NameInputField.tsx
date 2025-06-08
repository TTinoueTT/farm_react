import { ErrorMessage } from "@/components/01_Atoms/v1/default/ErrorMessage/ErrorMessage"
import { Label } from "@/components/01_Atoms/v1/default/Label/Label"
import { NameInput } from "@/components/01_Atoms/v1/default/NameInput/NameInput"
import { useCallback, useState } from "react"
import React from "react"

interface NameInputFieldProps {
	id?: string
	label?: string
	required?: boolean
	// onChange?: (value: string) => void
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const NameInputField = React.memo(
	({
		id = `name-input-${Math.random()}`,
		label = "名前",
		required = true
		// onChange
	}: NameInputFieldProps) => {
		const [name, setName] = useState("")
		const [error, setError] = useState("")

		const handleChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				const value = e.target.value
				setName(value)
				validateName(value)
				onChange?.(e)
			},
			[onChange]
		)

		const validateName = (value: string) => {
			if (value.length === 0) {
				setError("名前を入力してください")
			} else if (value.length > 32) {
				setError("名前は32文字以内で入力してください")
			} else {
				setError("")
			}
		}

		return (
			<div className="form-group">
				<Label htmlFor={id} variant={required ? "required" : undefined}>
					{label}
				</Label>
				<NameInput id={id} value={name} onChange={handleChange} />
				{error && <ErrorMessage>{error}</ErrorMessage>}
			</div>
		)
	}
)

export default NameInputField
