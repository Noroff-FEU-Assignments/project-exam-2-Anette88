import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../../../../constants/api";
import { Link } from "react-router-dom";
import HotelsDropdown from "../HotelsDropdown";


export default function HotelsSpecific() {
	const [book, setBooks] = useState();
    
	
    let history = useHistory();

	const { id } = useParams();

    if (!id) {
        history.push("/hotels");
    }
	
	const postsURL = "wp/v2/posts?categories=2";
	const url = BASE_URL + postsURL + "/hotels/" + id;
	
	

	useEffect(function () {
		async function getPost() {
			try {
				const response = await axios.get(url);
				console.log("response", response);
				setBooks(response);
            }  catch (error) {
				console.log(error);
			}
		}

		getPost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return (
		
		<>
		<div className="hotel-detail">
		<h1>{book.title}</h1>
        <p>{book.content}</p>
        
        </div>
        </>
    );
    }
