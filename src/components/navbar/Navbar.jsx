import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from '../../assets/logo.svg'	
// BEM -> BLOCK ELEMENT MODIFIER

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt='logo' />


        </div>
<div className="gpt3__navbar-links_container">
  <p> <a href="#home"> Home  </a></p>
  <p> <a href="#wgpt3"> What is GPT?  </a></p>
  <p> <a href="#possibility"> Open AI  </a></p>
  <p> <a href="#features"> Case studies  </a></p>
  <p> <a href="#blog"> Library </a></p>

 
</div>
      </div>
<div className="gpt3__navbar-sign">
<p> Sign in</p>

<button type="button"> Sign up</button>
</div>
    </div>
  );
};





export default Navbar;
