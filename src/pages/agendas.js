import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import styles from "../components/style"

const Agendas = () => (
    <Layout id="agendas" style={styles.columnify}>
        <Helmet><title>Agendas | CMS MUN</title></Helmet>
        <Navigation />
        <h1 style={styles.heading}>Agendas</h1>
        <p style={styles.para}>
            Laboris cillum labore et id dolore voluptate nostrud duis. 
            Ipsum Lorem exercitation pariatur reprehenderit consequat esse excepteur non ex aute tempor 
            id reprehenderit mollit. Magna cupidatat laborum do commodo ad.
        </p>
    </Layout>
);


export default Agendas;