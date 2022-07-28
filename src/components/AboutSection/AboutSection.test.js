import { render, screen } from '@testing-library/react';
import AboutSection from './AboutSection';
import data from '../../mock/features.json';

test('render about section', () => {
  const { asFragment } = render(<AboutSection data={data} />);
  const title = screen.getByText(data.title);
  expect(title).toBeInTheDocument();

  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();

  expect(asFragment()).toMatchSnapshot();
});
