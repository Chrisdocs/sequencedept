import React, { useState } from "react";
import "./styles.css";
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com'
init('user_gI3ZavgnRDiZw3W8xBTdX')


function EmailForm() {
    
    const { handleSubmit, register, watch, formState: {errors} } = useForm();
    const onSubmit = values => {
        console.log(values);
        generateContactNum();
        
        sendForm('default_service', 'template_uppgqdq', '#contact-form')
        .then(function(response) {
            console.log('Success!', response.status, response.text);
        }, function(error) {
            console.log('Failed...', error);
        });
    }
    
        const [contactNumber, setContactNumber] = useState("000000");
    
        const generateContactNum = () => {
            const numStr = "000000" + (Math.random() * 1000000 | 0);
            setContactNumber(numStr.substring(numStr.length - 6));
        }

    const message = watch('message') || "";
    const messageCharactersWatch = 500 - message.length;


    return(
        <div className="contact">

            <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>


            <input type='hidden' name='contact_number' value={contactNumber} />

                <div className="submit-div">
                    <button
                        className="submit-button"
                        type='submit'
                    >Send</button>
                </div>

                {errors.username && errors.username.type === "required" && (
                    <div role="alert">Name is required<br/></div>
                )}
                <input
                    className="input-style" 
                    placeholder="Name"
                    aria-invalid={errors.username ? "true" : "false"}
                    {...register('username', {
                        required: true
                        })}
                    />
                <br/>

                {errors.email && errors.email.type === "required" && (
                    <div role="alert">Email is required<br/></div>
                )}
                <input
                className="input-style" 
                type='email'
                placeholder='Email'
                {...register('email', {
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address."
                        } 
                    })}  />
                <br/>
            

                {errors.message && errors.message.type === "required" && (
                    <div role="alert">A message is required<br/></div>
                )}
                <textarea
                className="text-area-style"  
                name='message'
                placeholder='Message'
                maxLength='500'
                {...register('message', {
                    required: true 
                })} 
                />
                <p className="message-chars">{messageCharactersWatch} characters left</p>
                <br/>

            </form>
        </div>
    );
};

export default EmailForm;