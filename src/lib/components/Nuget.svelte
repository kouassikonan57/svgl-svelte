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
	const svgContent = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="none" width="${width}" height="${height}" ${restAttrs}><path fill="#004880" fill-rule="evenodd" d="M376.624 460.825c-47.024 0-85.149-38.13-85.149-85.157 0-47.008 38.126-85.159 85.149-85.159 47.025 0 85.149 38.151 85.149 85.158 0 47.028-38.125 85.158-85.149 85.158ZM206.772 265.643c-29.397 0-53.218-23.844-53.218-53.224 0-29.401 23.821-53.223 53.218-53.223 29.398 0 53.219 23.823 53.219 53.223 0 29.38-23.821 53.224-53.219 53.224ZM380.392 99.5H238.277c-72.419 0-131.172 58.759-131.172 131.206v142.108c0 72.469 58.753 131.186 131.172 131.186h142.115c72.462 0 131.172-58.717 131.172-131.186V230.707c0-72.448-58.71-131.207-131.172-131.207ZM85.15 49.579c0 23.524-19.074 42.578-42.575 42.578C19.052 92.157 0 73.103 0 49.58 0 26.074 19.051 7 42.575 7c23.5 0 42.574 19.074 42.574 42.579Z"/></svg>`;
</script>

{@html svgContent}
