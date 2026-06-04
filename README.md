<h1 align="center">GitHub Profile Finder</h1>

<div align="center">
   Solution for a challenge <a href="https://devchallenges.io/challenge/github-profile" target="_blank">GitHub Profile</a> from <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="#">
      Demo
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/solution/67268">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenge/github-profile">
      Challenge
    </a>
  </h3>
</div>

## Table of Contents

- [Overview](#overview)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Built with](#built-with)
- [Features](#features)
- [Installation](#installation)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Overview

A modern, responsive web application that allows users to search for any GitHub profile and view their detailed statistics and top repositories. The application focuses on high performance, a seamless user experience, and strict adherence to the provided design.

### What I learned

During the development of this project, I focused on several advanced React and Frontend concepts:

- **API Integration & Optimization**: Implemented real-time search suggestions using a **Debounce** technique to avoid hitting the GitHub API rate limits.
- **Asynchronous State Management**: Coordinated multiple API calls (`Promise.all`) to fetch user profile and repositories simultaneously, reducing load time.
- **Race Condition Prevention**: Used a cleanup variable (`isMounted`) within `useEffect` to ensure that outdated API responses don't overwrite the state if the user changes the search term rapidly.
- **Dynamic Date Formatting**: Integrated `date-fns` to transform ISO timestamps from the GitHub API into human-readable relative time (e.g., "updated 2 days ago").
- **Advanced CSS Layouts**: Leveraged **CSS Grid** for the repositories gallery and **Flexbox** for the profile header, ensuring a pixel-perfect responsive design across mobile, tablet, and desktop.

### Useful resources

- [GitHub REST API Documentation](https://docs.github.com/en/rest) - Essential for understanding the data structure of users and repositories.
- [date-fns Documentation](https://date-fns.org/) - Used for professional date manipulation.
- [Vite Guide](https://vitejs.dev/guide/) - For a fast and optimized development environment.

## Built with

- **React** (Vite)
- **CSS3** (Custom Properties, Grid, Flexbox)
- **GitHub API**
- **date-fns** (for date formatting)
- **Semantic HTML5**

## Features

- **Real-time Suggestions**: A dynamic dropdown that appears as you type, providing a quick preview of the user.
- **Detailed Profile**: Displays avatar, name, bio, location, and followers/following counts.
- **Top Repositories**: Showcases the top 4 repositories with their language and star count.
- **Fully Responsive**: Seamlessly adapts to different screen sizes.
- **Robust UX**: Includes loading indicators and error handling for non-existent users.

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/bechagas/github-profile-finder.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Author

- GitHub [@bechagas](https://github.com/bechagas)

## Acknowledgements

- [devChallenges.io](https://devchallenges.io) for the amazing challenge and design assets.
