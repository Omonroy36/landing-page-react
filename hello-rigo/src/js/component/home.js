import React, { Fragment } from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";
<<<<<<< HEAD
import * as data from "../data";
=======
<<<<<<< HEAD
=======
>>>>>>> 5ffeab640b1165d0a7cd3ca65d5b2d541ca979e0

>>>>>>> 05fb078eab5dde0d64ca5425e51892281472c902
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
