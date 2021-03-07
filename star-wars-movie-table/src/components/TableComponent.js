import React from 'react';
import sampleData from '../sampleTableData.js';
import { Table } from '@material-ui/core';
import TableHeader from './TableHeader.js';
import TableBodyComponent from './TableBodyComponent.js';


function TableComponent() {
  return (
    <Table>
      <TableHeader />
      <TableBodyComponent movies={sampleData}/>
    </Table>
  );
}

export default TableComponent;