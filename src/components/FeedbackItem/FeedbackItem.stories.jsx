import React from 'react';
import feedbacks from '../../mock/feedbacks.json';
import FeedbackItem from './FeedbackItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Feedback/FeedbackItem',
  component: FeedbackItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FeedbackItem {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  item: feedbacks[0],
};
