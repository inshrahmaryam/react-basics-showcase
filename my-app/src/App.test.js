import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders React heading', () => {
  render(<App />);
  const heading = screen.getByText(/react/i);
  expect(heading).toBeInTheDocument();
});
