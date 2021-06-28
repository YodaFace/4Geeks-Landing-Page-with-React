import React from "react";
import ReactDOM from "react-dom";

//create your function here

//remember to use ReactDOM.render to include the component into the website

export const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				This is a jumbotron, there are many like it, but this one is
				mine.
			</p>
			<button className="btn btn-primary">Call To Action</button>
		</div>
	);
};
