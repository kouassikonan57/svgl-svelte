import type { HTMLAttributes } from 'svelte/elements';

export interface Svgl {
	id: number;
	route:
		| string
		| {
				light?: string;
				dark?: string;
		  };
	title: string;
	url: string;
	category: string | string[];
	wordmark?:
		| string
		| {
				light?: string;
				dark?: string;
		  };
	brandUrl?: string;
}

export interface IconProps extends HTMLAttributes<SVGElement> {
	width?: number;
	height?: number;
}
