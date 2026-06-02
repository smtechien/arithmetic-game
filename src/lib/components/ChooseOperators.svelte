<script lang="ts">
	import TabButton from './TabButton.svelte';
	import type { Operator } from '$lib/types/operator';
	import { getAllConfig, setConfig } from '$lib/utils/localStorageConfig';

	let operators: Operator[] | null = $state(null);

	$effect(() => {
		operators = getAllConfig();
	});

	function switchOperator(operator: Operator) {
		operator = { ...operator, isActive: !operator.isActive };
		try {
			setConfig(operator);
			operators = getAllConfig();
		} catch (err) {
			console.log(err);
		}
	}
</script>

<div>
	<p class="text-sm">Choose operators</p>
	<div class="flex w-auto flex-row flex-nowrap items-end gap-1">
		{#if operators}
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
		{/if}
	</div>
</div>
