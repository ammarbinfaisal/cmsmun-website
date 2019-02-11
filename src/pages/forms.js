import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

const About = () => (
	<Layout id="about-us">
		<Helmet>
			<title>About Us | CMS ALIGANJ</title>
		</Helmet>
		<div className="white-overlay black">
			<div className="questrial s9em fw700">
				<h1>Forms</h1>
				<div className="centerize form-links" style={{padding: "50px 0", lineHeight: "2"}}>
                    <a
						href="https://docs.google.com/forms/d/e/1FAIpQLSctF4ZZxFENsaHI7r_OoJyUCjS5xRhI-gURrUqXei-jklAD4Q/viewform"
						target="_blank"
						rel="noopener noreferrer"
					>
						Individual Delegation
					</a>
					<a
						href="https://docs.google.com/forms/d/1jVAnq1yi8_8XIGBD2CS0UkP1xT_rNI6nFOrHGwwejgY/viewform"
						target="_blank"
						rel="noopener noreferrer"
					>
						International Press
					</a>
                </div>
			</div>
		</div>
	</Layout>
);

export default About;
