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
						width:
							this.state.animationName === "grow" && typeof window !== "undefined"
								? `${window.innerHeight / 2.5}px`
								: "",
						height:
							this.state.animationName === "grow" && typeof window !== "undefined"
								? `${window.innerHeight / 2.5}px`
								: "",
						transformOrigin: "top right",
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
					<a
						href="https://l.instagram.com/?u=https%3A%2F%2Fgoo.gl%2Fforms%2FAeSSUhvuOamgNsJf2&e=ATOw3C7c6bwl0OB-2V77jk0Mu3cD1sx0g1ls0PzehtQ9dgJHlTZaYIV8qrVEeSbLVUoGl3ct2T30mJnrVDXYrwXot28H-u4H"
						target="_blank"
						rel="noopener noreferrer"
						style={this.state.navitems}
					>
						Form
					</a>
				</div>
			</div>
		);
	}
}

export default Navigation;
