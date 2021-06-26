import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
// the auth file for the login button
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const buttonStyle = {
	color:'#222222',
  fontFamily: 'Fira Sans, sans-serif',
  backgroundColor:'white'
  };

// this is for the login button so its connected with the authentication code
const AuthButton = () => {
	console.log("NAV", Auth.isAuthenticated);

	const [user, dispatch] = useContext(UserContext);
	const history = useHistory();

	return (
		Auth.isAuthenticated ? (
			<button style={buttonStyle} className="btn"
				onClick={() => {
					Auth.signout(() => history.push('/login'))
					dispatch({
						type: "GET_USER",
						payload: {}
					})
				}}>
				<div id="loading-btn">  
				<div className='btnStyle'><span> Logout</span></div>
	</div>
			</button>
		) : (
				<Link style={buttonStyle}
					className="btn"
					to="/login"
				><div id="loading-btn">  
				<div className='btnStyle'><span> My account</span></div>
	</div>
				</Link>
			)
	)
}

export default AuthButton;