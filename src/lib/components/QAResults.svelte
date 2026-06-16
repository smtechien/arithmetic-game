<script lang="ts">
	import type { QuestionAnswer } from '$lib/types/question_answer';
	import QAResultItem from './QAResultItem.svelte';

	interface Props {
		startTime: number;
		endTime: number;
		questionAnswers: QuestionAnswer[];
	}

	let { startTime, endTime, questionAnswers }: Props = $props();
	let timeSpentString: string = $state('');

	$effect(() => {
		const timeSpent: number = endTime - startTime;
		const centiseconds = Math.floor((timeSpent % 1000) / 10);
		const seconds = Math.floor((timeSpent / 1000) % 60);
		const minutes = Math.floor((timeSpent / (1000 * 60)) % 60);
		const hours = Math.floor((timeSpent / (1000 * 60 * 60)) % 24);

		const centisecondsString = centiseconds > 0 ? `.${centiseconds}s` : ``;
		let secondsString = seconds > 0 ? `${seconds} ` : '';
		secondsString = centiseconds > 0 && seconds == 0 ? '0' : secondsString;
		const minutesString = minutes > 0 ? `${minutes}m ` : '';
		const hoursString = hours > 0 ? `${hours}h ` : '';

		timeSpentString = `${hoursString}${minutesString}${secondsString}${centisecondsString}`;
	});
</script>

<div class="flex flex-col gap-2 border p-2">
	<h1 class="text-2xl">Game Review</h1>
	<div>time spent: {timeSpentString}</div>
	<div class="flex flex-col gap-2">
		{#each questionAnswers as qaItem}
			<QAResultItem
				id={qaItem.id}
				question={qaItem.question}
				answers={qaItem.answers}
				duration={qaItem.duration}
			/>
		{/each}
	</div>
</div>
