import React,{Component} from 'react';
import signup2 from './signup2.jpg';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import classnames from 'classnames';
import { registerUser } from '../../actions/authActions';
import { PropTypes } from 'prop-types';
class Signup extends Component{
	constructor(){
		super();
		this.state={
			name:"",
			email:"",
			password:"",
			bio:"",
			jobtitle:"",
			techdomain:"",
			errors:{}
		};
	}
	componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
	componentWillReceiveProps(nextProps){
		if(nextProps.errors){
			this.setState({
				errors:nextProps.errors
			});
		}
	}
	onChange = e=>{
		this.setState({[e.target.id]:e.target.value});
	};
	onSubmit = e =>{
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			bio: this.state.bio,
			jobtitle: this.state.jobtitle,
			techdomain: this.state.techdomain,
		};
		this.props.registerUser(newUser,this.props.history);
	};
	render(){
		const {errors} = this.state;
		return (
		<div className="row white">
			<form className="form col s6" onSubmit={this.onSubmit}>
				<div className="row">
					<div className="input-field col s8">
						<input placeholder="Enter Your Full Name"
						id="name" type="text" 
						className="validate black-text"
						onChange = {this.onChange}
						value={this.state.name}
						error={errors.name} 
						className={classnames("",{invalid:errors.name})}/>
						<label htmlFor="name active">Name</label>
						<span className="red-text">{errors.name}</span>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s8">
						<input placeholder="Minimum 6 Digits" 
						id="password" type="password" 
						className="validate black-text"
						onChange = {this.onChange}
						value={this.state.password}
						error={errors.password} 
						className={classnames("",{invalid:errors.password})}/>
						<label htmlFor="password">Password</label>

						<span className="red-text">{errors.password}</span>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s8">
						<input placeholder="Enter Your valid EmailID"
						 id="email" type="email" 
						 className="validate black-text"
						 onChange = {this.onChange}
						 value={this.state.email}
						 error={errors.email} 
						 className={classnames("",{invalid:errors.email})}/>
						<label htmlFor="email">Email</label>
						<span className="red-text">{errors.email}</span>

					</div>
				</div>

				<div className="row">
					<div className="input-field col s8">
						<textarea id="bio" 
						className="materialize-textarea black-text"
						onChange = {this.onChange}
						value={this.state.bio}
						error={errors.bio}
						className={classnames("",{invalid:errors.bio})} ></textarea>
						<label htmlFor="bio">Bio</label>

						<span className="red-text">{errors.bio}</span>
					</div>
				</div>

				<div className="row">
					<div className="input-field col s8">
						<input placeholder="Enter Your Current Job Position"
						id="jobtitle" type="text"
						className="validate black-text"
						onChange = {this.onChange}
						value={this.state.jobtitle}
						error={errors.jobtitle}
						className={classnames("",{invalid:errors.jobtitle})} />
						<label htmlFor="jobtitle">Job Title</label>

						<span className="red-text">{errors.jobtitle}</span>
					</div>
				</div>


				<div className="row">
					<div className="input-field col s8">
						<input placeholder="Enter Technologies You work on"
						id="techdomain" type="text"
						className="validate black-text" 
						onChange = {this.onChange}
						value={this.state.techdomain}
						error={errors.techdomain}
						className={classnames("",{invalid:errors.techdomain})} />
						<label htmlFor="domain black">Technology Domain</label>

						<span className="red-text">{errors.techdomain}</span>
					</div>
				</div>

				<button className="btn btn-left orange darken-2">SIGNUP</button>
			</form>
			<div>
				
			<img src={signup2} alt="signup" className="signup-image" />
			</div>
		</div>

	);
}
}
Signup.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired 
};
const mapStateToProps = state =>({
	auth:state.auth,
	errors: state.errors
});
export default connect(mapStateToProps,{registerUser})(withRouter(Signup));
