<script lang="ts">
	import type { IconProps } from '$lib/types/index.js';

	let { width = 50, height = 50, ...rest }: IconProps = $props();
</script>

<svg
	viewBox="0 0 256 384"
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="xMidYMid"
	{width}
	{height}
	{...rest}><path d="M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z" /></svg
>
