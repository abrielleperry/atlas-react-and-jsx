import React from "react";
import links from "../assets/links.json"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
   
      <p>© {currentYear} Atlas School</p>
    </footer>
  );
}
