import React from "react";
import styled from "styled-components";
import "./index.css";
import Logo from "../../images/Coforge-logo-Coral-White.svg";

const Header = () => {
  return (
    <div class="headercontainer">
      <img src={Logo} alt="Logo" />
      <p id="headerText">
        <span id="DLX">DLX</span>
        <span id="press">press</span> <span id="development">Developer</span>
      </p>
    </div>
  );
};
export default Header;
