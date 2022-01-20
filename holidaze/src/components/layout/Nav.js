import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../../images/logowtext.png";

function Nav() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
		<nav>
			
			
			
			<Link className="navbar" to="/"><img className="logo" src= {logo} /></Link>
			<Link className="navbar" to="/hotels">Hotels</Link>
			<Link className="navbar" to="/contactus">Contact Holidaze</Link>
			<Link className="navbar" to="/booking">Book Hotel</Link>
			{auth ? (
				<>
					| <Link className="navbar" to="/dashboard">Dashboard</Link> 
					 <Link className="navbar" to="/inbox">Inbox</Link> 
					 <Link className="navbar" to="/enquiries">Requests</Link> 
					 <button onClick={logout}>Log out</button>
				</>
			) : (
				<Link to="/login">Login</Link>
			)}
		</nav>
	);
}

export default Nav;