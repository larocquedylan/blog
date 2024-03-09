import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import Contact from "@/components/Contact";
import { Analytics } from "@vercel/analytics/react";
import "@code-hike/mdx/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "dylan LaRocque",
	description: "a place for strong beliefs, loosely held.",
	icons: {
		icon: ["./Favicon/favicon.ico"],
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={`antialiased min-h-screen dark:bg-[#0B1A28] text-slate-900 dark:text-slate-50 ${inter.className}`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="relative full-viewport">
						{" "}
						<NavBar />
						{children}
						<Contact />
					</div>
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
