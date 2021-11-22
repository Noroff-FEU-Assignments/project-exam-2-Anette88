import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

function ContactUs() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>Name</p>
            <input {...register("name")} /> 
            {errors.name && <span>{errors.name.message}</span>}
            

            <p>Email</p>
            <input {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}

            <p>Message</p>
            <textarea {...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}

            <button>Send</button>
        </form>
    );
}

export default ContactUs;