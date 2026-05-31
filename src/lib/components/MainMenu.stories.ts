import type { Meta, StoryObj } from '@storybook/sveltekit';
import MainMenu from './MainMenu.svelte';

const meta = {
  title: 'Organisms/Main Menu',
  component: MainMenu,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof MainMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    Component: MainMenu,
    props: args,
  }),
};
