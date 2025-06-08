import type React from "react"
import type { LabelHTMLAttributes } from "react"
import styles from "./Label.module.css"

type Variant = "default" | "error" | "required"

export interface LabelProps
	extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor"> {
	htmlFor?: string
	variant?: Variant
	visuallyHidden?: boolean //見た目は非表示、スクリーンリーダーには表示される
}

// children: テキスト or アイコン＋テキスト
export const Label: React.FC<LabelProps> = ({
	htmlFor,
	children,
	variant = "default",
	visuallyHidden = false,
	className = "",
	...rest
}) => {
	const cls = [
		styles.label,
		styles[variant],
		visuallyHidden && styles.srOnly,
		className
	]
		.filter(Boolean)
		.join(" ")

	return (
		<label htmlFor={htmlFor} className={cls} {...rest}>
			{children}
			{/* 必須項目の場合はアスタリスクを表示 */}
			{variant === "required" && (
				<span className={styles.requiredMark}>*</span>
			)}
		</label>
	)
}
