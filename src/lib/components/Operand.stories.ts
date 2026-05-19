import type { Meta, StoryObj } from '@storybook/sveltekit';
import Operand  from './Operand.svelte';

const meta = {
  title: 'Molecules/Operand',
  component: Operand,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof Operand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TurnOff: Story = {
  render: (args) => ({
    Component: Operand,
    props: args,
  }),
  args: {
    operand: 334,
    turns: false,
  },
};

export const TurnOn: Story = {
  render: (args) => ({
    Component: Operand, 
    props: args,
  }),
  args: {
    operand: 334,
    turns: true,
  },
};

