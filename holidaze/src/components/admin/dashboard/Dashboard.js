import React from "react";
import Heading from "../layout/Heading";
import MediaDropdown from "../home/posts/MediaDropdown";


export default function Dashboard() {
	return (
		<>
			<Heading content="Dashboard" />
			<MediaDropdown />
		</>
	);
}