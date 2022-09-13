import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

const PayPalButton = (props) => {
	const { dataOrder } = props
	return (
		<>
			<PayPalButtons
				className="w-100"
				style={{ layout: 'horizontal', tagline: false }}
				createOrder={async (data, actions) => {
					try {
						return actions.order.create({
							purchase_units: [
								{
									amount: {
										currency_code: 'AUD',
										value: dataOrder.TotalPayment // Can also reference a variable or function
									}
								}
							]
						})
					} catch (err) {
						console.log('Error: ', err)
					}
				}}
				onApprove={(data, actions) =>
					actions.order.capture().then(function (orderData) {
						// Successful capture! For dev/demo purposes:
						console.log('Capture result', orderData, JSON.stringify(orderData, null, 2))
						const transaction = orderData.purchase_units[0].payments.captures[0]
						alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`)
					})
				}
			/>
		</>
	)
}

export default PayPalButton
