import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				xs: "360px", // custom xs breakpoint
			},
			colors: {
				custom1: "#00072d",
				custom2: "#001e5e",
				custom3: "#0a2472",
				custom4: "#0e6ba8",
				custom5: "rgb(48, 38, 124)",
			},
			fontFamily: {
				sans: ["Inter"],
			},
			maxWidth: {
				custom: "900px", // Add this line
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
