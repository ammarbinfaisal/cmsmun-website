import React from "react";
import Helmet from "react-helmet";

import "../sass/page.sass";

const NotFoundPage = () => (
	<div id="404" className="404-page" style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
		<Helmet>
			<title>Page not found</title>
		</Helmet>
		<h1>404</h1><h2>PAGE NOT FOUND</h2>
		<p>
			You just hit a route that doesn&#39;t exist...
			<br /> &amp; the sadness.
		</p>
	</div>
);

export default NotFoundPage;
