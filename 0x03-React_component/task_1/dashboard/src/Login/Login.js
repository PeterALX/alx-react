import './Login.css'
export default function Login() {
	return (
		<>
			<p>Login to access the full dashboard</p>
			<label>
				Email: <input type="text" />
			</label>
			<label>
				Password: <input type="password" />
			</label>
			<button>OK</button>
		</>
	)
}
