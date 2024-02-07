import {
	CollapsibleTrigger,
	CollapsibleContent,
	Collapsible,
} from "@/components/ui/collapsible";

import React from "react";
import { Button } from "../ui/button";

type props = {
	date: string;
	title: string;
	where?: string;
	techStack?: string;
	description: string;
	link?: string;
};

const ResumeCard: React.FC<props> = ({
	date,
	title,
	where,
	techStack,
	description,
	link,
}) => {
	const paragraphs = description
		.replace(/\\n/g, "\n")
		.split("\n")
		.map((paragraph, index) => {
			return (
				<p
					key={index}
					className="text-sm sm:text-md font-extralight sm:font-light text-custom4 mb-2"
				>
					{paragraph}
				</p>
			);
		});

	return (
		<div className="flex">
			<Collapsible className="w-full">
				<CollapsibleTrigger asChild>
					<Button
						className="w-full flex p-0 py-3 m-0 whitespace-normal justify-start items-start"
						size="lg"
						variant="ghost"
					>
						<div className="flex w-1/4 mr-0 ">
							<p className="text-sm sm:text-md font-extralight sm:font-light text-custom4 sm:mr-10">
								{date}
							</p>
						</div>
						<div className="w-3/4 flex">
							<h4 className="text-sm sm:text-md font-extralight sm:font-light text-custom5 whitespace-nowrap">
								{title}
							</h4>
						</div>
					</Button>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<div className="flex">
						<div className="w-1/4 ">
							<p className=" mr-5 sm:mr-0"></p>
						</div>
						<div className="w-3/4 mt-[-5px]">
							{/* {link ? (
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm sm:text-md font-extralight sm:font-light text-custom5"
								>
									
								</a>
							) : (
								<h4 className="text-sm sm:text-md font-extralight sm:font-light text-custom5">
									{title}
								</h4>
							)}{" "} */}
							{where ? (
								<p className="text-sm sm:text-md font-extralight sm:font-light mb-2 text-custom4">
									{where}
								</p>
							) : techStack ? (
								<p className="text-sm sm:text-md font-extralight sm:font-light mb-2 text-custom4">
									{techStack}
								</p>
							) : null}
							{paragraphs}
						</div>
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
};

export default ResumeCard;
