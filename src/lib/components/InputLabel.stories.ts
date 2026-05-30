import type { Meta, StoryObj } from '@storybook/sveltekit';
import InputLabel from './InputLabel.svelte';

const meta = {
  title: 'Atoms/Input Label',
  component: InputLabel,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: InputLabel,
    props: args,
  }),
  args: {
    id: 'input_id',
    content: 'Label Name',
  }
};
