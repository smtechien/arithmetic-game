<script lang="ts">
	let { correct, feedbackVisibility = $bindable() } = $props();
	let visible = $state(true);

	$effect(() => {
		const timer = setTimeout(() => {
			visible = false;
			feedbackVisibility = false;
		}, 300);
		return () => clearTimeout(timer);
	});
</script>

{#if visible}
	{#if correct}
		<div class="fixed inset-0 z-10 grid place-items-center">
			<span class="text-[300px]/0 font-bold text-green-900/60">&check;</span>
		</div>
	{:else}
		<div class="fixed inset-0 z-10 grid place-items-center">
			<span class="text-[300px]/0 font-bold text-red-900/60">&cross;</span>
		</div>
	{/if}
{/if}
