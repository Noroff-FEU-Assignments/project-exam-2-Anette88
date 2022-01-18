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
				console.log("response", response);
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
		{posts.map(function (posts) {
		  return <div key={posts.id}>
			
		  <p>Date of arrival: {posts.acf.dateStart}</p>
		  <p>Date of departure: {posts.acf.dateEnd}</p>
		  <p>Name: {posts.title.rendered}</p>
		  <p>Email address: {posts.acf.email}</p>
		  <p>Message: {posts.content.rendered}</p>
		 
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