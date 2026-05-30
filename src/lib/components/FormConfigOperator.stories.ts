import type { Meta, StoryObj } from '@storybook/sveltekit';
import {fn} from 'storybook/test';
import FormConfigOperator from './FormConfigOperator.svelte';

const meta = {
	title: 'Organisms/FormConfigOperator',
	component: FormConfigOperator,
	decorators: [],
	parameters: { actions: {argTypesRegex: '^on.*'}},
} satisfies Meta<typeof FormConfigOperator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdditionOperator: Story = {
	render: (args) => ({
		Component: FormConfigOperator,
		props: args
	}),
	args: {
    title: 'Addition Operator',
    operatorName: 'Add',
    firstRuleMin: 0,
    firstRuleMax: 100,
    firstRuleNeg: 'active',
    secondRuleMin: 0,
    secondRuleMax: 100,
    secondRuleNeg: 'active',
    onSubmit: fn(),
	}
};
