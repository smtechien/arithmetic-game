import type { Meta, StoryObj } from '@storybook/sveltekit';
import InputRadio from './InputRadio.svelte';

const meta = {
  title: 'Atoms/Input Radio',
  component: InputRadio,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof InputRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: InputRadio,
    props: args,
  }),
  args: {
    id: 'radio',
    value: 'radio',
    name: 'radio',
    label: 'Label Radio'
  }
};

export const Checked: Story = {
  render: (args) => ({
    Component: InputRadio,
    props: args,
  }),
  args: {
    id: 'radio',
    value: 'radio',
    name: 'radio',
    label: 'Label Radio',
    groupValue: 'radio'
  }
};

