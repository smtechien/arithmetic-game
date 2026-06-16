import type { Meta, StoryObj } from '@storybook/sveltekit';
import QAResultItem from './QAResultItem.svelte';

const meta = {
  title: 'Molecules/QA Result Item',
  component: QAResultItem,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof QAResultItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: QAResultItem,
    props: args,
  }),
  args: {
    id: 1,
    question: {
      firstOperand: 10,
      secondOperand: 20,
      operator: '&times;',
      answer: 200,
    },
    answers: [10, 30, 200],
    duration: 112312323312300,
  }
};

