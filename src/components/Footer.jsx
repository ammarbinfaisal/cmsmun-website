import React from "react";
import "../sass/footer.sass";

const Footer = () => (
	<div id="footer" className="bg-black questrial white">
		<div id="social">
			<h4 >Find us on</h4>
			<div id="social-icons">
				<i className="fab fa-facebook-square" />
				<i className="fab fa-instagram" />
			</div>
		</div>
		<div id="info">
			<h4 >CMS MUN</h4>
			<p className="white s9em">on 13th and 14th April</p>
		</div>
	</div>
);

export default Footer;
