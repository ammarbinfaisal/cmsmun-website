import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import "../sass/committees.sass";

class Agendas extends PureComponent {
	componentDidMount() {
		this.forceUpdate();
	}
	render() {
		return (
			<Layout id="committees" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
				<Helmet>
					<title>Committees | CMSMUN ALIGANJ</title>
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
						{this.props.data.allFile.edges.map(({ node }, i) => {
							const imageWidth = node.childImageSharp.fluid.presentationWidth;
							return (
								<Img
									fluid={node.childImageSharp.fluid}
									key={node.childImageSharp.id}
									className={`imageDiv${i}`}
									style={{
										width:
											typeof window !== "undefined"
												? window.innerWidth <= 450
													? `${imageWidth / 2}px`
													: window.innerWidth < 1080
													? `${imageWidth * 0.75}px`
													: `${imageWidth}px`
												: `450px`,
										margin: "0 30px",
										boxSizing: "content-box",
									}}
								/>
							);
						})}
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
