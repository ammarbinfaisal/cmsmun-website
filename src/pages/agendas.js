import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

import "../sass/agendas.sass";

//	IMAGES
import shochumImg from "../images/shochum.jpg";
import aippmImg from "../images/aippm.jpg";
import marveldcImg from "../images/marvelvsdc.jpg";
import unhrcImg from "../images/unhrc.jpg";
import unscImg from "../images/unsc.jpg";
import unwomenImg from "../images/unwomen.jpg";

class Agenda extends PureComponent {
	render() {
		return (
			<div className="agenda">
				<h3>{this.props.agTitle}</h3>
				<img src={this.props.img} alt={this.props.alt} />
				<p className="info"><b>Agenda-</b> {this.props.children}</p>
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
				<Agenda img={shochumImg} alt="shochum.jpg" agTitle="SOCHUM">
					Protecting the cultural identities with regard to the alarming increase of Islamophobia.
				</Agenda>
				<Agenda img={unhrcImg} alt="unhrc.jpg" agTitle="United Nations Human Rights Council">
					Agenda- Violation of human rights of the Prisoners of wars.
				</Agenda>
				<Agenda img={unscImg} alt="unsc.jpg" agTitle="United Nations Securty Council">
					Sudan Partition Conflict.
				</Agenda>
				<Agenda img={unwomenImg} alt="unwomen.jpg" agTitle="United Nations Entity for Gender Equality and the Empowerment of Women">
					Empowerment of rural women through SDGs.
				</Agenda>
				<Agenda img={aippmImg} alt="aippmg.jpg" agTitle="All India Political Parties Meet">
					IC 814 Plane Hijack.
				</Agenda>
				<Agenda img={marveldcImg} alt="marveldc.jpg" agTitle="Fictional committee">
					Classified
				</Agenda>
			</Layout>
		);
	}
}

export default Agendas;
