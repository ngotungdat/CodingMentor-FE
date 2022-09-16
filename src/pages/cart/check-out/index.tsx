import { EllipsisOutlined, FormOutlined, LockOutlined, LoginOutlined, LogoutOutlined, RedoOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input, Popover, Radio, Skeleton, Spin, Select, Card, Button, Avatar, Modal, List, Dropdown } from 'antd'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { paymentConfig } from '~/apiBase/shopping-cart/payment-config'
import { shoppingCartApi } from '~/apiBase/shopping-cart/shopping-cart'
import { numberWithCommas, parseToMoney } from '~/utils/functions'
import { useWrap } from './../../../context/wrap'
import { discountApi } from './../../../apiBase/options/discount'
import RenderItemTicket from './render-item-ticket'
import Cart from '~/components/Header/cart'
import Notification from '~/components/Header/notification'
import PaypalButton from '~/components/Paypal'

const CheckOut = () => {
	const { showNoti } = useWrap()
	const router = useRouter()
	const [cartItems, setCartItems] = useState<IShoppingCart[]>()
	const [paymentMethods, setPaymentMethods] = useState([])
	const [method, setMethod] = useState<{ PaymentCode: string; transferpayment: string }>({ PaymentCode: '', transferpayment: '' })
	const [discount, setDiscount] = useState([])
	const [promo, setPromo] = useState(null)
	const [isLoading, setIsLoading] = useState({ status: '', loading: false })
	const { userInformation, pageSize } = useWrap()
	const [form] = Form.useForm()
	const [dataOrder, setDataOrder] = useState<{ Note: string; OrderDetailModels: Array<any>; OrderID: number; TotalPayment: number }>(null)
	const [cartID, setCartID] = useState(null)

	const [showDiscount, setShowDiscount] = useState(false)
	const [discountSelected, setDiscountSelected] = useState<any>('')

	const [dropDownVisible, setDropDownVisible] = useState(false)

	const [checkedMethodIndex, setCheckedMethodIndex] = useState(null)

	const renderPaymentMethodDetail = () => {
		const isOnePay = () => {
			if (method.PaymentCode.toLowerCase().includes('onepay') || method.PaymentCode.toLowerCase().includes('one-pay')) {
				return true
			} else {
				return false
			}
		}

		const isMomo = () => {
			if (method.PaymentCode.toLowerCase().includes('momo') || method.PaymentCode.toLowerCase().includes('mo-mo')) {
				return true
			} else {
				return false
			}
		}

		const isPaypal = () => {
			if (method.PaymentCode.toLowerCase().includes('paypal') || method.PaymentCode.toLowerCase().includes('pay-pal')) {
				return true
			} else {
				return false
			}
		}

		return (
			<>
				{isMomo() && (
					<div className="paypal-info">
						<div className="content">Vui lòng nhấn vào nút thanh toán để chuyển đến trang thanh toán Momo</div>
						<div className="row m-0 p-0 ml-2">
							<LockOutlined className="lock" />
							<div className="ml-2 text">Bảo mật</div>
						</div>
					</div>
				)}

				{isPaypal() && (
					<div className="paypal-info">
						<div className="content">Vui lòng nhấn vào nút thanh toán để chuyển đến trang thanh toán Paypal</div>
						<div className="row m-0 p-0 ml-2">
							<LockOutlined className="lock" />
							<div className="ml-2 text">Bảo mật</div>
						</div>
					</div>
				)}

				{isOnePay() && (
					<div className="paypal-info">
						<div className="content">Vui lòng nhấn vào nút thanh toán để chuyển đến trang thanh toán Onepay</div>
						<div className="row m-0 p-0 ml-2">
							<LockOutlined className="lock" />
							<div className="ml-2 text">Bảo mật</div>
						</div>
					</div>
				)}

				{method.PaymentCode == 'transferpayment' && (
					<div className="paypal-info">
						<div>{ReactHtmlParser(paymentMethods.filter((item) => item.transferpayment.length > 0)[0].transferpayment)}</div>
					</div>
				)}

				{method.PaymentCode.toLowerCase().includes('cash') && (
					<div className="paypal-info">
						<div className="content">Quý khách vui lòng đến trung tâm đã đăng kí để hoàn tất thanh toán</div>
						<div className="row m-0 p-0 ml-2">
							<LockOutlined className="lock" />
							<div className="ml-2 text">Bảo mật</div>
						</div>
					</div>
				)}
			</>
		)
	}

	const handleCheckout = async () => {
		setIsLoading({ status: 'CHECKOUT', loading: true })
		let res = null

		console.log('method: ', method)
		if (method.PaymentCode !== '') {
			try {
				switch (method.PaymentCode) {
					case 'momo':
						res = await shoppingCartApi.checkoutMomo({ OrderID: dataOrder.OrderID, type: method.PaymentCode })
						break
					case 'momo_test':
						res = await shoppingCartApi.checkoutMomo({ OrderID: dataOrder.OrderID, type: method.PaymentCode })
						break
					case 'paypal':
						console.log('data: ', dataOrder)
						res = await shoppingCartApi.checkoutPaypal({ OrderID: dataOrder.OrderID, type: method.PaymentCode })
						break
					case 'paypal_test':
						res = await shoppingCartApi.checkoutPaypal({ OrderID: dataOrder.OrderID, type: method.PaymentCode })
						break
					case 'onepayinternational':
						res = await shoppingCartApi.checkoutPaymentWithOnePay({ OrderID: dataOrder.OrderID, type: method.PaymentCode })
						break
					case 'onepayinternational_test':
						res = await shoppingCartApi.checkoutPaymentWithOnePay({ OrderID: dataOrder.OrderID, type: method.PaymentCode })
						break
					case 'onepaydomestic':
						res = await shoppingCartApi.checkoutPaymentWithOnePay({ OrderID: dataOrder.OrderID, type: method.PaymentCode })
						break
					case 'cashpayment':
						res = await shoppingCartApi.checkoutCash({ cartID: cartID, type: method.PaymentCode })
						break
					case 'transferpayment':
						res = await shoppingCartApi.checkoutTransferPayment({ cartID: cartID, type: method.PaymentCode })
						break
					default:
						break
				}

				if (res.status == 200) {
					switch (method.PaymentCode) {
						case 'momo':
							router.push(res.data.payUrl)
							break
						case 'momo_test':
							router.push(res.data.payUrl)
							break
						case 'paypal':
							router.push(res.data.payUrl)
							break
						case 'paypal_test':
							router.push(res.data.payUrl)
							break
						case 'onepayinternational':
							router.push(res.data.payUrl)
							break
						case 'onepayinternational_test':
							router.push(res.data.payUrl)
							break
						case 'onepaydomestic':
							router.push(res.data.payUrl)
							break
						case 'onepaydomestic_test':
							router.push(res.data.payUrl)
							break
						case 'cashpayment':
							router.push({
								pathname: '/cart/success',
								query: { type: 'cashpayment' }
							})
							break
						case 'transferpayment':
							router.push({
								pathname: '/cart/success',
								query: { type: 'transferpayment' }
							})
							break
						default:
							break
					}
				}
			} catch (error) {
				showNoti('danger', error.message)
			} finally {
				setIsLoading({
					status: 'CHECKOUT',
					loading: false
				})
			}
		} else {
			showNoti('danger', 'Vui lòng chọn phương thức thanh toán')
			setIsLoading({
				status: 'CHECKOUT',
				loading: false
			})
		}
	}

	const getShoppingCartData = async () => {
		setIsLoading({ status: 'loading', loading: true })
		try {
			let res: any = await shoppingCartApi.getAll()
			if (res.status == 200) {
				setCartItems(res.data.data)
				getOrderID(res.data.cartId)
				setCartID(res.data.cartId)
			}
			if (res.status == 204) {
				setCartItems([])
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading({ status: 'loading', loading: false })
		}
	}

	const renderCartItems = () => {
		return cartItems?.map((item, index) => (
			<div className="course-item" key={index}>
				<div className="block-one">
					<Link
						href={{
							pathname: '/video-course/[slug]',
							query: { slug: item.VideoCourseID, Thum: item.ImageThumbnails, Sell: item.Price }
						}}
					>
						<img
							className="avatar"
							src={item.ImageThumbnails.length ? item.ImageThumbnails : '/images/logo-thumnail.jpg'}
							alt="img course"
						/>
					</Link>
					<div className="course-item-name">
						<p>{item.VideoCourseName}</p>
						<p>Hạn sử dụng: {item.ExpiryDays}</p>
					</div>
				</div>

				<div className="block-two">
					<div className="course-item-name-mobile">
						<p>{item.VideoCourseName}</p>
						<p>Hạn sử dụng: {item.ExpiryDays}</p>
					</div>
					<span className="quantity">{item.Quantity}</span>
					<span className="">{numberWithCommas(item.Price * item.Quantity)} </span>
				</div>
			</div>
		))
	}

	const getDiscount = async () => {
		try {
			let res = await discountApi.getSuggest(dataOrder.OrderID)
			res.status === 200 && setDiscount(res.data.data)
		} catch (error) {
			console.log(error)
		}
	}

	const moveToLogin = () => {
		signIn()
	}

	const contentLogout = (
		<ul className="user-function">
			<li>
				<Link href="/profile">
					<a href="">
						<span className="icon">
							<UserOutlined />
						</span>
						<span className="function-name">Trang cá nhân</span>
					</a>
				</Link>
			</li>
			<li>
				<Link href="/change-password">
					<a href="#">
						<span className="icon inbox">
							<RedoOutlined />
						</span>
						<span className="function-name">Đổi mật khẩu</span>
					</a>
				</Link>
			</li>
			<li>
				<a href="#" onClick={() => (signOut(), localStorage.removeItem('dataUserEchinese'))}>
					<span className="icon logout">
						<LogoutOutlined />
					</span>
					<span className="function-name">Log out</span>
				</a>
			</li>
		</ul>
	)

	const contentLogin = (
		<ul className="user-function">
			<li>
				<a href="#" onClick={moveToLogin}>
					<span className="icon">
						<LoginOutlined />
					</span>
					<span className="function-name">Đăng nhập</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span className="icon inbox">
						<FormOutlined />
					</span>
					<span className="function-name">Đăng kí</span>
				</a>
			</li>
		</ul>
	)

	function parseJwt(token) {
		let base64Url = token.split('.')[1]
		let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
		let jsonPayload = decodeURIComponent(
			atob(base64)
				.split('')
				.map(function (c) {
					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
				})
				.join('')
		)
		return JSON.parse(jsonPayload)
	}

	const applyDiscount = async (param: any) => {
		try {
			let res = await shoppingCartApi.applyDiscount({ OrderID: dataOrder.OrderID, DiscountCode: param?.DiscountCode })
			if (res.status == 200) {
				showNoti('success', 'Thêm mã khuyến mãi thành công!')
				setShowDiscount(false)
				setPromo(res.data.data)
				setDiscountSelected(param)
			}
		} catch (error) {
			setPromo(undefined)
			setDiscountSelected(undefined)
			showNoti('danger', error.message)
		}
	}

	const getPaymentMethod = async () => {
		setIsLoading({ status: 'GET_ALL', loading: true })
		try {
			let res = await paymentConfig.getAll()
			if (res.status == 200) {
				setPaymentMethods(res.data.data)
				// setMethod({ ...method, PaymentCode: res.data.data[0].PaymentCode })
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading({ status: 'GET_ALL', loading: false })
		}
	}

	const getOrderID = async (cartId) => {
		try {
			let res = await shoppingCartApi.getOrderID({ cartId: cartId })
			res.status == 200 && setDataOrder(res.data.data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getShoppingCartData()
		getPaymentMethod()
	}, [])

	useEffect(() => {
		if (showDiscount) {
			getDiscount()
		}
	}, [showDiscount])

	const onChangeRadio = (event) => {
		setMethod({ PaymentCode: event.target.value, transferpayment: '' })
	}

	const _changeDiscount = (param: any) => {
		applyDiscount(param)
	}

	const [inputDiscount, setInputDiscount] = useState<string>('')
	console.log('🚀 ~ file: index.tsx ~ line 396 ~ CheckOut ~ inputDiscount', inputDiscount)

	const menuDropdown = () => {
		return (
			<>
				<div className="menu__dropdown d-inline-block d-md-none" style={{ width: 162 }}>
					<div className="d-inline-block d-md-none ">
						<div className="user-wrap">
							<div className="user-info">
								{!!userInformation ? (
									<div className="user-wrap">
										<div className="user-img">
											<img src={userInformation?.Avatar ? userInformation.Avatar : '/images/icons/UserUnknown.svg'} alt="" />
										</div>
										<div className="user-info">
											<p className="user-name">{userInformation?.FullNameUnicode}</p>
											<p className="user-position">{userInformation?.RoleName}</p>
										</div>
									</div>
								) : (
									<p>Tài khoản</p>
								)}
							</div>
						</div>

						<hr />

						{!!userInformation ? (
							<ul className="user-function">
								<li>
									<Link href="/profile">
										<a href="">
											<span className="icon">
												<UserOutlined />
											</span>
											<span className="function-name">Trang cá nhân</span>
										</a>
									</Link>
								</li>
								<li>
									<Link href="/change-password">
										<a href="#">
											<span className="icon inbox">
												<RedoOutlined />
											</span>
											<span className="function-name">Đổi mật khẩu</span>
										</a>
									</Link>
								</li>
								<li>
									<a href="#" onClick={() => (signOut(), localStorage.removeItem('dataUserEchinese'))}>
										<span className="icon logout">
											<LogoutOutlined />
										</span>
										<span className="function-name">Log out</span>
									</a>
								</li>
							</ul>
						) : (
							<ul className="user-function">
								<li>
									<a href="#" onClick={moveToLogin}>
										<span className="icon">
											<LoginOutlined />
										</span>
										<span className="function-name">Đăng nhập</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span className="icon inbox">
											<FormOutlined />
										</span>
										<span className="function-name">Đăng kí</span>
									</a>
								</li>
							</ul>
						)}
						{/* <Popover content={!userInformation ? contentLogin : contentLogout} trigger="click" title="">
						</Popover> */}
					</div>
				</div>
			</>
		)
	}

	const hanleCheckMethod = (index, PaymentCode) => {
		setCheckedMethodIndex(index)
		setMethod({ PaymentCode: PaymentCode, transferpayment: '' })
	}

	return (
		<div style={{ backgroundColor: '#fff' }}>
			<header>
				<div className="shopping__cart-header justify-content-between align-items-center row">
					<div className="header__logo col-4 col-md-3">
						<Link href="/">
							<a href="#">
								<img className="logo-img" src="/images/logo.png" alt="logo branch"></img>
							</a>
						</Link>
					</div>

					<div className="header__profile col-8 col-md-8">
						<div className="col-setting">
							<ul className="col-setting-list">
								<li className="notification cart">
									<Cart />
								</li>
								<li className="notification">
									<Notification />
								</li>
								<li className="vertical"></li>
								<li className="user">
									<div className="d-inline-block d-md-none  w-25">
										<Dropdown overlay={menuDropdown} trigger={['click']} visible={dropDownVisible}>
											<a
												className="ant-dropdown-link"
												onClick={(e) => {
													e.preventDefault()
													setDropDownVisible(!dropDownVisible)
												}}
											>
												<EllipsisOutlined />
											</a>
										</Dropdown>
									</div>

									<div className="d-none d-md-inline-block ">
										<Popover content={!userInformation ? contentLogin : contentLogout} trigger="click" title="">
											<div className="user-wrap">
												<div className="user-info">
													{!!userInformation ? (
														<div className="user-wrap">
															<div className="user-img">
																<img src={userInformation?.Avatar ? userInformation.Avatar : '/images/icons/UserUnknown.svg'} alt="" />
															</div>
															<div className="user-info">
																<p className="user-name">{userInformation?.FullNameUnicode}</p>
																<p className="user-position">{userInformation?.RoleName}</p>
															</div>
														</div>
													) : (
														<p>Tài khoản</p>
													)}
												</div>
											</div>
										</Popover>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>

			<div className="checkout">
				<div className="cart-icon-title">
					<img src="/images/buy-cart.png" alt="cart icon" />
					<span className="ml-3">Thanh toán</span>
				</div>

				<div className="checkout-wrap-content">
					<div className="content mb-4">
						<div className="card">
							{paymentMethods &&
								paymentMethods.map((item, index) => {
									return (
										<div
											className={`payment-card type-checkout ${checkedMethodIndex == index ? 'checked' : ''}`}
											key={index}
											onClick={() => {
												hanleCheckMethod(index, item.PaymentCode)
											}}
										>
											<div className="payment-card-left">
												<img src={item.PaymentLogo} alt="img branch cc"></img>
												<p className="mb-0">{item.PaymentName}</p>
											</div>

											<div className="payment-card-right">
												{checkedMethodIndex == index && <img src="/images/checked-icon.png" alt="icon checked"></img>}
											</div>
										</div>
									)
								})}

							<div className="horizontal"></div>

							<div className="order-detail">
								<div className="course-item">
									<div className="block-one">
										<p>Tên khóa học</p>
									</div>

									<div className="block-two">
										<span>Số lượng</span>
										<span>Thành giá</span>
									</div>
								</div>
								{isLoading.loading ? <Skeleton active /> : renderCartItems()}
							</div>

							<Link href="/cart/shopping-cart">
								<a className="cancel-payment">Hủy thanh toán</a>
							</Link>
						</div>
					</div>

					<div className="summary content">
						<div className="card">
							<h4>Mã giảm giá:</h4>

							<div className="discount-code">
								<Input
									placeholder="Nhập mã khuyến mãi..."
									prefix={<img src="/images/discount-icon.png" style={{ width: 30, height: 30 }} />}
									onChange={(e) => setInputDiscount(e.target.value)}
								/>
								{inputDiscount.length > 0 && (
									<button className="btn btn-dark" onClick={() => _changeDiscount({ DiscountCode: inputDiscount })}>
										Áp dụng
									</button>
								)}
							</div>

							<hr />

							<h4>Tổng thanh toán</h4>
							<div className="row price-pre">
								<div className="col-6">
									<h6>Giá gốc</h6>
								</div>
								<p className="col-6" style={{ textAlign: 'right' }}>
									{parseToMoney(dataOrder?.TotalPayment)}
								</p>
							</div>

							{!!promo && (
								<div className="row summary__price price-pre">
									<div className="col-6">
										<h6>Khuyến mãi</h6>
									</div>
									<p className="col-6" style={{ textAlign: 'right' }}>
										- {parseToMoney(promo.DiscountPrice)}
									</p>
								</div>
							)}

							<hr />

							<div className="row price-after">
								<h6 className="col-6">Tổng cộng:</h6>
								<p className="col-6" style={{ textAlign: 'right' }}>
									{!!promo?.DiscountPrice
										? parseToMoney(dataOrder?.TotalPayment - promo?.DiscountPrice)
										: parseToMoney(dataOrder?.TotalPayment)}{' '}
								</p>
							</div>
							{/* {method.PaymentCode === 'paypal' ? (
								<PaypalButton dataOrder={dataOrder} />
							) : ( */}
							<button className="btn btn-primary w-100" onClick={handleCheckout}>
								Thanh toán
								{isLoading.status == 'CHECKOUT' && isLoading.loading && <Spin className="loading-base" />}
							</button>
							{/* )} */}
						</div>
					</div>
				</div>
			</div>

			<>
				<Modal
					className="custom-scroll-bar"
					title="Khuyến mãi"
					centered
					visible={showDiscount}
					onCancel={() => setShowDiscount(false)}
					footer={null}
				>
					<div className="scrollable w-discount">
						<div className="input-discount row-center">
							<Input className="style-input" placeholder="Nhập mã khuyến mãi" onChange={(e) => setInputDiscount(e.target.value)} />
							<Button onClick={() => _changeDiscount({ DiscountCode: inputDiscount })} className="btn btn-primary ml-3">
								Áp dụng
							</Button>
						</div>
						<List
							itemLayout="horizontal"
							dataSource={discount}
							renderItem={(item) => (
								<RenderItemTicket
									Total={dataOrder?.TotalPayment}
									onClick={(item: any) => _changeDiscount(item)}
									item={item}
									selected={discountSelected}
								/>
							)}
						/>
					</div>
				</Modal>
			</>
		</div>
	)
}

export default CheckOut
