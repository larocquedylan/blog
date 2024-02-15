import ResumeHero from "@/components/ResumeHero";
import SectionHeading from "@/components/SectionHeading";
import ResumeCard from "@/components/ResumeCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
	return (
		<div className=" flex flex-col mx-auto max-w-3xl p-10 py-20">
			<div className="mt-10 not-prose">
				<SectionHeading heading={`Yo, I'm Dylan 👋`} />
				<p className="text-sm sm:text-md font-extralight sm:font-light text-custom4 mb-6">
					{" "}
					I am a full stack TypeScript pro, with some marketing know, I got a
					degree from the UBC, I write
					<Link
						href="https://www.youtube.com/watch?v=YL7PygD3iJM"
						className="font-bold"
					>
						{" "}
						rhymes
					</Link>
					, make beats, hodl BTC, and my guiding ethic is to feed more than I
					eat.
				</p>
				<p className="text-sm sm:text-md font-extralight sm:font-light text-custom4 mb-6">
					{" "}
					I started developing web applications in 2021 and built a few
					freelance websites. More formally, I began my professional journey at
					Microsoft as a software engineer intern, primarily working on the
					front end with TypeScript, React, Redux, and Storybook.
				</p>
				<p className="text-sm sm:text-md font-extralight sm:font-light text-custom4 mb-6">
					{" "}
					If you would like to check out a more exhaustive list of experience
					(resume), go
					<Link href={"/resume"} className="font-bold">
						{" "}
						here
					</Link>
					.
				</p>
				<p className="text-sm sm:text-md font-extralight sm:font-light">
					{" "}
					I am seeking opportunities to:{" "}
				</p>
				<ul className="text-sm sm:text-md font-extralight sm:font-light text-custom4 mb-">
					<li>Write clear, tested, modifiable code.</li>
					<li>
						Collaborate with product and design teams to develop user interfaces
						that are mindful of user experiences.
					</li>
					<li>
						Design and implement scalable applications, web services, and APIs.
					</li>
					<li>
						Contribute to project roadmaps, defining scope and learn to scale.
					</li>
					<li>
						Troubleshoot, bug fix, identify bottlenecks, and improve efficiency.
					</li>
					<li>
						Engage in code review and collaborate on architectural decisions.{" "}
					</li>
					<li>
						Communicate effectively through detailed pull request descriptions,
						technical documentation, and team interactions.
					</li>
					<li>Iterate on team processes</li>
					<li>
						Seek and offer constructive feedback to continuously improve the
						product, team, and individual performance.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
