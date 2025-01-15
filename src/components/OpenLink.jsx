import React from "react";
import OpenSVG from "../assets/open.svg";

export default function OpenLink({ link }) {
  function handleClick() {
    window.open(link, '_blank');
  }

  return (
    <a href={link} target="_blank" onClick={handleClick}>
      <img src={OpenSVG} alt="Open link" />
    </a>
  );
}
