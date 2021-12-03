import React from 'react';
import EmailForm from '../../components/EmailForm/EmailForm';

function Contact() {
    return (
        <div>
            <section>
                <EmailForm></EmailForm>
            </section>
            <section>
                <ul>
                    <li>
                        Email: al.wolfe@gmail.com
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Contact;