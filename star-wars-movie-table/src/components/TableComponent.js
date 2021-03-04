import React from 'react';
import sampleData from '../sampleTableData.js';
import { Table } from '@material-ui/core';
import TableHeader from './TableHeader.js';


function TableComponent() {
  return (
    <div>
      <Table>
        <TableHeader />
      </Table>
    </div>
  );
}

export default TableComponent;