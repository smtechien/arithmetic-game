import type { Meta, StoryObj } from '@storybook/sveltekit';
import Answer from './Answer.svelte';

const meta = {
  title: 'Atoms/Answer',
  component: Answer,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof Answer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: Answer, 
    props: args,
  }),
};
