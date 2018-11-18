import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation";
import Layout from "../components/Layout"
// import "../../sass/about.sass"
import styles from "../components/style";

const About = () => (
	<Layout id="about-us" style={styles.columnify}>
		<Helmet>
			<title>About Us | CMS ALIGANJ</title>
		</Helmet>
		<Navigation />
		<h1 style={styles.heading}>Havent made this page yet :D</h1>
		<p style={styles.para}>Comeback later</p>
	</Layout>
);

export default About;
