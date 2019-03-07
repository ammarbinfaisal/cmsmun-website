import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import logo from "../images/logo3.svg";

const Intro = props => (
	<div id="intro" className="white bg-fixed lato">
		<div>
			<img src={logo} className="logo" alt="logo" style={{ opacity: props.introOpacity, transform: props.introTransfrom }} />
			<h2 style={{ opacity: props.introOpacity, transform: props.introTransfrom }}>City Montessori School, Aliganj Model United Nations</h2>
			<h1 style={{ opacity: props.introOpacity, transform: props.introTransfrom }}>CMSMUN ALIGANJ</h1>
			<h3 style={{ opacity: props.introOpacity, transform: props.introTransfrom }}>2019</h3>
			<i
				className="fas fa-arrow-down white"
				style={{ top: props.arrowOffset, opacity: props.arrowOpacity }}
				onClick={e => {
					if (typeof window.scrollTo)
						window.scrollTo({
							top:
								getComputedStyle(document.querySelector("#intro")).height.split("px")[0] ||
								window.innerHeight,
							behavior: "smooth",
						});
					else if (typeof window.scroll)
						window.scroll({
							top:
								getComputedStyle(document.querySelector("#intro")).height.split("px")[0] ||
								window.innerHeight,
							behavior: "smooth",
						});
				}}
			/>
		</div>
	</div>
);

class Message extends PureComponent {
	render() {
		return (
			<div id="invitation">
				<div className="white-overlay" style={{ opacity: this.props.messageOpacity }}>
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
						experiences. Model United Nations, also known as Model UN or MUN, is an educational simulation
						and an academic competition in which students can assimilate diplomacy, international relations,
						and the United Nations. The main motto of City Montessori School MUN will be to render the
						student community a platform for enriching their skills in order to concoct better individuals
						for the future. In a world of growing international and intercultural connectivity we bring
						together young men and women to engage in educated discussion and debate on issues that have
						long scarred our world. Your presence will add a unique element to the conference and we
						sincerely hope you will be among those joining us. Through this conference we provide
						idiosyncratic opportunities to engage students in a professional, friendly and collaborative
						environment to develop their research, communication and leadership adroitness. This will in
						turn increase their experience and knowledge of broad-based world issues and concerns, and
						reinforce the message of personal responsibility in this world. Both new and practiced
						participants will find it a rewarding experience. The inaugural edition is expected to be
						attended by a number of delegates from various prestigious schools across Lucknow. We would like
						to take this opportunity to request the presence at the maiden edition of CMSMUN Aliganj.
					</div>
				</div>
			</div>
		);
	}
}

class IndexPage extends PureComponent {
	constructor() {
		super();
			this.state = {
				arrowOffset: `${typeof window !== "undefined" ? window.innerHeight * 0.9 : 0}px`,
				arrowOpacity: 1,
				introOpacity: 1,
			};
	}

	adjustArrowOnScroll() {
		if (typeof window !== "undefined") {
			setTimeout(() => {
				this.setState({ arrowOffset: `${window.innerHeight * 0.9}px` });
			}, 250);
			window.removeEventListener("scroll", this.adjustArrowOnScroll);
		}
	}

	adjustIntroOnScroll() {
		if (typeof window !== "undefined") {
			const opacity = 1 - (window.scrollY / window.innerHeight) * 1.05;
			this.setState({
				introOpacity: opacity,
				arrowOpacity: opacity,
				introTransfrom: `translateY(${window.scrollY / 3}px)`
			});
		}
	}

	componentDidMount() {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", this.adjustArrowOnScroll.bind(this));
			window.addEventListener("scroll", this.adjustIntroOnScroll.bind(this));
			window.addEventListener("resize", this.forceUpdate());
		}
	}
	render() {
		return (
			<Layout id="landing-pg">
				<Intro
					arrowOffset={this.state ? this.state.arrowOffset : "90vh"}
					arrowOpacity={this.state ? this.state.arrowOpacity : "0.7"}
					introOpacity={this.state.introOpacity}
					introTransfrom={this.state.introTransfrom}
				/>
				<Message
					messageOpacity={1 - this.state.introOpacity / 2}
				/>
			</Layout>
		);
	}
}

export default IndexPage;
