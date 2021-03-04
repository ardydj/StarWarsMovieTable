import React from 'react';
import sampleData from '../sampleTableData.js';
import { Table } from '@material-ui/core';
import TableHeader from './TableHeader.js';
import TableBodyComponent from './TableBodyComponent.js';


function TableComponent() {
  return (
    <div>
      <Table>
        <TableHeader />
        <TableBodyComponent />
      </Table>
    </div>
  );
}

export default TableComponent;