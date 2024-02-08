import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "dylan LaRocque",
	description: "a place for strong beliefs, loosely held.",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={`antialiased min-h-screen dark:bg-[#1D1C2C] text-slate-900 dark:text-slate-50 ${inter.className}`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="relative full-viewport">
						{" "}
						{/* This div wraps the navbar and canvas */}
						<NavBar />
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
