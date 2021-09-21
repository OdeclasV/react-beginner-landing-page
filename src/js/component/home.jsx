import React from "react";
import { NavBar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./cards.jsx";
import { Footer } from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<Cards />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
