import React from "react";
import "../sass/footer.sass";

const Footer = () => (
	<div id="footer" className="bg-black questrial white">
		<div id="social">
			<h4 >Find us on</h4>
			<div id="social-icons">
				<a target="_blank" href="https://www.facebook.com/Cmsmun-Aliganj-261301907871830/">
					<i className="fab fa-facebook-square" />
				</a>
				<a target="_blank" href="https://instagram.com/cmsmun_aliganj">
					<i className="fab fa-instagram" />
				</a>
			</div>
		</div>
		<div id="info">
			<h4 >CMS MUN</h4>
			<p className="white s9em">on 13th and 14th April</p>
		</div>
	</div>
);

export default Footer;
