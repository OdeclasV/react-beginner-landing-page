import React from "react";

const jumbotronText = {
	pageTitle: "Hello! Welcome to my first React Landing Page.",
	description:
		"I'm glad you are here. I created a page using React, which is a very popular JavaScritp library.",
	pargraph:
		"This was a fun and interesting beginner project. There's a lot more to do.",
	button: {
		label: "Click Click",
		url: "www.dosomething.com"
	}
};

const jumbotronStyles = {
	background: "lightgray",
	borderRadius: "5px"
};
export const Jumbotron = () => {
	return (
		<div className="jumbotron p-5 m-3" style={jumbotronStyles}>
			<h1 className="display-4">{jumbotronText.pageTitle}</h1>
			<p className="lead">{jumbotronText.description}</p>
			<hr className="my-4" />
			<p>{jumbotronText.pargraph}</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href={jumbotronText.button.url}
					role="button">
					{jumbotronText.button.label}
				</a>
			</p>
		</div>
	);
};
