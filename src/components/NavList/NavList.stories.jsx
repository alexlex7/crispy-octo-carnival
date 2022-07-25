import React from 'react';
import NavList from './NavList';

export const pages = [
  { text: 'Home', to: '/' },
  { text: 'About', to: 'about' },
  { text: 'Features', to: 'features' },
  { text: 'Contact', to: 'contact' },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Navigation/NavList',
  component: NavList,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NavList {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  pages,
};
