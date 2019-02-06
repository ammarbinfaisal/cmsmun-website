import React, { PureComponent } from "react";
import { Link } from "gatsby";

class Navigation extends PureComponent {
	constructor() {
		super();
		this.state = { display: "none" };
	}
	render() {
		return (
			<div className="white">
				<div
					id="nav-toggle"
					onClick={() => {
						// shrinking if already grown
						if (this.state.display === "flex") {
							this.setState({
								animationName: "shrink",
								navitems: { transform: "scale(0)", opacity: 0 },
								// navMinHeight: 0,
								// navMinWidth: 0,
							});
							setTimeout(
								() => (this.state.animationName === "shrink" ? this.setState({ display: "none" }) : ""),
								600
							);
						}
						// growqing if shrunk
						else if (this.state.display === "none") {
							this.setState({
								animationName: "grow",
								display: "flex",
								navitems: { transform: "scale(1)", opacity: 1 },
							});
							// setTimeout(() => {
							// 	this.setState({ navMinHeight: "225px", navMinWidth: "225px" });
							// }, 600);
						}
					}}
				>
					<i className="fas fa-bars" />
				</div>
				<div
					id="navigation"
					className="bg-black centerize s7em questrial"
					style={{
						display: this.state.display,
						animationName: this.state.animationName,
						minHeight: this.state.navMinHeight,
						minWidth: this.state.navMinWidth,
					}}
				>
					<Link to="/" style={this.state.navitems}>
						Home
					</Link>
					<Link to="/about-us" style={this.state.navitems}>
						About&nbsp;us
					</Link>
					<Link to="/committees" style={this.state.navitems}>
						Committees
					</Link>
				</div>
			</div>
		);
	}
}

export default Navigation;
