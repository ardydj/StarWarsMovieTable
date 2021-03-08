import React from 'react';
import { TableBody } from '@material-ui/core';
import TableRowComponent from './TableRowComponent.js'


function TableBodyComponent(props) {
  let { movies } = props;
  return (
    <TableBody>{movies.map((movie, index) => <TableRowComponent movie={movie} key={index} />)}</TableBody>
  );
}

export default TableBodyComponent;