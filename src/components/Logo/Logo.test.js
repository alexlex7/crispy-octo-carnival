import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('<Logo/> spec', () => {
  test('renders the component', async () => {
    render(<Logo />);
    const linkElement = await screen.findByRole('link', {
      name: /DudeShape/i,
    });
    expect(linkElement).toBeInTheDocument();
  });

  test('renders link', async () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
