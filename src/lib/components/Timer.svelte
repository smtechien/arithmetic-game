<script lang="ts">
	let startTimestamp: number = $state(0);
	let elapsedTimestamp: number = $state(0);
	let getHours: number = $state(0);
	let getMinutes: number = $state(0);
	let getSeconds: number = $state(0);
	let timeString: string = $state('');

	$effect(() => {
		startTimestamp = Date.now();
		const timerInterval = setInterval(() => {
			elapsedTimestamp = Date.now() - startTimestamp;
			getSeconds = Math.floor((elapsedTimestamp / 1000) % 60);
			getMinutes = Math.floor((elapsedTimestamp / (1000 * 60)) % 60);
			getHours = Math.floor((elapsedTimestamp / (1000 * 60 * 60)) % 24);
			timeString = `${String(getHours).padStart(2, '0')}:${String(getMinutes).padStart(2, '0')}:${String(getSeconds).padStart(2, '0')}`;
		}, 100);
		return () => {
			clearInterval(timerInterval);
		};
	});
</script>

<time class="border p-2" datetime={timeString}>{timeString}</time>
