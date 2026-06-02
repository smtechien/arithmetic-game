<script lang="ts">
	let { id, isActive, content, eventHandler } = $props();
</script>

<button
	{id}
	onclick={eventHandler}
	type="button"
	class="flex-1 cursor-pointer border px-2 py-1 text-sm hover:font-bold"
	class:bg-blue-100={isActive}
	class:font-bold={isActive}
	class:hover:bg-blue-300={isActive}
>
	{@html content}
</button>
