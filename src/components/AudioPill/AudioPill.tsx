export default function Component() {
	return (
		<div className="bg-white rounded-3xl shadow-md p-4 flex items-center space-x-4 max-w-lg mx-auto">
			<button className="rounded-full bg-transparent hover:bg-gray-200 p-2">
				<PlayIcon className="text-gray-700" />
			</button>
			<span className="text-sm text-gray-700">0:05 / 0:24</span>

			<button className="text-gray-700">
				<VolumeIcon className="" />
			</button>
		</div>
	);
}

function PlayIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polygon points="5 3 19 12 5 21 5 3" />
		</svg>
	);
}

function VolumeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
		</svg>
	);
}
