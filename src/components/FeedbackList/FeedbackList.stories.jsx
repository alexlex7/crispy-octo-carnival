import React from 'react';
import feedbacks from '../../mock/feedbacks.json';
import FeedbackList from './FeedbackList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Feedback/FeedbackList',
  component: FeedbackList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FeedbackList {...args} />;

export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.args = {
  items: feedbacks.slice(0, 1),
};

export const Desktop = Template.bind({});
Desktop.args = {
  items: feedbacks,
};
