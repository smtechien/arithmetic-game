<script lang="ts">
	let { id, content } = $props();
</script>

<label class="text-sm" for={id}>
	{content}
</label>
