import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import { pages } from '../../App';
import { BrowserRouter } from 'react-router-dom';
test('renders navigation component', () => {
  const { asFragment } = render(<Navigation items={pages} />, {
    wrapper: BrowserRouter,
  });

  expect(asFragment()).toMatchSnapshot();
});
