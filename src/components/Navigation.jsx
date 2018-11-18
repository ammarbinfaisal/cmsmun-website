import React, { PureComponent } from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

class Navigation extends PureComponent {
	constructor() {
		super();
		this.state = { display: "none" };
	}
	render() {
		return (
			<div>
				<Helmet>
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
						integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
						crossorigin="anonymous"
					/>
				</Helmet>
				<div
					id="nav-toggle"
					onClick={() => {
						// shrinking if already grown
						if (this.state.display === "flex") {
							this.setState({ animationName: "shrink", navitems: { opacity: 0 }, navMinHeight: 0, navMinWidth: 0 })
							setTimeout(() => this.state.animationName === "shrink" ? this.setState({ display: "none" }) : "", 600);
						}
						// growqing if shrunk
						else if (this.state.display === "none") {
							this.setState({ animationName: "grow", display: "flex", navitems: { opacity: 1 } });
							setTimeout(() => { this.setState({ navMinHeight: "225px", navMinWidth: "225px" }) }, 600)
						}
					}}
				>
					<i className="fas fa-bars" />
				</div>
				<div id="navigation" style={{ display: this.state.display, animationName: this.state.animationName, minHeight: this.state.navMinHeight, minWidth: this.state.navMinWidth }}>
					<Link to="/" style={this.state.navitems}>Home</Link>
					<Link to="/about-us" style={this.state.navitems}>About&nbsp;us</Link>
					<Link to="/contact" style={this.state.navitems}>Contact</Link>
					<Link to="/agendas" style={this.state.navitems}>Agendas</Link>
				</div>
			</div >
		);
	}
}

export default Navigation;
