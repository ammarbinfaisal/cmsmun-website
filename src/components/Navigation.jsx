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
                                navitems: {
                                    transform: `scale(1) ${
                                        window.innerWidth <= 400 ? "translateY(-10%)" : "translateY(20%)"
                                        }`,
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
                                    transform: `scale(1) ${
                                        window.innerWidth <= 400 ? "translateY(-10%)" : "translateY(20%)"
                                        }`,
                                    opacity: 1,
                                },
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
                        // width:
                        //     this.state.animationName === "grow" && typeof window !== "undefined"
                        //         ? window.innerWidth <= 400
                        //             ? `${window.innerWidth * 0.8}px`
                        //             : `${window.innerHeight / 2}px`
                        //         : "",
                        // height:
                        //     this.state.animationName === "grow" && typeof window !== "undefined"
                        //         ? window.innerWidth <= 400
                        //             ? `${window.innerWidth * 0.8}px`
                        //             : `${window.innerHeight / 2}px`
                        //         : "",
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
                    <Link to="/forms" style={this.state.navitems}>
                        Forms
					</Link>
                </div>
            </div>
        );
    }
}

export default Navigation;
