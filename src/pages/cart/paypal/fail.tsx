import Link from 'next/link'
import React from 'react'
import Lottie from 'react-lottie-player'

import failPaypal from '~/components/json/failed.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Fail = () => {
	return (
		<div className="wrapper-paypal">
			<div className="wrapper-fail-paypal">
				<div className="wrapper-fail-icon">
					<Lottie loop animationData={failPaypal} play className="inner icon-fail-paypal" />
				</div>
				<div className="wrapper-fail-content">
					<h1 className="fail">Thất bại</h1>
					<h1 className="noti">Đơn hàng của bạn chưa được thanh toán</h1>
					<Link href="/cart/shopping-cart">
						<a className="btn btn-fail">
							Quay lại giỏ hàng
							<FontAwesomeIcon className="icon-cart" icon={faCartShopping as IconProp} />
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Fail
