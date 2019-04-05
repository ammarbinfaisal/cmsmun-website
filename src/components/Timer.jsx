import React, { PureComponent } from "react";
import dateDiff from "date-diff";
import FBIcon from "../assets/Facebook";
import IGIcon from "../assets/Instagram";

class Timer extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			hoursLeft: 0,
			minutesLeft: 0,
			secondsLeft: 0,
			daysLeft: 0,
			hoursPostfix: "hours",
			minutesPostfix: "minutes",
			secondsPostfix: "seconds",
		};
	}
	componentDidMount() {
		if (typeof window !== "undefined") {
			let _this = this;
			const calcTimeLeft = () => {
				const dateOfEvent = new Date(2019, 3, 13);
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
			const setPostfix = () => {
				if (window.innerWidth < 450) {
					_this.setState({
						minutesPostfix: "min",
						secondsPostfix: "sec",
					});
				} else {
					_this.setState({
						minutesPostfix: "minutes",
						secondsPostfix: "seconds",
					});
				}
			};
			setPostfix();
			window.addEventListener("resize", setPostfix);
		}
	}
	render() {
		let { daysLeft, hoursLeft, minutesLeft, secondsLeft, minutesPostfix, secondsPostfix } = this.state;
		daysLeft = daysLeft.toString();
		hoursLeft = hoursLeft.toString();
		minutesLeft = minutesLeft.toString();
		secondsLeft = secondsLeft.toString();
		return (
			<div
				id="timer"
				className="s7em questrial"
				style={
					this.props.positionDefault
						? {
								position: "absolute",
								top: "4px",
								left: "8px",
								...this.props.style,
						  }
						: { ...this.props.style }
				}
			>
				<div>
					<span className="numerals">{daysLeft.length < 2 ? "0" + daysLeft : daysLeft}</span>
					<span className="text">days</span>
				</div>
				<div>
					<span className="numerals">{hoursLeft.length < 2 ? "0" + hoursLeft : hoursLeft}</span>
					<span className="text">hours</span>
				</div>
				<div>
					<span className="numerals">{minutesLeft.length < 2 ? "0" + minutesLeft : minutesLeft}</span>
					<span className="text">{minutesPostfix}</span>
				</div>
				<div>
					<span className="numerals">{secondsLeft.length < 2 ? "0" + secondsLeft : secondsLeft}</span>
					<span className="text">{secondsPostfix}</span>
				</div>
				{this.props.socials ? (
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
				) : (
					""
				)}
			</div>
		);
	}
}

export default Timer;
