import React from 'react';
import { Table } from '@material-ui/core';
import TableHeader from './TableHeader.js';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';

function EmptyTableComponent(props) {
  return (
    <Table>
      <TableHeader />
      <TableBody>
        <TableRow>
          <TableCell>No Movies Found</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default EmptyTableComponent;