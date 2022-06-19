import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crushing', () => {
  render(<App />);
  const linkElement = screen.getByText(/user search/i);
  expect(linkElement).toBeInTheDocument();
});
