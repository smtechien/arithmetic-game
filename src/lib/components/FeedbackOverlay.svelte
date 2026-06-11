<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import X from '@lucide/svelte/icons/x';
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
			<span class="text-[300px]/0 font-bold text-green-900/60">
				<Check size={256} strokeWidth={3} />
			</span>
		</div>
	{:else}
		<div class="fixed inset-0 z-10 grid place-items-center">
			<span class="text-[300px]/0 font-bold text-red-900/60">
				<X size={256} strokeWidth={3} />
			</span>
		</div>
	{/if}
{/if}
