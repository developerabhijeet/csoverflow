import React,{Component} from 'react';
import signup1 from './signup1.jpg';
import Input from '../input/Input';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Link } from 'react-router-dom';


class Login extends Component{
	constructor(){
		super();
		this.state = {
			email:"",
			password:"",
			errors:{}
		};
	}
	componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
	componentWillReceiveProps(nextProps){
		if(nextProps.auth.isAuthenticated){
			this.props.history.push("/dashboard");
		}
		if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
	
	onChange = e =>{
		this.setState({[e.target.id]: e.target.value});
	};
	onSubmit = e =>{
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(userData);
	};

render(){
	const {errors}=this.state;
	return (
		<div className="row white">
			<form className="form col s6" onSubmit={this.onSubmit}>
				<div className="row col s6">
				<Input name="email" 
				placeholder="Email" 
				label="Email" type="email" id="email"
				onChange = {this.onChange}
				value={this.state.email}
				error={errors.email} 
				className={classnames("", {
					invalid: errors.email || errors.emailnotfound
				})}/>
				  <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
					</div>
				<div className="row col s6">
				<Input name="password"
				placeholder="Password" label="Password"
				type="password"
				onChange = {this.onChange}
				value={this.state.password}
				error={errors.password} 
				className={classnames("", {
					invalid: errors.password || errors.passwordincorrect
				})}/>
				   <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
				</div>

			
				<button className="btn orange darken-2">LOGIN</button>
			</form>
			<div>
				
			<img src={signup1} alt="login" className="login-image" />
			</div>
		</div>

	);
}
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);