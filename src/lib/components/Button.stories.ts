import type { Meta, StoryObj } from '@storybook/sveltekit';
import {fn} from 'storybook/test';
import Button from './Button.svelte';

const meta = {
	title: 'Atoms/Button',
	component: Button,
  args: {
    onclick: fn(),
  },
	decorators: [],
	parameters: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => ({
		Component: Button,
		props: args
	}),
	args: {
		variant: 'primary',
		value: 'btn_value',
		content: 'CTA Content',
	}
};

export const Success: Story = {
	render: (args) => ({
		Component: Button,
		props: args
	}),
	args: {
		variant: 'success',
		content: 'CTA Content',
	}
};

export const Danger: Story = {
	render: (args) => ({
		Component: Button,
		props: args
	}),
	args: {
		variant: 'danger',
		value: 'btn_value',
		content: 'CTA Content',
	}
};


export const Disabled: Story = {
	render: (args) => ({
		Component: Button,
		props: args
	}),
	args: {
		variant: 'disabled',
		value: 'btn_value',
		content: 'CTA Content',
    disabled: true,
	}
};
