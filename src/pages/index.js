import React, { PureComponent } from "react";
import detector from "detector";
import Layout from "../components/Layout";
import logo from "../images/logo3.svg";
import DownArrow from "../assets/DownArrow";
import Timer from "../components/Timer";

let isComputer = false;
if (typeof window !== "undefined") {
	switch (detector.os.name) {
		case "windows":
		case "macosx":
		case "linux":
		case "chromeos":
			isComputer = true;
	}
}

const Intro = props => (
	<div id="intro" className="white bg-fixed ubuntu">
		<div>
			<img
				src={logo}
				className="logo"
				alt="logo"
				style={{ opacity: props.introOpacity, transform: props.introTransfrom }}
			/>
			<h2 style={{ opacity: props.introOpacity, transform: props.introTransfrom }}>
				City Montessori School, Aliganj Model United Nations
			</h2>
			<h1 style={{ opacity: props.introOpacity, transform: props.introTransfrom }}>CMSMUN ALIGANJ</h1>
			<h3 style={{ opacity: props.introOpacity, transform: props.introTransfrom }}>2019</h3>
			<Timer positionDefault={true} socials={true} />
			<DownArrow
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

class Invitation extends PureComponent {
	render() {
		return (
			<div id="invitation">
				<div className="white-overlay" style={{ opacity: this.props.messageOpacity }}>
					<h3 className="black questrial">Invitation</h3>
					<div
						className="questrial s9em"
						id="invitation-text"
						style={{ transform: this.props.messageTransform }}
					>
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
						<br />
						<p style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
							<span>
								Mrs. Jyoti Kashyap
								<br />
								The Principal
							</span>
							<span style={{ textAlign: "right" }}>
								Ms. Trishla Ranjan
								<br />
								The Conference Manager
							</span>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

class Message extends PureComponent {
	render() {
		return (
			<div id="message">
				<div className="white-overlay" style={{ opacity: this.props.messageOpacity }}>
					<h3 className="black questrial">Secretary General's Message</h3>
					<div
						className="questrial s9em"
						id="invitation-text"
						style={{ transform: this.props.messageTransform }}
					>
						It is my distinct honour to cordially invite you to the maiden edition of City Montessori
						School Model United Nations Aliganj to be held on 13th and 14th of April, 2019. With its
						sustained legacy of excellence in various fields, City Montessori School Aliganj is all set to
						bolster up its stance in the Model United Nations circuit, by offering its delegates a peerless
						experience in making a roadmap to holistic changes and sustainable peace in this unpredictably
						eruptive world. Model United Nations is a educational simulation of the United Nations in which
						participants represent particular portfolios in various kinds of committees. These conferences
						play a vital role in teaching delegates about United Nations, International relations and most
						importantly, Diplomacy. Diplomacy means assessing situations in its entirety and taking the best
						possible course of action in order to maintain one’s stance without hurting any sentiments. With
						its tagline “Pinnacle of Diplomacy”, CMSMUN Aliganj endorses this art which has kept the world
						from war and is simulating six diverse range of committees both conventional and unconventional,
						in order to give a platform to the delegates to cherish the art of diplomacy alongside the
						dynamic International Press. To strengthen the passion of oration, problem solving and teamwork
						of its delegates, we, the Secretariat, Organising Committee and the logistics of CMSMUN Aliganj,
						with paramount enthusiasm and a vision of serving one of the best conferences in the circuit,
						await your presence.
						<br />
						<p style={{ marginTop: "24px" }}>
							Gauri Srivastava <br />
							Secretary-General <br />
							CMSMUN ALIGANJ, 2019.
						</p>
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
			arrowOffset: typeof window !== "undefined" ? `${window.innerHeight * 0.9}px` : "100vh",
			arrowOpacity: 1,
			introOpacity: 1,
			messageOpacity: 0,
			messageTransform: isComputer ? "translateX(100%)" : 0,
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
			const scrolledRatio = window.scrollY / window.innerHeight;
			const opacity = 1 - scrolledRatio * 1.05;
			this.setState({
				introOpacity: opacity,
				arrowOpacity: opacity,
				introTransfrom: isComputer ? `translateY(${window.scrollY / 3}px)` : "",
				messageOpacity: `${1 - opacity / 2}`,
				messageTransform: isComputer
					? scrolledRatio < 0.5
						? `translateX(${100 - scrolledRatio * 200}%)`
						: "translateX(0)"
					: "",
			});
		}
	}

	componentDidMount() {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", this.adjustArrowOnScroll.bind(this));
			window.addEventListener("scroll", this.adjustIntroOnScroll.bind(this));
			window.addEventListener("resize", this.adjustArrowOnScroll.bind(this));
		}
	}

	render() {
		return (
			<Layout id="landing-pg" style={{ overflowX: "hidden" }}>
				<Intro
					arrowOffset={this.state ? this.state.arrowOffset : "90vh"}
					arrowOpacity={this.state ? this.state.arrowOpacity : "0.7"}
					introOpacity={this.state.introOpacity}
					introTransfrom={this.state.introTransfrom}
				/>
				<Invitation messageOpacity={this.state.messageOpacity} messageTransform={this.state.messageTransform} />
				<div
					style={{ background: "rgba(0, 0, 0, 0.8)", padding: "100px 0", textAlign: "Center" }}
					className="white"
				>
					<Timer style={{ margin: "36px 0" }} />
					<a
						href="conference-itinerary.pdf"
						className="questrial"
						style={{ fontSize: "calc(.2vh + .2vw + 1.5em)" }}
					>
						CONFERENCE ITINERARY
					</a>
				</div>
				<Message />
			</Layout>
		);
	}
}

export default IndexPage;
