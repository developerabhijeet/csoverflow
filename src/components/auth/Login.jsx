import React from 'react';
import signup1 from './signup1.jpg';
const Login = () => {
	return (
		<div className="row white">
			<form className="form col s6">
				<div className="row">
					<div className="input-field col s8">
						<input placeholder="Enter Your valid EmailID" id="email" type="email" className="validate black-text" />
						<label htmlFor="email">Email</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s8">
						<input placeholder="Minimum 6 Digits" id="password" type="password" className="validate black-text" />
						<label htmlFor="password">Password</label>
					</div>
				</div>


				<button className="btn btn-center orange darken-2">LOGIN</button>
			</form>
			<div>
				
			<img src={signup1} alt="login" className="login-image" />
			</div>
		</div>

	)
}

export default Login;
