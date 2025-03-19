<div align="center" id="top">
  <img src="./.github/app.gif" alt="Atlas React And Jsx" />

&#xa0;

  <!-- <a href="https://atlasreactandjsx.netlify.app">Demo</a> -->
</div>

<h1 align="center">Atlas React And Jsx</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/abrielleperry/atlas-react-and-jsx?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/abrielleperry/atlas-react-and-jsx?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/abrielleperry/atlas-react-and-jsx?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/abrielleperry/atlas-react-and-jsx?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/abrielleperry/atlas-react-and-jsx?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/abrielleperry/atlas-react-and-jsx?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/abrielleperry/atlas-react-and-jsx?color=56BEB8" /> -->
</p>

<!-- Status -->

# atlas-react-and-jsx

A modern React application demonstrating fundamental concepts of component-based architecture, JSX syntax, and reusable UI components. Built with Vite for fast development and optimized builds.

[Live Demo](https://atlas-react-and-jsx-aperry.netlify.app)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Overview

**atlas-react-and-jsx** is a single-page React application built to showcase modular and reusable components. It provides dynamic greetings, social media links, informative sections, helpful resources, an about-me section, and a footer with dynamically generated content.

---

## Features

- Dynamic Greeting based on time of day
- Social media links with icons (LinkedIn, GitHub)
- Informational sections with flexible content via props
- Helpful resources with copy-to-clipboard and external link functionality
- Personal About Me section with profile and bio
- Footer with dynamic year and JSON-driven links
- Responsive and fast development with Vite
- Fully deployed and accessible online

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abrielleperry/atlas-react-and-jsx.git
   ```
2. Navigate to the project directory:
   ```bash
   cd atlas-react-and-jsx
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Usage

- Customize your **Greeting**, **Social Links**, and **About Me** sections in their respective components.
- Add or update helpful resources in `App.jsx` under the `Helpful Resources` section.
- Modify external links for the footer by editing the `assets/links.json` file.

---

## Project Structure

```
atlas-react-and-jsx/
├── public/
├── src/
│   ├── assets/
│   │   ├── day.svg
│   │   ├── evening.svg
│   │   ├── night.svg
│   │   ├── linkedin.svg
│   │   ├── github.svg
│   │   ├── open.svg
│   │   ├── copy.svg
│   │   └── links.json
│   ├── components/
│   │   ├── Greeting.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── Header.jsx
│   │   ├── Section.jsx
│   │   ├── OpenLink.jsx
│   │   ├── CopyLink.jsx
│   │   ├── HelpfulResource.jsx
│   │   ├── AboutMe.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## Components

| Component             | Description                                                                       |
| --------------------- | --------------------------------------------------------------------------------- |
| `Greeting.jsx`        | Displays a dynamic greeting message and icon based on the current time of day.    |
| `SocialLinks.jsx`     | Displays social icons (LinkedIn, GitHub) linking to external profiles.            |
| `Header.jsx`          | Wraps the Greeting and SocialLinks components inside a `nav` element.             |
| `Section.jsx`         | Generic section component that takes a title prop and renders children content.   |
| `HelpfulResource.jsx` | Displays resource links with options to open or copy to clipboard.                |
| `OpenLink.jsx`        | Opens a given URL in a new tab.                                                   |
| `CopyLink.jsx`        | Copies a given link to the user’s clipboard.                                      |
| `AboutMe.jsx`         | Displays a profile picture and bio information.                                   |
| `Footer.jsx`          | Renders a list of external links from `links.json` and displays the current year. |

---

## Deployment

This project is deployed and accessible on Netlify:
🔗 [https://atlas-react-and-jsx-aperry.netlify.app](https://atlas-react-and-jsx-aperry.netlify.app)

To deploy your own version:

1. Push your repository to GitHub.
2. Connect your GitHub repo to Netlify.
3. Set the build command to:
   ```
   npm run build
   ```
4. Set the publish directory to:
   ```
   dist
   ```

---

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/)
- [Netlify](https://www.netlify.com/)
- [React Developer Tools](https://react-devtools-tutorial.netlify.app/)

---

## Author

**Abrielle Perry**

- GitHub: [abrielleperry](https://github.com/abrielleperry)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)

<!-- <h4 align="center">
	🚧  Atlas React And Jsx 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/abrielleperry" target="_blank">Author</a>
</p>

<br>

## :dart: About

Describe your project

## :sparkles: Features

:heavy_check_mark: Feature 1;\
:heavy_check_mark: Feature 2;\
:heavy_check_mark: Feature 3;

## :rocket: Technologies

The following tools were used in this project:

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/abrielleperry/atlas-react-and-jsx

# Access
$ cd atlas-react-and-jsx

# Install dependencies
$ yarn

# Run the project
$ yarn start

# The server will initialize in the <http://localhost:3000>
```

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/abrielleperry" target="_blank">{{YOUR_NAME}}</a>

&#xa0;

<a href="#top">Back to top</a>
