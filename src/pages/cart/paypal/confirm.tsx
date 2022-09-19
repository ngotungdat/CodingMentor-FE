import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import { shoppingCartApi } from '~/apiBase/shopping-cart/shopping-cart'
import { useWrap } from '~/context/wrap'
import confirmPaypal from '~/components/json/pending-confirmation.json'
import { Spin } from 'antd'

const Confirm = () => {
	const router = useRouter()
	const { PayerID, guid, paymentId } = router.query
	const { showNoti } = useWrap()
	const [isLoading, setIsLoading] = useState(false)
	const getStatusPayment = async () => {
		setIsLoading(true)
		try {
			// const newPaymentId = paymentId.toString().split('-')[1]
			if (PayerID && guid && paymentId) {
				let Data = new FormData()
				Data.append('PayerID', PayerID.toString().trim())
				Data.append('guid', guid.toString().trim())
				Data.append('paymentId', paymentId.toString().trim())
				const res = await shoppingCartApi.getPaypalStatus(Data)
				if (res.status === 200) {
					router.push('/cart/paypal/success')
				}
			}
		} catch (err) {
			showNoti('danger', err.message)
		} finally {
			setIsLoading(false)
		}
	}
	return (
		<div>
			{/* Confirm
			<button onClick={getStatusPayment}>Xác nhận</button> */}
			<div className="wrapper-paypal">
				<div className="wrapper-confirm-paypal">
					<div className="wrapper-confirm-icon">
						<Lottie loop animationData={confirmPaypal} play className="inner icon-confirm-paypal" />
					</div>
					<div className="wrapper-confirm-content">
						<h1 className="confirm">Xác nhận thanh toán</h1>
						<h1 className="noti">Vui lòng xác nhận thanh toán</h1>
						<button className="btn btn-confirm" onClick={getStatusPayment}>
							Xác nhận {isLoading && <Spin className="ml-2" size="small" />}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Confirm
