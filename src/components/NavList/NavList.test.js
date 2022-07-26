import { render, screen } from '@testing-library/react';
import NavList from './NavList';
import { BrowserRouter } from 'react-router-dom';

const pages = [
  { text: 'Home', to: '/' },
  { text: 'About', to: 'about' },
  { text: 'Features', to: 'features' },
  { text: 'Contact', to: 'contact' },
];

test('renders navlist component', () => {
  const { asFragment } = render(<NavList pages={pages} />, {
    wrapper: BrowserRouter,
  });
  const linkElement = screen.getByRole('list');
  expect(linkElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
