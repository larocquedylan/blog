import React from "react";
import { Code } from "bright";

import theme from "./theme";
import styles from "./codesnippetmodule.css";

interface CodeSnippetProps extends React.HTMLAttributes<HTMLPreElement> {
	title?: string;
	abstract?: string;
	publishedOn?: string;
	code?: string;
}

function CodeSnippet(props: CodeSnippetProps) {
	return <Code {...props} theme={theme} className={styles.wrapper} />;
}

export default CodeSnippet;
