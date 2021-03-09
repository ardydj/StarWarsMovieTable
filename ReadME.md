# StarWarsMovieTable

StarsWarsMovieTable is a React app that loads the six Star Wars movies into a table after making an API call to https://swapi.dev/api/films/. 
The app renders a Skeleton when the data from the API call is still loading. Once the data is loaded, the Skeleton is replaced by the Table with the appropriate entries. 

## Installation

Use NPM to install dependencies. 

```bash
npm install
```

## Usage

```bash
npm start
npm build
```

## Testing

The test script includes the --watchAll flag which will rerun the tests after saving a file. 

```bash
npm test
```

## Comments

My component names are a little long because names like TableBody, Skeleton, TableRow were already taken by Material-UI components. In order to not have duplicate names but still have modular components, I created components with names such as TableBodyComponent. 

This solves the issue of duplicate component names, but also lets me create small components that isolate each part of the UI. 

## Next Steps

- Implement the Bonus sorting feature with its associated test suite. I would create a feature-branch that I would merge back into master once the functionality works as expected. 

- Make the UI responsive by using CSS Grid to define the left and right margins for both the skeleton and table. 
- Make Table layout flexible to movie lists containing more than 6 movies and hide the additional movies behind a pagination
- Refactor output for broken API to also include an error section that can be expanded if user wants to see error in 404 response. Currently table has an entry stating "No Movies Found"




![50wztg](https://user-images.githubusercontent.com/63879420/110398672-4c3a0600-8042-11eb-936e-fb108abd8ea6.gif)
