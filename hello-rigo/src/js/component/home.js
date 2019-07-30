import React, { Fragment } from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";

export function Home(props) {
	return (
		<Fragment>
			<Navbar />
			<Jumbotron />
		</Fragment>
	);
}
