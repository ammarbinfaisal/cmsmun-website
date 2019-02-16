import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

const About = () => (
	<Layout id="forms">
		<Helmet>
			<title>Forms | CMSMUN ALIGANJ</title>
		</Helmet>
		<div className="white-overlay black full-page">
			<div className="questrial s9em fw700">
				<h1>Forms</h1>
				<div className="centerize form-links" style={{ padding: "50px 0", lineHeight: "2" }}>
					<a href="https://cmsmunaliganj.com/individual-delegation" target="_blank" rel="noopener noreferrer">
						Individual Delegation
					</a>
					<a href="https://cmsmunaliganj.com/international-press" target="_blank" rel="noopener noreferrer">
						International Press
					</a>
				</div>
			</div>
		</div>
	</Layout>
);

export default About;
