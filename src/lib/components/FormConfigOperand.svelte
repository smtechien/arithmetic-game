<script lang="ts">
	import InputLabel from './InputLabel.svelte';
	import InputNumber from './InputNumber.svelte';
	import GroupRadio from './GroupRadio.svelte';

	interface Props {
		operatorName: string;
		operandName: string;
		title: string;
		ruleMin: number;
		ruleMax: number;
		ruleNeg: string;
	}

	let {
		operatorName,
		operandName,
		title,
		ruleMin,
		ruleMax,
		ruleNeg = $bindable()
	}: Props = $props();

	const radios = $derived({
		name: operatorName + operandName,
		items: [
			{
				id: 'negActive' + operatorName + operandName,
				label: 'Active',
				value: 'active'
			},
			{
				id: 'negInactive' + operatorName + operandName,
				label: 'Inactive',
				value: 'inactive'
			}
		]
	});
</script>

<!-- content here -->
<div class="flex flex-col gap-2 border-1 p-2">
	<span class="block border-b-1 text-sm">{title}</span>

	<InputLabel id="min{operatorName}{operandName}" content="Minimum Value (0 <= x <= {ruleMax})" />
	<InputNumber
		id="min{operatorName}{operandName}"
		min="0"
		bind:max={ruleMax}
		placeholder=""
		bind:value={ruleMin}
	/>

	<InputLabel
		id="max{operatorName}{operandName}"
		content="Maximum Value ({ruleMin} <= x <= takhingga)"
	/>
	<InputNumber
		id="max{operatorName}{operandName}"
		bind:min={ruleMin}
		max=""
		placeholder=""
		bind:value={ruleMax}
	/>

	<GroupRadio title="Negative Number" {radios} bind:groupValue={ruleNeg} />
</div>
