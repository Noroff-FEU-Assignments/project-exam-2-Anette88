import React from "react";
import Heading from "../../layout/Heading";
import HotelsDropdown from "./HotelsDropdown";
import Hotels from "./Hotels";
import { Link, useHistory } from "react-router-dom";
import bergen from "../../../images/bergen.jpg";

export default function HomePage() {
	return (
		<>
			<div className="homediv">

			<h2>Weekend in Bergen?</h2>
			<img className="bergen" src= {bergen} />
			<p>We here in Holidaze specialize in finding the best hotels Bergen has to offer.</p>
			<p>Please see our <Link to="./hotels">hotels</Link> and make a reservation.</p>
			<p id="hurry">Only few available rooms left! <br/> Find your hotel now!</p>
			
			</div>
		</>
	);
}
