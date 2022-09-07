import React, { useEffect, useRef, useState } from 'react'

const PayPal = () => {
	useEffect(() => {
		// @ts-ignore
		window.paypal
			.Buttons({
				// Sets up the transaction when a payment button is clicked
				createOrder: (data, actions) => {
					return actions.order.create({
						purchase_units: [
							{
								amount: {
									currency_code: 'AUD',
									value: '77.44' // Can also reference a variable or function
								}
							}
						]
					})
				},
				// Finalize the transaction after payer approval
				onApprove: (data, actions) => {
					return actions.order.capture().then(function (orderData) {
						// Successful capture! For dev/demo purposes:
						console.log('Capture result', orderData, JSON.stringify(orderData, null, 2))
						const transaction = orderData.purchase_units[0].payments.captures[0]
						alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`)
					})
				}
			})
			.render('#paypal-button-container')
	}, [])
	return (
		<div>
			<div id="paypal-button-container">CheckOut</div>
			{/* <div id="paypal-button-container"></div> */}
			<a href="https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LEMDC45MGQKZN">Thanh Toán</a>
		</div>
	)
}

export default PayPal
