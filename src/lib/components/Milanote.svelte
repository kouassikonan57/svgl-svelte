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
	const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" width="${width}" height="${height}" ${restAttrs}>
  <path fill="#31303A" d="M110 20c49.706 0 90 40.294 90 90s-40.294 90-90 90-90-40.294-90-90 40.294-90 90-90Zm40 55.01c0-4.455-5.386-6.685-8.536-3.536L110 102.934l-31.464-31.46C75.386 68.324 70 70.555 70 75.01V145a5 5 0 0 0 5 5h70a5 5 0 0 0 5-5Zm-40 42.065 22.929 22.926H87.07L110 117.075Zm30-29.996v45.852l-22.929-22.926L140 87.079Zm-60 0 22.929 22.926L80 132.931V87.08Z"/>
</svg>`;
</script>

{@html svgContent}
