import App from './App';
import React from 'react';
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

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Hello World/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders page header when API data is loaded', async () => {
  render(<AppTestComponent />);

  await waitFor(() => {
    expect(screen.getByText('Star Wars Movie Table')).toBeInTheDocument();
  });
})

// test('renders a skeleton of table when loading API', async () => {
//   render(<AppTestComponent />);

//   await waitFor(() => {
//     expect(screen.getByText('Star Wars Movie Table').toBeInTheDocument())
//   });
// })

