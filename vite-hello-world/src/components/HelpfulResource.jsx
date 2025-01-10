import React from "react";
import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

function HelpfulResource({ link, label }) {
  return (
    <div className="helpful-resource">
      {label}
      <OpenLink.link />
      <CopyLink.link />
    </div>
  );
}

export default HelpfulResource;
