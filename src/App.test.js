import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crushing', () => {
  render(<App />);
  const linkElement = screen.getByText(/search photos/i);
  expect(linkElement).toBeInTheDocument();
});
