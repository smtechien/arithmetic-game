<script lang="ts">
	let {
		value = $bindable(),
		name,
		placeholder,
		id,
		disabled = false,
		min = $bindable(),
		max = $bindable()
	} = $props();
</script>

<input
	class="required w-full border-gray-800 user-valid:border-green-500 user-invalid:border-red-500 disabled:border-gray-500 disabled:text-gray-500"
	type="number"
	bind:value
	required
	{id}
	{name}
	{placeholder}
	{disabled}
	{min}
	{max}
/>
