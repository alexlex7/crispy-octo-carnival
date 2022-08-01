import { render, screen } from '@testing-library/react';
import ProductItem from './ProductItem';
import products from '../../mock/products.json';

test('render product item', () => {
  const { asFragment } = render(<ProductItem item={products[0]} />);

  const text = screen.getByText(`${products[0].name}`);
  expect(text).toBeInTheDocument();

  expect(asFragment()).toMatchSnapshot();
});
