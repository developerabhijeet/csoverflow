import React from 'react';
import signup2 from './signup2.jpg';
const Signup = () => {
	return (
		<div className="row white">
			<form className="form col s6">
				<div className="row">
					<div className="input-field col s8">
						<input placeholder="Enter Your Full Name" id="name" type="text" className="validate black-text" />
						<label htmlFor="name active">Name</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s8">
						<input placeholder="Minimum 6 Digits" id="password" type="password" className="validate black-text" />
						<label htmlFor="password">Password</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s8">
						<input placeholder="Enter Your valid EmailID" id="email" type="email" className="validate black-text" />
						<label htmlFor="email">Email</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field col s8">
						<textarea id="bio" className="materialize-textarea black-text"></textarea>
						<label htmlFor="bio">Bio</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field col s8">
						<input placeholder="Enter Your Current Job Position" id="jobtitle" type="text" className="validate black-text" />
						<label htmlFor="jobtitle">Job Title</label>
					</div>
				</div>


				<div className="row">
					<div className="input-field col s8">
						<input placeholder="Enter Technologies You work on" id="domain" type="text" className="validate black-text" />
						<label htmlFor="domain black">Technology Domain</label>
					</div>
				</div>


				<div className="row">
					<div className="input-field col s8">
						<select className="black-text">
							<option className="black-text" value="" disabled selected>Choose your option</option>
							<option className="black-text" id="male" value="Male">Male</option>
							<option className="black-text" id="female" value="Female">Female</option>
							<option className="black-text" id="others" value="Others">Others</option>
						</select>
						<label htmlFor="gender">Gender</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s8">
						<input id="dob" type="date" className="validate black-text" />
						<label htmlFor="dob">Date of Birth</label>
					</div>
				</div>
				<button className="btn btn-center orange darken-2">SIGNUP</button>
			</form>
			<div>
				
			<img src={signup2} alt="signup-image" className="signup-image" />
			</div>
		</div>

	)
}

export default Signup;
