# Screen it

A movie list application to track the movies we’ve seen and add ratings for each of them

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes and decisions

- The `data.js` file is acting in lieu of an actual API endpoint, which would be hitting a database in an actual project. The API call functionality used by the presentational components is intended to abstract away this layer.
- Most sizes are in rems rather than absolute values, for scaling and accessibility purposes

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
