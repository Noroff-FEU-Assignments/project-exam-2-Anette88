import { Link } from "react-router-dom";

export default function DashboardMenu() {
	return (
		<nav className="dashboard">
			<Link to="/dashboard/posts">Add new hotel</Link>
		</nav>
	);
}