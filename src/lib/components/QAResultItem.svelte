<script lang="ts">
	import type { Question } from '$lib/types/question';
	import AnswerResult from './AnswerResult.svelte';

	interface Props {
		id: number;
		question: Question;
		answers: number[];
		duration: number;
	}

	let { id, question, answers, duration }: Props = $props();
	let questionString: string = $state('');
	let centiseconds: number = $state(0);
	let seconds: number = $state(0);
	let minutes: number = $state(0);
	let hours: number = $state(0);

	$effect(() => {
		centiseconds = Math.floor((duration % 1000) / 10);
		seconds = Math.floor((duration / 1000) % 60);
		minutes = Math.floor((duration / (1000 * 60)) % 60);
		hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
		questionString = `${question.firstOperand} ${question.operator} ${question.secondOperand} = ? `;
	});
</script>

<div class="flex flex-col gap-2">
	<div class=" text-lg font-bold">
		Q{id}
	</div>
	<div class="flex w-full flex-col gap-2 border p-2">
		<div class="w-full text-lg">
			<p>{@html questionString}</p>
		</div>
		<div class="w-full">
			<p class="text-sm font-bold">Answers</p>
			<div class="flex flex-row gap-2">
				{#each answers as answer}
					<AnswerResult isCorrect={question.answer == answer} value={answer} />
				{/each}
			</div>
		</div>
		<div class="w-full">
			<p class="text-sm font-bold">Duration</p>
			<p class="text-md">
				{#if hours > 0}{hours}h
				{/if}
				{#if minutes > 0}{minutes}m
				{/if}
				{#if seconds > 0}{seconds}{#if centiseconds > 0}.{centiseconds}{/if}s{/if}
			</p>
		</div>
	</div>
</div>
