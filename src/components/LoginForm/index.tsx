import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './LoginForm.module.scss'
import { useRouter } from 'next/router'
import { Spin } from 'antd'
import Link from 'next/link'

type Inputs = {
	text: string
	textRequired: string
}

interface LoginInputs {
	username: Inputs
	password: Inputs
}

function index(props: any) {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginInputs>()

	const router = useRouter()
	const [loading, setLoading] = useState(false)

	const _Submit = async (data: any) => {
		setLoading(true)
		props?.onSubmit(data)
	}

	const moveToSignUp = (e: any) => {
		e.preventDefault()
		router.push('/account/register')
	}

	// RENDER
	return (
		<>
			<div className={styles.container} style={{ marginTop: 100 }}>
				<div className={styles.wrapBox}>
					<div className={styles.wrapForm}>
						<form onSubmit={handleSubmit(_Submit)} className={styles.loginForm}>
							<div className={styles.loginFormImg}>
								<img src="/images/logo.jpg" alt="" />
							</div>
							<h6 className={styles.title}>Đăng nhập</h6>
							<input name="csrfToken" type="hidden" defaultValue={props?.csrfToken} />
							<label className={styles.fcontrol}>Tên đăng nhập</label>
							<input
								name="username"
								defaultValue=""
								{...register('username', {
									required: true,
									validate: (value: any) => {
										return !!value.trim()
									},
									setValueAs: (value) => value.trim()
								})}
								placeholder="Nhập tên đăng nhập"
							/>
							{errors.username && <span className="form-error">Hãy điền tên đăng nhập</span>}
							<label className={styles.fcontrol}>Mật khẩu</label>
							<input
								name="password"
								type="password"
								defaultValue=""
								{...register('password', { required: true })}
								placeholder="Nhập mật khẩu"
							/>
							{errors.password && <span className="form-error">Hãy điền mật khẩu</span>}
							{!!router.query?.error && router.query?.error != 'undefined' && (
								<span className="form-error">{JSON.parse(router.query?.error.toString())?.message}</span>
							)}
							<div className="mt-2 d-flex justify-content-end">
								<div className={styles.forgetPass}>
									<Link href="/reset-password">
										<a>Quên mật khẩu?</a>
									</Link>
								</div>
							</div>
							<div className="position-relative">
								<input type="submit" value={'Đăng nhập'} />
								{loading && <Spin className="loading-login" />}
								<div className="w-100 m-1 text-center color-red fw-bold">{props.error && props.error}</div>
							</div>
							<div className={styles.boxSignup}>
								Bạn chưa có tài khoản?{' '}
								<a href="" onClick={moveToSignUp}>
									Đăng kí
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default index
