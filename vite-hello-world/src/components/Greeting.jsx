import React from "react"
import day from "../assets/day.svg"
import evening from "../assets/evening.svg"
import night from "../assets/night.svg"


function Greeting() {

  const currentTime = new Date().getHours()

  greeting = {
  (currentTime >= 6 && currentTime < 12:) ? “Good Morning!”:
  (currentTime >= 6 && currentTime < 12:) ? “Good Afternoon!”:
  (currentTime >= 6 && currentTime < 12:) ? “Good Evening!”:
  “Good Night!”;
  }

    image = {
  (currentTime >= 6 && currentTime < 12:) ? `src/assets/day.svg`:
  (currentTime >= 6 && currentTime < 12:) ? `src/assets/day.svg`:
  (currentTime >= 6 && currentTime < 12:) ? `src/assets/evening.svg`:
  src/assets/night.svg;
  }


  return <h1 className="greeting">
    <img src={logo} alt="logo" /> {greeting}
  </h1>
}


export defualt Header;
