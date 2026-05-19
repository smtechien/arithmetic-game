import type { Meta, StoryObj } from '@storybook/sveltekit';
import Digit from './Digit.svelte';

const meta = {
  title: 'Atoms/Digit',
  component: Digit,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof Digit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TurnOff: Story = {
  render: (args) => ({
    Component: Digit,
    props: args,
  }),
  args: {
    value: 3,
    turns: false,
  },
};

export const TurnOn: Story = {
  render: (args) => ({
    Component: Digit, 
    props: args,
  }),
  args: {
    value: 3,
    turns: true,
  },
};

