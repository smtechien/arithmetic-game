import type { Meta, StoryObj } from '@storybook/sveltekit';
import {fn} from 'storybook/test';
import Canvas from './Canvas.svelte';

const meta = {
	title: 'Atoms/Canvas',
	component: Canvas,
  args: {
    onclick: fn(),
  },
	decorators: [],
	parameters: {}
} satisfies Meta<typeof Canvas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: (args) => ({
		Component: Canvas,
		props: args
	}),
	args: {
	}
}
