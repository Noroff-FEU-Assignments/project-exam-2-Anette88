import React from "react";
import Heading from "../layout/Heading";
import HotelsDropdown from "./posts/HotelsDropdown";


export default function HomePage() {
	return (
		<>
			<Heading content="Home" />
			<HotelsDropdown />
		</>
	);
}
