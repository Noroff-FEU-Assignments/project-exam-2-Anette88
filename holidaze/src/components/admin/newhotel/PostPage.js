import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import DashboardPage from "../dashboard/DashboardPage";

export default function PostPage() {
	return (
		<DashboardPage>
			<Heading size="3" content="Posts" />
			<p>
				<Link to="/dashboard/newhotel/add">Add new hotel here</Link>
			</p>
			<p>List posts here</p>
		</DashboardPage>
	);
}