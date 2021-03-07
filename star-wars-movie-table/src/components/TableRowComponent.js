import React from 'react';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';

function TableRowComponent(props) {
  console.log(props.movie)
  return (
    <TableRow>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
}

export default TableRowComponent;