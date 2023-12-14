import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import styled from "@emotion/styled";
import { images } from "../assets/images/images";
import "../index.css";

const DivS = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 700px) {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--color8);
  border-radius: 15px;
  @media (max-width: 700px) {
    padding: 10px;
  }
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px #000000;
  font-size: 16px;
  font-weight: 700;
  color: #373b44;
  outline: none;
  &:focus {
    box-shadow: 0px 0px 5px 0px #000000;
  }
`;
const Label = styled.label`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #373b44;
`;
const Textarea = styled.textarea`
  height: 250px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px #000000;
  font-size: 20px;
  font-weight: 700;
  color: #373b44;
  outline: none;
  &:focus {
    box-shadow: 0px 0px 5px 0px #000000;
  }
`;
const InputSend = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: var(--color1);
  box-shadow: 0px 0px 5px 0px #000000;
  font-size: 16px;
  font-weight: 700;
  color: var(--color9);
  outline: none;
  &:focus {
    box-shadow: 0px 0px 5px 0px #000000;
  }
  &:hover {
    background-color: var(--color5);
    color: var(--color1);
  }
`;
const Div = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 100%;
  max-width: 500px;
  margin: 20 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--color8);
  border-radius: 15px;
  @media (max-width: 700px) {
    padding: 10px;
  }
`;
const Img = styled.img`
  width: 60%;
  height: 80%;
  border-radius: 15px;
  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;
const P = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #373b44;
  text-align: justify;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const Contact = ({ text }) => {
  const [result, setResult] = useState(false);
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, message } = e.target.elements;

    let errors = {};

    if (!user_name.value) {
      errors.user_name = "Name is required";
    }

    if (!user_email.value) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user_email.value)) {
      errors.user_email = "Email is invalid";
    }

    if (!message.value) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      alert("Please fill out all fields correctly.");
    } else {
      emailjs
        .sendForm(
          "service_75sp0ad",
          "template_wh0bkh2",
          e.target,
          "ux4DJU--1Y8Yx6SXa"
        )
        .then(
          (result) => {
            alert("Thanks for contacting us! We will get back to you soon.");
            setResult(true);
          },
          (error) => {
            alert(
              "An error occurred while sending the email. Please try again."
            );
          }
        );
    }
  };
  return (
    <DivS>
      <Div>
        <Img src={images.dieguito} />
        <P>{text}</P>
      </Div>
      <Form onSubmit={sendEmail}>
        <Input type="hidden" name="contact_number" />
        <Label>Name</Label>
        <Input type="text" name="user_name" />
        {errors.user_name && (
          <p style={{ color: "red", fontFamily: "Lato" }}>{errors.user_name}</p>
        )}
        <Label>Email</Label>
        <Input type="email" name="user_email" />
        {errors.user_email && (
          <p style={{ color: "red", fontFamily: "Lato" }}>
            {errors.user_email}
          </p>
        )}
        <Label>Message</Label>
        <Textarea name="message" />
        {errors.message && (
          <p style={{ color: "red", fontFamily: "Lato" }}>{errors.message}</p>
        )}
        <InputSend type="submit" value="Send" />
      </Form>
      {result && <p>Thanks for contacting us! We will get back to you soon.</p>}
    </DivS>
  );
};

export default Contact;
