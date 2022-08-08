import { render, screen } from '@testing-library/react';
import FeedbackItem from './FeedbackItem';
import feedbacks from '../../mock/feedbacks.json';

test('render feedback item', () => {
  const { asFragment } = render(<FeedbackItem item={feedbacks[0]} />);

  const textLink = screen.getByText(feedbacks[0].firstName);
  expect(textLink).toBeInTheDocument();

  const feedbackTextLink = screen.getByText(feedbacks[0].feedback);
  expect(feedbackTextLink).toBeInTheDocument();

  const ratingLink = screen.getByText(feedbacks[0].rating);
  expect(ratingLink).toBeInTheDocument();

  expect(asFragment()).toMatchSnapshot();
});
