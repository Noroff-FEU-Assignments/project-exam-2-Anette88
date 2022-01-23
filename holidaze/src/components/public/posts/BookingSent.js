import Heading from "../../layout/Heading";
import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function BookingSent() {
return (
    <>
        <div className="bookingsent">
        <Heading content="Your booking is sent" />
        <p>Thank you for booking through Holidaze. We will send you a confirmation email in short time.</p>
        <p>Return to home <Link to="/">page</Link>.</p>
        </div>

    </>
    );
}

