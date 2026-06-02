import type { Meta, StoryObj } from '@storybook/sveltekit';
import Alert from './Alert.svelte';

const meta = {
  title: 'Atoms/Alert',
  component: Alert,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: Alert,
    props: args,
  }),
    args: {
      type: 'Basic',
      title: 'Alert Title',
      content: 'alert content',
      withInterval: false,
    }
};

export const Success: Story = {
  render: (args) => ({
    Component: Alert,
    props: args,
  }),
    args: {
      type: 'success',
      title: 'Configuration Updated',
      content: 'Your changes have been successfully applied',
      withInterval: true,
    }
};
