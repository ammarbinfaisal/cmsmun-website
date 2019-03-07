import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import "../sass/committees.sass";

class Committee extends PureComponent {
	constructor(props) {
		super(props);
		const imageWidth = props.node.childImageSharp.fluid.presentationWidth;
		this.state = {
			opacity: 0,
			transform: `scale(0.5) translateY(${this.props.index % 2 === 0 ? "-" : ""}200%)`,
			imageWidth:
				typeof window !== "undefined"
					? window.innerWidth <= 450
						? window.innerWidth * .9
						: window.innerWidth < 1080
							? imageWidth * 0.8
							: imageWidth
					: 450
		}
	}
	componentDidMount() {
		if (typeof window !== "undefined") {
			const { index: i } = this.props;
			const $divMeantToBeScrolled = document.querySelector("#committees > div");
			const fadeIn = () => {
				const $imageDiv = document.querySelector(`.imageDiv${i}`);
				const leftOffset = $imageDiv.offsetLeft;
				const scrolledPixels = $divMeantToBeScrolled.scrollLeft;
				if (leftOffset + this.state.imageWidth - 50 > scrolledPixels && leftOffset <= (scrolledPixels + window.innerWidth))
					this.setState({ opacity: 1, transform: "translateY(0) scale(1)" });
				else
					this.setState({ opacity: 0, transform: `scale(0.5) translateY(${this.props.index % 2 === 0 ? "-" : ""}200%)` });
			}
			fadeIn();
			$divMeantToBeScrolled.addEventListener("scroll", fadeIn);
			this.forceUpdate();
			window.addEventListener("resize", () => this.forceUpdate());
		}
	}
	render() {
		const { node, index: i } = this.props;
		let margin = window.innerWidth * .05;
		margin = margin > 36 ? 36 : margin;
		return (
			<Img
				fluid={node.childImageSharp.fluid}
				key={node.childImageSharp.id}
				className={`imageDiv${i}`}
				style={{
					width: `${this.state.imageWidth}px`,
					margin: `0 ${margin}px`,
					boxSizing: "content-box",
					transition: "1s",
					transitionDelay: `${i * .1}s`,
					...this.state
				}}
			/>
		);
	}
}

class Committees extends PureComponent {
	render() {
		return (
			<Layout id="committees" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
				<Helmet>
					<title>Committees | CMSMUN ALIGANJ</title>
					<meta name="description" content="Committees of CMSMUN ALIGANJ 2019" />
				</Helmet>
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
						overflowY: "hidden",
					}}
				>
					<div
						style={{
							width: `${this.props.data.allFile.edges[0].imageWidth * 5}px`,
							padding: "0 30px",
							display: "flex",
							justifyContent: "flexStart",
							alignItems: "center",
						}}
					>
						{this.props.data.allFile.edges.map(({ node }, i) => <Committee node={node} index={i} key={i} />)}
					</div>
				</div>
				{/* </div> */}
			</Layout>
		);
	}
}

export default Committees;

export const query = graphql`
	query {
		allFile(filter: { sourceInstanceName: { eq: "committees" } }) {
			edges {
				node {
					childImageSharp {
						id
						fluid(maxWidth: 600, quality: 100) {
							...GatsbyImageSharpFluid_withWebp_tracedSVG
							presentationWidth
						}
					}
				}
			}
		}
	}
`;
