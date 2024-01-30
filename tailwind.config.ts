import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
	content: ["./app/**/*.{ts,tsx}", "./content/**/*.mdx", "./public/**/*.svg"],
	theme: {
		extend: {
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
			typography: {
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
		},
	},
	plugins: [typography],
};

export default Config;
