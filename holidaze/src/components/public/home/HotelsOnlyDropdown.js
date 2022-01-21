import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";

export default function HotelsOnlyDropdown({ register }) {
	const [posts, setPosts] = useState([]);

	
	const postsURL = "wp/v2/posts?categories=2";
	const url = BASE_URL + postsURL;
	let data = [];
	

	useEffect(function () {
		async function getInput() {
			try {
				const response = await axios.get(url);
				console.log("response", response);
				setPosts(response.data);
				data = response.data;	

			} catch (error) {
				console.log(error);
			}
		}

		getInput();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
        <select name="hotel" {...register("hotel")}>
			<option value="">Hotels</option>
			{posts.map((post) => {
				return (
					<option key={post.id} value={post.title.rendered}>
						{post.title.rendered}
					</option>
				);
			})}
		</select>
	  
	  </>
	);
}

HotelsOnlyDropdown.propTypes = {
	register: PropTypes.func,
};

HotelsOnlyDropdown.defaultProps = {
	register: () => {},
};