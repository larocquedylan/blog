import React from "react";
import { Code } from "bright";

interface CodeSnippetProps extends React.HTMLAttributes<HTMLPreElement> {
	title?: string;
	abstract?: string;
	publishedOn?: string;
	code?: string;
}

function CodeSnippet(props: CodeSnippetProps) {
	return <Code {...props} className="bg-cyan-400" />;
}

export default CodeSnippet;
