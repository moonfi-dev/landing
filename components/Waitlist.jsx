import styles from './Waitlist.module.css'
// import Image from 'next/image'
import { useState } from 'react';

export const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState(null);

    const submit = async (e) => {
        e.preventDefault();
        let response = await fetch("/api/waitlist", {
            method: "POST",
            body: JSON.stringify({email: email})
        })
        if (response.ok) {
            setHasSubmitted(true);
        } else {
            setError(await response.text())
        }
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
