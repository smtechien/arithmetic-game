<script lang="ts">
	import type { Radios } from '$lib/types/radios';
	import InputRadio from './InputRadio.svelte';

	interface Props {
		title: string;
		groupValue: string;
		radios: Radios;
	}

	let { title, groupValue = $bindable(), radios }: Props = $props();
</script>

<fieldset class="border-1 border-gray-800 p-2">
	<legend class="px-2 text-sm">{title} - {groupValue}</legend>
	<div class="flex flex-col">
		{#each radios.items as item}
			<InputRadio
				id={item.id}
				bind:groupValue
				label={item.label}
				value={item.value}
				name={radios.name}
			/>
		{/each}
	</div>
</fieldset>
