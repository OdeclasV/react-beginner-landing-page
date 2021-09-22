import React from "react";
import { pokemonData } from "./pokemon-data";

const cards = pokemonData;

const myCardStyles = {
	width: "18rem"
};

export const Cards = () => {
	return cards.map((singleCard, i) => {
		return (
			<div className="card m-2 text-center" style={myCardStyles} key={i}>
				<img
					className="card-img-top"
					src={singleCard.imageURL}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{singleCard.title}</h5>
					<p className="card-text">{singleCard.description}</p>
				</div>
				<div className="card-footer">
					<a href={singleCard.buttonURL} className="btn btn-primary">
						Find out more
					</a>
				</div>
			</div>
		);
	});
};
