import { parseSvgContent } from './index.js';

export const componentTemplate = (content: string) => {
	const { templateContent, scriptTag } = parseSvgContent(content);
	return `
${scriptTag}
${templateContent}
    `;
};
