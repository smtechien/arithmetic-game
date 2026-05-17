<script lang="ts">
	import QuestionAnswer from '$lib/components/QuestionAnswer.svelte';
	import FeedbackOverlay from '$lib/components/FeedbackOverlay.svelte';
	let feedbackVisibility = $state(false);
	let correctness = $state(false);
</script>

<QuestionAnswer bind:feedbackVisibility bind:correctness />

{#if feedbackVisibility}
	<FeedbackOverlay correct={correctness} bind:feedbackVisibility />
{/if}
