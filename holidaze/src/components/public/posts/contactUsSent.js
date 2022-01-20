import Heading from "../../layout/Heading";
import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function ContactUsSent() {
return (
    <>
        <div className="contactsent">
        <Heading content="Message sent" />
        <p>Thank you for your message. We will answer your message as soon as possible</p>
        <p>Return to home <Link to="/">page</Link>.</p>
        </div>

    </>
    );
}

