import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import VisibilitySensor from "react-visibility-sensor";

import logo from "../images/logo3.svg"

import "../sass/style.sass";

const Intro = () => (
	<div id="intro" className="realgold bg-fixed bree-serif">
		<div>
			<img src={logo} className="logo"></img>
			<h2 className="monospace">City&nbsp;Montessori&nbsp;School, Aliganj's Model&nbsp;United&nbsp;Nation</h2>
			<h3>2019</h3>
			<i
				className="fas fa-sort-down lightgold"
				onClick={e =>
					window.scrollTo({
						top: getComputedStyle(document.querySelector("#intro")).height.split("px")[0],
						behavior: "smooth",
					})
				}
			/>
		</div>
	</div>
);


class Message extends PureComponent {
	constructor() {
		super();
		this.state = { show: false };
	}
	render() {
		return (
			<div id="sc-gen-msg" className="bg-fixed">
				<h3 className="realgold lato">Secretary General's Message</h3>
				{typeof window !== "undefined" && <VisibilitySensor /> ? (
					<VisibilitySensor
						intervalCheck={false}
						scrollCheck={true}
						scrollDelay={50}
						resizeCheck={true}
						resizeDelay={50}
						partialVisibility={true}
						offset={{ top: typeof window !== "undefined" ? window.innerHeight / 3 : 50 }}
						onChange={isVisible =>
							isVisible ? this.setState({ show: true }) : this.setState({ show: false })
						}
					>
						<div className="overlay lightgold monospace" style={{ opacity: this.state.show ? 1 : 0 }}>
							Aute sit Lorem labore tempor consequat ad laboris officia adipisicing. Elit duis Lorem dolor
							cupidatat exercitation quis laborum. Exercitation amet deserunt reprehenderit non voluptate
							reprehenderit id. Proident cillum officia dolore Lorem reprehenderit ut cupidatat ut nisi do
						</div>
					</VisibilitySensor>
				) : (
					""
				)}
			</div>
		);
	}
}

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
