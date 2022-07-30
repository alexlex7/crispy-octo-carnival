import { render, screen } from '@testing-library/react';
import NavList from './NavList';
import { BrowserRouter } from 'react-router-dom';
import pages from '../../mock/pages.json';

test('renders navlist component', () => {
  const { asFragment } = render(<NavList pages={pages} />, {
    wrapper: BrowserRouter,
  });
  const linkElement = screen.getByRole('list');
  expect(linkElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
