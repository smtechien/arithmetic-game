<script lang="ts">
	import Button from './Button.svelte';

	interface Props {
		isSession: boolean;
		isConfig: boolean;
	}
	let { isSession = $bindable(), isConfig = $bindable() }: Props = $props();
</script>

<div class="flex min-h-screen flex-col justify-center gap-2 p-4">
	<h1 class="text-4xl font-light" style="text-align: center;">ARITHMETIC</h1>
	<Button
		type="button"
		variant="primary"
		value="startGame"
		content="Start Game"
		onclick={() => {
			isSession = true;
		}}
	/>
	<Button
		type="button"
		variant="text"
		value="openConfig"
		content="Configurations"
		onclick={() => {
			isConfig = true;
		}}
	/>
</div>
