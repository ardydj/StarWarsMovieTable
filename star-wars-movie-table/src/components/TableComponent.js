import React from 'react';
import sampleData from '../sampleTableData.js';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';

let headers = Object.keys(sampleData[0]);
function TableComponent() {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{headers[0]}</TableCell>
            <TableCell>{headers[1]}</TableCell>
            <TableCell>{headers[2]}</TableCell>
            <TableCell>{headers[3]}</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </div>
  );
}

export default TableComponent;