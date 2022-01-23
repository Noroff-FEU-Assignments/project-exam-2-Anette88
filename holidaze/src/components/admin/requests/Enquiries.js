import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";

export default function Enquiries({ register }) {
	const [posts, setPosts] = useState([]);

	
	const postsURL = "wp/v2/posts?categories=10";
	const url = BASE_URL + postsURL;

	useEffect(function () {
		async function getPosts() {
			try {
				const response = await axios.get(url);
				//console.log("response", response);
				setPosts(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		getPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
		<div className="container">
		<h3>Booking requests</h3>
		{posts.map(function (post) {
		  return <div className="enquiries" key={post.id}>
			<p>Hotel: {post.acf.hotel}</p>
		  <p>Date of arrival: {post.acf.dateStart}</p>
		  <p>Date of departure: {post.acf.dateEnd}</p>
		  <p>Name: {post.title.rendered}</p>
		  <p>Email address: {post.acf.email}</p>
		  <p>Message:</p>
		  <p className="message" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
		  
		 
		  </div>;
		})}
	  </div>
	  
	  </>
	);
}

Enquiries.propTypes = {
	register: PropTypes.func,
};

Enquiries.defaultProps = {
	register: () => {},
};