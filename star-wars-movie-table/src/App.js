import './App.css';
import TableComponent from './components/TableComponent.js';
import { useQuery } from 'react-query';
import { Skeleton } from '@material-ui/lab';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
const axios = require('axios');

function App() {
  const { isLoading, isError, data, error } = useQuery('movies', () =>
    axios.get('https://swapi.dev/api/films/')
  );

  if (isLoading) {
    return (
      <div>
        <Skeleton height={100}/>
        <Table>
          <TableHead>
            <TableRow><Skeleton height={75}/></TableRow>
          </TableHead>
          <TableBody>
            <TableRow><Skeleton height={50}/></TableRow>
            <TableRow><Skeleton height={50}/></TableRow>
            <TableRow><Skeleton height={50}/></TableRow>
            <TableRow><Skeleton height={50}/></TableRow>
          </TableBody>
        </Table>
      </div>
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
