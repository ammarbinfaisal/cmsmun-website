import React, { PureComponent } from "react";
import dateDiff from "date-diff";
import FBIcon from "../assets/Facebook";
import IGIcon from "../assets/Instagram";

class Timer extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			hoursLeft: "",
			minutesLeft: "",
			daysLeft: "",
		};
	}
	componentDidMount() {
		if (typeof window !== "undefined") {
			let _this = this;
			const calcTimeLeft = () => {
				const dateOfEvent = new Date(2019, 4, 13);
				const presentDate = new Date();
				const diff = Date.diff(dateOfEvent, presentDate).seconds();
				_this.setState({
					daysLeft: Math.floor((diff / 86400) % 365),
					hoursLeft: Math.floor((diff / 3600) % 24),
					minutesLeft: Math.floor((diff / 60) % 60),
					secondsLeft: Math.floor(diff % 60),
				});
			};
			calcTimeLeft();
			setInterval(calcTimeLeft, 1000);
		}
	}
	render() {
		return (
			<div
				id="timer"
				className="s7em questrial"
				style={{
					position: "absolute",
					top: "4px",
					left: "8px",
				}}
			>
				<div>
					<span className="numerals">{this.state.daysLeft}</span>
					<span className="text">days</span>
				</div>
				<div>
					<span className="numerals">{this.state.hoursLeft}</span>
					<span className="text">hours</span>
				</div>
				<div>
					<span className="numerals">{this.state.minutesLeft}</span>
					<span className="text">minutes</span>
				</div>
				<div>
					<span className="numerals">{this.state.secondsLeft}</span>
					<span className="text">seconds</span>
				</div>
				<div style={{ marginLeft: "24px", display: "Flex", alignItems: "baseline" }}>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.facebook.com/Cmsmun-Aliganj-261301907871830/"
					>
						<FBIcon />
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/cmsmun_aliganj">
						<IGIcon />
					</a>
				</div>
			</div>
		);
	}
}

export default Timer;
