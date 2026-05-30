import type { Meta, StoryObj } from '@storybook/sveltekit';
import {fn} from 'storybook/test';
import TabPanel from './TabPanel.svelte';

const meta = {
  title: 'Atoms/Tab Panel',
  component: TabPanel,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof TabPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OperatorConfig: Story = {
  render: (args) => ({
    Component: TabPanel,
    props: args,
  }),
};

