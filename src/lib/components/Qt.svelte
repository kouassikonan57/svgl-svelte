<script lang="ts">
	import type { IconProps } from '$lib/types/index.js';

	let { ...rest }: IconProps = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 43" {...rest}
	><path fill="#0c0" d="M1 42V10l9-9h43v33l-9 9z"></path><text
		x="9"
		y="32"
		fill="#FFF"
		font-family="Arial"
		font-size="32">Qt</text
	></svg
>
