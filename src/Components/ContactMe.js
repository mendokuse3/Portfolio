import React from 'react';
import { ContactForm } from '../Styles/type';

const ContactMe = () => {
    return (
        <ContactForm>
            <h2>Reach out to me!</h2>
            <form id='contact-form' action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfveD4hB-LXCRpV6ZrfHFyFdCvmltWjoa3Big6D64hBfLazKw/formResponse" method='POST'>
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' name="entry.1860532169" required/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="entry.1377476458" required/>
                <label htmlFor="message">Message:</label>
                <textarea name="entry.1847974227" id="message" form="contact-form"  required></textarea>
                <input type="submit" value="Sumbit"/>
            </form>
        </ContactForm>

    )
}

export default ContactMe;