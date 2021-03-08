import React from 'react';
import { Table } from '@material-ui/core';
import TableHeader from './TableHeader.js';
import TableBodyComponent from './TableBodyComponent.js';


function TableComponent(props) {
  let { movieData } = props;
  return (
    <Table>
      <TableHeader />
      <TableBodyComponent movies={movieData.results}/>
    </Table>
  );
}

export default TableComponent;