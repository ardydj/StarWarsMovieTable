import React from 'react';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';

function TableRowComponent(props) {
  let { movie } = props;
  return (
    <TableRow>
      <TableCell>{movie.title}</TableCell>
      <TableCell>{movie.movie_id}</TableCell>
      <TableCell>{movie.release_date}</TableCell>
      <TableCell>{movie.director}</TableCell>
    </TableRow>
  );
}

export default TableRowComponent;