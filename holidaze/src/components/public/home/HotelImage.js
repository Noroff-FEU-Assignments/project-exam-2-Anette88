import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import { Link } from "react-router-dom";


export default function HotelImage({ photos }) {
	const [images, setImages] = useState([]);
	
	const postsURL = "wp/v2/posts?categories=2";
	const url = BASE_URL + postsURL;
	let data = [];
	let info = [];
	let imageUrl = [];

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await axios.get(BASE_URL + "wp/v2/media/");
				console.log("iresponse", response);
				setImages(response.data);
				data = response.data;	
			} catch (error) {
				console.log(error);
			}
		}

		getMedia();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
		<div className="container">
		{images.map(function (image) {
		  return <div className="image">		
				  <img alt="hotel image" src={image.source_url}/>
		  </div>;
		})}
		
		</div>
		</>
	);
}