import React from "react";
import PropTypes from "prop-types";

let styleJumbotron = {
	paddingTop: "20px"
};

export function Jumbotron(props) {
	return (
		<div className="container" style={styleJumbotron}>
			<div className="jumbotron">
				<h1 className="display-4">{props.bigTitle}</h1>
				<p className="lead">{props.text}</p>
				<hr className="my-4" />
				<p>{props.text2}</p>
				np
				<a className="btn btn-primary btn-lg" href="" role="button">
					{props.button}
				</a>
			</div>
		</div>
	);
}

Jumbotron.propTypes = {
	bigTitle: PropTypes.string,
	text: PropTypes.string,
	text2: PropTypes.string,
	button: PropTypes.string
};
