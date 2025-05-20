<script lang="ts">
	export let width: number = 50;
	export let height: number = 50;
	const svgContent = `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="${width}" height="${height}"><defs><linearGradient x1="99.991%" y1="-.011%" x2=".01%" y2="100.01%" id="a"><stop stop-color="#E44857" offset=".344%"/><stop stop-color="#C711E1" offset="46.89%"/><stop stop-color="#7F52FF" offset="100%"/></linearGradient></defs><path fill="url(#a)" d="M256 256H0V0h256L128 127.949z"/></svg>`;
</script>

{@html svgContent}
