import React, { useEffect, useState } from 'react'
import { useWrap } from '~/context/wrap'
import Link from 'next/link'
import TitlePageHeader from '../Elements/TitlePageHeader'
import Cart from './cart'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Popover } from 'antd'
import { FormOutlined, LoginOutlined, LogoutOutlined, RedoOutlined, UserOutlined } from '@ant-design/icons'
import { User } from 'react-feather'
import { parseJwt } from '~/utils/functions'

export default function HeaderNoLogin(props: any) {
	const { titlePage } = useWrap()
	const { data: session } = useSession()
	const [userInformation, setUserInformation] = useState<any>()

	let visibleUser: {
		visible: Boolean
	}

	visibleUser = {
		visible: false
	}

	const moveToLogin = () => {
		signIn()
	}

	useEffect(() => {
		if (!!session) {
			const token = session.accessToken
			const user = parseJwt(token)
			setUserInformation(user)
		}
	}, [session])

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

	return (
		<header className={`app-header app-header-no-login`}>
			<div className={`app-header-logo`}>
				<Link href="#">
					<a href="#">
						<img className="logo-img" src="/images/logo.png" />
					</a>
				</Link>
				<p></p>
			</div>

			<div className={`app-header-inner`}>
				<div className="right">
					<div className="col-title-page">
						<TitlePageHeader title={titlePage} />
					</div>
				</div>

				<div className="col-setting">
					<ul className="col-setting-list">
						{!!session ? (
							<li className="notification" style={{ marginRight: -10 }}>
								<Cart />
							</li>
						) : null}
						<div className="user">
							<Popover placement="bottom" content={!session ? contentLogin : contentLogout} trigger="click" title="">
								<div className="user-info">
									{!!session && !!userInformation ? (
										<div className="user-name-desktop">
											<img className="user-img" src={!!userInformation?.Avatar ? userInformation.Avatar : '/icons/default-avatar.svg'} />

											<div className="user-info">
												<p className="user-name">{userInformation?.FullNameUnicode}</p>
												<p className="user-position">{userInformation?.role}</p>
											</div>
										</div>
									) : (
										<User />
									)}

									{/* <div className="user-name-mobile">
										<User />
									</div> */}
								</div>
							</Popover>
						</div>
					</ul>
				</div>
			</div>
		</header>
	)
}
