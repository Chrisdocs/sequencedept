import React from "react";
import "./styles.css";
import { useForm } from 'react-hook-form';


function EmailForm() {

    const { handleSubmit, register, formState: {errors} } = useForm();
    const onSubmit = values => console.log(values);

    return(
        <div className="contact">
            <h1>Contact</h1>
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                
                <input 
                    placeholder="Name"
                    aria-invalid={errors.username ? "true" : "false"}
                    {...register('username', {
                        required: true
                        })}
                    />
                    {errors.username && errors.username.type === "required" && (
                        <div role="alert">Name is required<br/></div>
                    )}
                <br/>

                <input 
                type='email'
                placeholder='Email'
                {...register('email', {
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address."
                        } 
                    })}  />
                    {errors.email && errors.email.type === "required" && (
                        <div role="alert">Email is required<br/></div>
                    )}
                <br/>

                <textarea 
                name='message'
                placeholder='Message'
                {...register('message', {
                    required: true 
                    })} 
                />
                {errors.message && errors.message.type === "required" && (
                    <div role="alert">A message is required<br/></div>
                )}
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default EmailForm;