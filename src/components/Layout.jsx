import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "./reset.css";
import "../sass/style.sass";
import "../sass/aboutus.sass";

import ReactGA from "react-ga";
ReactGA.initialize("UA-134084954-3");
if (typeof window !== "undefined") ReactGA.pageview(window.location.pathname + window.location.search);

class Layout extends PureComponent {
	render() {
		return (
			<div id="layout-root">
				<Helmet>
					<title>CMS Aliganj's Model United Nations</title>
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
						integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
						crossorigin="anonymous"
					/>
					<meta
						name="description"
						content="City Montessori School Aliganj Model United Nations (CMSMUN Aliganj)"
					/>
				</Helmet>
				<Navigation />
				<div id={this.props.id} style={this.props.style}>
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
