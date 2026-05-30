import type { Meta, StoryObj } from '@storybook/sveltekit';
import {fn} from 'storybook/test';
import TabButton from './TabButton.svelte';

const meta = {
  title: 'Atoms/Tab Button',
  component: TabButton,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof TabButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inactive: Story = {
  render: (args) => ({
    Component: TabButton,
    props: args,
  }),
  args: {
    isActive: false,
    id: 'tabButton1',
    content: 'Tab Button 1',
    eventHandler: fn(),
  }
};


export const Active: Story = {
  render: (args) => ({
    Component: TabButton,
    props: args,
  }),
  args: {
    isActive: true,
    id: 'tabButton1',
    content: 'Tab Button 1',
    eventHandler: fn(),
  }
};
