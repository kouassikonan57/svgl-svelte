<script lang="ts">
	export let width: number = 50;
	export let height: number = 50;
	const svgContent = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54 43"
     width="${width}" height="${height}"><path fill="#0c0" d="M1 42V10l9-9h43v33l-9 9z"></path><text
        x="9"
        y="32"
        fill="#FFF"
        font-family="Arial"
        font-size="32">Qt</text
    ></svg
>
`;
</script>

{@html svgContent}
