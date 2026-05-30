<script lang="ts">
	let { id, value, name, label, groupValue = $bindable() } = $props();
</script>

{#if id}
	<div class="block">
		<label class="text-sm" for={id}>
			<input type="radio" {id} {value} bind:group={groupValue} {name} required />
			{label}</label
		>
	</div>
{/if}
