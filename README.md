# Screen it

A movie list application to track the movies we’ve seen and add ratings for each of them.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes and decisions

- The `data.js` file is acting in lieu of an actual API endpoint, which would be hitting a database in an actual project. The API call functionality used by the presentational components is intended to abstract away this layer. While new movies can be added locally in this version, they don't persist across page refresh, so the ability to add movies is more like a proof of concept than a fully functional application here.
- A form library (i.e. [Formik](https://formik.org/)) would be immensely helpful for improving data validation and form experience. I didn't add one of these for the sake of time and simplicity.
- I kept most sizes are in rems rather than absolute values, for scaling and accessibility purposes.
- There is one discrepancy with the design that I chose not to fix - the Harry Potter film in the design is abbreviated as HPS on the avatar. I included the full movie name in my data, so it ends up abbreviated as HPSS. I decided this was probably a design choice for the sake of demonstration, but as a Harry Potter fan, I chose to go for title accuracy. Also to see what happened with an unshown edge case (longer acronym). It held up.

## Ideas for future improvements

- I really wanted to add sorting to the movie list view. The default view puts the newest movies at the top of the list. I'd love to be able to sort alphabetically, by genre, by rating, and maybe even filter by some of these categories.

## Available scripts

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
