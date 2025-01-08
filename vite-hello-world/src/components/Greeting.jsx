import React from "react"
import day from "../assets/day.svg"
import evening from "../assets/evening.svg"
import night from "../assets/night.svg"


function Greeting() {

  const currentTime = new Date().getHours()

  const greeting = (currentTime >= 6 && currentTime < 12) ? "Good Morning!" :
  (currentTime >= 12 && currentTime < 17) ? "Good Afternoon!" :
  (currentTime >= 17 && currentTime < 21) ? "Good Evening!" :
  "Good Night!";

  const image =
  (currentTime >= 6 && currentTime < 12) ? day :
  (currentTime >= 12 && currentTime < 17) ? day :
  (currentTime >= 17 && currentTime < 121) ? evening :
  night;


  return (
  <h1 className="greeting">
    <img src={image} alt="greeting" /> {greeting}
  </h1>
  );
}


export default Greeting;
