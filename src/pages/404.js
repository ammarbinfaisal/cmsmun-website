import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

import columnify from "../styles/style";

const NotFoundPage = () => (
	<Layout id="404" style={columnify}>
		<Helmet>
			<title>Page not found</title>
		</Helmet>
		<h1 style={{ fontSize: "2.4em", margin: "3vh 0" }}>NOT FOUND</h1>
		<p style={{ fontSize: "1.4em" }}>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>
);

export default NotFoundPage;
