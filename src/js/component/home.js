import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./card(s).js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row justify-content-around">
					<Cards />
				</div>
			</div>
			<Footer />
		</>
	);
}
