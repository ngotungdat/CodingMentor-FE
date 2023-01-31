import React, { FC, useState } from 'react'
import Link from 'next/link'
import 'react-circular-progressbar/dist/styles.css'
import { Dropdown, Popover, Progress } from 'antd'
import { useWrap } from '~/context/wrap'
import { EllipsisOutlined, FormOutlined, LoginOutlined, LogoutOutlined, RedoOutlined, UserOutlined } from '@ant-design/icons'
import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

type hProps = {
	params: any
	handleShowDrawer: any
}

const HeaderVideo: FC<hProps> = ({ params, handleShowDrawer }): JSX.Element => {
	const { userInformation } = useWrap()
	const [dropDownVisible, setDropDownVisible] = useState(false)
	const router = useRouter()

	const moveToLogin = () => {
		signIn()
	}

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

	return (
		<div className="row video-header pl-5 pr-5 video-shadow">
			<div className="video-header__video-title">
				<button className="btn" onClick={() => router.back()}>
					<img src="/images/arrow-left.png" alt="arrow" />
				</button>
				<p className="in-1-line course-name">{params.name}</p>
			</div>

			<div className="row p-0 video-header__header-right">
				{/* <div className="progress-group">
					<span className="">Tiến độ {params.complete}</span>
					<Progress className="progress mr-3" strokeColor="#ffffffb3" percent={Number(params.complete?.split('/')[0])} showInfo={false} />
				</div> */}
				<div className="user-group">
					<div className="user">
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
					</div>
				</div>
				<div className="drawer-icon" onClick={() => handleShowDrawer()}>
					<img src="/images/more.png" alt="icon" />
				</div>
			</div>
		</div>
	)
}

export default HeaderVideo
