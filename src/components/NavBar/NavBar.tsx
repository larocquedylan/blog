import Link from "next/link";
import ModeToggle from "../ThemeToggle";

export default function NavBar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
      <nav className="space-x-4">
        <ModeToggle />
        <Link
            className="text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
            href={'/blog'}>
            Blogs
        </Link>
        <Link
            className="text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
            href={'/home'}>
            Resume
        </Link>
      </nav>
    </header>
  );
}
