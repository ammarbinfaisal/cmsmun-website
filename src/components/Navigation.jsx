import React, { PureComponent } from "react";
import { Link } from "gatsby";

class Navigation extends PureComponent {
	constructor() {
		super();
		this.state = { display: "none", navBg: "#F0F0DF" };
	}
	render() {
		return (
			<div>
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
							setTimeout(() => { this.setState({ navMinHeight: "160px", navMinWidth: "160px" }) }, 600)
						}
					}}
				>
					{/* <span
						style={{ backgroundColor: this.state.burgerColor }} />
					<span
						style={{ backgroundColor: this.state.burgerColor }} />
					<span
						style={{ backgroundColor: this.state.burgerColor }} /> */}

					<div id="navcircle" className={this.state.animationName === "shrink" ? "grown-circle" : "shrunk-circle"}></div>
					<i className="fas fa-bars" />

				</div>
				<div id="navigation" style={{ display: this.state.display, animationName: this.state.animationName, minHeight: this.state.navMinHeight, minWidth: this.state.navMinWidth }}>
					<Link to="/about-us" style={this.state.navitems}>About&nbsp;us</Link>
					<Link to="/contact" style={this.state.navitems}>Contact</Link>
				</div>
			</div >
		);
	}
}

export default Navigation;
