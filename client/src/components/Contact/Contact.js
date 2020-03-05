import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [buttonText, setButtonText] = useState("Submit");
  const [response, setResponse] = useState("");

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    setButtonText("Loading...");
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify(values);
    axios.post("/api/v1/contact/contact", body, config).then(res => {
      setResponse(res.data.message);
      setButtonText("Submit");
      setValues({
        ...values,
        name: "",
        email: "",
        message: "",
        buttonText: "Send Message"
      });
    });

    setTimeout(() => setResponse(""), 7000);
  };
  return (
    <div className="contact-wrapper">
      <form className="contact__form" onSubmit={onSubmit}>
        {response && <div className="alert-success">{response}</div>}
        <input
          className="contact__input"
          placeholder="Name"
          name="name"
          onChange={onChange}
          type="text"
          value={values.name || ""}
        />
        <input
          className="contact__input"
          placeholder="Email"
          name="email"
          onChange={onChange}
          type="text"
          value={values.email || ""}
        />
        <textarea
          className="contact__input--textarea"
          placeholder="Your message"
          name="message"
          onChange={onChange}
          value={values.message || ""}
        />
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};

export default Contact;
