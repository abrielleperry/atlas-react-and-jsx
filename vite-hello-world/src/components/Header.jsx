import React from "react";
import Greeting from "./Greeting"
import SocialLinks from "./SocialLinks"

function Header() {
  return (
  <div className="header">
    <nav>
      <Greeting />
      <SocialLinks />
    </nav>
  </div>)
}

export default Header;
