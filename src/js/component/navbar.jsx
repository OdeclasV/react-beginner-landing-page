import React from "react";

const navBarStyles = {
	color: "white",
	background: "#333333"
};

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<a className="navbar-brand text-light" href="#">
				React (Pokemon) Landing Page
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse justify-content-end"
				id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active text-light" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link text-light" href="#">
						About
					</a>
					<a className="nav-item nav-link text-light" href="#">
						Services
					</a>
					<a
						className="nav-item nav-link disabled text-light"
						href="#">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

//export default NavBar;
