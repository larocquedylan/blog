"use client";

type CardProps = {
	children: React.ReactNode;
	className: string;
};

function Card({ children, className, ...delegated }: CardProps) {
	return (
		<div className="bg-cyan-500" {...delegated}>
			{children}
		</div>
	);
}

export default Card;
