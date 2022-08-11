import { render, screen } from '@testing-library/react';
import StarRating from './StarRating';

test('render star rating component', () => {
  const { asFragment } = render(<StarRating rating={4} />);
  expect(asFragment()).toMatchSnapshot();
});
