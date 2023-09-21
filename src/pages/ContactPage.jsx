//component
import Button from "../components/Button";

//style
import "./ContactPage.css";
import SocialLink from "../components/SocialLink";

const ContactPage = () => {
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

          <form>
            <input type="text" placeholder="First Name" autoComplete="off" />

            <input
              type="text"
              placeholder="Mail"
              autoComplete="off"
              className="contact-form-two"
            />

            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              placeholder="Message"
            ></textarea>

            <Button className="contact-form-btn">Submit</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
