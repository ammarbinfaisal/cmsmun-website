import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import "../sass/agendas.sass";

class Agendas extends PureComponent {
	render() {
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
					<div
						style={{
							width: `${this.props.data.allFile.edges[0].imageWidth *
								5}px`,
							padding: "0 30px",
							display: "flex",
							justifyContent: "flexStart",
							alignItems: "center",
						}}
					>
						{this.props.data.allFile.edges.map(({ node }) => {
							const imageWidth = node.childImageSharp.fluid.presentationWidth;
							return (
								<Img
									fluid={node.childImageSharp.fluid}
									key={node.childImageSharp.id}
									style={{
										width:
											typeof window !== "undefined" ?
												window.innerWidth <= 400
													? `${imageWidth / 2}px`
													: window.innerWidth < 800
														? `${(imageWidth * 2) / 3}px`
														: `${imageWidth}px`
												: `${imageWidth}px`,
										margin: "0 30px",
										boxSizing: "content-box"
									}}
								/>
							)
						}
						)
						}
					</div>
				</div>
				{/* </div> */}
			</Layout>
		);
	}
}

export default Agendas;

export const query = graphql`
	query {
		allFile(filter: { sourceInstanceName: { eq: "committees" } }) {
			edges {
				node {
					childImageSharp {
						id
						fluid(maxWidth: 720, quality: 100) {
							...GatsbyImageSharpFluid_tracedSVG
							presentationWidth
						}
					}
				}
			}
		}
	}
`;
