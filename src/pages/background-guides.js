import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

const BackgroundGuide = () => (
	<Layout id="background-guides">
		<Helmet>
			<title>Background Guides | CMSMUN ALIGANJ</title>
			<meta name="description" content="Background Guides of committees of CMSMUN ALIGANJ" />
		</Helmet>
		<div className="white-overlay black full-page questrial s9em">
			<h1>Background Guides</h1>
			<div style={{display: "Flex", flexWrap: "wrap", margin: "0 12px"}}>
			<a href="/bg-unga.pdf" className="bgguide">UNGA</a>
			<a href="/bg-unsc.pdf" className="bgguide">UNSC</a>
			<a href="/bg-unhrc.pdf" className="bgguide">UNHRC</a>
			<a href="/bg-uncsw.pdf" className="bgguide">UNCSW</a>
			<a href="/bg-aippm.pdf" className="bgguide">AIPPM</a>
			<a href="/bg-jcc-axis.pdf" className="bgguide">JCC(AXIS)</a>
			<a href="/bg-jcc-allies.pdf" className="bgguide">JCC(ALLIES)</a>
			</div>
	</div>
    </Layout>
);

export default BackgroundGuide;
