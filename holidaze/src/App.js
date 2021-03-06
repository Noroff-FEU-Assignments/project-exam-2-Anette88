import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/public/home/HomePage";
import LoginPage from "./components/public/login/LoginPage";
import Nav from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import DashboardPage from "./components/admin/dashboard/DashboardPage";
import PostPage from "./components/admin/newhotel/PostPage";
import AddPost from "./components/admin/newhotel/AddPost";
import ContactUs from "./components/public/posts/ContactUs";
import InboxAdmin from "./components/admin/dashboard/InboxAdmin";
import Booking from "./components/public/posts/Booking";
import Enquiries from "./components/admin/requests/Enquiries.js";
import Hotels from "./components/public/home/Hotels";
import HotelSpecific from "./components/public/home/specific/HotelSpecific";
import ContactUsSent from "./components/public/posts/ContactUsSent";
import BookingSent from "./components/public/posts/BookingSent";


function App() {
	return (
		<AuthProvider>
			<Router>
				<Nav />

				<div className="container">
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/hotels">
							<Hotels />
						</Route>
						<Route exact path="/hotels/:id">
							<HotelSpecific />
						</Route>
						
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/dashboard" exact>
							<DashboardPage />
						</Route>
						<Route path="/dashboard/posts" exact>
							<PostPage />
						</Route>
						<Route path="/dashboard/newhotel/add">
							<AddPost />
						</Route>
						<Route path="/contactus">
							<ContactUs />
						</Route>
						<Route path="/contactussent">
							<ContactUsSent />
						</Route>
						<Route path="/inbox">
							<InboxAdmin />
						</Route>
						<Route path="/booking">
							<Booking />
						</Route>
						<Route path="/bookingsent">
							<BookingSent />
						</Route>
						<Route path ="/enquiries">
							<Enquiries />
						</Route>
					</Switch>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
