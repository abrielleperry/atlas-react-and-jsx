import React from "react";
import Header from "./components/Header"
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";




function App() {
  return (
    <div className="app">
      Hello Atlas
        <Header />
        <Section title="What is react?">
          React is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications where a dynamic and responsive user experience is essential. It allows developers to create reusable UI components that manage their own state and can be composed to build complex user interfaces.
        </Section>
        <Section title="Benefits of React?">
          <ul>
            <li>Component-Based Architecture</li>
            <li>Virtual DOM</li>
            <li>Declarative Syntax</li>
            <li>Strong Ecosystem</li>
            <li>Powerful and Flexible Framework</li>
          </ul>
        </Section>
        <Section title="Helpful Resourses">
          <HelpfulResource link="https://scrimba.com/learn/learnreact" label="Scrimba - Learn React" />
          <HelpfulResource link="https://www.w3schools.com/react/react_jsx.asp" label="W3 - React JSX" />
          <HelpfulResource link="https://www.freecodecamp.org/news/how-to-handle-events-in-react-19/" label="How to Handle Events in React" />
          <HelpfulResource link="https://react.dev/learn" label="Offical Documentation" />
          <HelpfulResource link="https://www.geeksforgeeks.org/react/" label="Geeks for Geeks - React" />
        </Section>
        <AboutMe />
    </div>
  )
}

export default App;
