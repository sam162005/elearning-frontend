import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logoImage from "../../images/logo-removebg-preview.png"; // Import your logo image

const Header = ({ isAuth, user }) => {
  return (
    <header>
      <div className="logo">
        <img src={logoImage} alt="MentOur Logo" className="logo-image" />
        MentOur
      </div>

      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
