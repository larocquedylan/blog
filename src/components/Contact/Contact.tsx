import Link from "next/link";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
	return (
		<div className="flex justify-center z-40 fixed bottom-6 left-0 right-0">
			<nav className="font-white text-white">
				<div className="max-w-custom mx-auto flex justify-between items-center ">
					<div className="flex space-x-2">
						<Link
							// email to larocque.d11@gmail.com
							href="mailto:larocque.d11@gmail.com"
							target="_blank"
							className="p-2 rounded-md  hover:text-gray-400  transition-colors duration-300 bg-[#0B1A28]"
							rel="noreferrer"
						>
							<HiOutlineMail />
						</Link>
						<Link
							href="https://github.com/larocquedylan"
							target="_blank"
							className="p-2 rounded-md  hover:text-gray-400  transition-colors duration-300 bg-[#0B1A28]"
							rel="noreferrer"
						>
							<IconGithubAlt />
						</Link>
						<Link
							href="https://www.linkedin.com/in/dylan-larocque-/"
							target="_blank"
							className="p-2 rounded-md  hover:text-gray-400 transition-colors duration-300 bg-[#0B1A28]"
							rel="noreferrer"
						>
							<IconLinkedinLine />
						</Link>
						<Link
							href="https://twitter.com/LaRocque_Dylan"
							target="_blank"
							className="p-2 rounded-md hover:text-gray-400 hover:border-gray-400  transition-colors duration-300  hover:text-custom4 bg-[#0B1A28]"
							rel="noreferrer"
						>
							<IconTwitterAlt />
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;

function IconGithubAlt(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M9.653 20.865a.501.501 0 00-.59-.492c-1.59.295-3.608.299-4.194-1.347a5.622 5.622 0 00-1.679-2.249 1.46 1.46 0 01-.408-.31.5.5 0 00-.491-.42h-.002a.5.5 0 00-.5.499c-.003.57.71.997.922 1.11.53.475.947 1.064 1.222 1.721.348.98 1.41 2.495 4.722 2.072.003.365.008.553.012.697l.005.294a.5.5 0 001 0l-.005-.322a38.783 38.783 0 01-.014-1.253zM20.921 5.224a7.357 7.357 0 00-.096-.119c.067-.21.12-.427.158-.645a6.033 6.033 0 00-.397-3.17.5.5 0 00-.309-.29c-.141-.047-1.433-.395-4.13 1.382a13.973 13.973 0 00-6.884 0C6.567.626 5.283.955 5.14.997a.503.503 0 00-.316.292 6.038 6.038 0 00-.394 3.219c.038.2.087.397.145.592a3.584 3.584 0 00-.1.128 5.946 5.946 0 00-1.275 3.774c-.002.31.012.62.043.929.34 4.664 3.349 5.962 5.947 6.405-.169.303-.295.629-.376.967a.5.5 0 00.971.238c.093-.46.325-.88.665-1.202a.5.5 0 00-.272-.874C7.422 15.152 4.56 14.24 4.24 9.84a7.683 7.683 0 01-.039-.838 4.982 4.982 0 011.07-3.168c.076-.102.16-.194.243-.286a.501.501 0 00.096-.516 4.05 4.05 0 01-.194-.695 4.955 4.955 0 01.232-2.39 6.71 6.71 0 013.248 1.39.497.497 0 00.414.067 12.973 12.973 0 016.793 0 .5.5 0 00.415-.067 6.555 6.555 0 013.242-1.398c.269.755.35 1.563.237 2.356a3.877 3.877 0 01-.206.737.501.501 0 00.097.516c.088.097.175.205.253.302a4.913 4.913 0 011.07 3.152c.002.286-.012.572-.042.856-.317 4.381-3.19 5.292-5.957 5.607a.5.5 0 00-.273.874c.345.325.576.752.659 1.219.085.329.125.668.118 1.008v2.46c-.01.675-.01 1.182-.01 1.414a.5.5 0 001 0c0-.23 0-.731.01-1.407v-2.467a4.633 4.633 0 00-.15-1.255 3.653 3.653 0 00-.367-.975c2.609-.442 5.63-1.74 5.966-6.385.033-.315.049-.632.046-.949a5.892 5.892 0 00-1.29-3.778z" />
		</svg>
	);
}

function IconLinkedinLine(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 015.5 5.5V21h-2v-7.5a3.5 3.5 0 00-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1 2h2V21H4V8.5z" />
		</svg>
	);
}

function IconTwitterAlt(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M22.5 3.589a.5.5 0 00-.755-.43 7.938 7.938 0 01-2.266.912 4.662 4.662 0 00-3.238-1.29 4.731 4.731 0 00-4.707 5.135 11.527 11.527 0 01-7.717-4.18.5.5 0 00-.82.067 4.777 4.777 0 00-.633 2.377 4.724 4.724 0 00.762 2.579l-.06-.033a.504.504 0 00-.497.03.543.543 0 00-.247.458c-.004.118.003.237.022.353a4.692 4.692 0 001.818 3.383.5.5 0 00-.335.632 4.704 4.704 0 003.088 3.057 7.998 7.998 0 01-4.854.963.5.5 0 00-.332.917A12.442 12.442 0 008.468 20.5a12.299 12.299 0 0011.986-9.006c.339-1.137.512-2.318.514-3.505 0-.12 0-.245-.003-.372A5.37 5.37 0 0022.5 3.59zm-2.424 3.533a.498.498 0 00-.117.349 11.366 11.366 0 01-.464 3.741A11.174 11.174 0 018.468 19.5c-1.526 0-3.037-.305-4.443-.897a8.867 8.867 0 004.525-1.86.5.5 0 00-.3-.893A3.71 3.71 0 015.1 14c.425.001.847-.057 1.254-.174a.5.5 0 00-.042-.97 3.706 3.706 0 01-2.905-2.898 4.72 4.72 0 001.313.228.473.473 0 00.492-.35.5.5 0 00-.2-.567 3.696 3.696 0 01-1.648-3.09c0-.413.067-.823.2-1.213a12.515 12.515 0 008.54 3.995.45.45 0 00.409-.179c.1-.12.139-.281.103-.434a3.642 3.642 0 01-.1-.842A3.73 3.73 0 0116.24 3.78a3.68 3.68 0 012.71 1.179.499.499 0 00.462.148c.71-.14 1.4-.365 2.055-.671a4.92 4.92 0 01-1.392 2.686z" />
		</svg>
	);
}
