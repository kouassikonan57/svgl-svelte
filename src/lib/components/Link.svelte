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
	const svgContent = `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" ${restAttrs}>
<g clip-path="url(#clip0_3_23)">
<path d="M100 200C155.229 200 200 155.229 200 100C200 44.7715 155.229 0 100 0C44.7715 0 0 44.7715 0 100C0 155.229 44.7715 200 100 200Z" fill="#375BD2"/>
<path d="M100 25L35.0475 62.5V137.5L100 175L164.952 137.5V62.5L100 25ZM137.427 121.61L100 143.217L62.5725 121.61V78.39L100 56.7825L137.427 78.39V121.61Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3_23">
<rect width="200" height="200" fill="white"/>
</clipPath>
</defs>
</svg>
`;
</script>

{@html svgContent}
