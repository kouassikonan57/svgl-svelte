<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	export interface Props extends HTMLAttributes<SVGElement> {
		width?: number;
		height?: number;
	}

	let { width = 50, height = 50, ...rest }: Props = $props();
</script>

<svg
	viewBox="0 0 256 222"
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="xMidYMid"
	{width}
	{height}
	{...rest}><path fill="#000" d="m128 0 128 221.705H0z" /></svg
>
