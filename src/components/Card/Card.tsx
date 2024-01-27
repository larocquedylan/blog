"use client";

function Card({ children, className, ...delegated }) {
	console.log(children);
	console.log(className);
	console.log(delegated);
	return (
		<div className="bg-cyan-500" {...delegated}>
			{children}
		</div>
	);
}

export default Card;
