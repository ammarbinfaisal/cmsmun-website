import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Carousel from "nuka-carousel";

import "../sass/agendas.sass";

//	IMAGES
import sochum from "../images/sochum.jpg";
import jcc from "../images/jcc.jpg";
import unhrc from "../images/unhrc.jpg";
import aippm from "../images/aippm.jpg";
import cotsow from "../images/cotsow.jpg";
import unsc from "../images/unsc.jpg";

import "../sass/agendas.sass";

const images = [sochum, unhrc, unsc, aippm, jcc, cotsow];

class Agendas extends PureComponent {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		i: 0
	// 	}
	// }
	// componentDidMount() {
	// 	let i = 0;
	// 	setInterval(() => {
	// 		this.setState({ i: i + 1 > 5 ? 0 : ++i })
	// 		i = this.state.i;
	// 	}, 5000)
	// }
	render() {
		// TODO
		// implement looping over an images array
		// fiex alignment of images and layout
		// let { i } = this.state;
		// let imgStyles = [
		// 	{ left: "-100%", display: "none" },
		// 	{ left: "-10%", opacity: 0.5, width: "35vw" },
		// 	{ left: "20%", zIndex: "1000", width: "60vw" },
		// 	{ right: "-10%", opacity: 0.5, width: "35vw" },
		// 	{ left: "-100%", display: "none" }
		// ]

		// const numOfImageStyles = imgStyles.length;
		// const getImageStyle = i =>
		// 	i > 0
		// 		? i <= numOfImageStyles
		// 			? imgStyles[i]
		// 			: imgStyles[i % numOfImageStyles]
		// 		: null;
		return (
			<Layout id="agendas">
				<Helmet>
					<title>Committess | CMSMUN ALIGANJ</title>
				</Helmet>
				{/* <div className="slider-child valign-center" style={{ width: "100%", height: "90vh", overflow: "hidden", position: "relative" }}> */}
				<div
					style={{
						height:
							typeof window !== "undefined"
								? window.innerHeight
									? `${window.innerHeight}px`
									: "80vh"
								: "80vh",
						marginBottom: "24px",
						display: "flex",
						justifyContent: "flexStart",
						alignItems: "center",
						overflowX: "scroll",
					}}
				>
					<img
						alt="committee"
						decoding="auto"
						srcSet="https://instagram.fpat1-1.fna.fbcdn.net/vp/c1035d31a66ef73459ad712683972779/5CF61A45/t51.2885-15/sh0.08/e35/s640x640/49541067_534145447069224_5933640676135502079_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 640w,https://instagram.fpat1-1.fna.fbcdn.net/vp/7fee17bb6fe2b9e5953a02f0860bf7fc/5CF3D745/t51.2885-15/sh0.08/e35/s750x750/49541067_534145447069224_5933640676135502079_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 750w,https://instagram.fpat1-1.fna.fbcdn.net/vp/6c9b6eab6b1586c5099ff25d7766a18f/5CE7C9A0/t51.2885-15/e35/49541067_534145447069224_5933640676135502079_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 1080w"
						src="https://instagram.fpat1-1.fna.fbcdn.net/vp/6c9b6eab6b1586c5099ff25d7766a18f/5CE7C9A0/t51.2885-15/e35/49541067_534145447069224_5933640676135502079_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net"
					/>
					<img
						alt="committee"
						decoding="auto"
						sizes="545px"
						srcSet="https://instagram.fpat1-1.fna.fbcdn.net/vp/c448c47824ab64ed5fc36f95e95df8ff/5D004A24/t51.2885-15/sh0.08/e35/s640x640/47693695_712466649135565_5285206201577464110_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 640w,https://instagram.fpat1-1.fna.fbcdn.net/vp/5ff76d73a45d3ebddb57a93bcda3aa7a/5CEDA624/t51.2885-15/sh0.08/e35/s750x750/47693695_712466649135565_5285206201577464110_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 750w,https://instagram.fpat1-1.fna.fbcdn.net/vp/227ae087679bf695d2cab288d0dd0fc7/5CEB73C1/t51.2885-15/e35/47693695_712466649135565_5285206201577464110_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 1080w"
						src="https://instagram.fpat1-1.fna.fbcdn.net/vp/227ae087679bf695d2cab288d0dd0fc7/5CEB73C1/t51.2885-15/e35/47693695_712466649135565_5285206201577464110_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net"
					/>
					<img
						alt="committee"
						decoding="auto"
						sizes="545px"
						srcSet="https://instagram.fpat1-1.fna.fbcdn.net/vp/5906c27b9673d0761d027f6de97d56cc/5CE9D461/t51.2885-15/sh0.08/e35/s640x640/47691128_310988156205589_564080015567701564_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 640w,https://instagram.fpat1-1.fna.fbcdn.net/vp/ab9b6d095d9944764d1658d05d0fe555/5CF6F19E/t51.2885-15/sh0.08/e35/s750x750/47691128_310988156205589_564080015567701564_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 750w,https://instagram.fpat1-1.fna.fbcdn.net/vp/b60ae71d34ca08046bfe5df548d9c29c/5CE6EB12/t51.2885-15/e35/47691128_310988156205589_564080015567701564_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 1080w"
						src="https://instagram.fpat1-1.fna.fbcdn.net/vp/b60ae71d34ca08046bfe5df548d9c29c/5CE6EB12/t51.2885-15/e35/47691128_310988156205589_564080015567701564_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net"
					/>
					<img
						alt="committee"
						decoding="auto"
						sizes="545px"
						srcSet="https://instagram.fpat1-1.fna.fbcdn.net/vp/dddae15a6c1c5232042ec78557d55596/5CFD62F9/t51.2885-15/sh0.08/e35/s640x640/47694452_351986818973494_6621317808096172933_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 640w,https://instagram.fpat1-1.fna.fbcdn.net/vp/04d9f95b57a8fa3b4290a5ffdad6e951/5CE7F9F9/t51.2885-15/sh0.08/e35/s750x750/47694452_351986818973494_6621317808096172933_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 750w,https://instagram.fpat1-1.fna.fbcdn.net/vp/8a989fece06221ee0e2930134f2e4c6c/5CED621C/t51.2885-15/e35/47694452_351986818973494_6621317808096172933_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 1080w"
						src="https://instagram.fpat1-1.fna.fbcdn.net/vp/8a989fece06221ee0e2930134f2e4c6c/5CED621C/t51.2885-15/e35/47694452_351986818973494_6621317808096172933_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net"
					/>
					<img
						alt="committee"
						decoding="auto"
						sizes="545px"
						srcSet="https://instagram.fpat1-1.fna.fbcdn.net/vp/bf0935d8606d3523ca27c7357a35e74b/5CE5074A/t51.2885-15/sh0.08/e35/s640x640/50151566_394828661285850_8576643947788343643_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 640w,https://instagram.fpat1-1.fna.fbcdn.net/vp/71815dfb4389e4b9254e12bd6fe5610c/5CE1EE4A/t51.2885-15/sh0.08/e35/s750x750/50151566_394828661285850_8576643947788343643_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 750w,https://instagram.fpat1-1.fna.fbcdn.net/vp/f39e5103ce42a07e175fc86a35f7b32b/5CE18CAF/t51.2885-15/e35/50151566_394828661285850_8576643947788343643_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net 1080w"
						src="https://instagram.fpat1-1.fna.fbcdn.net/vp/f39e5103ce42a07e175fc86a35f7b32b/5CE18CAF/t51.2885-15/e35/50151566_394828661285850_8576643947788343643_n.jpg?_nc_ht=instagram.fpat1-1.fna.fbcdn.net"
					/>
				</div>
				{/* </div> */}
			</Layout>
		);
	}
}

export default Agendas;
