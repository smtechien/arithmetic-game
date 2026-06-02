<script lang="ts">
	interface Props {
		type: string;
		title: string;
		content: string;
		withInterval: boolean;
		isVisible: boolean;
	}

	let { type, title, content, withInterval, isVisible = $bindable() }: Props = $props();

	$effect(() => {
		if (withInterval) {
			const visibleInterval = setInterval(() => {
				isVisible = false;
			}, 2000);
			return () => {
				clearInterval(visibleInterval);
			};
		}
	});
</script>

{#if isVisible}
	<div
		class="mt-2 mr-2 mb-0 ml-2 flex flex-col gap-2 border-1 p-4"
		class:bg-green-300={type == 'success'}
	>
		<div class="flex flex-row justify-between">
			<p class="border-b-1 text-sm capitalize">{title}</p>
			<button
				type="button"
				class="hover:cursor-pointer hover:font-bold"
				onclick={() => {
					isVisible = false;
				}}>&cross;</button
			>
		</div>
		<p class="text-md">{content}</p>
	</div>
{/if}
