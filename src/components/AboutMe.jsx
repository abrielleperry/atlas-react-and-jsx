import React from "react";
import Me from "../assets/me.jpg"

export default function AboutMe() {
  return (
    <div className="about-me">
      <img src={Me}/>
      <p>
        Hi there! I'm Abrielle Perry. I'm currently completing a Diploma in Computer Science and Fullstack Web Development at Atlas in T5. Though I'm most passionate about Front-End Development, my favorite languages and technologies are well-rounded and include jQuery, MongoDB, SQL, Flask, Bootstrap, Plotly, MATLAB, and CSS. Upon graduating, my goal is to collaborate with businesses to develop and improve websites that enhance performance, user experience, and functionality, while delivering tailored solutions to meet strategic objectives. By leveraging my ability to understand user needs and business goals, I aim to contribute to the overall success of projects and drive measurable results for clients. In my free time, I enjoy using my Ohuhu markers in my Bobbie Goods coloring book, exploring graphic design trends, playing Animal Crossing on my Switch, gardening, creating in Adobe Illustrator, and dining at new places with friends.
      </p>
    </div>
  );
}
