import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';

test('oritechbyte', () => {
  render(<Header />);
  const linkElement = screen.getByText(/oritechbyte/i);
  expect(linkElement);
});
