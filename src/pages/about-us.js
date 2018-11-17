import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

// import "../../sass/about.sass"
import columnify from "../styles/style";

const About = () => (
	<Layout id="about-us" style={{ fontFamily: "Ubuntu, 'open sans', roboto, sans-serif", ...columnify }}>
		<Helmet>
			<title>About us</title>
		</Helmet>
		<h1 style={{ fontSize: "2.4em", margin: "3vh 0" }}>Havent made this page yet :D</h1>
		<p style={{ fontSize: "1.4em" }}>Comeback later</p>
	</Layout>
);

export default About;
