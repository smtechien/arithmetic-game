<script lang="ts">
	import TabButton from './TabButton.svelte';
	let { tabSelection = $bindable(), eventHandler } = $props();
</script>

<div class="flex w-auto flex-row flex-nowrap items-end gap-1">
	<TabButton
		id="tabButton0"
		isActive={tabSelection == 'add' ? true : false}
		content="&plus;"
		{eventHandler}
	/>
	<TabButton
		id="tabButton1"
		isActive={tabSelection == 'subtract' ? true : false}
		content="&minus;"
		{eventHandler}
	/>
	<TabButton
		id="tabButton2"
		isActive={tabSelection == 'multiply' ? true : false}
		content="&times;"
		{eventHandler}
	/>
	<TabButton
		id="tabButton3"
		isActive={tabSelection == 'divide' ? true : false}
		content="&divide;"
		{eventHandler}
	/>
</div>
