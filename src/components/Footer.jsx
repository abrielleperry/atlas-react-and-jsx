import React from "react";
import links from "../assets/links.json"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <ul>
        {links.map((link, index) => (
        <li key={index}>
          <a href={link.link} target="_blank">{link.label}</a>
        </li>
        ))}
      </ul>
      <p>© {currentYear} Atlas School</p>
    </footer>
  );
}
