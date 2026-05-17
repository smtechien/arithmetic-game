<script lang="ts">
	import { Random } from 'random-js';
	const random = new Random();
	const { value, turns } = $props();
	let count = $state(0);

	$effect(() => {
		const digitInterval = setInterval(() => {
			count = random.integer(0, 9);
		});

		return () => {
			clearInterval(digitInterval);
		};
	});
</script>

{#if turns}
	{count}
{:else}
	{value}
{/if}
