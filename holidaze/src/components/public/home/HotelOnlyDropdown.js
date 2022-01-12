import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import HotelImage from "./HotelImage";

export default function HotelsDropdown({ register }) {
	const [posts, setPosts] = useState([]);
	
	const postsURL = "wp/v2/posts?categories=2";
	const url = BASE_URL + postsURL;
	let data = [];
	let items = [];
	let imageUrl;

	useEffect(function () {
		async function getPosts() {
			try {
				const response = await axios.get(url);
				console.log("response", response);
				setPosts(response.data);
				data = response.data;	

				for (let i = 0; i < data.length; i++) {
					let imageUrl = "";

					if (data[i].featured_media) {
						imageUrl = await axios.get(BASE_URL + "wp/v2/media/" + data[i].featured_media);
						imageUrl = imageUrl.data.source_url;
						console.log("images", imageUrl);
					}

				}

			} catch (error) {
				console.log(error);
			}
		}

		getPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
		<select {...register}>
			<option value="">Hotels</option>
			{posts.map((post) => {
				return (
					<option key={post.id} value={post.id}>
						{post.title.rendered}
					</option>
				);
			})}
		</select>
	  </>
	);
}

HotelsDropdown.propTypes = {
	register: PropTypes.func,
};

HotelsDropdown.defaultProps = {
	register: () => {},
};