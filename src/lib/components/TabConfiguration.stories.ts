
import type { Meta, StoryObj } from '@storybook/sveltekit';
import {fn} from 'storybook/test';
import TabConfiguration from './TabConfiguration.svelte';

const meta = {
  title: 'Organisms/Tab Configuration ',
  component: TabConfiguration,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof TabConfiguration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OperatorConfig: Story = {
  render: (args) => ({
    Component: TabConfiguration,
    props: args,
  }),
};

