import React from 'react';
import EmailForm from '../../components/EmailForm/EmailForm';
import "./styles.css";

function Contact() {
    return (
        <div>
            <section className="email-form">
                <EmailForm></EmailForm>
            </section>
        </div>
    );
}

export default Contact;