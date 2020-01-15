# On Demand Tv mock Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project setup
- Functional `react` and `redux` for setting up the state structure including usage of `react-hooks`
- Extensive use of `Typescript` to complete the type definitions and maintain consistency
- `axios` and `redux-thunk` to manage the state calls
- `styled-components` to help reduce or eliminate dead-code `css` and bundling only what is required during building. Different screenSizes and breakpoints to make the app function responsively including `image-size` loading the respective one as per the screen size.
- `memoization` with React and `reselect` for use selectors with `redux-store` and helping in caching

## Architecture
- Every `module` is built with the idea of `reusability` being at the core of it. Each of them come with their own `helper functions`, `styles`, `interface`, `actions` and reducers
- Typescript helps in structuring reduce and components more simply maintaining consistency and eliminating erronous values being passed
- `Hooks` help in making Functional Components in React making code-resuablity and readability higher
- Facilitating caching with `React.memo` and `reselect` to improve performance and prevent re-painting of DOM on props change unless required.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
