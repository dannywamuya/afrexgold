import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'text-primary': 'var(--text-primary)',
				'text-primary-variant': 'var(--text-primary-variant)',
				'text-secondary': 'var(--text-secondary)',
				'text-secondary-variant': 'var(--text-secondary-variant)',
				'bg-primary': 'var(--bg-primary)',
				'bg-primary-variant': 'var(--bg-primary-variant)',
				'bg-primary-variant-transP': 'var(--bg-primary-variant-transP)',
				'bg-secondary': 'var(--bg-secondary)',
			},
			fontFamily: {
				nunito: ['var(--nunito)'],
				karla: ['var(--karla)'],
				maven: ['var(--maven)'],
			},
		},
	},
	plugins: [],
};
export default config;
