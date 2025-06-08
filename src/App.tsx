// import { TelInput } from "@/components/01_Atoms/v1/default/TelInput/TelInput"
// import { Label } from "@/components/01_Atoms/v1/default/Label/Label"
import { TextInput } from "@/components/01_Atoms/v1/default/TextInput/TextInput"
import { TestComponent } from "@/components/TestComponent"
import viteLogo from "/vite.svg"
import reactLogo from "./assets/react.svg"
import "./App.css"
// import { FizzBuzz } from "@/components/00_Sample/FizzBuzz"
// import { ErrorMessage } from "@/components/01_Atoms/v1/default/ErrorMessage/ErrorMessage"
// import { NameInput } from "@/components/01_Atoms/v1/default/NameInput/NameInput"

function App() {
	// const [count, setCount] = useState(0)
	// const [name, setName] = useState("")
	// const [error, setError] = useState("")

	// const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const value = e.target.value
	// 	setName(value)

	// 	if (value.length === 0) {
	// 		setError("名前を入力してください")
	// 	} else if (value.length > 10) {
	// 		setError("名前は10文字以内で入力してください")
	// 	} else {
	// 		setError("")
	// 	}
	// }

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>

			<h1>Vite + React</h1>
			<TestComponent />

			<div className="form-group">
				{/* <Label htmlFor="nameInput" variant="required">
					名前
				</Label>
				<NameInput
					id="nameInput"
					value={name}
					onChange={handleNameChange}
				/>
				{error && <ErrorMessage>{error}</ErrorMessage>} */}
				<div className="form-group">
					<TextInput
						id="textInput"
						name="textInput"
						placeholder="テキストを入力"
						required
					/>
					{/* <TelInput
						id="telInput"
						name="telInput"
						placeholder="電話番号を入力"
						required
					/> */}
				</div>
			</div>

			{/* <FizzBuzz /> */}
			{/* <div className="card">
				<button
					onClick={() => setCount((count) => count + 1)}
					type="button"
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div> */}
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
