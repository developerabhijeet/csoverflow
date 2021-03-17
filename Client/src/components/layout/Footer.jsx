import React from 'react'
import download from './download.png'
const Footer = () => {
	return (


		<footer className="page-footer">
			<div className="container page-footer">
				<img src={download} className="logo-footer" alt="logo" />
				<div className="row">
					<div className="col l6 s12 left">
						<h6 className="white-text text-lighten-4"><strong>Company's Stack OverFlow</strong></h6>
					</div>
					<div className="col l4 offset-l2 s12">
						<h5 className="black-text">Connect With Us:</h5>
						<ul>
							<li><a className="white-text text-lighten-3" href="#!">Facebook</a></li>
							<li><a className="white-text text-lighten-3" href="#!">Twitter</a></li>
							<li><a className="white-text text-lighten-3" href="#!">LinkedIn</a></li>
							<li><a className="white-text text-lighten-3" href="#!">Instagram</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container center">
					<h6><b> © 2021 Copyright CS OverFlow</b></h6>
				</div>
			</div>
		</footer>

	)
}

export default Footer;
