<script lang="ts">
	import Question from '$lib/components/Question.svelte';
	import Answer from './Answer.svelte';

	let genQuestion = $state();
	let answer = $state(0);
	let { feedbackVisibility = $bindable(), correctness = $bindable() } = $props();

	function handleAnswerResult(result: boolean) {
		correctness = result;
		if (result) {
			genQuestion = !genQuestion;
		}

		feedbackVisibility = true;
	}
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-5">
	{#key genQuestion}
		<Question bind:answer />
		<Answer {answer} onAnswer={handleAnswerResult} />
	{/key}
</div>
