import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from './layout'
import LoadingLayout from './LoadingLayout'

const LayoutBase = ({ children }) => {
	const router = useRouter()
	const { data: session, status } = useSession()

	useEffect(() => {
		if (status == 'loading' || !session) return
		let checkNewUser = localStorage.getItem('isNewUser')
		checkNewUser != undefined && checkNewUser == 'true' && router.push('/change-password')
	}, [status, session])

	if (status == 'loading') {
		return <LoadingLayout />
	}

	if (!session) {
		signIn()
		return <LoadingLayout />
	}

	return <Layout>{children}</Layout>
}

export default LayoutBase
