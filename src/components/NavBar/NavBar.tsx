import Link from "next/link";
import ModeToggle from "../ThemeToggle";

export default function NavBar() {
  return (
    <div className="flex justify-center">
      <nav className="max-w-md mx-auto mt-5 rounded-full px-6 py-3 transform bg-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="sm:block">
              <div className="flex space-x-4">
                <Link
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  href={"/"}
                >
                  Home
                </Link>
                <Link
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  href={"/resume"}
                >
                  Resume
                </Link>
                <Link
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  href={"/blog"}
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
