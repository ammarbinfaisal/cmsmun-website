import React, { PureComponent } from "react";
import { Link } from "gatsby";
import Bars from "../assets/Bars";

class Navigation extends PureComponent {
	constructor() {
		super();
		this.state = { display: "none", height: "50vh", width: "45vh" };
		this.setSize = this.setSize.bind(this);
	}
	setSize() {
		setTimeout(() => {
			try {
				let height =
					getComputedStyle(document.querySelector("#navigation a")).height.split("px")[0] * 8.5 + "px" ||
					"50vh";
				this.setState({
					height,
					width: height.split("px")[0] - 4 + "px",
				});
			} catch (e) {
				console.log(e);
			}
		}, 1000);
	}
	componentDidMount() {
		if (typeof document !== "undefined") {
			window.addEventListener("resize", this.setSize);
		}
	}
	render() {
		return (
			<div className="white">
				<div
					id="nav-toggle"
					onClick={e => {
						this.setSize();
						if (this.state.display === "flex") {
							this.setState({
								animationName: "shrink",
								navitems: {
									transform: "scale(1)",
									opacity: 0,
								},
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
								navitems: {
									transform: "scale(1)",
									opacity: 1,
								},
							});
						}
					}}
				>
					<Bars />
				</div>
				<div
					id="navigation"
					className="bg-black centerize s7em questrial"
					style={{
						display: this.state.display,
						animationName: this.state.animationName,
						transformOrigin: "top right",
						height: this.state.height,
						width: this.state.width,
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
					<Link to="/contact" style={this.state.navitems}>
						Contact&nbsp;us
					</Link>
					<Link to="/payment" style={this.state.navitems}>
						Payment
					</Link>r
				</div>
			</div>
		);
	}
}

export default Navigation;
