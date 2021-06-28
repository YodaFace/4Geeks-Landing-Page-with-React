import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

export const Card = props => {
	return (
		<div className="card m-1 d-inline" style={{ width: "16rem" }}>
			<img
				className="card-img-top"
				src={props.imageURL}
				alt="Card image top"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

// REFERENCE FROM PREVIOUS WORK //
// const BootstrapCard = props => {
// 	// 1) replace the hard-coded image, description, link, etc. With their property variable.
// 	return (
// 		<div className="card m-5">
// 			<img className="card-img-top" src={props.imageURL} alt="Card image cap" />
// 			<div className="card-body">
// 				<h5 className="card-title">{props.title}</h5>
// 				<p className="card-text">{props.description}</p>
// 				<a href={props.buttonUrl} className="btn btn-primary">
// 					{props.buttonLabel}
// 				</a>
// 			</div>
// 		</div>
// 	);
// };

Card.propTypes = {
	title: PropType.string,
	text: PropType.string,
	imageURL: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string
};
