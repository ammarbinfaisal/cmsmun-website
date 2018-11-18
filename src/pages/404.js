import React from "react";
import Helmet from "react-helmet";

import styles from "../components/style";

const NotFoundPage = () => (
	<div id="404" style={styles.columnify}>
		<Helmet>
			<title>Page not found</title>
		</Helmet>
		<h1 style={styles.heading}>NOT FOUND</h1>
		<p style={styles.para}>You just hit a route that doesn&#39;t exist...<br /> & the sadness.</p>
	</div>
);

export default NotFoundPage;
