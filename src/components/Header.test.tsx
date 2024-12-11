import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders company name', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Company Name/i);
  expect(linkElement).toBeInTheDocument();
});
