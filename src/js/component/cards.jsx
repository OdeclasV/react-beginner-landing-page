import React from "react";

const cardsData = {
	imageSource: "https://bit.ly/3EMlh9d"
};

const myCardStyles = {
	width: "18rem"
};

export const Cards = () => {
	return (
		<div className="row">
			<div className="card-deck d-flex">
				<div className="card m-3" style={myCardStyles}>
					<img
						className="card-img-top"
						src={cardsData.imageSource}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</div>
				</div>
				<div className="card m-3" style={myCardStyles}>
					<img
						className="card-img-top"
						src={cardsData.imageSource}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This card has supporting text below as a natural
							lead-in to additional content.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</div>
				</div>
				<div className="card m-3" style={myCardStyles}>
					<img
						className="card-img-top"
						src={cardsData.imageSource}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This card has
							even longer content than the first to show that
							equal height action.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};
