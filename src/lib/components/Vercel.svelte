<script lang="ts">
	export let width: number = 50;
	export let height: number = 50;
	const svgContent = `<svg viewBox="0 0 256 222" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="${width}" height="${height}"><path fill="#000" d="m128 0 128 221.705H0z"/></svg>`;
</script>

{@html svgContent}
