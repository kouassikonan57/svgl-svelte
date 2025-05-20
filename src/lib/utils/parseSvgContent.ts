export const parseSvgContent = (content: string) => {
	// Remove XML declarations, DOCTYPE, and scripts
	content = content.replace(/<\?xml[^>]*\?>/gi, '');
	content = content.replace(/<!DOCTYPE[^>]*>/gi, '');
	content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
	content = content.replace(/<script[^>]*\/?>/gi, '');

	content = content.replace(/<svg\b([^>]*)>/i, (_, attrs) => {
		attrs = attrs.replace(/\s*width="[^"]*"/i, '');
		attrs = attrs.replace(/\s*height="[^"]*"/i, '');

		return `<svg${attrs} width="\${width}" height="\${height}">`;
	});

	content = content.replace(/`/g, '\\`');

	return {
		scriptTag: `<script lang="ts">
  export let width: number = 50;
  export let height: number = 50;
  const svgContent = \`${content}\`;
</script>`,
		templateContent: '{@html svgContent}'
	};
};
