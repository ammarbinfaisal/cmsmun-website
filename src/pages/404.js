import React from "react";
import Helmet from "react-helmet";

import "../sass/page.sass";

const NotFoundPage = () => (
	<div id="404" className="plain-page">
		<Helmet>
			<title>Page not found</title>
		</Helmet>
		<h1>NOT FOUND</h1>
		<p>
			You just hit a route that doesn&#39;t exist...
			<br /> & the sadness.
		</p>
	</div>
);

export default NotFoundPage;
