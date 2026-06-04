<script lang="ts">
	import Operand from '$lib/components/Operand.svelte';
	import Operator from '$lib/components/Operator.svelte';
	import { getActiveOperator } from '$lib/utils/localStorageConfig';
	import { generateQuestion } from '$lib/utils/generateQuestion';
	import { generateOperator } from '$lib/utils/generateOperator';

	let turn = $state(true);
	let { answer = $bindable() } = $props();

	let firstOperand = $state(0);
	let secondOperand = $state(0);
	let operator = $state('&times;');

	$effect(() => {
		const activeOperator = getActiveOperator();
		if (activeOperator) {
			const randomOperator = generateOperator(activeOperator);
			const question = generateQuestion(randomOperator);
			({ firstOperand, secondOperand, operator, answer } = question);
			const turnInterval = setInterval(() => {
				turn = false;
			}, 300);
			return () => {
				clearInterval(turnInterval);
			};
		}
	});
</script>

<div class="flex w-full flex-row items-center justify-center text-5xl">
	<Operand operand={firstOperand} turns={turn} />
	<Operator {operator} turns={turn} />
	<Operand operand={secondOperand} turns={turn} />
</div>
