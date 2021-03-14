import React from 'react'
import web from './web.jpg'
const Home = () => {
	return (
		<div>
			<div className="div-text">
				<strong>
					Company StackOverFlow is a web based application which serve as a bridge between company's senior authorities/trainers and junior developer/trainee developers during work from home.
        </strong>
			</div>
			<div className="row features">
				<div className="div-img">
					<img src={web} alt="home" />
				</div>
				<ul className="collection list with-header">
					<li className="collection-header">
					<h4>Features of Applicaiton</h4>
					</li>
					<li className="collection-item">
					<div>1. You can Share Your Issues/ Errors on Portal.
      						<a href="#!" className="secondary-content">
							<i className="material-icons">send</i>
						</a>
					</div>
					</li>
					<li className="collection-item">
					<div>2. You can Reply to other's Errors.
     						<a href="#!" className="secondary-content">
							<i className="material-icons">send</i>
						</a>
					</div>
					</li>
					<li className="collection-item">
					<div>3. Give solutions in your own way.
    						<a href="#!" className="secondary-content">
							<i className="material-icons">send</i>
						</a>
					</div>
					</li>
					<li className="collection-item">
					<div>4. Can see the Issues/Errors Posted Earlier for Solution Reference
    						<a href="#!" className="secondary-content">
							<i className="material-icons">send</i>
						</a>
					</div>
					</li>

					<li className="collection-item">
					<div>5. Get the instant reply for seniors/mentors during WFH.
    						<a href="#!" className="secondary-content">
							<i className="material-icons">send</i>
						</a>
					</div>
					</li>
				</ul>
			</div>
		</div>

	)
}

export default Home;
