// import me from '../assets/me.jpg'
import me from "../../../public/assets/me.jpg";
import Image from "next/image";

const ResumeHero: React.FC = () => {
	return (
		<div className="flex items-center space-x-6">
			<Image
				className="rounded-2xl w-24 h-24 mb-4 md:mb-0"
				width={96}
				height={96}
				src={me}
				alt="Blue square with characters making the outline of an avatar"
				placeholder="blur"
			/>
			<div className="flex flex-col justify-center space-y-1">
				<h1 className="text-sm sm:text-lg font-medium text-custom5">
					Dylan LaRocque
				</h1>
				<h2 className="text-sm sm:text-md font-light sm:font-normal text-custom4">
					Software Engineer
				</h2>
				<h2 className="text-sm sm:text-md font-light sm:font-normal text-custom4">
					Vancouver, BC
				</h2>
			</div>
		</div>
	);
};

export default ResumeHero;
