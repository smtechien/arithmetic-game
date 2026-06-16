<script lang="ts">
	let { form, operator = $bindable() } = $props();
</script>

<div class="overflow-y-auto border">
	{@render form(operator)}
</div>
