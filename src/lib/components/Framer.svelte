<script lang="ts">
	export let width: number = 50;
	export let height: number = 50;
	const svgContent = `<svg viewBox="0 0 256 384" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="${width}" height="${height}"><path d="M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z"/></svg>`;
</script>

{@html svgContent}
