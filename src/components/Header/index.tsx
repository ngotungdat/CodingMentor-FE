import React, { useEffect, useState } from 'react'
import { Popover } from 'antd'
import { useWrap } from '~/context/wrap'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UserOutlined,
	LogoutOutlined,
	LoginOutlined,
	FormOutlined,
	RedoOutlined
} from '@ant-design/icons'
import { User } from 'react-feather'
import TitlePageHeader from '../Elements/TitlePageHeader'
import Notification from './notification'
import Cart from './cart'

let countOpen = 0
export default function Header(props: any) {
	const { isOpenMenu, isOpen, funcMenuMobile, openMenuMobile } = props
	const { titlePage, userInformation } = useWrap()

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

	let visibleUser: {
		visible: Boolean
	}

	visibleUser = {
		visible: false
	}

	if (!isOpen) {
		countOpen++
	}

	return (
		<header className={`app-header ${openMenuMobile ? 'mobile' : ''}`}>
			<div className={`app-header-logo ${!isOpen ? 'close-app' : countOpen > 0 ? 'open' : 'open-no-ani'}`}>
				<Link href="/">
					<a href="#">
						<img className="logo-img" src="/images/logo.png" />
					</a>
				</Link>
				<p style={{ display: !isOpen ? 'block' : 'none' }}></p>
			</div>

			<div className={`app-header-inner ${!isOpen && 'close-app'}`}>
				<div className="right">
					<div className="col-button" onClick={() => isOpenMenu()}>
						<div className="box-menu">
							<div className="icon-action">
								{!isOpen ? (
									<div className="main-menu-icon">
										<i className="fa fa-bars" />
									</div>
								) : (
									<div className="main-menu-icon">
										<i className="fa fa-arrow-left" />
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="col-button mobile" onClick={() => funcMenuMobile()}>
						<div className="box-menu">
							<div className="icon-action">
								{!openMenuMobile ? (
									<div className="main-menu-icon">
										<i className="fa fa-bars" />
									</div>
								) : (
									<div className="main-menu-icon">
										<i className="fa fa-arrow-left" />
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="col-title-page">
						<TitlePageHeader title={titlePage} />
					</div>
				</div>

				<div className="col-setting">
					<ul className="col-setting-list">
						{userInformation?.RoleID !== undefined &&
							userInformation?.RoleID !== 1 &&
							userInformation?.RoleID !== 2 &&
							userInformation?.RoleID !== 4 &&
							userInformation?.RoleID !== 5 &&
							userInformation?.RoleID !== 6 &&
							userInformation?.RoleID !== 10 && (
								<li className="notification" style={{ marginRight: -10 }}>
									<Cart />
								</li>
							)}

						<li className="notification">
							<Notification />
						</li>

						<div className="user">
							<Popover content={!userInformation ? contentLogin : contentLogout} trigger="click" title="">
								<div className="user-info">
									{!!userInformation && (
										<div className="user-name-desktop">
											<img className="user-img" src={!!userInformation?.Avatar ? userInformation.Avatar : '/icons/default-avatar.svg'} />

											<div className="user-info">
												<p className="user-name">{userInformation?.FullNameUnicode}</p>
												<p className="user-position">{userInformation?.RoleName}</p>
											</div>
										</div>
									)}

									<div className="user-name-mobile">
										<User />
									</div>
								</div>
							</Popover>
						</div>
					</ul>
				</div>
			</div>
		</header>
	)
}
