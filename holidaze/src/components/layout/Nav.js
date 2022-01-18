import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Nav() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/hotels">Hotels</Link>
			<Link to="/contactus">Contact Holidaze</Link>
			<Link to="/booking">Book Hotel</Link>
			{auth ? (
				<>
					| <Link to="/dashboard">Dashboard</Link> 
					 <Link to="/inbox">Inbox</Link> 
					 <Link to="/enquiries">Requests</Link> 
					 <button onClick={logout}>Log out</button>
				</>
			) : (
				<Link to="/login">Login</Link>
			)}
		</nav>
	);
}

export default Nav;