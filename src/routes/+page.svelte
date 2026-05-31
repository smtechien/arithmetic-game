<script lang="ts">
	import QuestionAnswer from '$lib/components/QuestionAnswer.svelte';
	import TabConfiguration from '$lib/components/TabConfiguration.svelte';
	import FeedbackOverlay from '$lib/components/FeedbackOverlay.svelte';
	import MainMenu from '$lib/components/MainMenu.svelte';

	let feedbackVisibility = $state(false);
	let correctness = $state(false);
	let isConfig = $state(false);
	let isSession = $state(false);
</script>

<!-- main menu -->
{#if !isConfig && !isSession}
	<MainMenu bind:isSession bind:isConfig />
{/if}

<!-- question answer (session start) -->
{#if !isConfig && isSession}
	<QuestionAnswer bind:feedbackVisibility bind:correctness bind:isSession />
	{#if feedbackVisibility}
		<FeedbackOverlay correct={correctness} bind:feedbackVisibility />
	{/if}
{/if}

<!-- configuration  -->
{#if isConfig}
	<TabConfiguration bind:isConfig />
{/if}
