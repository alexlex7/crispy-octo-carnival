import { render, screen } from '@testing-library/react';
import ClientList from './ClientList';
import clients from '../../mock/clients.json';

test('rendes clients list component', () => {
  const { asFragment } = render(<ClientList items={clients} />);
  const linkElement = screen.getByRole('list');
  expect(linkElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
