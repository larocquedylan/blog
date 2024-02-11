"use client";
import NavBar from "@/components/NavBar";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { useState } from "react";
import { SpeakerOffIcon, SpeakerLoudIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

function Home() {
	const [isMuted, setIsMuted] = useState(false);

	const toggleMute = () => {
		setIsMuted(!isMuted);
	};
	const { RiveComponent } = useRive({
		src: "/assets/landing-page.riv",
		stateMachines: "State Machine 1",
		layout: new Layout({
			fit: Fit.Cover,
			alignment: Alignment.Center,
		}),
		artboard: "night",
		autoplay: true,
		onLoadError: () => console.log("Error Loading Rive"),
		onLoad: () => console.log("Loaded Rive Successfully"),
	});

	return (
		<section className="flex flex-col mx-auto">
			<audio autoPlay loop muted={isMuted} className="hidden">
				<source src="/home-song.mp3" type="audio/mp3" />
				Your browser does not support the audio element.
			</audio>

			<RiveComponent className="z-20 w-full h-[1200px] relative sm:h-[900px] md:h-screen lg:h-screen xl:h-screen 2xl:h-screen" />
			<Button
				variant="home"
				size="icon"
				onClick={toggleMute}
				className="z-50 absolute bottom-5 right-5 bg-[#1D1C2C]"
			>
				{isMuted ? <SpeakerOffIcon /> : <SpeakerLoudIcon />}
			</Button>
		</section>
	);
}

export default Home;
