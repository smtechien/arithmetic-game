import type { Meta, StoryObj } from '@storybook/sveltekit';
import QuestionAnswer from './QuestionAnswer.svelte';

const meta = {
  title: 'Organisms/QuestionAnswer',
  component: QuestionAnswer,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof QuestionAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: QuestionAnswer,
    props: args,
  }),
};

