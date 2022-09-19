import Link from 'next/link'
import React from 'react'
import Lottie from 'react-lottie-player'

import successPaypal from '~/components/json/success-paypal.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Success = () => {
	return (
		<div className="wrapper-paypal">
			<div className="wrapper-success-paypal">
				<div className="wrapper-success-icon">
					<Lottie loop animationData={successPaypal} play className="inner icon-success-paypal" />
				</div>
				<div className="wrapper-success-content">
					<h1 className="success">Thành công</h1>
					<h1 className="noti">Đơn hàng của bạn đã được thanh toán</h1>
					<Link href="/video-course">
						<a className="btn btn-success">
							Tiếp tục mua hàng
							<FontAwesomeIcon className="icon-cart" icon={faCartShopping as IconProp} />
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Success
