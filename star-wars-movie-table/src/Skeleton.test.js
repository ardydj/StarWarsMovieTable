import React from 'react';
import SkeletonComponent from './components/SkeletonComponent.js';
import sampleData from './SampleTableData.js';
import TableComponent from './components/TableComponent.js';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';

function AppSkeletonTestComponent(props) {
  let { isLoading } = props;
  if (isLoading) {
    return (
      <SkeletonComponent />
    );
  } else {
    return (
      <div className="App">
        <h1>Star Wars Movie Table</h1>
        <TableComponent movieData={sampleData}/>
      </div>
    );
  }
}

test('renders skeleton component when loading API data', async () => {
  render(<AppSkeletonTestComponent isLoading={true}/>);

  await waitFor(() => {
    expect(screen.getByTestId('skeleton-test')).toBeInTheDocument();
  });
});

test('does not render skeleton component when data is fully loaded', async () => {
  render(<AppSkeletonTestComponent isLoading={false}/>);

  await waitFor(() => {
    expect(screen.queryByTestId('skeleton-test')).not.toBeInTheDocument();
  });
});

