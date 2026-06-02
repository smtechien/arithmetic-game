<script lang="ts">
	let { type, value, onclick, variant, content, disabled = false } = $props();
</script>

<button class="btn btn-{variant} px-4 py-2 text-gray-200" {type} {value} {onclick} {disabled}
	>{@html content}</button
>

<style>
	.btn {
		cursor: pointer;
	}
	.btn:disabled {
		cursor: not-allowed;
	}

	.btn-primary {
		background-color: var(--color-blue-800);
	}
	.btn-primary:hover {
		background-color: var(--color-blue-700);
	}
	.btn-primary:active {
		background-color: var(--color-blue-600);
	}

	.btn-success {
		background-color: var(--color-green-800);
	}
	.btn-success:hover {
		background-color: var(--color-green-700);
	}
	.btn-success:active {
		background-color: var(--color-green-600);
	}

	.btn-danger {
		background-color: var(--color-red-800);
	}
	.btn-danger:hover {
		background-color: var(--color-red-700);
	}
	.btn-danger:active {
		background-color: var(--color-red-600);
	}

	.btn-text {
		border: 1px solid black;
		color: var(--color-black);
	}
	.btn-text:hover {
		color: var(--color-gray-600);
	}
	.btn-text:active {
		color: var(--color-gray-400);
	}

	.btn-disabled {
		background-color: var(--color-gray-200);
		color: var(--color-gray-400);
	}
</style>
