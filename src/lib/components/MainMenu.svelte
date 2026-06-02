<script lang="ts">
	import Button from './Button.svelte';
	import ChooseOperators from './ChooseOperators.svelte';

	interface Props {
		isSession: boolean;
		isConfig: boolean;
	}

	let { isSession = $bindable(), isConfig = $bindable() }: Props = $props();
	let isOperator: boolean = $state(false);
</script>

<div class="flex min-h-screen flex-col justify-center gap-2 p-4">
	<h1 class="mb-2 border-b-1 pb-2 text-4xl font-light" style="text-align: center;">ARITHMETIC</h1>
	<ChooseOperators bind:isOperator />
	<Button
		type="button"
		variant="primary"
		disabled={!isOperator}
		value="startGame"
		content="Start"
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
