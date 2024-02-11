"use client";
import { useState, useRef, useEffect } from "react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { SpeakerOffIcon, SpeakerLoudIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

function Home() {
	const [isMuted, setIsMuted] = useState(true);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const toggleMute = () => {
		setIsMuted(!isMuted);
		// Assuming direct interaction here satisfies browser autoplay policies
	};

	useEffect(() => {
		// Apply mute state immediately to the audio element
		if (audioRef.current) {
			audioRef.current.muted = isMuted;
		}

		// Attempt to play the audio when the component mounts and whenever isMuted changes
		const playAudio = () => {
			if (audioRef.current && !isMuted) {
				audioRef.current
					.play()
					.catch((error) => console.error("Error playing the audio:", error));
			}
		};

		playAudio();
	}, [isMuted]);

	// Call useRive at the top level of your component
	const { RiveComponent, rive } = useRive({
		src: "/assets/landing-page.riv",
		stateMachines: "State Machine 1",
		layout: new Layout({
			fit: Fit.Cover,
			alignment: Alignment.Center,
		}),
		artboard: "night",
		autoplay: true,
		onLoad: () => console.log("Loaded Rive Successfully"),
		onLoadError: () => console.log("Error Loading Rive"),
	});

	return (
		<section className="flex flex-col mx-auto">
			<audio ref={audioRef} autoPlay loop muted={isMuted} className="hidden">
				<source src="/home-song.mp3" type="audio/mp3" />
				Your browser does not support the audio element.
			</audio>

			<RiveComponent className="z-20 w-full h-[1200px] relative sm:h-[900px] md:h-screen lg:h-screen xl:h-screen 2xl:h-screen" />
			<Button
				variant="home"
				size="icon"
				onClick={toggleMute}
				className="z-50 fixed bottom-5 right-5 bg-[#1D1C2C]"
			>
				{isMuted ? <SpeakerOffIcon /> : <SpeakerLoudIcon />}
			</Button>
		</section>
	);
}

export default Home;
