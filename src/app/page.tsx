"use client";
import NavBar from "@/components/NavBar";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

function Home() {
	const { RiveComponent } = useRive({
		src: "/assets/rive.riv",
		stateMachines: "State Machine 1",
		layout: new Layout({
			fit: Fit.Cover,
			alignment: Alignment.Center,
		}),
		artboard: "1",
		autoplay: true,
		onLoadError: () => console.log("Error Loading Rive"),
		onLoad: () => console.log("Loaded Rive Successfully"),
	});

	return (
		<section className="flex flex-col mx-auto">
			<RiveComponent className="z-20 w-full h-[1200px] relative sm:h-[900px] md:h-screen lg:h-screen xl:h-screen 2xl:h-screen" />
		</section>
	);
}

export default Home;
