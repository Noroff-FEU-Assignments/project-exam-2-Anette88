import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";
import MediaDropdown from "./MediaDropdown";
import DashboardPage from "../dashboard/DashboardPage";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
	content: yup.string().required("Content is required"),
});

export default function AddPost() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
	const http = useAxios();

	const { 
		register,
		handleSubmit,
		formState: { errors },
	 } = useForm({ resolver: yupResolver(schema) });

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);

		data.status = "publish";

		const updatehotel = {
            title: data.title,
            content: data.content,
            status: "publish",
            acf: {
                attributes: data.attributes,
                datestart: "",
                dateend: "",
				
            }
        };
		

		console.log("add post", data);

		try {
			const response = await http.post("wp/v2/posts?categories=2", updatehotel);
			console.log("response", response.data);
			history.push("/dashboard/posts");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<DashboardPage>
			<Heading content="Add post" />
			<form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
				<fieldset disabled={submitting}>
					<div>
						<input name="title" placeholder="Title" {...register ("title")} />
						{errors.title && <FormError>{errors.title.message}</FormError>}
					</div>

					<div>
						<textarea name="content" placeholder="Content" {...register ("content")} />
						{errors.content && <FormError>{errors.content.message}</FormError>}
					</div>
					<div>
						<p>Restaurant <input name="restaurant" type="checkbox" value="restaurant" {...register ("attributes")} /></p>
						<p>Bar <input name="bar" type="checkbox" value="bar" {...register ("attributes")} /></p>
						<input name="swimmingpool" type="checkbox" value="swimmingpool" {...register ("attributes")} />
						<input name="oceanview" type="checkbox" value="oceanview" {...register ("attributes")} />
					</div>

					<div>
						<MediaDropdown register={register} />
					</div>
					<button>{submitting ? "Submitting..." : "Submit"}</button>
				</fieldset>
			</form>
		</DashboardPage>
	);
}