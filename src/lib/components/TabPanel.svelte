<script lang="ts">
	let { form, operator = $bindable() } = $props();
</script>

<div class="overflow-y-auto border-1">
	{@render form(operator)}
</div>
