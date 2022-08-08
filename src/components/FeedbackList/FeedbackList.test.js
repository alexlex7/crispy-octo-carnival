import { render, screen } from '@testing-library/react';
import FeedbackList from './FeedbackList';
import feedbacks from '../../mock/feedbacks.json';

test('render feedback list component', () => {
  const { asFragment } = render(<FeedbackList items={feedbacks} />);
  const linkElement = screen.getByRole('list');
  expect(linkElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
