import React, { PureComponent } from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

class Background extends PureComponent {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            height: "100vh",
            width: "100%",
            opacity: 1,
            i: 0,
            j: 1
        }
    }
    componentDidMount() {
        setInterval(() => {
            setTimeout(() => {
                this.setState({ opacity: 0 })
            }, 5000);
            this.setState({ i: this.state.i + 1 < 4 ? this.state.i + 1 : 0, opacity: 1 });
            this.setState({ j: this.state.i + 1 < 4 ? this.state.i + 1 : 0})
        }, 6000);
    }
    render() {
        return (
            <StaticQuery query={graphql`
            query {
                allFile(filter: { sourceInstanceName: { eq: "bgs" } }) {
                    edges {
                        node {
                            childImageSharp {
                                id
                                fluid(maxWidth: 720, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                    presentationWidth
                                }
                            }
                        }
                    }
                }
            }
          `}
                render={
                    data =>
                        (
                            <div
                                id="background"
                                style={{
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    height: this.state.height,
                                    width: this.state.width,
                                    zIndex: "-1000"
                                }}
                            >
                                <Img
                                    fluid={data.allFile.edges[this.state.i].node.childImageSharp.fluid}
                                    key={data.allFile.edges[this.state.i].node.childImageSharp.id}
                                    style={{
                                        opacity: this.state.opacity,
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        height: this.state.height,
                                        width: this.state.width,
                                        transition: "1s",
                                    }}
                                />
                                <Img
                                    fluid={data.allFile.edges[this.state.j].node.childImageSharp.fluid}
                                    key={data.allFile.edges[this.state.j].node.childImageSharp.id}
                                    style={{
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        height: this.state.height,
                                        width: this.state.width,
                                        zIndex: "-1000"
                                    }}
                                />
                            </div>
                        )
                }
            />
        );
    }
};


export default Background;

