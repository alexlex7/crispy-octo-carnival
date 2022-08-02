import { render, screen } from '@testing-library/react';
import ProductButton from './ProductButton';

test('render product item', () => {
  const { asFragment } = render(<ProductButton type="share" />);

  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();

  expect(asFragment()).toMatchSnapshot();
});
