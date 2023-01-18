# Screen it

A movie list application to track the movies we’ve seen and add ratings for each of them.

To use it locally, clone the repo, `npm install`, and run `npm start` to see the app at <http://localhost:3000>.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes

- The `data.js` file combined with local storage is acting in lieu of an actual API endpoint, which would be hitting a database in an actual project. The API call functionality used by the presentational components is intended to abstract away this layer.
- A form library (i.e. [Formik](https://formik.org/)) would be immensely helpful for improving data validation and form experience. I didn't add one of these for the sake of time and simplicity.
- I kept most sizes are in rems rather than absolute values, for scaling and accessibility purposes.
- There is one discrepancy with the design that I chose not to fix - the Harry Potter film in the design is abbreviated as HPS on the avatar. I included the full movie name in my data, so it ends up abbreviated as HPSS. I decided this was probably a design choice for the sake of demonstration, but as a Harry Potter fan, I chose to go for title accuracy. Also to see what happened with an unshown edge case (longer acronym). It held up. :-)

## Ideas for future improvements

- I really wanted to add sorting to the movie list view. The default view puts the newest movies at the top of the list. I'd love to be able to sort alphabetically, by genre, by rating, and maybe even filter by some of these categories.
- I'd like to incorporate handling for swipe events so movies can be edited and deleted. I've used [this library](https://github.com/jerrybendy/react-touch-events) before.
- This app can be used by a keyboard only, but I would like to test out and further improve the a11y experience.
- More consideration for desktop view, if this is not intended to be a mobile-only app.

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
