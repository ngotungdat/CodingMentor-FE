import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import styles from './account.module.scss'

function index() {
	const [session, loading] = useSession()
	const router = useRouter()

	if (loading) {
		return <div>Authenticating...</div>
	}

	const handleSignIn = (event: React.SyntheticEvent<any>) => signIn()
	const handleSignOut = (event: React.SyntheticEvent<any>) => signOut()

	const handleClick = (e) => {
		e.preventDefault()
		router.push('/account/register')
	}

	return (
		<div className={styles.wrapAccount}>
			{!session && (
				<>
					<p className={styles.title}>Chưa đăng nhập</p> <br />
					<button onClick={handleSignIn} className={`${styles.btnLogin} ${styles.btn}`}>
						Đăng nhập
					</button>
					<button onClick={handleClick} className={`${styles.btnSignup} ${styles.btn}`}>
						Đăng kí
					</button>
				</>
			)}
			{session && (
				<>
					Đăng nhập bởi {session.user.email} <br />
					<button onClick={handleSignOut} className={`${styles.btnLogin} ${styles.btn}`}>
						Đăng xuất
					</button>
				</>
			)}
		</div>
	)
}

export default index
