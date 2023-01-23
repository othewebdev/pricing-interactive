import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div>
      <div className="HeaderContainer">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>{" "}
      </div>
      <div className="MobileHeaderContainer">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial</p>
        <p>. No credit card required.</p>
      </div>
    </div>
  );
};

export default Header;
