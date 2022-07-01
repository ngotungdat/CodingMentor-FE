import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './LoginForm.module.scss'
import { useRouter } from 'next/router'
import { Spin } from 'antd'
import Link from 'next/link'
import clsx from 'clsx'

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
			<div className={styles.container}>
				<div className={styles.wrapBox}>
					<div className={styles.wrapForm}>
						<form onSubmit={handleSubmit(_Submit)} className={styles.loginForm}>
							<div className={styles.loginFormImg}>
								<img src="/images/logo.png" alt="coding-logo" />
							</div>

							<h6 className={styles.title}>Đăng nhập Coding Mentor</h6>

							<input name="csrfToken" type="hidden" defaultValue={props?.csrfToken} />

							<label className={styles.fcontrol}>Email hoặc tài khoản</label>

							<div className={clsx('form-control-input', styles.inputIcon)}>
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
									placeholder="Email"
								/>
								<img src="/icons/icon-email.svg" className={styles.icon} />
							</div>

							{errors.username && <span className="form-error">Hãy điền tên đăng nhập</span>}

							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
								<label>Mật khẩu</label>
							</div>

							<div className={styles.inputIcon}>
								<input
									name="password"
									type="password"
									defaultValue=""
									{...register('password', { required: true })}
									placeholder="Mật khẩu"
								/>
								<img src="/icons/Lock.png" className={styles.icon} />
							</div>

							{errors?.password && <span className="form-error">Hãy điền mật khẩu</span>}
							{!!router.query?.error && <span className="form-error">{JSON.parse(router.query?.error.toString())?.message}</span>}

							<div className={styles.checkbox} style={{ position: 'relative' }}>
								<input type="checkbox" />
								<label>Ghi nhớ đăng nhập</label>
								<label className={styles.forgetPass} style={{ position: 'absolute', right: 0 }}>
									<a href="/reset-password">Quên mật khẩu?</a>
								</label>
							</div>

							<div className="position-relative">
								<button className="pt-1" type="submit">
									Đăng nhập {loading && <Spin className="loading-login ml-2" />}
								</button>
								<div className="w-100 m-1 text-center color-red fw-bold">{props.error && props.error}</div>
							</div>

							<div className={styles.boxSignup}>
								<span style={{ color: '#000' }}>Chưa có tài khoản?</span>{' '}
								<a href="" onClick={moveToSignUp}>
									Tạo tài khoản mới
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
