import './App.css';
import TableComponent from './components/TableComponent.js';
import SkeletonComponent from './components/SkeletonComponent.js';
import EmptyTableComponent from './components/EmptyTableComponent.js';
import { useQuery } from 'react-query';
const axios = require('axios');

function App() {
  const { isLoading, isError, data, error } = useQuery('movies', () =>
    axios.get('https://swapi.dev/api/films/')
  );

  if (isLoading) {
    return (
      <SkeletonComponent />
    );

  } else {
    return (
      <div className="App">
        <h1>Star Wars Movie Table</h1>
        {isError ? <EmptyTableComponent /> : <TableComponent movieData={data.data}/>}
      </div>
    );
  }
}

export default App;
