<script lang="ts">
	import TabButton from './TabButton.svelte';
	import type { Operator } from '$lib/types/operator';
	import { getAllConfig, setConfig } from '$lib/utils/localStorageConfig';

	interface Props {
		isOperator: boolean;
	}

	let operators: Operator[] | null = $state(getAllConfig());
	let activeOperators: Operator[] | null = $derived(
		operators.filter((operator) => operator.isActive)
	);

	let { isOperator = $bindable() }: Props = $props();

	$effect(() => {
		if (activeOperators?.length != 0) {
			isOperator = true;
		}
	});

	function switchOperator(operator: Operator) {
		operator = { ...operator, isActive: !operator.isActive };
		try {
			setConfig(operator);
			operators = getAllConfig();
			activeOperators = operators.filter((operator) => operator.isActive);
			if (activeOperators?.length != 0) {
				isOperator = true;
			} else {
				isOperator = false;
			}
		} catch (err) {
			console.log(err);
		}
	}
</script>

{#if operators}
	<div class="flex flex-col gap-2">
		<div class="flex flex-col gap-0">
			<p class="text-sm font-bold">Choose operators:</p>
			{#if !isOperator}
				<p class="text-sm font-normal text-red-600">(Please choose at least an operator)</p>
			{/if}
		</div>
		<div class="flex w-auto flex-row flex-nowrap items-end gap-2">
			{#each operators as operator}
				<TabButton
					id="pickOperator{operator.name}"
					isActive={operator.isActive}
					content={operator.symbol}
					eventHandler={() => {
						switchOperator(operator);
					}}
				/>
			{/each}
		</div>
	</div>
{/if}
