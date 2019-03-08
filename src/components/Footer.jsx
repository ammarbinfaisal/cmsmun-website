import React from "react";
import FBICON from "../assets/Facebook";
import IGICON from "../assets/Instagram";
import "../sass/footer.sass";

const Footer = () => (
	<div id="footer" className="bg-black questrial white">
		<div id="social">
			<h4>Find us on</h4>
			<div id="social-icons">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.facebook.com/Cmsmun-Aliganj-261301907871830/"
				>
					<FBICON />
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/cmsmun_aliganj">
					<IGICON />
				</a>
			</div>
		</div>
		<div id="info">
			<h4>CMSMUN ALIGANJ</h4>
			<p className="white s9em">on 13th and 14th April</p>
		</div>
	</div>
);

export default Footer;
