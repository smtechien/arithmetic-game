import '../src/routes/layout.css';
import type { Preview } from '@storybook/sveltekit'

const preview: Preview = {
  parameters: {
    //layout: 'fullsreen', // untuk menghilangkan auto padding
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
