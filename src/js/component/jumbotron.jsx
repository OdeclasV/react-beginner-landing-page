import React from "react";

const jumbotronText = {
	pageTitle: "A Warm Welcome!",
	description: "This is a page, hello",
	button: {
		label: "Call to action!",
		url: "www.dosomething.com"
	}
};
export const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{jumbotronText.pageTitle}</h1>
			<p className="lead">{jumbotronText.description}</p>
			<hr className="my-4" />
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
