import React from "react";
import OpenSVG from "../assets/open.svg";

function OpenLink({ link }) {
  function handleClick() {
    window.open(link, '_blank');
  }

  return (
    <a href="{link}" target="_blanc" onClick={{handleClick}}>
      <img src={OpenSVG} alt="Open link" />
    </a>
  );
}

export default OpenLink;
