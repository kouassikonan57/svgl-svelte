<script lang="ts">
	export let width: number = 50;
	export let height: number = 50;
	const svgContent = `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="none" width="${width}" height="${height}"><rect width="512" height="256" x="256" y="670.72" fill="#1AD1A5" rx="128"/><circle cx="512" cy="353.28" r="256" fill="#fff"/><circle cx="512" cy="353.28" r="261" stroke="#000" stroke-opacity=".2" stroke-width="10"/><circle cx="512" cy="353.28" r="114.688" fill="#FF9903"/></svg>`;
</script>

{@html svgContent}
