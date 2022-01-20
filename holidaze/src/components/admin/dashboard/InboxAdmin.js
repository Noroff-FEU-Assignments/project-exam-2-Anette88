import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";

export default function InboxAdmin({ register }) {
	const [posts, setPosts] = useState([]);

	
	const postsURL = "wp/v2/posts?categories=9";
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
		<h3>Messages from customers</h3>
		{posts.map(function (posts) {
		  return <div className="inbox" key={posts.id}>
			  
			  <p>Name: {posts.title.rendered}</p>
		  <p>Email address: {posts.acf.email}</p>
			<p>Message:</p>
		  <p className="message" dangerouslySetInnerHTML={{ __html: posts.content.rendered }}></p>
		  
		  </div>;
		})}
	  </div>
	  
	  </>
	);
}

InboxAdmin.propTypes = {
	register: PropTypes.func,
};

InboxAdmin.defaultProps = {
	register: () => {},
};