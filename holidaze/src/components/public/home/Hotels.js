import React from "react";
import Heading from "../../layout/Heading";
import HotelsDropdown from "./HotelsDropdown";
import HotelsOnlyDropdown from "./HotelsOnlyDropdown";



export default function Hotels() {
	return (
		<>
			<Heading content="HOTELS" />
            < HotelsOnlyDropdown />
			< HotelsDropdown />
		</>
	);
}
