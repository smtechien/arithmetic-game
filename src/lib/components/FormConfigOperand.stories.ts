
import type { Meta, StoryObj } from '@storybook/sveltekit';
import FormConfigOperand from './FormConfigOperand.svelte';

const meta = {
	title: 'Organisms/FormConfigOperand',
	component: FormConfigOperand,
	decorators: [],
	parameters: {}
} satisfies Meta<typeof FormConfigOperand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: (args) => ({
		Component: FormConfigOperand,
		props: args
	}),
	args: {
    title: 'Operand Name',
    operatorName: 'Add',
    operandName: 'First',
    ruleMin: 0,
    ruleMax: 100,
    ruleNeg: 'active',
	}
};
