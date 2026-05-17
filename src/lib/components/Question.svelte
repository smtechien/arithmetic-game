<script lang="ts">
	import Operand from '$lib/components/Operand.svelte';
	import Operator from '$lib/components/Operator.svelte';
	import { generateQuestion } from '$lib/utils/generateQuestion';

	const question = generateQuestion();
	let turn = $state(true);

	$effect(() => {
		const turnInterval = setInterval(() => {
			turn = false;
		}, 300);
		return () => {
			clearInterval(turnInterval);
		};
	});

	// send answer to it parent component
	let { answer = $bindable() } = $props();
	answer = question.answer;
</script>

<div class="basis-full text-5xl">
	<Operand operand={question.firstOperand} turns={turn} />
	<Operator operator={question.operator} turns={turn} />
	<Operand operand={question.secondOperand} turns={turn} />
</div>
