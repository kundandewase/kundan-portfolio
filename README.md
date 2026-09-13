# Kundan Dewase — Portfolio ⚡️

A clean, responsive personal developer portfolio, built on top of the open-source [DeveloperFolio](https://github.com/) React template.

Personal content lives in `src/portfolio.js`. Theme colors live in `src/_globalColor.scss`.

## Portfolio Sections
✔️ Summary and About me\
✔️ Skills\
✔️ Education\
✔️ Projects\
✔️ Open Source Projects Connected with GitHub\
✔️ Achievements and Certifications 🏆\
✔️ Contact me\
✔️ GitHub Profile

## Getting Started

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed, or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

### Docker Commands

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 developerfolio:latest
```

## How To Use

```bash
# Go into the project folder
cd developerFolio-master

# Setup default environment variables
cp .env.example .env

# Install dependencies
npm install

# Run the app in dev mode
npm start

# Build for production
npm run build
```

The app runs at `http://localhost:3000/`.

## Linking Portfolio to GitHub

To pull GitHub project data automatically, set `USE_GITHUB_DATA=true` and `GITHUB_USERNAME=kundandewase` in your `.env` file, and optionally add a GitHub personal access token as `GITHUB_TOKEN` to avoid rate limits.

## Editing Content

All personal content (name, bio, skills, education, projects, achievements, contact info, social links) lives in `src/portfolio.js` — edit this file directly to update the site.

## Deployment

This project can be deployed to any static host that supports a React build — Vercel, Netlify, GitHub Pages, etc. Run `npm run build` and deploy the contents of the `build/` folder, or use the included `gh-pages` script:

```bash
npm run deploy
```

## Technologies Used

- [ReactJS](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [React Reveal](https://www.react-reveal.com/)
