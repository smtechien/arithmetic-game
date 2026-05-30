import type { Meta, StoryObj } from '@storybook/sveltekit';
import {fn} from 'storybook/test';
import TabButtonList from './TabButtonList.svelte';

const meta = {
  title: 'Molecules/Tab Button List',
  component: TabButtonList,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof TabButtonList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inactive: Story = {
  render: (args) => ({
    Component: TabButtonList,
    props: args,
  }),
  args: {
    eventHandler: fn(),
  }
};


export const Active: Story = {
  render: (args) => ({
    Component: TabButtonList,
    props: args,
  }),
  args: {
    eventHandler: fn(),
  }
};
