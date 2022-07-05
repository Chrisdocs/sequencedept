import React from "react";
import { useState } from "react";
import './styles.css'

export default function Contact() {

	const [ mailerState, setMailerState ] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	})

	function handleStateChange(e) {
		setMailerState((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	}

	const submitEmail = async (e) => {
		e.preventDefault();
		console.log({ mailerState });
		const response = await fetch("/send", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ mailerState }),
		})
			.then((res) => res.json())
			.then(async (res) => {
				const resData = await res;
				console.log(resData);
				if (resData.status === "success") {
					alert("Message sent");
				} else if (resData.status === "fail") {
					alert("Message failed to send.")
				}
			})
			.then(() => {
				setMailerState({
					email: "",
					name: "",
					subject: "",
					message: "",
				});
			});
	};

  const regex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:|\\)*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:)\])/;

  const messageCharactersWatch = 500 - mailerState.message.length;

  return (
    <div className="containerDiv">

      <div id="contact" className="formContainer">
        <form id="form">
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              className="formInput"
              placeholder="Name"
              onChange={handleStateChange}
							value={mailerState.name}
            />
          </label>
          <br />

          <label htmlFor="email">
            <input
              className="formInput"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleStateChange}
							value={mailerState.email}
            />
          </label>
          <br />

          <label htmlFor="subject">
            <input
              className="formInput"
              type="text"
              name="subject"
              placeholder="subject"
              onChange={handleStateChange}
							value={mailerState.subject}
            />
          </label>
          <br />

          <textarea
            className="formMessage"
            name="message"
            placeholder="Message"
            maxLength="500"
            type="text"
            onChange={handleStateChange}
						value={mailerState.message}
          />
          <br />
          <p className="charCount">{messageCharactersWatch}/500</p>

          <div className="submitDiv">
            <button
              className="submitBtn"
              type="submit"
              onClick={submitEmail}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}