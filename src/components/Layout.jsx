import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Background from "./Background";

import "./reset.css";
import "../sass/style.sass";
import "../sass/aboutus.sass";

import ReactGA from "react-ga";
ReactGA.initialize("UA-134084954-3");
if (typeof window !== "undefined") ReactGA.pageview(window.location.pathname + window.location.search);

class Layout extends PureComponent {
	render() {
		return (
			<div id="layout-root" style={this.props.style}>
				<Helmet>
					<title>CMS Aliganj's Model United Nations</title>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="preconnect" href="https://use.fontawesome.com" />
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
						integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
						crossorigin="anonymous"
					/>
					<meta
						name="description"
						content="City Montessori School Aliganj Model United Nations - CMSMUN Aliganj"
					/>
					<link
						rel="icon"
						type="image/png"
						href="/images/favicon32.png"
						sizes="32x32"
					/>
					<link
						rel="icon"
						type="image/png"
						href="/images/favicon16.png"
						sizes="16x16"
					/>

					<link
						rel="mask-icon"
						href="/images/logo3svg"
						color="#0e0e0e"
					/>
					<meta name="theme-color" content="#0e0e0e" />
					<meta property="og:title" content="CMSMUN ALIGANJ 2019" />
					<meta property="og:url" content="/" />
					<meta property="og:image" content="/images/og-image.png" />
				</Helmet>
				<Background />
				<Navigation />
				<div id={this.props.id}>{this.props.children}</div>
				<Footer />
			</div>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
