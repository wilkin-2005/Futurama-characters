
"use client";

import "./sign-up-form.css";
import { useState } from "react";


// Component for signing up to the newsletter
export default function SignUpForm()
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isPending, setisPending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit( event: React.ChangeEvent<HTMLFormElement> )
    {
        event.preventDefault();
        setMessage("");

        if ( !firstName.trim() || !lastName.trim() || !email.trim() ) {
            setMessage("Alla fält krävs!");
            setIsSuccess(false);
            return;
        }

        setisPending(true);
        setMessage("");

        try {
            const formData = new URLSearchParams();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);

            const response = await fetch("http://localhost:3000/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoder",
                },
                body: formData,
            })
        }
        catch {

        }
    }

    return (
        // action="http://localhost:3000/api/signup"
    <form onSubmit={handleSubmit} method="post" className="signup-form" >

        <h3> Nyhetsbrev-formulär </h3>

        <div className="signup-form-row">
            <input type="text" name="firstName" className="signup-input form-control" placeholder="First Name" required
                value={firstName} onChange={ (e) => setFirstName(e.target.value) } />

            <input type="text" name="lastName" className="signup-input form-control" placeholder="Last Name" required
                value={lastName} onChange={ (e) => setLastName(e.target.value) } />
        </div>

        <div className="signup-email-group">
            <input type="email" name="email" className="signup-input form-control" placeholder="Email Address" required
                value={email} onChange={ (e) => setEmail(e.target.value) } />
        </div>

        <div className="signup-submit-row">
            <button type="submit" className="signup-submit-btn btn-accent"> Submit </button>
        </div>

    </form>
    );
}