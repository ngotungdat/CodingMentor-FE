import { useRouter } from 'next/router'
import React from 'react'
import Lottie from 'react-lottie-player'
import { shoppingCartApi } from '~/apiBase/shopping-cart/shopping-cart'
import { useWrap } from '~/context/wrap'
import confirmPaypal from '~/components/json/pending-confirmation.json'

const Confirm = () => {
	const router = useRouter()
	const { PayerID, guid, paymentId } = router.query
	const { showNoti } = useWrap()
	const getStatusPayment = async () => {
		try {
			console.log(PayerID, guid, paymentId)
			// const newPaymentId = paymentId.toString().split('-')[1]
			if (PayerID && guid && paymentId) {
				let Data = new FormData()
				Data.append('PayerID', PayerID.toString())
				Data.append('guid', guid.toString())
				Data.append('paymentId', paymentId.toString())
				await shoppingCartApi.getPaypalStatus(Data)
			}
		} catch (err) {
			showNoti('danger', err.message)
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
							Xác nhận
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Confirm
