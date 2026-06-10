<script lang="ts">
	import Question from '$lib/components/Question.svelte';
	import Answer from './Answer.svelte';
	import Button from '$lib/components/Button.svelte';
	import Canvas from './Canvas.svelte';

	let genQuestion = $state();
	let answer = $state(0);
	let isScribble: boolean = $state(false);
	let clearScribble: boolean = $state(false);

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

<div class="fixed top-4 right-4 z-50">
	<Button
		type="button"
		value="startScribble"
		variant="text"
		content={!isScribble ? 'Start Scribble' : 'Stop Scribble'}
		onclick={() => {
			isScribble = !isScribble;
		}}
	/>
	<Button
		type="button"
		value="clearScribble"
		variant="text"
		content="Clear Scribble"
		onclick={() => {
			clearScribble = !clearScribble;
		}}
	/>
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
	{#key clearScribble}
		<Canvas bind:isScribble />
	{/key}
	<div class="grid min-h-dvh grid-cols-1 grid-rows-1 p-4">
		<Question bind:answer />
		<Answer {answer} onAnswer={handleAnswerResult} />
	</div>
{/key}
