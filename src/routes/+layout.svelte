<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="icon" href={favicon} />
  <title>Kuis Aritmatika - Smtechien</title>
</svelte:head>
{@render children()}
