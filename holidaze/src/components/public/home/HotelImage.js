import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";

export default function HotelImage({ register }) {
	const [media, setMedia] = useState([]);

	
	
	const imagesURL = "wp/v2/media/";
	
	const iurl = BASE_URL + imagesURL;

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await axios.get(iurl);
				console.log("response", response);
				setMedia(response.data);
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
		{media.map(function (medias) {
		  return <div key={medias.id}><h2>{medias.title.rendered}</h2>
		  <img src={medias.source_url}/>
		  </div>;
		})}
	  </div>
	  
	  </>
	);
}


HotelImage.propTypes = {
	register: PropTypes.func,
};

HotelImage.defaultProps = {
	register: () => {},
};