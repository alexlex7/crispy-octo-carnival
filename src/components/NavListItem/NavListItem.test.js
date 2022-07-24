import { render, screen } from '@testing-library/react';
import NavListItem from './NavListItem';
import { BrowserRouter } from 'react-router-dom';

test('renders NavListItem component', () => {
  const { asFragment } = render(<NavListItem text="Home" to="/" />, {
    wrapper: BrowserRouter,
  });
  const linkItem = screen.getByRole('link', { name: 'Home' });
  expect(linkItem).toBeInTheDocument();
  expect(asFragment).toMatchSnapshot();
});
