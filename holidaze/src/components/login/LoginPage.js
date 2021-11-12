import React from "react";
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";

export default function LoginPage() {
	return (
		<>
			<Heading content="Login" />
			<LoginForm />
		</>
	);
}
