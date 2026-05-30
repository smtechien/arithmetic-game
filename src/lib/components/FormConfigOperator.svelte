<script lang="ts">
	import FormConfigOperand from './FormConfigOperand.svelte';
	import Button from './Button.svelte';

	let {
		title,
		operatorName,
		firstRuleMin,
		firstRuleMax,
		firstRuleNeg,
		secondRuleMin,
		secondRuleMax,
		secondRuleNeg,
		onSubmit
	} = $props();

	function formHandler(event: Event) {
		event.preventDefault();
		onSubmit();
	}
</script>

<form class="flex flex-col gap-2 p-2" onsubmit={formHandler}>
	<strong class="text-md">{title}</strong>

	<!--First Operand-->
	<FormConfigOperand
		{operatorName}
		operandName="First"
		title="First Operand"
		ruleMin={firstRuleMin}
		ruleMax={firstRuleMax}
		ruleNeg={firstRuleNeg}
	/>

	<!--Second Operand-->
	<FormConfigOperand
		{operatorName}
		operandName="Second"
		title="Second Operand"
		ruleMin={secondRuleMin}
		ruleMax={secondRuleMax}
		ruleNeg={secondRuleNeg}
	/>

	<!--Reset & Submit Button-->
	<Button type="reset" value="resetConfig" variant="text" content="Reset Default" onclick="" />
	<Button
		type="submit"
		value="saveConfig"
		variant="primary"
		content="Save Configuration"
		onclick={() => {}}
	/>
</form>
