import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

const Contact = () => (
	<Layout id="payment">
		<Helmet>
			<title>Payment | CMSMUN ALIGANJ</title>
			<meta name="description" content="Payment | CMSMUN ALIGANJ" />
		</Helmet>
		<div className="white-overlay black full-page questrial s9em">
			<h1>Payment</h1>
			<div id="fee-info">
				<h2>Delegates fee</h2>
				<p>Individual delegates: &#8377;1500</p>
				<p>School delegation: &#8377;1000 per head</p>
			</div>
			<div id="modes-of-payment">
				<h2>Modes of payment</h2>
				<div className="payment-method">
					<h3>Online Payment</h3>
					<table>
						<tbody>
							<tr>
								<td>Bank Name</td>
								<td>Allahabad Bank</td>
							</tr>
							<tr>
								<td>Branch Name</td>
								<td>Hussainganj, Lucknow</td>
							</tr>
							<tr>
								<td>A/C Number</td>
								<td>20296488975</td>
							</tr>
							<tr>
								<td>IFSC code</td>
								<td>ALLA0210571</td>
							</tr>

						</tbody>
					</table>
					<p>
						The delegate who has made the payment can should show the receipt of the payment to make sure that the payment is cleared.
				</p>
					<hr />
				</div>
				<div className="payment-method">
					<h3>Cash</h3>
					<p>The amount can be paid in the branch itself</p>
					<pre>
						City Montessori School,<br/>
						Sector O, ALiganj,<br/>
						Lucknow, Uttar Pradesh.<br/>
						Pincode: 226024
					</pre>
					<hr/>
				</div>
				<div className="payment-method">
					<h3>Demand draft</h3>
					<p>The payment can also be done through demand draft in favour of <b>CITY MONTESSORI SCHOOL, LUCKNOW</b></p>
					<p>The demand draft is to be submitted at:</p>
					<pre>
						City Montessori School,<br/>
						Sector O, ALiganj,<br/>
						Lucknow, Uttar Pradesh.<br/>
						Pincode: 226024
					</pre>
					<hr/>
				</div>
			</div>
		</div>
	</Layout>
);

export default Contact;
