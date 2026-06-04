<script lang="ts">
	import Question from '$lib/components/Question.svelte';
	import Answer from './Answer.svelte';
	import Button from '$lib/components/Button.svelte';

	let genQuestion = $state();
	let answer = $state(0);
	let {
		feedbackVisibility = $bindable(),
		correctness = $bindable(),
		isSession = $bindable()
	} = $props();

	function handleAnswerResult(result: boolean) {
		correctness = result;
		if (result) {
			genQuestion = !genQuestion;
		}

		feedbackVisibility = true;
	}
</script>

<div class="fixed top-4 right-4">
	<Button
		type="button"
		value="endSession"
		variant="text"
		content="&cross; Quit"
		onclick={() => {
			isSession = false;
		}}
	/>
</div>
{#key genQuestion}
	<div class="grid min-h-dvh grid-cols-1 grid-rows-1 p-4">
		<Question bind:answer />
		<Answer {answer} onAnswer={handleAnswerResult} />
	</div>
{/key}
