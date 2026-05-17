<script lang="ts">
	import Digit from '$lib/components/Digit.svelte';
	const { operand, turns } = $props();

	function numberToDigits(num: number): string[] {
		if (!Number.isInteger(num)) {
			throw new Error('Input must be an integer');
		}
		return num.toString().split('');
	}
	const digits = $derived(numberToDigits(operand));
</script>

{#each digits as digit}
	<Digit value={digit} {turns} />
{/each}
