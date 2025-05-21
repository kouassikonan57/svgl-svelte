export const parseSvgContent = (content: string) => {
	// Remove XML declarations, DOCTYPE, and scripts
	content = content.replace(/<\?xml[^>]*\?>/gi, '');
	content = content.replace(/<!DOCTYPE[^>]*>/gi, '');
	content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
	content = content.replace(/<script[^>]*\/?>/gi, '');

	content = content.replace(/<svg\b([^>]*)>/i, (_, attrs) => {
		attrs = attrs.replace(/\s*width="[^"]*"/i, '');
		attrs = attrs.replace(/\s*height="[^"]*"/i, '');

		return `<svg${attrs} {...rest}>`;
	});

	content = content.replace(/`/g, '\\`');

	return {
		scriptTag: `<script lang="ts">
  import type { IconProps } from '$lib/types/index.js';

  let { ...rest }: IconProps = $props();
</script>`,
		templateContent: content
	};
};
