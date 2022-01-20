import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../../hooks/useAxios"
import Heading from "../../layout/Heading";
import FormError from "../../common/FormError";
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import HotelsOnlyDropdown from "../home/HotelsOnlyDropdown";
import TableDatePicker from "./Datepicker";


const schema = yup.object().shape({
    title: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    content: yup.string().required("Please enter your message"),
});


export default function Booking(){
    const [auth, setAuth] = useContext(AuthContext);
    const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
	const http = useAxios();
    
    let email = [];

    const { register, 
            handleSubmit, 
            formState: { errors } 
        } = useForm({ resolver: yupResolver(schema) });

    async function onSubmit(data) {
        setSubmitting(true);
		setServerError(null);

		data.status = "publish";
        

        console.log("this data", data);


        

    try {
        const response = await http.post("/wp/v2/posts?categories=10" , data);
        console.log("response", response.data);   
         
        history.push("/contactUsSent");
       
    } catch (error) {
        console.log("error", error);
        setServerError(error.toString());
    } finally {
        setSubmitting(false);
    }
}

    return (
        <>
        <Heading content="Book your hotel here" />
        
        <form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
            <fieldset disabled={submitting}>
                <div>
                    <p>Which Hotel do you want to stay at?</p>
                    <div>
						<HotelsOnlyDropdown register={register} />
					</div>
                </div>
                <div>
                <TableDatePicker />
                </div>
                
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
                    <p>If you have any special requirements, please add them below. If any of them can not be met we will contact you shortly.</p>
                    <textarea {...register("content")} />
                    {errors.content && <span>{errors.content.message}</span>}
                </div>
                
                <button>{submitting ? "Submitting..." : "Book Hotel"}</button>
            </fieldset>
        </form>
        
        </>
    );
}
