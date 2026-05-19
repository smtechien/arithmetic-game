import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeedbackOverlay from './FeedbackOverlay.svelte';

const meta = {
  title: 'Atoms/FeedbackOverlay',
  component: FeedbackOverlay,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof FeedbackOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Wrong: Story = {
  render: (args) => ({
    Component: FeedbackOverlay, 
    props: args,
  }),
  args: {
    correct: false,
  },
};

export const Correct: Story = {
  render: (args) => ({
    Component: FeedbackOverlay, 
    props: args,
  }),
  args: {
    correct: true,
  },
};

