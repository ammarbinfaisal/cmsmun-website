import React, { PureComponent } from "react";
import Layout from "../components/Layout";

import logo from "../images/logo3.svg";

const Intro = () => (
	<div id="intro" className="white bg-fixed lato">
		<div>
			<img src={logo} className="logo" alt="logo" />
			<h2>City&nbsp;Montessori&nbsp;School, Aliganj Model&nbsp;United&nbsp;Nation</h2>
			<h1>CMSMUN ALIGANJ</h1>
			<h3>2019</h3>
			<i
				className="fas fa-angle-down white"
				onClick={e =>
					window.scrollTo({
						top:
							getComputedStyle(document.querySelector("#intro")).height.split("px")[0] ||
							window.innerHeight,
						behavior: "smooth",
					})
				}
			/>
		</div>
	</div>
);

class Message extends PureComponent {
	render() {
		return (
			<div id="invitation">
				<div className="white-overlay">
					<h3 className="black questrial">Invitation</h3>
					<div className="questrial s9em" id="invitation-text">
						Dear delegates, faculty advisors, parents and future diplomats,
						<br />
						<br />
						City Montessori School is proud to proffer the inaugural edition of City Montessori School’s
						Model United Nations Conference, scheduled from 13th-14th April, 2019.
						<br />
						Founded on the munificent ideals and ethics inscribed in the very soul of its founding father,
						Dr Jagdish Gandhi, our school strikes again fulminating prodigious opportunities and immutable
						experiences. Model United Nations, also known as Model UN or MUN, is an educational simulation
						and an academic competition in which students can assimilate diplomacy, international relations,
						and the United Nations. The main motto of City Montessori School MUN will be to render the
						student community a platform for enriching their skills in order to concoct better individuals
						for the future. In a world of growing international and intercultural connectivity we bring
						together young men and women to engage in educated discussion and debate on issues that have
						long scarred our world. Your presence will add a unique element to the conference and we
						sincerely hope you will be among those joining us for Through this conference we provide
						idiosyncratic opportunities to engage students in a professional, friendly and collaborative
						environment to develop their research, communication and leadership adroitness.  This will in
						turn increase their experience and knowledge of broad-based world issues and concerns, and
						reinforce the message of personal responsibility in this world.  Both new and practiced
						participants will find it a rewarding experience. The inaugural edition is expected to be
						attended by a number of delegates from various prestigious schools across Lucknow . We would
						like to take this opportunity to request the presence at the maiden edition of CMSMUN Aliganj .
					</div>
				</div>
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
			</Layout>
		);
	}
}

export default IndexPage;
