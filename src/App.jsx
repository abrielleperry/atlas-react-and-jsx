import React from "react";
import Header from "./components/Header"
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="app">
        <Header />
        <Section title="What is react?">
          React is a JavaScript library that facilitates the development of user interfaces, particularly for single page applications. It allows developers to build reusable UI components that independently manage their state, which can then be combined to create complex user interfaces. React is optimized for speed and efficiency, using a virtual DOM to enhance rendering performance. Its main advantages lie in its component based architecture, flexibility, and strong focus on performance and user experience.        </Section>
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
        <Footer />
    </div>
  )
}

export default App;
