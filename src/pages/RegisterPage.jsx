import { useState } from "react";

//assets
import photo from "../assets/reg-image.png";
import Button from "../components/Button";
import Modal from "../components/Modal";
//style
import "./RegisterPage.css";

const RegisterPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(true);
  };
  return (
    <main className="register-page">
      <div className="register-page-image">
        <img src={photo} alt="reg photo" />
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register</h1>

        <p>Be part of this movement!</p>

        <h2>CREATE YOUR ACCOUNT</h2>

        <div className="register-form-input">
          <div>
            <label>Team’s Name</label>
            <input
              type="text"
              placeholder="Enter the name of your group"
              autoComplete="off"
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="register-form-input">
          <div>
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              autoComplete="off"
            />
          </div>

          <div>
            <label>Project Topic</label>
            <input
              type="text"
              placeholder="What is your group project topic"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="register-form-input">
          <div>
            <label>Category</label>
            <select>
              <option value="">Selected your category</option>
            </select>
          </div>

          <div>
            <label>Phone</label>
            <select>
              <option value="">Select</option>
            </select>
          </div>
        </div>

        <span>Please review your registration details before submitting</span>

        <div className="register-form-check">
          <input type="checkbox" name="" id="terms" />
          <label htmlFor="terms">
            I agreed with the event terms and conditions and privacy policy
          </label>
        </div>

        <Button className="register-form-btn">Register Now</Button>
      </form>

      {showModal && <Modal />}
    </main>
  );
};

export default RegisterPage;
