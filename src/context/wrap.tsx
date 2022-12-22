import { CheckCircleOutlined, WarningOutlined } from '@ant-design/icons'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { createContext, FC, useContext, useEffect, useState } from 'react'
import OneSignal from 'react-onesignal'
import { toast, ToastContainer } from 'react-toastify'
import { oneSignalAPI, userApi, userInformationApi } from '~/apiBase'

import 'react-toastify/dist/ReactToastify.css'

export type IProps = {
	titlePage: string
	getRouter: any
	getTitlePage: Function
	showNoti: Function
	getDataUser: Function
	userInformation: IUser
	useAllRoles: IRole[]
	useStaffRoles: IRole[]
	pageSize: number
	isAdmin: boolean
	reloadNotification: boolean
	handleReloadNoti: Function
	reloadCart: boolean
	handleReloadCart: Function
	// session: any
	// sessionStatus: 'loading' | 'authenticated' | 'unauthenticated'
}

const WrapContext = createContext<IProps>({
	titlePage: '',
	getRouter: '',
	getTitlePage: () => {},
	showNoti: () => {},
	getDataUser: () => {},
	userInformation: null,
	useAllRoles: null,
	useStaffRoles: null,
	pageSize: 30,
	isAdmin: false,
	reloadNotification: false,
	handleReloadNoti: Function,
	reloadCart: false,
	handleReloadCart: Function
	// session: {},
	// sessionStatus: 'loading'
})

const WrapProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
	// Get path and slug
	const router = useRouter()
	const getRouter = router.pathname
	let path: string = router.pathname

	// const { data: session, status } = useSession()
	const [titlePage, setTitlePage] = useState('')
	const [userInfo, setUserInfo] = useState<IUser>(null)
	const [roles, setRoles] = useState<IRole[]>(null)
	const [staffRoles, setStaffRoles] = useState<IRole[]>(null)
	const [isAdmin, setIsAdmin] = useState(false)
	const [reloadNotification, setReloadNotification] = useState(false)
	const [reloadCart, setReloadCart] = useState(false)

	// Get Title Page
	const getTitlePage = (title) => {
		setTitlePage(title)
	}

	// Show Notification
	const showNoti = (type: string, content: string) => {
		const nodeNoti = () => {
			return (
				<div className={`noti-box`}>
					<div className="noti-box__content">
						<span className="icon">{type == 'danger' ? <WarningOutlined /> : type == 'success' && <CheckCircleOutlined />}</span>
						<span className="text">{content}</span>
					</div>
				</div>
			)
		}

		switch (type) {
			case 'success':
				toast.success(nodeNoti)
				break
			case 'danger':
				toast.error(nodeNoti)
				break
			case 'warning':
				toast.warning(nodeNoti)
				break
			default:
				break
		}
	}

	const getRoles = async (roleType) => {
		try {
			let res = await userInformationApi.getRole(roleType)
			res.status == 200 && roleType == 0 ? setRoles(res.data.data) : setStaffRoles(res.data.data)
			console.log(res.data.data)
		} catch (error) {
			console.log('Lỗi lấy thông tin roles: ', error)
		}
	}

	// Get Data User
	const getDataUser = (data) => {
		data && setUserInfo(data)
	}

	// Check is Admin
	const checkIsAdmin = (data) => {
		let role = data.RoleID
		if (role == 1 || role == 5) {
			setIsAdmin(true)
		}
	}

	// Get New Data Use
	const getNewDataUser = async () => {
		try {
			let res = await userApi.getNew()
			res.status == 200 && (setUserInfo(res.data.data), checkIsAdmin(res.data.data))
		} catch (error) {
			console.log('Lỗi lấy thông tin user: ', error)
		}
	}

	// Handle Reload Notification
	const handleReloadNoti = () => {
		setReloadNotification(!reloadNotification)
	}

	// Handle Reload Card
	const handleReloadCart = () => {
		setReloadCart(!reloadCart)
	}

	const postOnesignalID = async () => {
		try {
			const userId = await OneSignal.getUserId()
			let res = await oneSignalAPI.update(userId)
		} catch (error) {
			console.log('Lỗi lấy thông tin user: ', error)
		}
	}

	const getAllData = () => {
		// if (userInfo) {
		// 	if (userInfo.RoleID === 1) {
		getRoles(0)
		getRoles(1)
		// }
		getNewDataUser()
		postOnesignalID()
		// }
	}

	// useEffect(() => {
	// 	if (path !== '/baochau' && !!session && path.search('signin') < 1) {
	// 		getAllData()
	// 	}
	// }, [session])
	useEffect(() => {
		if (path !== '/baochau' && path.search('signin') < 1 && path.search('course-details') < 1 && path.search('reset-password') < 1) {
			getAllData()
		}
	}, [])

	return (
		<WrapContext.Provider
			value={{
				pageSize: 30,
				titlePage: titlePage,
				getTitlePage,
				getRouter,
				showNoti,
				getDataUser,
				userInformation: userInfo,
				useAllRoles: roles,
				useStaffRoles: staffRoles,
				isAdmin: isAdmin,
				reloadNotification: reloadNotification,
				handleReloadNoti: handleReloadNoti,
				reloadCart: reloadCart,
				handleReloadCart: handleReloadCart
				// session: session,
				// sessionStatus: status
			}}
		>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

			{children}
		</WrapContext.Provider>
	)
}

const useWrap = () => useContext(WrapContext)

export { WrapProvider, useWrap }
