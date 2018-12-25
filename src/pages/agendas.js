import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

import "../sass/agendas.sass";

//	IMAGES
import shochumImg from "../images/shochum.jpg";
// import aippmImg from "../images/aippm.jpg";
// import marveldcImg from "../images/marvelvsdc.jpg";
import unhrcImg from "../images/unhrc.jpg";
import unscImg from "../images/unsc.jpg";
import unwomenImg from "../images/unwomen.jpg";

const committees = [
	{
		img: unhrcImg,
		alt: "unhrc.jpg",
		agTitle: "United Nations Human Rights Council",
		description: "Violation of human rights of the Prisoners of wars.",
	},
	{
		img: unscImg,
		alt: "unsc.jpg",
		agTitle: "United Nations Securty Council",
		description: "Sudan Partition Conflict.",
	},
	{
		img: unwomenImg,
		alt: "unwomen.jpg",
		agTitle: "United Nations Entity for Gender Equality and the Empowerment of Women",
		description: "Empowerment of rural women through SDGs.",
	},
	{
		img: shochumImg,
		alt: "shochum.jpg",
		agTitle: "SHOCHUM",
		description: "Protecting the cultural identities with regard to the alarming increase of Islamophobia.",
	},
];

class Agenda extends PureComponent {
	constructor() {
		super();
		this.state = {
			iterationNumber: 0,
			animation1: { animationName: "fadeIn", animationPlayState: "running" },
			animation2: { animationName: "fadeUpIn", animationPlayState: "paused" },
			img: shochumImg,
			alt: "shochum.jpg",
			agTitle: "SHOCHUM",
			description: "Protecting the cultural identities with regard to the alarming increase of Islamophobia.",
		};
	}
	componentDidMount() {
		// setTimeout(function () { this.setState({ animation }) })
		let iterationNumber = this.state.iterationNumber + 1;
		iterationNumber = iterationNumber === committees.length ? 0 : iterationNumber;
		setTimeout(
			function() {
				this.setState({ ...committees[iterationNumber], iterationNumber });
			}.bind(this),
			6000
		);
	}
	componentDidUpdate() {
		let iterationNumber = this.state.iterationNumber + 1;
		iterationNumber = iterationNumber === committees.length ? 0 : iterationNumber;
		setTimeout(
			function() {
				this.setState({ ...committees[iterationNumber], iterationNumber });
			}.bind(this),
			6000
		);
	}
	render() {
		return (
			<div className="agenda">
				<h3 style={this.state.animation1}>{this.state.agTitle}</h3>
				<img style={this.state.animation1} src={this.state.img} alt={this.state.alt} />
				<p style={this.state.animation2} className="info">
					<b>Agenda-</b> {this.state.description}
				</p>
			</div>
		);
	}
}

class Agendas extends PureComponent {
	render() {
		return (
			<Layout id="agendas">
				<Helmet>
					<title>Agendas | CMS MUN</title>
				</Helmet>
				<h1>Agendas</h1>

				{/* <Agenda img={aippmImg} alt="aippmg.jpg" agTitle="All India Political Parties Meet">
					IC 814 Plane Hijack.
				</Agenda>
				<Agenda img={marveldcImg} alt="marveldc.jpg" agTitle="Fictional committee">
					Classified
				</Agenda> */}
			</Layout>
		);
	}
}

export default Agendas;
