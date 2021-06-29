import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import PublicRouteTwo from "./pages/PublicRouteTwo";
import PublicRouteThree from "./pages/PublicRouteThree";
import ProtectedRoute from "./pages/ProtectedRoute";
import ProtectedRouteTwo from "./pages/ProtectedRouteTwo";
import { UserProvider } from "./utils/UserContext";
import "./App.css"
import Footer from './components/Footer'


const warningPhrase={
	marginTop:'100px',
	marginBottom:'480px',
	color:'brown',
	padding:'50px',
	boxShadow: 'gray 5px 5px 10px'

	
}

//everything that appears to the user, the pages/components, and the routes
const AuthExample = () => (
	<UserProvider>
		<Router>
			<div>
				<Nav className="App-header" />
				<Container>
					<Switch>
						<Route path="/home" component={PublicRoute} />
						<Route path="/blog" component={PublicRouteTwo} />
						<Route path="/film" component={PublicRouteThree} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<PrivateRoute path="/planner" component={ProtectedRoute} />
						<PrivateRoute path="/recipes" component={ProtectedRouteTwo} />

						{/* <Route component={NoMatch} /> */}
					</Switch>
					
				</Container>
				<Footer/>	
			</div>
			
		</Router>
	</UserProvider>
)




// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Router>
		<div>

			<Route {...rest} render={props => (

				Auth.isAuthenticated ? (
					<Component {...props} />
				) : (
						<div  className="container">
							<div style={warningPhrase} className="alert alert-danger text-center" role="alert">
								The following page is private for our registered users.
					     </div>
							
							<Redirect to={{
								pathname: '/login',
								state: { from: props.location }
							}} />
						</div>
					)
			)} />
		</div>
	</Router>
)








export default AuthExample

