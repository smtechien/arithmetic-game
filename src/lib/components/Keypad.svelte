<script lang="ts">
	import Button from './Button.svelte';
	import { keypadButtons } from '$lib/utils/keypadButtons';

	interface Props {
		value: number | string | null;
		onSubmit: Function;
	}

	let { value = $bindable(), onSubmit }: Props = $props();

	function typeValue(text: string, name: string) {
		if (value == null) {
			value = 0;
		}
		switch (name) {
			case 'enter':
				onSubmit();
				break;
			case 'backspace':
				if (value == '-0') {
					value = '';
				}
				if (typeof value == 'number' && value < 0 && value.toString().length == 2) {
					value = '-0';
					break;
				}
				if (value.toString().length > 0) {
					if (value.toString().length == 1) {
						value = '';
						break;
					}
					value = parseInt(value.toString().slice(0, -1));
					break;
				}
			case 'clear':
				value = '';
				break;
			case 'negative':
				if (value.toString().length == 0) {
					value = '-0';
				}
				if (typeof value == 'number') {
					const valueToogleNegative = value * -1;
					value = valueToogleNegative;
				}
				break;
			case 'num0':
				if (value != 0) {
					const addedValue = value.toString().concat(text);
					value = parseInt(addedValue);
				}
				break;
			default:
				const addedValue = value.toString().concat(text);
				value = parseInt(addedValue);
				break;
		}
	}
</script>

<div class="grid min-h-full w-full grid-cols-4 gap-2 justify-self-stretch">
	{#each keypadButtons as keypad}
		<Button
			type="button"
			variant="text"
			value={keypad.name}
			onclick={() => {
				typeValue(keypad.value, keypad.name);
			}}
			content={keypad.value}
			style={keypad.style}
		/>
	{/each}
</div>

<style>
</style>
