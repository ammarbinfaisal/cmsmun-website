import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

const PersonContact = ({ designation, name, phoneNumber, email }) => (
	<div className="person-contact">
		<h2>{designation}</h2>
		<h3>{name}</h3>
		<a href={`tel:${phoneNumber}`}>Phone no: {phoneNumber}</a>
		<a href={`mailto:${email}`}>{email}</a>
		<hr />
	</div>
);

const contacts = [
	{
		designation: "Conference Head",
		name: "Ms. Trishla Ranjan",
		phoneNumber: "+91 8853051333",
		email: "",
	},
	{
		designation: "Secretary General",
		name: "Gauri Srivastava",
		phoneNumber: "+91 9838935064",
		email: "gaurisrivastava11@yahoo.in",
	},
	{
		designation: "Director General",
		name: "Anushka Singh",
		phoneNumber: "+91 8174038877",
		email: "kuhusingho@gmail.com",
	},
	{
		designation: "Delegate Affairs",
		name: "Shivyanshi Shukla",
		phoneNumber: "+91 9453797423",
		email: "cmsmun.delegateaffairs@gmail.com",
	},
];

const Contact = () => (
	<Layout id="contact">
		<Helmet>
			<title>Contact us | CMSMUN ALIGANJ</title>
			<meta name="description" content="contact us | CMSMUN ALIGANJ" />
		</Helmet>
		<div className="white-overlay black full-page questrial s9em">
			<h1>Contact</h1>
			{contacts.map(contact => (
				<PersonContact {...contact} />
			))}
		</div>
	</Layout>
);

export default Contact;
