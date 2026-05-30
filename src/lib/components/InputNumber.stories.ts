import type { Meta, StoryObj } from '@storybook/sveltekit';
import InputNumber from './InputNumber.svelte';

const meta = {
  title: 'Atoms/Input Number',
  component: InputNumber,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: InputNumber,
    props: args,
  }),
};


export const WithPlaceholder: Story = {
  render: (args) => ({
    Component: InputNumber,
    props: args,
  }),
  args: {
    id: "with_placeholder",
    placeholder: "Input disini",
    disabled: false,
  }
};

export const Prefilled: Story = {
  render: (args) => ({
    Component: InputNumber,
    props: args,
  }),
  args: {
    id: "prefilled input",
    value: 1000,
  }
};


export const Invalid: Story = {
  render: (args) => ({
    Component: InputNumber,
    props: args,
  }),
  args: {
    min: 100,
    value: 300,
    max: 200,
  }
};

export const DisabledBasic: Story = {
  render: (args) => ({
    Component: InputNumber,
    props: args,
  }),
  args: {
    id: "disabled_input",
    disabled: true,
  }
};

export const DisabledWithPlaceholder: Story = {
  render: (args) => ({
    Component: InputNumber,
    props: args,
  }),
  args: {
    id: "disabled_input",
    placeholder: "Masukan nilai disini",
    value: '',
    disabled: true,
  }
};

export const DisabledWithPrefilled: Story = {
  render: (args) => ({
    Component: InputNumber,
    props: args,
  }),
  args: {
    id: "disabled_input",
    value: '100',
    disabled: true,
  }
};
