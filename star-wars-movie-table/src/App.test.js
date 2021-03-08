import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a skeleton of table when loading API', async () => {

  await waitFor(() => {
    render(<App />);
    expect(screen.getByTestId('skeleton-test').toBeInTheDocument())
  });
})

