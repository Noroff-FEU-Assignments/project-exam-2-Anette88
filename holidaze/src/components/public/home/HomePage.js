import React from "react";
import Heading from "../../layout/Heading";
import HotelsDropdown from "./HotelsDropdown";


export default function HomePage() {
	return (
		<>
			<Heading content="HOLIDAZE" />
			<HotelsDropdown />
		</>
	);
}
