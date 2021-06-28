import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import { Card } from "./card.js";

//create your first component
export function Cards() {
	return (
		<>
			<Card />
			<Card />
			<Card />
			<Card />
		</>
	);
}
