import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../../hooks/useAxios"
import Heading from "../../layout/Heading";
import FormError from "../../common/FormError";
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";


const schema = yup.object().shape({
    title: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    content: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});


export default function ContactUs(){
    const [auth, setAuth] = useContext(AuthContext);
    const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
	const http = useAxios();
    

    const { register, 
            handleSubmit, 
            formState: { errors } 
        } = useForm({ resolver: yupResolver(schema) });

    async function onSubmit(data) {
        setSubmitting(true);
		setServerError(null);

		data.status = "publish";
        
        const message = {
            title: data.title,
            content: data.content,
            status: "publish",
            acf: {
                email: data.email,
                datestart: "",
                dateend: "",
            }
        };

        console.log("this data", data);


        

    try {
        const response = await http.post("/wp/v2/posts?categories=9" , message);
            console.log("response", response.data);   
            history.push("/contactussent");
    } catch (error) {
        console.log("error", error);
        setServerError(error.toString());
    } finally {
        setSubmitting(false);
    }
}

    return (
        <>
        <Heading content="Contact us" />
        
        <form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
            <fieldset disabled={submitting}>
            <p>Do you have any questions? Please fill out this form. We will get back to you within 1-2 days.</p>
                <div>
                    <p>Name</p>
                    <input {...register("title")} /> 
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                    <p>Email</p>
                    <input name="email" type="email" id="email" {...register("email")} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <p>Message</p>
                    <textarea {...register("content")} />
                    {errors.content && <span>{errors.content.message}</span>}
                </div>
                <button>{submitting ? "Submitting..." : "Send"}</button>
            </fieldset>
        </form>
        
        </>
    );
}
