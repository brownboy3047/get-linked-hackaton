import { useState } from "react";

//component
import Button from "../components/Button";

//style
import "./ContactPage.css";
import SocialLink from "../components/SocialLink";
import { useContact } from "../hooks/useContact";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [message, setMessage] = useState("");

  const { contact } = useContact();

  const handleSubmit = (e) => {
    e.preventDefault();

    const sub = async () => {
      await contact(email, phone_number, first_name, message);
    };

    sub();

    setEmail("");
    setFirst_name("");
    setPhone_number("");
    setMessage("");

    alert("Message sent successfully");
  };

  return (
    <main className="contact">
      <div className="contact-info">
        <div className="contact-info-text">
          <h1>Get in touch</h1>

          <p>
            Contact <br /> Information
          </p>

          <p>
            27,Alara Street <br />
            Yaba 100012 <br />
            Lagos State
          </p>

          <p>Call Us : 07067981819</p>

          <p>
            we are open from Monday-Friday <br />
            08:00am - 05:00pm
          </p>
        </div>

        <div className="contact-social">
          <p>Share on</p>

          <SocialLink />
        </div>
      </div>

      <div className="contact-form">
        <div className="contact-form-con">
          <p>Questions or need assistance?</p>

          <p>Let us know about it!</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              autoComplete="off"
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              autoComplete="off"
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
            />

            <input
              type="text"
              placeholder="Mail"
              autoComplete="off"
              className="contact-form-two"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <Button className="contact-form-btn">Submit</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
