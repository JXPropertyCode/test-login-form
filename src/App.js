import { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
	// usually this should be stored in a server/DB
	const adminUser = {
		email: "admin@admin.com",
		password: "123",
	};

	const [user, setUser] = useState({ name: "", email: "" });
	// catch if the login is correct
	const [error, setError] = useState(false);

	const login = (details) => {
		console.log(details);
		if (
			details.email === adminUser.email &&
			details.password === adminUser.password
		) {
			console.log("Logged In");
			setUser({
				name: details.name,
				email: details.email,
			});
      setError(false)
		} else {
			console.log("Login Details Do Not Match");
      setError(true)
		}
	};

	const logout = () => {
		console.log("Loutout");
		setUser({ name: "", email: "" });
	};

	return (
		<div className="App">
			{/* ternary operator */}
			{user.email !== "" ? (
				<div className="welcome">
					<h2>
						Welcome, <span>{user.name}</span>
					</h2>
					<button onClick={logout}>Logout</button>
				</div>
			) : (
				<LoginForm login={login} error={error} />
			)}
		</div>
	);
}

export default App;
