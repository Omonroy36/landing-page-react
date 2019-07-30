import React, { Fragment } from "react";

import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Cards } from "./cards";
export function Home(props) {
	return (
		<Fragment>
			<Navbar />
			<Cards />
			<Footer />
		</Fragment>
	);
}
