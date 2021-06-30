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
import BlogOne from './pages/BlogOne'
import BlogTwo from './pages/BlogTwo'
import BlogThree from './pages/BlogThree'
import BlogFour from './pages/BlogFour'



const warningPhrase={
	marginTop:'100px',
	marginBottom:'480px',
	color:'brown',
	padding:'50px',
	boxShadow: 'gray 5px 5px 10px',
	width:'600px',
	height:'130px',
	fontSize:'15px'
}
const quote={
	fontSize:'17px',
	fontFamily: 'Benne, serif',
	display:'flex',
	justifyContent:'center',	
  }
  const quoter={
	fontStyle:"italic",
	color:"teal",
	marginTop:'10px',

  }

//everything that appears to the user, the pages/components, and the routes
const AuthExample = () => (
	<UserProvider>
		<Router>
		
			<div>
				<Nav className="App-header" />
				<Container>
					<Switch>
				/*this route redirects localhost:3000 direclty to page of choice*/
					<Route path='/' exact={true} component={PublicRoute}/>
						<Route path="/home" component={PublicRoute} />
						<Route path="/blog" component={PublicRouteTwo} />
						<Route path="/film" component={PublicRouteThree} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<PrivateRoute path="/planner" component={ProtectedRoute} />
						<PrivateRoute path="/recipes" component={ProtectedRouteTwo} />
						<Route path="/vegan-changed-my-life" component={BlogOne} />
						<Route path="/small-steps-big-benefits" component={BlogTwo} />
						<Route path="/focus-on-eating-habits" component={BlogThree} />
						<Route path="/diet-to-healthy-habits" component={BlogFour} />

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
<div  className="loginContainer">
<div classNameloginContainer2 >
<div style={warningPhrase} className="alert alert-danger text-center" role="alert">
	The following page is private for our registered users.
</div>
	</div>

<Redirect to={{pathname: '/login', state: { from: props.location }}} />
							
						

<div style ={quote} className='daQuotes'>
	<div className='loginContainer2'>
        <div className='quoteColumn2'>
		“The secret of health for both mind and body is not to mourn
		for the past, not to worry about the future, or not to anticipate 
		troubles, but to live the present moment wisely and earnestly.”


      <p style={quoter} className='quoteColumn'>– Siddartha Guatama Buddha</p>
      </div> 
	  </div>
      </div>
						</div>
					)
			)} />
		</div>
	</Router>
)








export default AuthExample

