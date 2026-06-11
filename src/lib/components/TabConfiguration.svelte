<script lang="ts">
	import TabPanel from './TabPanel.svelte';
	import TabButtonList from './TabButtonList.svelte';
	import FormConfigOperator from './FormConfigOperator.svelte';
	import Button from './Button.svelte';
	import Alert from './Alert.svelte';
	import X from '@lucide/svelte/icons/x';

	import type { Operator } from '$lib/types/operator';
	import { getConfig } from '$lib/utils/localStorageConfig';

	let { isConfig = $bindable() } = $props();
	let tabSelection: string = $state('add');
	let tabTitle: string = $state('Addition Operator');
	let submitted = $state(false); // role as key to refresh
	let operator = $derived(getConfig(tabSelection, submitted));
	let alertVisibility = $state(false);

	function tabSelect(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		const id = event.currentTarget.id;
		switch (id) {
			case 'tabButton0':
				tabSelection = 'add';
				tabTitle = 'Addition Operator';
				break;
			case 'tabButton1':
				tabSelection = 'subtract';
				tabTitle = 'Subtraction Operator';
				break;
			case 'tabButton2':
				tabSelection = 'multiply';
				tabTitle = 'Multiplication Operator';
				break;
			case 'tabButton3':
				tabSelection = 'divide';
				tabTitle = 'Division Operator';
				break;
		}
	}

	function closeConfig() {
		isConfig = false;
	}
</script>

{#snippet cross()}
	<X size={16} strokeWidth={1.5} />
{/snippet}

{#snippet form(operator: Operator)}
	<Alert
		type="success"
		title="Configuration Updated"
		content="Your changes have been successfully applied"
		bind:isVisible={alertVisibility}
		withInterval={true}
	/>
	<FormConfigOperator
		title={tabTitle}
		operatorName={operator.name}
		operatorSymbol={operator.symbol}
		operatorActive={operator.isActive}
		firstRuleMin={operator.firstOperandRules.min}
		firstRuleMax={operator.firstOperandRules.max}
		firstRuleNeg={operator.firstOperandRules.negativeNumber}
		secondRuleMin={operator.secondOperandRules.min}
		secondRuleMax={operator.secondOperandRules.max}
		secondRuleNeg={operator.secondOperandRules.negativeNumber}
		onSubmit={() => {
			try {
				// everytime the variable's value changed, it means configuration successfully updated
				submitted = !submitted;
				alertVisibility = true;
			} catch (err) {
				console.log(err);
			}
		}}
	/>
{/snippet}

<!--render snippet-->
{#if isConfig}
	<div class=" z-10 m-0 flex h-dvh flex-col gap-2 p-4">
		<div class="flex flex-row justify-between">
			<h1 class="py-2 text-lg font-bold">Configurations</h1>
			<Button
				type="button"
				value="close"
				variant="text"
				content=""
				icon={cross}
				onclick={closeConfig}
			/>
		</div>
		<TabButtonList bind:tabSelection eventHandler={tabSelect} />
		{#key operator}
			<TabPanel {form} bind:operator />
		{/key}
	</div>
{/if}
