import React from "react";
import "./ThankYouPage.css"
import { Link } from "react-router-dom";

export const ThankYouPage = () => {
    return(
        <div className="Container-ThankYouPage">
            <div className="Container-Chenar-Thank-You">
                <h1>Thank you for getting in touch!</h1>
                <p> I appreciate you contacting me and i will get back to you as soon as i can for future cooperation!</p>
                <Link to='/'>Main page</Link>
            </div>
        </div>
    )
}