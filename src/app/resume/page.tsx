import ResumeHero from "@/components/ResumeHero";
import SectionHeading from "@/components/SectionHeading";
import ResumeCard from "@/components/ResumeCard";

const Resume: React.FC = () => {
	return (
		<div className=" flex flex-col mx-auto max-w-3xl p-10 py-20">
			<div className="flex flex-col items-center space-y-6">
				<ResumeHero />
			</div>
			<div className="mt-10 not-prose">
				<SectionHeading heading={"About"} />
				<p className="text-sm sm:text-md font-extralight sm:font-light text-custom4 mb-6">
					Former software engineering intern at Microsoft, where I worked on the
					Windows Photo Team. Specifically, I worked on the early stages of the
					prototype of a new product offering to be released in 2024. I wrote in
					TypeScript using React, Redux, Storybook, and Vitest to craft scalable
					and performant web applications.
				</p>
				<p className="text-sm sm:text-md font-extralight sm:font-light text-custom4 mb-6">
					My experience as a co-founder, where I held a product role, my time in
					public service as a designer, and my work as an engineer at Microsoft
					have equipped me with a unique blend of technical expertise, strategic
					insight and collaboration skills that are valuable to a team.{" "}
				</p>
				<p className="text-sm sm:text-md font-extralight sm:font-light text-custom4 mb-6">
					My mission is to create more than I consume. I believe that with
					technology, all problems are soluble unless banned by the laws of
					physics.
				</p>
			</div>
			<div className="mt-10 ">
				<SectionHeading heading={"Work Experience"} />
				<div className="space-y-2 sm:space-y-4 ">
					<ResumeCard
						title="Software Engineer | Microsoft"
						date="2022 - 23"
						where="Vancouver, BC"
						description="Intern at Microsoft on the Windows Photos Premium team focused on the early stage prototype of a major project to launch in 2024, demonstrating skills in scalable, product focussed, and agile development.\nResearch into image format standards, understanding how photos store EXIF data. This knowledge was pivotal in optimizing transfer and parsing within the browser for maximum efficiency."
					/>
					<ResumeCard
						title="Research Engineer | Impact Safety Solutions"
						date="2021 - 2022"
						where="Edmonton, AB"
						description="Research into Remote Confined Space Monitoring (RCSM) initiatives, ensuring 100% compliance with safety regulations and standards across 15 project sites.\nImplemented advanced gas detection and communication systems, reducing personnel exposure risks by 72% and enhancing real-time safety monitoring.\nConducted remote installations, upgrades, and maintenance sessions, minimizing on-site personnel requirements and downtime. \nDeployed a Network-Attached Storage (NAS) system on Linux, streamlining data management and improving accessibility by 35%."
					/>
					<ResumeCard
						title="Marketing Analyst | OneFeather"
						date="2021"
						where="Remote"
						description="Built out tag management and Google Analytics dashboard to monitor the companies marketing funnel before the roll out of a new banking solution.\n Interfaced with Indigenous First Nations conducting elections through the our services, communicating insights through exploratory statistics and strategized with Nations on ways to increase voter turnout."
					/>
					<ResumeCard
						title="Service Designer | BC Public Service"
						date="2020 - 21"
						where="Vancouver, BC"
						description="Directed research and design of a new service line, conducting interviews, focus groups, and surveys to inform a comprehensive service model and business case."
					/>
					<ResumeCard
						title="Co-founder | Focus"
						date="2019 - 20"
						where="Vancouver, BC"
						description="Performed comprehensive market research, profiling customers, mapping user journeys, and conducting competitive analysis to identify opportunities. Lead the development of the business plan and go-to-market strategy incorporating financial projections, revenue model, and budget forecast based on literature review, market sizing, and pricing strategies."
					/>
					<ResumeCard
						title="Finance Analyst | RBC"
						date="2018"
						where="Toronto, ON"
						description=" Intern at RBC. Due diligence on the build out of RBC's Investor and Treasury Services cost allocation model.\nProvided ad-hoc analysis for multiple business advisors on the Performance Management Team."
					/>
					<ResumeCard
						title="Teaching Assistant | UBC"
						date="2018 - 20 "
						where="Vancouver, BC"
						description="Provided administrative support and cataloging of Dr. Dahl's MBA course, Creativity (BA 562)."
					/>
					<ResumeCard
						title="Research Assistant | UBC"
						date="2017 - 20"
						where="Vancouver, BC"
						description="Conducted qualitative market research using a variety of methods, including focus groups, surveys, interviews, and experiments for Dr. Darren Dahl of the Marketing and Behavioural Science division at Robert H. Lee Graduate School."
					/>
					<ResumeCard
						title="Aboriginal Student Ambassador | UBC"
						date="2017 - 18"
						where="Vancouver, BC"
						description="Supported implementation of UBC Aboriginal Strategic Recruitment Plan with chaperoning tours of UBC for aboriginal youth groups. \nHired 3 juniour peer leaders and developed transportation and logistics plan for Destination UBC, an event bringing in the top 40 Canadian Aboriginal students for a weekend in Vancouver."
					/>
				</div>
			</div>
			<div className="mt-10">
				<SectionHeading heading={"Projects"} />
				<div className="space-y-2 sm:space-y-4">
					<ResumeCard
						date="2023"
						title="Web Exif Viewer"
						link="https://web-exif-parsing.vercel.app/"
						techStack="TypeScript, React, Vite, Vitest"
						description="Web app that parses EXIF data efficiently in the browser. Research in optimizing image data processing, exploring the limits of browser capabilities in handling and processing complex image data."
					/>
					<ResumeCard
						date="2023"
						title="River City Leadership Forum"
						techStack="Next.js, SSR"
						link="https://rclf.vercel.app"
						description="Free-lance marking landing page for a forum."
					/>
					<ResumeCard
						date="2023"
						title="AcroBuzz"
						techStack="Next.js, Apollo, TypeGraphQL, Prisma, PostgreSQL, Redis, Docker, Jest"
						link="https://github.com/larocquedylan/AcroBuzz-Client"
						description="Built and deployed full stack web application using Vercel for front end hosting, a Digital Ocean VPS for backend infrastructure, Dokku for application management, and Postgres and Redis running in Docker containers. \nAImplemented user authentication through cookies in session storage, which in turn, authorizes users to create and edit posts, as well as upvote or downvote others' contributions."
					/>
					<ResumeCard
						date="2023"
						title="Beats for Bits"
						link="https://github.com/larocquedylan/beats-for-bits-api"
						techStack="React, Tailwind, Express, Docker, LnBits, MochaJS"
						description="Personal website to sell music with Bitcoin over the Lightning Network."
					/>
					<ResumeCard
						date="2023"
						title="InStock"
						techStack="React, react-router-dom, Express, mysql, Knex, BEM/SASS."
						description="Collaborated on a full-stack React application as a part of an Agile team, delivering an Inventory Management System with an Express back-end."
					/>
				</div>
				<div className="mt-10">
					<SectionHeading heading={"Education"} />
					<div className="space-y-2 sm:space-y-4">
						<ResumeCard
							date="2024"
							title="Joy of React"
							techStack="Remote"
							description="Modern React practices with hooks, component architecture, and state management. The course also goes into server side rendering with Next.js and layout animations with Framer Motion."
						/>
						<ResumeCard
							date="2023"
							title="Algorithms and Data Structures"
							techStack="Remote"
							description="Fundamental computer science topics, including Big O notation, recursion, searching/sorting algorithms, and data structures like linked lists, trees, and graphs."
						/>
						<ResumeCard
							date="2023"
							title="EpicReact.Dev"
							techStack="Remote"
							description="In-depth coverage of React fundamentals, advanced hooks and component patterns, performance optimization, testing, and React Suspense from the creator of React Testing Library, Kent C. Dodds."
						/>
						<ResumeCard
							date="2022 - 23"
							title="BrainStation"
							where="Remote"
							description="Software Engineering Bootcamp introducing HTML, CSS, JavaScript, React, Node, and MySQL."
						/>
						<ResumeCard
							date="2016 - 20"
							title="University of British Columbia"
							where="Vancouver, BC"
							description="Bachelor of Commerce in Marketing with Honours + Minor in Mathematics."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
