import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('renders the component', () => {
  const { asFragment } = render(<Logo text="DudeShape" />);
  const linkElement = screen.getByText(/DudeShape/i);
  expect(linkElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
