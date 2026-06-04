import type { Meta, StoryObj } from '@storybook/sveltekit';
import Keypad from './Keypad.svelte';

const meta = {
  title: 'Molecules/Keypad',
  component: Keypad,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof Keypad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: Keypad,
    props: args,
  }),
  args: {
    value: ' ',
  }
};
