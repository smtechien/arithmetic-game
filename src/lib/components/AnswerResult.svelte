<script lang="ts">
	interface Props {
		isCorrect: boolean;
		value: number;
	}

	let { isCorrect, value }: Props = $props();
</script>

<div class:isCorrect class:isWrong={!isCorrect} class="border p-1">
	{value}
</div>

<style>
	.isCorrect {
		background-color: var(--color-green-300);
	}
	.isWrong {
		background-color: var(--color-red-300);
	}
</style>
