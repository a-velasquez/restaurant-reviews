import React, { useState } from "react"
import { Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import AddReview from "./components/AddReview"
import Restaurants from "./components/Restaurants"
import RestaurantsList from "./components/RestaurantsList"
import { useUserContext } from "./context/user_context"

function App() {
	const { loginWithRedirect, myUser, logout } = useUserContext()

	return (
		<div>
			<nav className='navbar navbar-expand navbar-dark bg-dark'>
				<a href='/restaurants' className='navbar-brand'>
					Restaurant Reviews
				</a>
				<div className='navbar-nav mr-auto'>
					<li className='nav-item'>
						<Link to={"/restaurants"} className='nav-link'>
							Restaurants
						</Link>
					</li>
					{myUser ? (
						<button
							type='button'
							onClick={() => logout({ returnTo: window.location.origin })}>
							Logout
						</button>
					) : (
						<button type='button' onClick={loginWithRedirect}>
							Login
						</button>
					)}
				</div>
			</nav>

			<div className='container mt-3'>
				<Switch>
					<Route
						exact
						path={["/", "/restaurants"]}
						component={RestaurantsList}
					/>
					<Route
						path='/restaurants/:id/review'
						render={(props) => <AddReview {...props} user={myUser} />}
					/>
					<Route
						path='/restaurants/:id'
						render={(props) => <Restaurants {...props} user={myUser} />}
					/>
				</Switch>
			</div>
		</div>
	)
}

export default App
