import React from 'react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import _ from '~/appConfig'
import PayPalButton from './PayPalButton'

const PaypalButton = (props) => {
	const { dataOrder } = props
	return (
		<div>
			<PayPalScriptProvider options={{ 'client-id': _.clientIDPayPal }}>
				<PayPalButton dataOrder={dataOrder} />
			</PayPalScriptProvider>
		</div>
	)
}

export default PaypalButton
