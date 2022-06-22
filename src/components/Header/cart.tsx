import { Menu, Dropdown } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ShoppingCart } from 'react-feather'
import { orderProductDetail } from '~/apiBase/product/order-product-detail'
import { shoppingCartApi } from '~/apiBase/shopping-cart/shopping-cart'
import { useWrap } from '~/context/wrap'

const Cart = () => {
	const { reloadNotification } = useWrap()
	const [cartData, setCartData] = useState([])
	const [productCartData, setProductCartData] = useState([])
	const [countNoti, setCountNoti] = useState(0)
	const [countNotiProduct, setCountNotiProduct] = useState(0)

	useEffect(() => {
		getCartData()
		getProductCartData()
	}, [reloadNotification])

	useEffect(() => {
		setCountNoti(cartData.length)
		setCountNotiProduct(productCartData.length)
	}, [cartData, productCartData])

	const getCartData = async () => {
		try {
			const response = await shoppingCartApi.getAll()
			response.status == 200 && setCartData(response.data.data)
		} catch (error) {}
	}

	const getProductCartData = async () => {
		try {
			let res = await orderProductDetail.getByToken()
			res.status === 200 && setProductCartData(res.data.data)
		} catch (error) {}
	}

	return (
		<>
			<Link href={{ pathname: '/cart/shopping-cart' }}>
				<div className="shopping__cart-detail cart-icon d-flex justify-content-center align-items-center">
					<a style={{ textDecoration: 'none' }}>
						<img src="/icons/icon-buy.svg" style={{ width: 24, height: 24 }} />
					</a>
					<span className={countNoti > 0 ? 'count-notification' : 'hide'}>
						<span>{countNoti > 9 ? `9+` : countNoti}</span>
					</span>
				</div>
			</Link>
		</>
	)
}
export default Cart
