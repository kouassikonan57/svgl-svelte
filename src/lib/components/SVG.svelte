<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	export interface Props extends HTMLAttributes<SVGElement> {
		width?: number;
		height?: number;
	}

	let { width = 50, height = 50, ...rest }: Props = $props();
	const restAttrs = Object.entries(rest)
		.map(([k, v]) => `${k}="${v}"`)
		.join(' ');
	const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" width="${width}" height="${height}" ${restAttrs}><g stroke="#000" stroke-width="38.009"><g id="svgstar" transform="translate(150 150)"><path id="svgbar" fill="#ffb13b" d="M-84.149-15.851a22.417 22.417 0 1 0 0 31.702H84.15a22.417 22.417 0 1 0 0-31.702Z"/><use xlink:href="#svgbar" transform="rotate(45)"/><use xlink:href="#svgbar" transform="rotate(90)"/><use xlink:href="#svgbar" transform="rotate(135)"/></g></g><use xlink:href="#svgstar"/></svg>`;
</script>

{@html svgContent}
