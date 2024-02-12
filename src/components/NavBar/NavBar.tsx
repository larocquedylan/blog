import Link from "next/link";
import ModeToggle from "../ThemeToggle";

export default function NavBar() {
	return (
		<div className="flex justify-center z-50 fixed top-0 left-0 right-0">
			{" "}
			<nav className="max-w-md mx-auto mt-5 rounded-full px-3 py-1 transform shadow-lg bg-white dark:bg-[#0B1A28]">
				<div className="flex items-center justify-between">
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<div className="sm:block">
							<div className="flex space-x-2">
								<Link
									className="px-2 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-500"
									href={"/"}
								>
									Home
								</Link>
								<Link
									className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-500 transition-colors duration-300"
									href="/about"
								>
									About
								</Link>
								<Link
									className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-500 transition-colors duration-300"
									href="/blog"
								>
									Blog
								</Link>
								<ModeToggle />
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
