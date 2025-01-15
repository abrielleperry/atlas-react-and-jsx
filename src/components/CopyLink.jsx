import React from "react";
import CopySVG from "../assets/copy.svg";

export default function CopyLink({ link }) {
  function handleCopy() {
    navigator.clipboard.writeText(link);
  };
  return (
    <img src={CopySVG} alt="Copy link" className="copy" onClick={handleCopy}
    />
  );
}
