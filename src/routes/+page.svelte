<script lang="ts">
	import QuestionAnswer from '$lib/components/QuestionAnswer.svelte';
	import TabConfiguration from '$lib/components/TabConfiguration.svelte';
	import FeedbackOverlay from '$lib/components/FeedbackOverlay.svelte';
	let feedbackVisibility = $state(false);
	let correctness = $state(false);
	let isConfig = $state(false);
</script>

<TabConfiguration bind:isConfig />

{#if !isConfig}
	<QuestionAnswer bind:feedbackVisibility bind:correctness />
{/if}

{#if feedbackVisibility}
	<FeedbackOverlay correct={correctness} bind:feedbackVisibility />
{/if}
