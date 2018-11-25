import React, { PureComponent } from "react";
import "../sass/footer.sass";

const Footer = () => (
	<div id="footer" className="bg-black lato">
		<div id="social">
		<h4 className="realgold">Find us on</h4>
			<div id="social-icons" className="lightgold">
				<i className="fab fa-facebook-square" />
				<i className="fab fa-twitter-square" />
			</div>
		</div>
		<div id="info">
			<h4 className="realgold">CMS MUN</h4>
			<p className="lightgold">Starts in April</p>
		</div>
	</div>
);

export default Footer;
