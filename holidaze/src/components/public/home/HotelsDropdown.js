import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";

export default function HotelsDropdown({ register }) {
	const [posts, setPosts] = useState([]);

	
	const postsURL = "wp/v2/posts?categories=2";
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
		<select name="featured_media" {...register}>
			<option value="">Hotels</option>
			{posts.map((post) => {
				return (
					<option key={post.id} value={post.id}>
						{post.title.rendered}
					</option>
				);
			})}
		</select>
		<div className="container">
		{posts.map(function (post) {
		  return <div key={post.id}><h2>{post.title.rendered}</h2>
		  {post.content.rendered}
		  </div>;
		})}
	  </div>
	  
	  </>
	);
}

HotelsDropdown.propTypes = {
	register: PropTypes.func,
};

HotelsDropdown.defaultProps = {
	register: () => {},
};