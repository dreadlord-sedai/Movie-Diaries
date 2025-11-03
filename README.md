# Movie Diaries

Movie Diaries is a small React application for keeping a personal log of movies you've watched. Add movies, give them a star rating, and keep short notes. The app uses custom hooks and localStorage so your diary persists in the browser.

## Key features

- Add movies with title, year and short notes
- Rate movies with an interactive star rating component
- Persisted locally using `localStorage` (no backend required)
- Keyboard shortcuts (via `useKey`) and small reusable hooks
- Small, component-focused codebase — easy to read and extend

## Tech stack

- React 19 (Create React App / `react-scripts`)
- Vanilla CSS for styling
- Custom React hooks: `useLocalStorageState`, `useMovies`, `useKey`
- Testing libraries included in `package.json` (via Create React App)

## Project structure (important files)

- `public/` — static HTML, manifest and other public assets
- `src/` — application source
  - `src/App.js` — main app container
  - `src/index.js` — app entry
  - `src/StarRating.js` — star rating component
  - `src/useLocalStorageState.js` — hook for syncing state to localStorage
  - `src/useMovies.js` — hook for movie list management
  - `src/useKey.js` — hook for keyboard shortcuts
  - `src/index.css` — app styles
- `final/` — a packaged/alternate version (see `final/README.md` if present)

If you're browsing the repo, you'll also find `App-v1.js`, `App-v2.js`, `App-v3.js` — these are earlier iterations kept for reference.

## Prerequisites

- Node.js (14+ recommended) and npm

## Getting started (development)

Open a terminal in the project root (`d:/My Projects/Projects/movie-diaries`) and run:

```powershell
npm install
npm start
```

This runs the app in development mode using Create React App's dev server. Open http://localhost:3000 in your browser.

## Build for production

To create an optimized production build, run:

```powershell
npm run build
```

After the build completes, the static files will be in the `build/` folder. To serve the production build locally you can run (no global installs required):

```powershell
npx serve -s build
```

## Tests

Run the test runner with:

```powershell
npm test
```

(This project uses the testing setup bundled with Create React App.)

## How to use the app

- Add a new movie using the form in the main UI.
- Click the stars to set a rating (component lives at `src/StarRating.js`).
- Notes and movies are saved automatically to localStorage via `useLocalStorageState`.
- Use keyboard shortcuts (if present) to focus the add-form or navigate the list — the hook is `src/useKey.js`.

Because the app stores data in your browser's localStorage, clearing site data or running in incognito/private mode may remove saved movies.

## Troubleshooting

- If the dev server doesn't start, check that no other process is using port 3000.
- If changes don't appear, make sure you saved files and that the console doesn't show build errors.
- If you see issues with localStorage (e.g., full or disabled), the app may not be able to persist movies; check browser settings.

## Contributing

Small, focused contributions are welcome. Recommended workflow:

1. Fork or branch the repo.
2. Add a descriptive commit and test manually in development mode.
3. Open a pull request describing the change.

If you plan larger changes (new persistence, authentication, or refactor to TypeScript), open an issue first to discuss the approach.

## License

No license file is included in this repository. Add a `LICENSE` file to indicate terms for reuse.

## Contact / Questions

If you want help extending the app, documenting specific components, or adding tests, open an issue or contact the repo owner.

---

Happy coding — enjoy tracking your movie diary!
