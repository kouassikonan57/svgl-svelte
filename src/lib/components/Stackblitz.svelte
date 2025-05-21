<script lang="ts">
	import type { IconProps } from '$lib/types/index.js';

	let { width = 50, height = 50, ...rest }: IconProps = $props();
</script>

<svg
	viewBox="0 0 256 368"
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="xMidYMid"
	{width}
	{height}
	{...rest}
	><path
		fill="#49A2F8"
		d="M109.586 217.013H0L200.34 0l-53.926 150.233H256L55.645 367.246l53.927-150.233z"
	/></svg
>
