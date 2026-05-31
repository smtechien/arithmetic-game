<script lang="ts">
	import FormConfigOperand from './FormConfigOperand.svelte';
	import Button from './Button.svelte';
	import type { Operator } from '$lib/types/operator';
	import { setConfig, getConfig } from '$lib/utils/localStorageConfig';

	let {
		title,
		operatorName,
		operatorSymbol,
		firstRuleMin,
		firstRuleMax,
		firstRuleNeg,
		secondRuleMin,
		secondRuleMax,
		secondRuleNeg,
		onSubmit
	} = $props();

	interface FormOutput {
		maxFirst: number;
		minFirst: number;
		negFirst: 'active' | 'inactive';
		maxSecond: number;
		minSecond: number;
		negSecond: 'active' | 'inactive';
	}

	function formHandler(event: SubmitEvent) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData.entries()) as unknown as FormOutput;

		const operator: Operator = {
			name: operatorName,
			symbol: operatorSymbol,
			firstOperandRules: {
				max: data.maxFirst,
				min: data.minFirst,
				negativeNumber: data.negFirst
			},
			secondOperandRules: {
				max: data.maxSecond,
				min: data.minSecond,
				negativeNumber: data.negSecond
			}
		};

		try {
			setConfig(operator);
		} catch (err) {
			console.log(err);
		}
		onSubmit();
	}

	function resetDefault(event: Event) {
		event.preventDefault();
		firstRuleMin = 0;
		firstRuleMax = 10;
		firstRuleNeg = 'active';

		secondRuleMin = 0;
		secondRuleMax = 10;
		secondRuleNeg = 'active';

		if (operatorName == 'divide') {
			firstRuleMin = 1;
			secondRuleMin = 1;
		}
	}
</script>

<form class="flex flex-col gap-2 p-2" onsubmit={formHandler}>
	<strong class="text-md">{title}</strong>

	<!--First Operand-->
	<FormConfigOperand
		{operatorName}
		operandName="First"
		title="First Operand"
		bind:ruleMin={firstRuleMin}
		bind:ruleMax={firstRuleMax}
		bind:ruleNeg={firstRuleNeg}
	/>

	<!--Second Operand-->
	<FormConfigOperand
		{operatorName}
		operandName="Second"
		title="Second Operand"
		bind:ruleMin={secondRuleMin}
		bind:ruleMax={secondRuleMax}
		bind:ruleNeg={secondRuleNeg}
	/>

	<!--Reset & Submit Button-->
	<Button
		type="button"
		value="resetConfig"
		variant="text"
		content="Reset Default"
		onclick={resetDefault}
	/>
	<Button
		type="submit"
		value="saveConfig"
		variant="primary"
		content="Save Configuration"
		onclick={() => {}}
	/>
</form>
