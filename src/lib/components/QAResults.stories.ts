import type { Meta, StoryObj } from '@storybook/sveltekit';
import type { QuestionAnswer } from '$lib/types/question_answer';
import QAResults from './QAResults.svelte';

const questionAnswers: QuestionAnswer[] = [{
  id: 1,
  question: {
    firstOperand: 10,
    secondOperand: 20,
    operator: '&times;',
    answer: 200,
  },
  answers: [10, 30, 200],
  duration: 112312323312300,
}, {
  id: 2,
  question: {
    firstOperand: 4,
    secondOperand: 2,
    operator: '&divide;',
    answer: 2,
  },
  answers: [2],
  duration: 1223,
},
{
  id: 3,
  question: {
    firstOperand: 4,
    secondOperand: 32,
    operator: '&plus;',
    answer: 36,
  },
  answers: [37, 36],
  duration: 121234,
},
{
  id: 4,
  question: {
    firstOperand: 582,
    secondOperand: -18,
    operator: '&minus;',
    answer: 600,
  },
  answers: [600],
  duration: 213434166,
},

];



const meta = {
  title: 'Organisms/QA Results',
  component: QAResults,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof QAResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: QAResults,
    props: args,
  }),

  args: {
    startTime: 132432051,
    endTime: 139432951,
    questionAnswers: questionAnswers,
  }

};

