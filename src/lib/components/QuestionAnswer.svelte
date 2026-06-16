<script lang="ts">
	import {
		setStartTime,
		setEndTime,
		getQuestionAnswerLength,
		clearRecords
	} from '$lib/utils/recordGame';
	import Question from '$lib/components/Question.svelte';
	import QAResults from '$lib/components/QAResults.svelte';
	import Answer from './Answer.svelte';
	import Button from '$lib/components/Button.svelte';
	import Canvas from './Canvas.svelte';
	import Timer from './Timer.svelte';
	import Pencil from '@lucide/svelte/icons/pencil';
	import PencilOff from '@lucide/svelte/icons/pencil-off';
	import BrushCleaning from '@lucide/svelte/icons/brush-cleaning';
	import Eraser from '@lucide/svelte/icons/eraser';
	import X from '@lucide/svelte/icons/x';

	let genQuestion: boolean = $state(false);
	let answer: number = $state(0);
	let questionNumber: number = $state(1);
	let isResult: boolean = $state(false);

	// canvas
	let isScribble: boolean = $state(false);
	let isEraser: boolean = $state(false);
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
			questionNumber += 1;
		}

		feedbackVisibility = true;
	}

	$effect(() => {
		const startTime = Date.now();
		setStartTime(startTime);
	});
</script>

{#if isResult}
	<QAResults bind:isResult bind:isSession />
{:else}
	{#snippet pencilOn()}
		<Pencil strokeWidth={1.5} />
	{/snippet}
	{#snippet pencilOff()}
		<PencilOff strokeWidth={1.5} />
	{/snippet}
	{#snippet eraser()}
		<Eraser strokeWidth={1.5} />
	{/snippet}
	{#snippet brushCleaning()}
		<BrushCleaning strokeWidth={1.5} />
	{/snippet}
	{#snippet cross()}
		<X strokeWidth={1.5} />
	{/snippet}

	<div class="fixed top-4 right-4 z-50 flex gap-2">
		<Timer />
		<Button
			type="button"
			value="startScribble"
			variant="text"
			content=""
			style={isScribble && !isEraser ? 'bg-blue-400' : ''}
			icon={!isScribble ? pencilOn : pencilOff}
			onclick={() => {
				isScribble = !isScribble;
				if (isEraser == true) {
					isEraser = false;
				}
			}}
		/>
		<Button
			type="button"
			value="startScribble"
			variant="text"
			content=""
			icon={eraser}
			style={!isScribble && isEraser ? 'bg-blue-400' : ''}
			onclick={() => {
				isEraser = !isEraser;
				if (isScribble == true) {
					isScribble = false;
				}
			}}
		/>
		<Button
			type="button"
			value="clearScribble"
			variant="text"
			content=""
			icon={brushCleaning}
			onclick={() => {
				clearScribble = !clearScribble;
			}}
		/>
		<Button
			type="button"
			value="endSession"
			variant="text"
			content=""
			icon={cross}
			onclick={() => {
				const recordsLength = getQuestionAnswerLength();
				if (recordsLength > 1) {
					const endTime: number = Date.now();
					setEndTime(endTime);
					isResult = true;
				} else {
					clearRecords();
					isSession = false;
				}
			}}
		/>
	</div>
	{#key genQuestion}
		{#key clearScribble}
			<Canvas bind:isScribble bind:isEraser />
		{/key}
		<div class="grid min-h-dvh grid-cols-1 grid-rows-1 p-4">
			<Question bind:answer {questionNumber} />
			<Answer {answer} onAnswer={handleAnswerResult} {questionNumber} />
		</div>
	{/key}
{/if}
