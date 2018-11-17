import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./reset.css";

class Layout extends PureComponent {
	render() {
		return (
			<div id="layout-root">
				<Helmet>
					<title>CMS Aliganj's Model United Nations</title>
					<meta name="google-site-verification" content="3PgQy65GcHwMk_lG9WKryxZqRGZnguIfhAApLk8u7XE" />
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
						integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
						crossorigin="anonymous"
					/>
					<meta name="description" content="City Montessori School Aliganj's Model United NAtions (CMS Mun)" />
				</Helmet>
				<div id={this.props.id} style={this.props.style}>{this.props.children}</div>
			</div>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
