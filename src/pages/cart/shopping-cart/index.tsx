import {
	EllipsisOutlined,
	FormOutlined,
	LoginOutlined,
	LogoutOutlined,
	RedoOutlined,
	SearchOutlined,
	UserOutlined
} from '@ant-design/icons'
import { Avatar, Dropdown, Input, Popover, Skeleton, Tooltip } from 'antd'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import router from 'next/router'
import React, { useEffect, useState } from 'react'
import { shoppingCartApi } from '~/apiBase/shopping-cart/shopping-cart'
import QuantityOfItems from '~/components/Global/Option/shopping-cart/QuantityOfItems'
import { useWrap } from '~/context/wrap'
import { numberWithCommas } from '~/utils/functions'
import DeleteItem from './../../../components/Tables/DeleteItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import _ from '~/appConfig'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Cart from '~/components/Header/cart'
import Notification from '~/components/Header/notification'

const ShoppingCart = () => {
	const { userInformation } = useWrap()
	const [dataUser, setDataUser] = useState<IUser>()
	const [cartItems, setCartItems] = useState<IShoppingCart[]>([])
	const [dropDownVisible, setDropDownVisible] = useState(false)
	const [isLoading, setIsLoading] = useState({ status: '', loading: false })

	const { Search } = Input

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
		var base64Url = token.split('.')[1]
		var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
		var jsonPayload = decodeURIComponent(
			atob(base64)
				.split('')
				.map(function (c) {
					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
				})
				.join('')
		)
		return JSON.parse(jsonPayload)
	}

	const getShoppingCartData = async () => {
		setIsLoading({ status: 'GET_CART_DATA', loading: true })
		try {
			let res = await shoppingCartApi.getAll()
			if (res.status == 200) {
				setCartItems(res.data.data)
			}
		} catch (error) {
		} finally {
			setIsLoading({ status: 'GET_CART_DATA', loading: false })
		}
	}

	const getShoppingCartDataNoLoading = async () => {
		try {
			let res: any = await shoppingCartApi.getAll()
			if (res.status == 200) {
				setCartItems(res.data.data)
			}
		} catch (error) {}
	}

	const deleteItem = async (id) => {
		setIsLoading({ status: 'loading', loading: true })
		try {
			let res = await shoppingCartApi.update({ ID: id, Enable: false })
			if (res.status == 200) {
				getShoppingCartData()
			}
		} catch (error) {
		} finally {
			setIsLoading({ status: 'loading', loading: false })
		}
	}

	const increseItem = async (id, quantity) => {
		setIsLoading({ status: 'CHANGE_QUANTITY', loading: true })
		try {
			let res = await shoppingCartApi.update({ ID: id, Quantity: quantity + 1, Enable: true })
			if (res.status == 200) {
				getShoppingCartDataNoLoading()
			}
		} catch (error) {
		} finally {
			setIsLoading({
				status: 'CHANGE_QUANTITY',
				loading: false
			})
		}
	}

	const decreseItem = async (id, quantity) => {
		setIsLoading({ status: 'CHANGE_QUANTITY', loading: true })
		try {
			let res = await shoppingCartApi.update(quantity == 1 ? { ID: id, Enable: false } : { ID: id, Quantity: quantity - 1, Enable: true })
			if (res.status == 200) {
				getShoppingCartDataNoLoading()
			}
		} catch (error) {
		} finally {
			setIsLoading({ status: 'CHANGE_QUANTITY', loading: false })
		}
	}

	const renderCartItems = () => {
		return (
			<div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
				{cartItems?.map((item, index) => (
					<div className="cart__item" key={index}>
						<div className="cart__item-left">
							<div
								onClick={() =>
									router.push({
										pathname: '/video-course/[slug]',
										query: { slug: item.VideoCourseID, Thum: item.ImageThumbnails, Sell: item.Price }
									})
								}
								style={{ cursor: 'pointer' }}
							>
								<Avatar
									style={{ width: 120, height: 120, borderRadius: 24, padding: 0, margin: 0 }}
									src={item.ImageThumbnails && item.ImageThumbnails.length ? item.ImageThumbnails : '/images/logo-square.png'}
								/>
							</div>

							<div className="cart__item-detail">
								<Tooltip title={item.VideoCourseName}>
									<div className="cart__item-detail-name">
										<p className="limit-text-two-line">{item.VideoCourseName}</p>
									</div>
								</Tooltip>

								<div className="cart__item-detail-expire">
									<p>Hạn sử dụng: {item.ExpiryDays} ngày</p>
								</div>
							</div>
						</div>

						<div className="cart__item-right">
							<div className="cart__item-action">
								<QuantityOfItems item={item} index={index} decreseItem={decreseItem} increseItem={increseItem} />
							</div>

							<div className="price">
								<p className="">{numberWithCommas(item.Price * item.Quantity)} VND</p>
								<p className="">{numberWithCommas(item.OriginalPrice * item.Quantity)} VND</p>
							</div>

							<div className="cart__item-action-mobile">
								<QuantityOfItems item={item} index={index} decreseItem={decreseItem} increseItem={increseItem} />

								<div className="cart__item-remove">
									<DeleteItem onDelete={() => deleteItem(item.ID)} />
								</div>
							</div>

							<div className="cart__item-remove">
								<DeleteItem onDelete={() => deleteItem(item.ID)} />
							</div>
						</div>
					</div>
				))}
				<button
					style={{ display: 'inline-block', width: 210, paddingBottom: 4 }}
					className="btn"
					onClick={() => {
						router.push('/video-course')
					}}
				>
					<img src="/images/plus-icon.png" style={{ marginRight: 8, marginBottom: 4 }} alt="plus" /> Mua thêm sản phẩm
				</button>
			</div>
		)
	}

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

	useEffect(() => {
		getShoppingCartData()
	}, [])

	return (
		<div className="shopping-wrap-all-content">
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

			<div className="shopping-wrap-content">
				<div className="cart-icon-title">
					<img src="/images/buy-cart.png" alt="cart icon" />
					<span className="ml-3">Giỏ hàng</span>
				</div>

				<div className="shopping__cart-body">
					{isLoading.loading && isLoading.status == 'GET_CART_DATA' ? (
						<Skeleton active />
					) : (
						<div className="shopping__cart-content row m-0 p-0">
							<div className="shopping__cart-items">{renderCartItems()}</div>

							<div className="shopping__cart-total">
								<div className="price">
									<div className="price-item">
										<p className="">Tổng cộng: </p>
										<p className="">{numberWithCommas(cartItems?.reduce((a, b) => Number(a) + Number(b.OriginalPrice * b.Quantity), 0))} VND</p>
									</div>

									<div className="price-item">
										<p className="">Giảm: </p>
										<p className="price-red">{numberWithCommas(cartItems?.reduce((a, b) => Number(a) + Number(b.OriginalPrice * b.Quantity), 0) - cartItems?.reduce((a, b) => Number(a) + Number(b.Price * b.Quantity), 0))} VND</p>
									</div>

									<div className="horizontal"></div>

									<div className="price-item">
										<p className="">Thanh toán: </p>
										<p className="price-red">{numberWithCommas(cartItems?.reduce((a, b) => Number(a) + Number(b.Price * b.Quantity), 0))} VND</p>
									</div>

									<Link href="/cart/check-out">
										<button disabled={!!cartItems && cartItems.length == 0 ? true : false} className="btn btn-primary w-100">
											Đi đến thanh toán
										</button>
									</Link>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ShoppingCart
