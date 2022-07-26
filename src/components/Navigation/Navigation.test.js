import { render } from '@testing-library/react';
import Navigation from './Navigation';
import pages from '../../mock/pages.json';
import { BrowserRouter } from 'react-router-dom';
test('renders navigation component', () => {
  console.log(pages);
  const { asFragment } = render(<Navigation items={pages} />, {
    wrapper: BrowserRouter,
  });

  expect(asFragment()).toMatchSnapshot();
});
