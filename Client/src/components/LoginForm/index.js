import React, { useRef } from 'react'
import Card from "../Card"

function LoginForm({ onLogin }) {

	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	const registerBtn={
		borderRadius:'7%',
		backgroundColor:'#e5d3b3',
		fontSize:'12px',
		padding:'5px',
		float:'right',
		border:'#e5d3b3 1px solid ',
	}
	const signupCard={
		marginTop:'20px'
	}

	return (
		<div className='carderM'>
		<div className="registerCard">
		<h1>Login</h1>
		<p>Welcome Back!</p>
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onLogin({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div style={signupCard} className="form-group">
					<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
					<button style={registerBtn} className="btn btn-success" type='submit'>
						Submit
						</button>
						
				</div>
			</form>
			</div>
		</div>
	)
}


export default LoginForm