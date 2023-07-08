# About

This is a site with information about users in tabular format. It has control of table fields using a modal window with D&D implementation.

## Preparation.

1. Make sure you have the LTS version of Node.js installed on your computer.
   Install her, if necessary.
2. Clone this repository.
3. Install the project's base dependencies with the `npm install` command or
   `yarn install`.
4. Start development mode by running `npm start` or `yarn start`.
5. Open http://localhost:3000/users-table to view it in the browser. The
   page will automatically reload if you make changes to the code. You will see
   the build errors and lint warnings in the console.
6. `npm test` or `yarn test` command runs the test watcher in an interactive
   mode. By default, runs tests related to files changed since the last commit.
7. `npm run build` or `yarn build` command builds the app for production to the
   build folder. It correctly bundles React in production mode and optimizes the
   build for the best performance. The build is minified and the filenames
   include the hashes. App is ready to be deployed.

## Live page

The production version of the project is automatically linted, built, and
deployed to GitHub Pages, in the gh-pages branch, every time the main branch is
updated. For example, after a direct push or an accepted pull request.

The live page can be viewed at
"https://khodetsky.github.io/users-table/".

## How it works

1. After each push to the `main` branch of the GitHub repository, a special
   script (GitHub Action) from `.github/workflows/deploy.yml` file.
2. All repository files are copied to the server where the project is
   initialized and passes linting and assembly before deployment.
3. If all steps were successful, the assembled production version of the project
   files goes to the `gh-pages` branch. Otherwise, in the execution log The
   script will indicate what the problem is.
