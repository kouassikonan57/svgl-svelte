import { parseSvgContent } from './index.js';

export const componentTemplate = (content: string, framework: string) => {
	const { templateContent, scriptTag } = parseSvgContent(content, framework);
	return `
${scriptTag}
${templateContent}
    `;
};
