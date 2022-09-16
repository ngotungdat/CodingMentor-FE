import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

const PayPalButton = (props) => {
	const { dataOrder } = props
	console.log('dataOrder: ', dataOrder)
	const data = dataOrder.OrderDetailModels.map((item) => {
		return {
			name: item.VideoCourseName,
			quantity: item.Quantity,
			unit_amount: { currency_code: 'AUD', value: item.Price / item.Quantity }
		}
	})
	console.log('Data: ', [...data])
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
										value: dataOrder.TotalPayment, // Can also reference a variable or function
										// breakdown: {
										// 	item_total: { currency_code: 'AUD', value: dataOrder.TotalPayment }
										// }
										breakdown: {
											item_total: { currency_code: 'AUD', value: dataOrder.TotalPayment }
										}
									},
									items: [...[data[0], data[1]]]
									// items: [
									// 	{
									// 		name: 'wiersze',
									// 		quantity: '2',
									// 		unit_amount: { currency_code: 'AUD', value: '1700.00' }
									// 	},
									// 	{
									// 		name: 'wiersze 1',
									// 		quantity: '2',
									// 		unit_amount: { currency_code: 'AUD', value: '1500.00' }
									// 	}
									// ]
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
