import Accordion from "../components/Accordion";
import BigIdea from "../landing/BigIdea";
import Hero from "../landing/Hero";
import Judge from "../landing/Judge";
// import Partners from "../landing/Partners";
import Policy from "../landing/Policy";
import Prize from "../landing/Prize";
import Rules from "../landing/Rules";

//assets
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="home-page">
      <Hero />
      <BigIdea />
      <Rules />
      <Judge />
      <Accordion />
      <Prize />
      {/* <Partners /> */}
      <Policy />
    </main>
  );
};

export default HomePage;
