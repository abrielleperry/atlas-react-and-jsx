import React from "react";
import CopySVG from "../assets/copy.svg";

function CopyLink({ link }) {
  return (
    <img src={CopySVG} alt="Copy link" className="copy" />
  )
}

export default CopyLink;
