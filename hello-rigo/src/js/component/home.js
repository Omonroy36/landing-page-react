import React, { Fragment } from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";
import * as data from "../data";

export function Home(props) {
	return (
		<Fragment>
			<Navbar />
			<Jumbotron
				bigTilte={data.data.bigTilte}
				text={data.data.text}
				text2={data.data.text2}
				button={data.data.button}
			/>
			<Cards />
			<Footer />
		</Fragment>
	);
}
