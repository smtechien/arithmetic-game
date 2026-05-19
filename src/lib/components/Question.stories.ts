import type { Meta, StoryObj } from '@storybook/sveltekit';
import Question from './Question.svelte';

const meta = {
  title: 'Organisms/Question',
  component: Question,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof Question>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: Question, 
    props: args,
  }),
};

