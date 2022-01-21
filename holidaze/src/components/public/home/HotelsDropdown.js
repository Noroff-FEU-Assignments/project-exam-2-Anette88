import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import { Link } from "react-router-dom";



export default function HotelsDropdown({ register }) {
	const [posts, setPosts] = useState([]);
	const [media, setMedia] = useState([]);
	
	
	const postsURL = "wp/v2/posts?categories=2";
	const url = BASE_URL + postsURL;
	let data = [];
	let info = [];
	let imageUrl = [];
	let image;
	

	useEffect(function () {
		async function getPosts() {
			try {
				const response = await axios.get(url);
				console.log("response", response);
				setPosts(response.data);
				data = response.data;
					

				for (let i = 0; i < data.length; i++) {
					imageUrl = "";

					if (data[i].featured_media) {
						const imageUrl = await axios.get(BASE_URL + "wp/v2/media/" + data[i].featured_media);
						
						info = imageUrl.data;
						image = info.source_url;
						setMedia(info);
						
						

						console.log("info", info);
						console.log("image", image);
						
						console.log("result image", imageUrl);
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
		<div className="container">
		{posts.map(function (post) {
		  return <div className="hoteldiv">
			  <div className="hoteltext">
				  <h2>{post.title.rendered}</h2>
		  			 
					  <p className="hotelcontent" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
					  <p>{post.acf.attributes}</p>
					  <div>  
				  <img alt="hotel image" src={ media.source_url }/>
				  </div>
				</div>
				<Link id={post.id} to="hotels/specific">Read more</Link>
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