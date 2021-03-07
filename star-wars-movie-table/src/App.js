import './App.css';
import TableComponent from './components/TableComponent.js';
import { useQuery } from 'react-query';
const axios = require('axios');

function App() {
  const { isLoading, isError, data, error } = useQuery('movies', () =>
    axios.get('https://swapi.dev/api/films/')
  );

  if (isLoading) {
    return (
      <div>...is Loading</div>
    );

  } else {
    return (
      <div className="App">
        <h1>Star Wars Movie Table</h1>
        <TableComponent movieData={data.data}/>
      </div>
    );
  }
}

export default App;
