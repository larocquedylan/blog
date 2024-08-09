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
					I&apos;ve got some marketing know, plus I&apos;m a full-stack
					TypeScript Pro, My degree is from the UBC, I write
					<Link
						href="https://www.youtube.com/watch?v=YL7PygD3iJM"
						className="font-bold"
					>
						{" "}
						rhymes
					</Link>
					, make beats, hodl BTC, and the guiding ethic is to feed more than I
					eat.
				</p>
				<p className="text-sm sm:text-md font-extralight sm:font-light text-custom4 mb-6">
					{" "}
					I&apos;ve dipped my toes in a few different worlds — tech, startups,
					public service, and beyond. At UBC, I studied marketing and
					mathematics while working as a Research Assistant, conducting
					interviews and experiments. I co-founded a venture that didn&apos;t
					quite workout but taught me a ton. I&apos;ve worked as a marketing
					analyst with OneFeather, helping Indigenous nations run elections.
					Later, I designed a service line for the BC Public Service, addressing
					challenges faced by Indigenous youth in care. Eventually, I brought my
					technical skills to Microsoft.
				</p>
				<p className="text-sm sm:text-md font-extralight sm:font-light text-custom4 mb-6">
					{" "}
					I like understanding the problems people face, developing solutions,
					and showing them why those solutions matter and how they can fit into
					their lives. I&apos;m driven to create and sell things that are
					valuable to people.
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
					<li>Master cold calling</li>
					<li>Qualify leads with precision</li>
					<li>Craft compelling email sequences</li>
					<li>Design and execute outreach strategies</li>
					<li>Collaborate with AE&apos; and support deal closure</li>
					<li>Maintain meticulous CRM records</li>
					<li>Refine tactics through peer collaboration</li>
					<li>Iterate on team processes</li>
					<li>Consistently outperform quota</li>
					<li>Foster a culture of continuous improvement</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
