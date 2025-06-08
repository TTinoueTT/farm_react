import type { ReactNode } from "react"

interface ErrorMessageProps {
	children: ReactNode
	id?: string
	className?: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
	children,
	id = "error-message",
	className = "text-red-500 text-sm mt-1"
}) => {
	return (
		<p id={id} className={className} role="alert">
			{children}
		</p>
	)
}
