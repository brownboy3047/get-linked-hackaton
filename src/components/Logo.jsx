import { Link } from "react-router-dom";

import logo from "../assets/getlinked.png";

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
