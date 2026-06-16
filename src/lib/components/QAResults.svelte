<script lang="ts">
	import type { QuestionAnswer } from '$lib/types/question_answer';
	import QAResultItem from './QAResultItem.svelte';
	import { getResults, clearRecords } from '$lib/utils/recordGame';
	import Button from '$lib/components/Button.svelte';

	let { isResult = $bindable(), isSession = $bindable() } = $props();

	let startTime: number = $state(0);
	let endTime: number = $state(0);
	let questionAnswers: QuestionAnswer[] | null = $state(null);
	let timeSpentString: string = $state('');

	$effect(() => {
		const results = getResults();
		if (results) {
			startTime = results.startTime;
			endTime = results.endTime;
			questionAnswers = results.records.slice(0, -1);

			console.log(endTime);
			console.log(startTime);

			// time formatting
			const timeSpent: number = endTime - startTime;
			const centiseconds = Math.floor((timeSpent % 1000) / 10);
			const seconds = Math.floor((timeSpent / 1000) % 60);
			const minutes = Math.floor((timeSpent / (1000 * 60)) % 60);
			const hours = Math.floor((timeSpent / (1000 * 60 * 60)) % 24);

			const centisecondsString = centiseconds > 0 ? `.${centiseconds}s` : ``;
			let secondsString = seconds > 0 ? `${seconds}` : '';
			secondsString = centiseconds == 0 && seconds > 0 ? `${seconds}s` : secondsString;
			secondsString = centiseconds > 0 && seconds == 0 ? '0' : secondsString;
			const minutesString = minutes > 0 ? `${minutes}m ` : '';
			const hoursString = hours > 0 ? `${hours}h ` : '';

			timeSpentString = `${hoursString}${minutesString}${secondsString}${centisecondsString}`;
			console.log(timeSpent);
			console.log(timeSpentString);
		}
	});
</script>

<div class=" z-10 m-0 flex h-dvh flex-col gap-2">
	<div class="flex h-dvh flex-col gap-2 border p-4">
		<h1 class="text-2xl">Game Review</h1>
		<div>time spent: {timeSpentString}</div>
		<div class="flex flex-col gap-2 overflow-y-auto border p-2">
			{#each questionAnswers as qaItem}
				<QAResultItem
					id={qaItem.id}
					question={qaItem.question}
					answers={qaItem.answers}
					duration={qaItem.duration}
				/>
			{/each}
		</div>
		<Button
			type="button"
			value="endSession"
			variant="text"
			content="Quit"
			onclick={() => {
				clearRecords(); // hapus semua storage berkaitan dengan game setelah selesai review
				isResult = false;
				isSession = false;
			}}
		/>
	</div>
</div>
