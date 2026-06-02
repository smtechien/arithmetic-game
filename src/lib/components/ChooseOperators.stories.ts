import type { Meta, StoryObj } from '@storybook/sveltekit';
import ChooseOperators from './ChooseOperators.svelte';

const meta = {
  title: 'Molecules/Choose Operators',
  component: ChooseOperators,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof ChooseOperators>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: ChooseOperators, 
    props: args,
  }),
};
