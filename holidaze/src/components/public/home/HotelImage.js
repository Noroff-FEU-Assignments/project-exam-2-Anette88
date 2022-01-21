import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";


export default function HotelImage({ photos }) {
	const [images, setImages] = useState([]);
	
	
	let data = [];
	
	

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await axios.get(BASE_URL + "wp/v2/media/");
				console.log("iresponse", response);
				setImages(response.data);
					
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
				  <img alt="hotel" src={image.source_url}/>
		  </div>;
		})}
		
		</div>
		</>
	);
}