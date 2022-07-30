import { render, screen } from '@testing-library/react';
import ClientsSection from './ClientsSection';
import clients from '../../mock/clients.json';

test('render clients section component', () => {
  const { asFragment } = render(
    <ClientsSection items={clients} isMobile={false} totalClients={'24'} />
  );
  const linkElement = screen.getByRole('list');
  expect(linkElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
