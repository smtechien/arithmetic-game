<script lang="ts">
	import { Random } from 'random-js';

	const random = new Random();
	const OPERATORS = ['&plus;', '&minus;', '&times;', '&divide;'];

	let operators = $state('&plus;');
	let { operator, turns } = $props();

	$effect(() => {
		const operatorInterval = setInterval(() => {
			operators = random.pick(OPERATORS);
		});
		return () => {
			clearInterval(operatorInterval);
		};
	});
</script>

{#if turns}
	{@html operators}
{:else}
	{@html operator}
{/if}
