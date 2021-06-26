import React, { useRef } from 'react'




// class RegisterForm extends React.Component {
function RegisterForm({ onRegister }) {
	// refs
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
		<h1>Create Account</h1>
			<form 
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onRegister({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div style={signupCard} className="form-group">
					<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
					<button style={registerBtn} className="btn btn btn-primary" type='submit'>SIGN UP</button>
				</div>
			</form>
		
		</div>
		</div>
	)
}


export default RegisterForm