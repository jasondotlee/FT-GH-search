# GitHub Searcher

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Libraries Used

[React](https://reactjs.org/)

[React-Query](https://react-query.tanstack.com/overview)

[Lodash](https://docs-lodash.com/v4/)

[Axios](https://docs-lodash.com/v4/)

## Notes

- For this implementation, Redux and React router were not chosen. It seemed that both would add unnecessary overhead for the task at hand.

  - Instead, `React-Query` was introduced in order to manage queries and state with a smaller and cleaner footprint.

- V1 of this project was done in GatsbyJS. This was quickly abandoned after it was determined that the static generator was too opinionated. `Create React App` was used instead.

  - While there is some added functionality that Gatsby offers out of the box, it comes at a cost of time and energy reverting unwanted choices that are already made.

- The project uses React hooks and functional components rather than classical React components.

- The organizational pattern decisions for files and directories were made with readability and ease of navigation in mind.
  
- All items under "Other Suggestions" are implemented.
  - Lodash was brought in for debouncing data fetching.