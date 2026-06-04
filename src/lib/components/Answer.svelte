<script lang="ts">
	import Keypad from './Keypad.svelte';

	let { answer, onAnswer } = $props();
	let value = $state('');
	let correct = $state(false);
	let inputDOM = $state<HTMLInputElement | null>(null);

	$effect(() => {
		correct = false;
	});

	function focusOnAnswerField(node: HTMLInputElement): void {
		requestAnimationFrame(() => {
			node.focus();
		});
	}

	function checkAnswer(event: Event): void {
		if (event) {
			event.preventDefault();
		}
		// if correct answer
		if (value == answer) {
			correct = true;
		}

		if (onAnswer) {
			onAnswer(correct);
		}

		// if wrong answer
		value = '';
		inputDOM?.focus();
	}
</script>

<form class="py-2" onsubmit={checkAnswer}>
	<input
		class="w-full border-0 border-b-2 text-3xl focus:border-blue-500 focus:ring-0 focus:outline-0"
		id="answer"
		type="number"
		bind:value
		bind:this={inputDOM}
		placeholder="Answer"
		use:focusOnAnswerField
		disabled={true}
	/>
</form>
<Keypad bind:value onSubmit={checkAnswer} />
