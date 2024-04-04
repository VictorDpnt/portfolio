import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormTemplate = () => {
  const form = useRef();
  const formMsg = document.querySelector(".form-message");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ufualv6", "template_5im3guc", form.current, {
        publicKey: "qU0O80RQXCGmnEow0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          // formMsg.innerHTML = "<p>Message envoyé ! </p>";

          setTimeout(() => {
            formMsg.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log("FAILED...", error.text);
          formMsg.innerHTML =
            "<p> Une erreur s'est produite veuillez réessayer.</p>";

          setTimeout(() => {
            formMsg.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Message</label>
        <textarea name="message" style={{ resize: "none" }} />
        <input type="submit" value="Envoyer" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default FormTemplate;
