import React from "react";
import { Link } from 'react-router-dom';

export function OpenLink( {link} ) {
  <Link to={link} target="_blank" rel="noopener noreferrer" >
    <img src={require("../assets/open.svg")} alt="Open link" />
  </Link>
}

export default OpenLink;
