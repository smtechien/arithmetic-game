<script lang="ts">
	let canvas: HTMLCanvasElement | null = $state(null);
	let context: CanvasRenderingContext2D | null = $state(null);
	let isDrawing: boolean = $state(false);

	let start: { x: number; y: number } | null = $state(null);

	let l: number = $state(0);
	let t: number = $state(0);

	// window //
	let windowHeight: number = $state(0);
	let windowWidth: number = $state(0);

	type eventMouse = (event: PointerEvent) => void;
	interface Props {
		isEraser: boolean;
		isScribble: boolean;
	}

	let { isScribble = $bindable(), isEraser = $bindable() }: Props = $props();

	$effect(() => {
		if (canvas) {
			context = canvas.getContext('2d');
			if (context) {
				context.lineWidth = 2;
				context.lineCap = 'round';
				context.lineJoin = 'round';
				context.strokeStyle = 'red';
			}
		}
		handleSize();
	});

	const handleSize = () => {
		if (canvas) {
			const { top, left } = canvas?.getBoundingClientRect();
			t = top;
			l = left;
		}
	};

	const drawStart: eventMouse = ({ offsetX: x, offsetY: y }): void => {
		isDrawing = true;
		if (context) {
			if (isEraser) {
				context.globalCompositeOperation = 'destination-out';
				context.lineWidth = 44;
			} else {
				context.globalCompositeOperation = 'source-over';
				context.lineWidth = 2;
			}
		}
		start = { x, y };
	};

	const drawEnd = () => {
		isDrawing = false;
	};

	const drawPoint: eventMouse = ({ offsetX: x1, offsetY: y1 }): void => {
		if (!isDrawing) return;
		if (start) {
			const { x, y } = start;
			context?.beginPath();
			context?.moveTo(x, y);
			context?.lineTo(x1, y1);
			context?.closePath();
			context?.stroke();
		}
		start = { x: x1, y: y1 };
	};
</script>

<svelte:window
	bind:innerWidth={windowWidth}
	bind:innerHeight={windowHeight}
	on:resize={handleSize}
/>

<canvas
	id="canvas"
	class="fixed top-0 left-0 touch-none"
	class:cursor-crosshair={isScribble}
	class:customCursor={isEraser}
	class:pointer-events-none={!isScribble && !isEraser}
	width={windowWidth}
	height={windowHeight}
	bind:this={canvas}
	onpointerdown={drawStart}
	onpointermove={drawPoint}
	onpointerup={drawEnd}
	onpointerleave={drawEnd}
>
	coret-coret
</canvas>

<style>
	.customCursor {
		/* Syntax: url('path/to/image.svg') <x-hotspot> <y-hotspot>, fallback */
		cursor:
			url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"><circle cx="22" cy="22" r="21" fill="none" stroke="black" stroke-width="1"/></svg>')
				22 22,
			auto;
	}
</style>
