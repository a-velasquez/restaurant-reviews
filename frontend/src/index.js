import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react"
import { UserProvider } from "./context/user_context"

ReactDOM.render(
	<Auth0Provider
		domain="dev-8z5t2mgw.us.auth0.com"
		clientId="nNtNm4p0XYk1j7ILeUMHYAexFU21qlZ0"
		redirectUri={window.location.origin}
		cacheLocation="localstorage"
	>
		<UserProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</UserProvider>
	</Auth0Provider>,
	document.getElementById("root")
)
