import type { Meta, StoryObj } from '@storybook/sveltekit';
import Timer from './Timer.svelte';

const meta = {
  title: 'Atoms/Timer',
  component: Timer,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: Timer, 
    props: args,
  }),
};
