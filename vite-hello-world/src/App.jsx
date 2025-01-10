import React from "react";
import Header from "./components/Header"
import Section from "./components/Section";



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
    </div>
  )
}

export default App;
