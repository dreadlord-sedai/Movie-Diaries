# Movie Diaries

![Movie Diaries App Screenshot](s1.png)

## Table of Contents

- [Movie Diaries](#movie-diaries)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Introduction

Movie Diaries is a personal movie tracking application built with React. It helps you maintain a digital diary of movies you've watched, complete with ratings and personal notes. The app uses modern React features and custom hooks for state management and local storage persistence, making it a perfect tool for movie enthusiasts who want to keep track of their viewing history.

## Features

- Add movies with title, release year, and personal notes
- Rate movies using an interactive star rating system
- Persistent storage using browser's localStorage
- Keyboard shortcuts for quick navigation and data entry
- Responsive design that works on both desktop and mobile
- Clean, intuitive user interface
- Custom React hooks for state management and keyboard interactions

## Technologies Used

- **React**: Modern React (v19) with hooks for component architecture and state management
- **CSS3**: Pure CSS with modern features for styling and responsiveness
- **JavaScript (ES6+)**: Modern JavaScript for app logic and custom hooks
- **LocalStorage API**: Browser's built-in storage for data persistence
- **Create React App**: Development and build tooling

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40" height="40"/>
</p>

## Installation

To get started with Movie Diaries, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/dreadlord-sedai/Movie-Diaries.git
   ```

2. **Navigate to the project directory**:

   ```sh
   cd Movie-Diaries
   ```

3. **Install dependencies**:

   ```sh
   npm install
   ```

4. **Start the development server**:
   ```sh
   npm start
   ```

The app will open in your default browser at `http://localhost:3000`.

## Usage

1. **Adding a Movie**:

   - Click the "Add Movie" button or use the form at the top
   - Enter the movie title, year, and any personal notes
   - Use the star rating component to rate the movie

2. **Rating Movies**:

   - Click on the stars to set your rating
   - Ratings are automatically saved

3. **Managing Your List**:

   - All entries are automatically saved to localStorage
   - Use keyboard shortcuts to navigate through your list
   - Edit or delete entries as needed

4. **Building for Production**:
   ```sh
   npm run build
   npx serve -s build
   ```

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch:
   ```sh
   git checkout -b feature/amazing-feature
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/amazing-feature
   ```
5. Open a pull request

For major changes:

- Open an issue first to discuss what you would like to change
- Ensure tests pass and add new ones for your features
- Update documentation as needed

## License

This project is currently unlicensed. Please contact the repository owner for usage permissions.

## Contact

For questions, feedback, or collaboration:

- **Created by**: Dahami Fabio
- **Email**: [dahamifabbio@gmail.com](mailto:dahamifabbio@gmail.com)
- **GitHub**: [dreadlord_sedai](https://github.com/dreadlord-sedai)

---

Project Structure:

```
movie-diaries/
├── src/
│   ├── components/      # React components
│   │   ├── Box.js
│   │   ├── ErrorMessage.js
│   │   ├── Loader.js
│   │   ├── Logo.js
│   │   ├── Main.js
│   │   ├── Movie.js
│   │   ├── MovieDetails.js
│   │   ├── MovieList.js
│   │   ├── NavBar.js
│   │   ├── NumResults.js
│   │   ├── WatchedMovie.js
│   │   ├── WatchedMovieList.js
│   │   └── WatchedSummary.js
│   ├── hooks/          # Custom React hooks
│   │   ├── useKey.js
│   │   ├── useLocalStorageState.js
│   │   └── useMovies.js
│   ├── App-v1.js       # App iterations
│   ├── App-v2.js
│   ├── App.js          # Main application component
│   ├── StarRating.js   # Star rating component
│   ├── index.css       # Global styles
│   └── index.js        # Application entry point
└── public/
    ├── index.html      # HTML template
    └── robots.txt      # SEO configuration
```
