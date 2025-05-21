<script lang="ts">
	import type { IconProps } from '$lib/types/index.js';

	let { width = 50, height = 50, ...rest }: IconProps = $props();
</script>

<svg
	viewBox="0 0 256 222"
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="xMidYMid"
	{width}
	{height}
	{...rest}><path fill="#000" d="m128 0 128 221.705H0z" /></svg
>
