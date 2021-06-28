import React from "react";
import ReactDOM from "react-dom";

//create your function here

//remember to use ReactDOM.render to include the component into the website

export const Navbar = () => {
	return (
		<nav className="navbar text-light bg-dark">
			<ul className="list-unstyled mx-5">
				<li className="d-inline m-1">
					<a classhref="somethingElse">Start BootStrap</a>
				</li>
			</ul>

			<ul className="list-unstyled text-light bg-dark mx-5">
				<li className="d-inline m-1">
					<a classhref="#">Home</a>
				</li>
				<li className="d-inline m-1">
					<a classhref="#">About</a>
				</li>
				<li className="d-inline m-1">
					<a classhref="#">Services</a>
				</li>
				<li className="d-inline m-1">
					<a classhref="#">Contact</a>
				</li>
			</ul>
		</nav>
	);
};
