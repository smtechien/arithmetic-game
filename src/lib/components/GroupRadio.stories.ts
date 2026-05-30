import type { Meta, StoryObj } from '@storybook/sveltekit';
import type { Radios } from '$lib/types/radios';
import GroupRadio from './GroupRadio.svelte';

const radiosUnchecked: Radios = {
  name: 'test_radio',
  items: [
    {
      id: 'input1',
      label: 'Input 1',
      value: 'Input 1',
    },
    {
      id: 'input2',
      label: 'Input 2',
      value: 'Input 2',
    },
    {
      id: 'input3',
      label: 'Input 3',
      value: 'Input 3',
    },
  ],
}

const radiosChecked: Radios = {
  name: 'test_radio',
  items: [
    {
      id: 'input1',
      label: 'Input 1',
      value: 'Input 1',
    },
    {
      id: 'input2',
      label: 'Input 2',
      value: 'Input 2',
    },
  ],
}

const meta = {
  title: 'Molecules/Group Radio',
  component: GroupRadio,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof GroupRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: GroupRadio,
    props: args,
  }),
  args: {
    radios: radiosUnchecked,
    title: "Pilih salah satu:",
  }
};

export const Checked: Story = {
  render: (args) => ({
    Component: GroupRadio,
    props: args,
  }),
  args: {
    radios: radiosChecked,
    title: "Pilih salah satu:",
    groupValue: "Input 1", 
  }
};
