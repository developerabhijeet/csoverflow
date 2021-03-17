import React from 'react';
import download from './download.png';
const Navbar = () => {
	 
	return (
		<div>
			<nav>
				<div className="nav-wrapper navbar-fixed orange darken-2">
					<img src={download} className="logo left left hide-on-med-and-down" alt="logo" />

					<a href="/" className="brand-logo center">CS OverFlow</a>
					<a href="/" data-target="mobile-demo" className="sidenav-trigger">
						<i className="material-icons">menu</i></a>

					<ul id="nav-mobile" className="right hide-on-med-and-down">  <li><a href="/">Home</a></li>
						<li><a href="/login">Login</a></li>
						<li><a href="/signup">Signup</a></li>
						<li><a href="/profile">Profile</a></li>
						<li><a href="/logout">Logout</a></li>
					</ul>
				</div>
			</nav>

			<ul className="sidenav orange" id="mobile-demo">
				<li><a href="/">Home</a></li>
				<li><a href="/login">Login</a></li>
				<li><a href="/signup">Signup</a></li>
				<li><a href="/profile">Profile</a></li>
						<li><a href="/logout">Logout</a></li>
			</ul>

		</div>
	)
}

export default Navbar;
