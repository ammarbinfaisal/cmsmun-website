import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";

class Message extends Component {
	constructor() {
		super();
		this.state = { show: false };
	}
	render() {
		return (
			<div id="sc-gen-msg">
				<h3>Secretary General's Message</h3>
				{typeof window !== "undefined" && <VisibilitySensor /> ? (
					<VisibilitySensor
						intervalCheck={false}
						scrollCheck={true}
						scrollDelay={50}
						resizeCheck={true}
						resizeDelay={50}
						partialVisibility={true}
						offset={{ top: typeof window !== "undefined" ? window.innerHeight / 3 : 50 }}
						onChange={isVisible =>
							isVisible ? this.setState({ show: true }) : this.setState({ show: false })
						}
					>
						<div className="overlay" style={{ opacity: this.state.show ? 1 : 0 }}>
							Aute sit Lorem labore tempor consequat ad laboris officia adipisicing. Elit duis Lorem dolor
							cupidatat exercitation quis laborum. Exercitation amet deserunt reprehenderit non voluptate
							reprehenderit id. Proident cillum officia dolore Lorem reprehenderit ut cupidatat ut nisi do
						</div>
					</VisibilitySensor>
				) : (
					""
				)}
			</div>
		);
	}
}
export default Message;
