import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../../hooks/useAxios";

export default function MediaDropdown({ register }) {
	const [media, setMedia] = useState([]);

	const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get("wp/v2/media");
				console.log("response", response);
				setMedia(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		getMedia();
		
	}, []);

	return (
		<select name="media_title" {...register("media.title")}>
			<option value="">Images</option>
			{media.map((media) => {
				return (
					<option key={media.id} value={media.title.rendered}>
						{media.title.rendered}
					</option>
				);
			})}
		</select>
	);
}

MediaDropdown.propTypes = {
	register: PropTypes.func,
};

MediaDropdown.defaultProps = {
	register: () => {},
};