import { render, screen } from '@testing-library/react';
import FeatureList from './FeatureList';
import { features } from '../../mock/features.json';

test('render feature list component', () => {
  const { asFragment } = render(<FeatureList items={features} />);
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
