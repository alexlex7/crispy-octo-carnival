import { render, screen } from '@testing-library/react';
import Products from './Products';
import products from '../../mock/products.json';

test('render product item', () => {
  const { asFragment } = render(<Products products={products} />);

  const text = screen.getAllByText(`${products[0].name}`);
  expect(text[0]).toBeInTheDocument();

  expect(asFragment()).toMatchSnapshot();
});
