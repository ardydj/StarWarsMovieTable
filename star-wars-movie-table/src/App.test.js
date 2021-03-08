import App from './App';
import React from 'react';
import SkeletonComponent from './components/SkeletonComponent.js';
import sampleData from './SampleTableData.js';
import TableComponent from './components/TableComponent.js';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function AppTestComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

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



test('renders page header when API data is loaded', async () => {
  render(<AppTestComponent />);

  await waitFor(() => {
    expect(screen.getByText('Star Wars Movie Table')).toBeInTheDocument();
  });
})

test('renders table header when API data is loaded', async () => {
  render(<AppTestComponent />);

  await waitFor(() => {
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Episode Id')).toBeInTheDocument();
    expect(screen.getByText('Release Date')).toBeInTheDocument();
    expect(screen.getByText('Director')).toBeInTheDocument();
  });
})

test('renders movie titles into table body when API data is loaded', async () => {
  render(<AppTestComponent />);

  await waitFor(() => {
    expect(screen.getByText('A New Hope')).toBeInTheDocument();
    expect(screen.getByText('The Empire Strikes Back')).toBeInTheDocument();
    expect(screen.getByText('Return of the Jedi')).toBeInTheDocument();
    expect(screen.getByText('The Phantom Menace')).toBeInTheDocument();
    expect(screen.getByText('Attack of the Clones')).toBeInTheDocument();
    expect(screen.getByText('Revenge of the Sith')).toBeInTheDocument();
  });
})

test('renders movie episodes into table body when API data is loaded', async () => {
  render(<AppTestComponent />);

  await waitFor(() => {
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
  });
})

test('renders directors into table body when API data is loaded', async () => {
  render(<AppTestComponent />);

  await waitFor(() => {
    expect(screen.getAllByText('George Lucas')).toHaveLength(4);
    expect(screen.getByText('Irvin Kershner')).toBeInTheDocument();
    expect(screen.getByText('Richard Marquand')).toBeInTheDocument();
  });
})

test('renders skeleton component when loading API data', async () => {
  render(<AppSkeletonTestComponent isLoading={true}/>);

  await waitFor(() => {
    expect(screen.getByTestId('skeleton-test')).toBeInTheDocument();
  });
});