import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders search button component', () => {
  const { asFragment } = render(<Button type="search" />);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test('renders menu button component', () => {
  const { asFragment } = render(<Button type="menu" />);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test('renders mobile menu button component', () => {
  const { asFragment } = render(<Button type="mobile menu" />);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
