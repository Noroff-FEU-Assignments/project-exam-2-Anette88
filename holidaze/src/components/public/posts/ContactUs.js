import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../../hooks/useAxios"
import Heading from "../../layout/Heading";
import FormError from "../../common/FormError";



const schema = yup.object().shape({
    title: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    content: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});


export default function ContactUs(){
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

        console.log(data);


        const emails = {
            acf: {
                email: data.email,
            },
        };

    try {
        const response = await http.post("/wp/v2/posts?categories=9", data);
        console.log("response", response.data);    
        history.push("/");
    } catch (error) {
        console.log("error", error);
        setServerError(error.toString());
    } finally {
        setSubmitting(false);
    }
}

    return (
        <>
        <Heading content="Write us a message" />
        <form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
            <fieldset disabled={submitting}>
                <div>
                    <p>Name</p>
                    <input {...register("title")} /> 
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                    <p>Email</p>
                    <input {...register("email")} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <p>Message</p>
                    <textarea {...register("content")} />
                    {errors.content && <span>{errors.content.message}</span>}
                </div>
                <button>{submitting ? "Submitting..." : "Submit"}</button>
            </fieldset>
        </form>
        
        </>
    );
}
