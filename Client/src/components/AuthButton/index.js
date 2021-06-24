import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
// the auth file for the login button
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";


// this is for the login button so its connected with the authentication code
const AuthButton = () => {
	console.log("NAV", Auth.isAuthenticated);

	const [user, dispatch] = useContext(UserContext);
	const history = useHistory();

	return (
		Auth.isAuthenticated ? (
			<button className="btn btn-danger"
				onClick={() => {
					Auth.signout(() => history.push('/login'))
					dispatch({
						type: "GET_USER",
						payload: {}
					})
				}}>
				Logout
			</button>
		) : (
				<Link
					className="btn btn-success"
					to="/login"
				>Login
				</Link>
			)
	)
}

export default AuthButton;