import { withRouter } from 'storybook-addon-react-router-v6';
import '../src/index.css';
import 'react-phone-input-2/lib/style.css';
export const decorators = [withRouter];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  reactRouter: {
    routePath: '/',
  },
};
