import { render, screen } from '@testing-library/react';
import FeatureItem from './FeatureItem';
import { features } from '../../mock/features.json';

test('render feature item component', () => {
  const { asFragment } = render(<FeatureItem item={features[0]} />);
  const title = screen.getByText('Best Quality');
  expect(title).toBeInTheDocument();

  const text = screen.getByText(features[0].text);
  expect(text).toBeInTheDocument();

  const image = screen.getByRole('img', { description: features[0].title });
  expect(image).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
