import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

const About = () => (
	<Layout id="about-us">
		<Helmet>
			<title>About Us | CMSMUN ALIGANJ</title>
		</Helmet>
		<div className="white-overlay black full-page">
			<div className="questrial s9em fw700">
				<h1>About us</h1>
				<p className="text">
					City Montessori School (CMS) is the world’s largest school, with over 55,000 students and 4,500
					staff across 18 campuses in the city of Lucknow. Founded in 1959 with 5 children on a borrowed
					capital of 300 Rupees by Dr Jagdish Gandhi and Dr Bharti Gandhi, CMS today is an ICSE- and
					ISC-affiliated school whose students from Montessori to Class XII achieve some of the highest exam
					results in India. Beyond these achievements, Drs Jagdish and Bharti Gandhi started CMS with vision
					to inspire generations of children to become socially motivated and conscious citizens of India and
					the world. Their motto “Jai Jagat” - 'Hail the World', in contrast to the popular post-Independence
					greeting 'Jai Hind' ('Hail India') at the time of CMS's foundation - has been the school's greeting
					from the beginning. CMS therefore places great emphasis on children's all-round development, moral
					character, and international exposure.
				</p>
			</div>
		</div>
	</Layout>
);

export default About;
