# Counter App

Build a simple counter app — first in vanilla JavaScript, then in React. By starting with plain JS, you'll experience the problems React was designed to solve: keeping the UI in sync with state, verbose DOM manipulation, and scattered side effects. Then rebuild the same counter in React, learning JSX, components, state, and effects along the way.

## Project Structure

This repo contains two apps, each in its own subdirectory:

- `counter-vanilla/` — A counter built with plain HTML/CSS/JavaScript
- `counter-react/` — The same counter rebuilt with React

## Running the Apps

Both apps use [Vite](https://vite.dev/) as the dev server. Each must be run from its own directory.

### Vanilla JS

```sh
cd counter-vanilla
pnpm install
pnpm dev
```

### React

```sh
cd counter-react
pnpm install
pnpm dev
```

## Learning Objectives

- Build a counter in vanilla JS and identify the pain points
- Set up a React project with Vite
- Create and compose React components using JSX
- Use useState and useEffect to manage state and side effects
