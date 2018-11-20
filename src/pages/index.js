import React, { PureComponent } from "react";
import Message from "../components/Message";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

import "../sass/style.sass";

const Intro = () => (
	<div id="intro">
		<h1>CMS MUN</h1>
		<h2>City Montessori School, Aliganj's Model United Nation</h2>
		<h3>2018</h3>
		<i
			className="fas fa-sort-down"
			onClick={e =>
				window.scrollTo({
					top: getComputedStyle(document.querySelector("#intro")).height.split("px")[0],
					behavior: "smooth",
				})
			}
		/>
	</div>
);

class IndexPage extends PureComponent {
	render() {
		return (
			<Layout id="landing-pg">
				<Intro />
				<Message />
				<Footer />
			</Layout>
		);
	}
}

export default IndexPage;
