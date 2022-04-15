import styles from './Waitlist.module.css'
// import Image from 'next/image'
import { useState } from 'react';
import airtable from 'airtable';
import validator from "email-validator"

export const Waitlist = () => {
    const [email, setEmail] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [error, setError] = useState(null);
    
    const submit = async (e) => {
        e.preventDefault();
        console.log("test")
        // Validate email
        if (!email) {
            setError("Missing email");
            return;
        } else if (email.length > 300) {
            setError("Email is too long");
            return;
        } else if (!validator.validate(email)) {
            setError("Invalid email");
            return;
        }
    
        airtable.configure({
            endpointUrl: "https://api.airtable.com",
            apiKey: process.env.AIRTABLE_API_KEY
        });
        
        const base = airtable.base(process.env.AIRTABLE_BASE_KEY);
        
        base('Table 1').create([
        {
            "fields": {
            "Email": JSON.stringify(email)
            }
        }
        ], function(err, records) {
        if (err) {
            setError(err)
            return;
        }
        });

        setHasSubmitted(true);
    }

    if (hasSubmitted) {
        return <div className={styles.formWrapper}>
            <span className={styles.subtitle}>
                Thanks for signing up! We will be in touch soon.
            </span>
        </div>
    }

    return (
    <>
        <form className={styles.formWrapper} onSubmit={submit}>
            <input type="email" required placeholder="Email"
                    className={[styles.formInput, styles.formTextInput].join(" ")}
                    value={email} onChange={e => setEmail(e.target.value)}/>
            
            <button type="submit" className={[styles.formInput, styles.formSubmitButton].join(" ")}>
                Join Waitlist
            </button>
            
            {error ? <div className={styles.error}>{error}</div> : null}
        </form>
    </>
    );
};
