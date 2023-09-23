import { useState } from "react";
import { useRegister } from "../hooks/useRegister";

//assets
import photo from "../assets/reg-image.png";
import Button from "../components/Button";
import Modal from "../components/Modal";
//style
import "./RegisterPage.css";

const RegisterPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [team_name, setTeam_name] = useState("");
  const [group_size, setGroup_size] = useState(1);
  const [project_topic, setProject_topic] = useState("");
  const [category, setCategory] = useState(1);
  const [privacy_poclicy_accepted, setPrivacy_poclicy_accepted] =
    useState(true);

  const { register } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();

    const reg = async () => {
      await register(
        email,
        phone_number,
        team_name,
        group_size,
        project_topic,
        category,
        privacy_poclicy_accepted
      );
    };

    reg();

    setShowModal(true);
  };

  return (
    <main className="register-page">
      <div className="register-page-image">
        <img src={photo} alt="reg photo" />
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-form-con">
          <h1>Register</h1>

          <p>Be part of this movement!</p>

          <h2>CREATE YOUR ACCOUNT</h2>

          <div className="register-form-input">
            <div className="reg-one">
              <label>Team’s Name</label>
              <input
                type="text"
                placeholder="Enter the name of your group"
                autoComplete="off"
                value={team_name}
                onChange={(e) => setTeam_name(e.target.value)}
              />
            </div>

            <div className="reg-one">
              <label>Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                autoComplete="off"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
              />
            </div>
          </div>

          <div className="register-form-input">
            <div className="reg-one">
              <label>Email address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="reg-one">
              <label>Project Topic</label>
              <input
                type="text"
                placeholder="What is your group project topic"
                autoComplete="off"
                value={project_topic}
                onChange={(e) => setProject_topic(e.target.value)}
              />
            </div>
          </div>

          <div className="register-form-select">
            <div className="reg-one">
              <label>Category</label>
              <select
                className="select-one"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {Array.from({ length: 3 }, (_, i) => i + 1).map((num) => (
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="reg-one">
              <label>Group size</label>
              <select
                className="select-two"
                value={group_size}
                onChange={(e) => setGroup_size(e.target.value)}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <span>Please review your registration details before submitting</span>

          <div className="register-form-check">
            <input
              type="checkbox"
              id="terms"
              value={privacy_poclicy_accepted}
              onChange={(e) => setPrivacy_poclicy_accepted(e.target.value)}
            />
            <label htmlFor="terms">
              I agreed with the event terms and conditions and privacy policy
            </label>
          </div>

          <Button className="register-form-btn">Register Now</Button>
        </div>
      </form>

      {showModal && <Modal />}
    </main>
  );
};

export default RegisterPage;
