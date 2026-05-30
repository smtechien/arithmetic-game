<script lang="ts">
	import TabPanel from './TabPanel.svelte';
	import TabButtonList from './TabButtonList.svelte';
	import FormConfigOperator from './FormConfigOperator.svelte';
	import Button from './Button.svelte';
	import type { Operator } from '$lib/types/operator';
	import { setConfig, getConfig } from '$lib/utils/localStorageConfig';

	let { isConfig = $bindable() } = $props();
	let tabSelection: string = $state('add');
	let operator = $derived(getConfig(tabSelection));

	function tabSelect(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		const id = event.currentTarget.id;
		switch (id) {
			case 'tabButton0':
				tabSelection = 'add';
				break;
			case 'tabButton1':
				tabSelection = 'subtract';
				break;
			case 'tabButton2':
				tabSelection = 'multiply';
				break;
			case 'tabButton3':
				tabSelection = 'divide';
				break;
		}
	}

	function closeConfig() {
		isConfig = false;
	}

	function openConfig() {
		isConfig = true;
	}
</script>

{#snippet form(operator: Operator)}
	<FormConfigOperator
		title={'Operator ' + operator.name}
		operatorName={operator.name}
		firstRuleMin={operator.firstOperandRules.min}
		firstRuleMax={operator.firstOperandRules.max}
		firstRuleNeg={operator.firstOperandRules.negativeNumber}
		secondRuleMin={operator.secondOperandRules.min}
		secondRuleMax={operator.secondOperandRules.max}
		secondRuleNeg={operator.secondOperandRules.negativeNumber}
		onSubmit={() => {}}
	/>
{/snippet}

<!--render snippet-->
{#if !isConfig}
	<div class="fixed top-4 right-4">
		<Button
			type="button"
			value="close"
			variant="text"
			content="Configurations"
			onclick={openConfig}
		/>
	</div>
{:else}
	<div class=" z-10 m-0 flex h-dvh flex-col gap-2 p-4">
		<div class="flex flex-row justify-between">
			<h1 class="py-2 text-lg font-bold">Configurations</h1>
			<Button type="button" value="close" variant="text" content="&cross; " onclick={closeConfig} />
		</div>
		<TabButtonList bind:tabSelection eventHandler={tabSelect} />
		{#if operator}
			<TabPanel {form} bind:operator />
		{/if}
	</div>
{/if}
