import type { Meta, StoryObj } from '@storybook/sveltekit';
import AnswerResult from './AnswerResult.svelte';

const meta = {
  title: 'Atoms/AnswerResult',
  component: AnswerResult,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof AnswerResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Wrong: Story = {
  render: (args) => ({
    Component: AnswerResult,
    props: args,
  }),
  args: {
    isCorrect: false,
    value: 20,
  }
};

export const Correct: Story = {
  render: (args) => ({
    Component: AnswerResult,
    props: args,
  }),
  args: {
    isCorrect: true,
    value: 32,
  }
};
