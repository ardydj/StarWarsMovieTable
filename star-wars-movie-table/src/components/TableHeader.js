import React from 'react';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';

function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell>Episode Id</TableCell>
        <TableCell>Release Date</TableCell>
        <TableCell>Director</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;

