import { render, screen } from '@testing-library/react';
import ClientItem from './ClientItem';
import client from '../../mock/client.json';

test('renders client item', () => {
  const { asFragment } = render(<ClientItem client={client} />);
  const linkElement = screen.getByRole('img', { description: client.name });
  expect(linkElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
