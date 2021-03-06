import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './RegisterForm.module.scss'
import { useRouter } from 'next/router'
import { Toaster } from 'react-hot-toast'
import { Form, Spin } from 'antd'
import { userApi } from '~/apiBase'
import { useWrap } from '~/context/wrap'
import { CheckCircleOutlined } from '@ant-design/icons'
import { signIn } from 'next-auth/react'
import clsx from 'clsx'
import { useToggle } from '~/context/useToggle'

type Inputs = {
	text: string
	textRequired: string
}
interface RegisterInputs {
	FullNameUnicode: Inputs
	Email: Inputs
	Mobile: Inputs
	Note: Inputs
}

function RegisterForm() {
	const router = useRouter()
	const [count, setCount] = useState(3)
	const [isAgreed, ToggleAgreed] = useToggle(true)
	const { register, handleSubmit } = useForm<RegisterInputs>()

	const [loading, setLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const { showNoti } = useWrap()

	let timerID

	const _Submit = async (data: any) => {
		if (!isAgreed) return showNoti('danger', 'Bạn chưa đồng ý với điều khoản')
		setLoading(true)

		try {
			let res = await userApi.createAccount(data)
			if (res.status === 200) {
				setIsSuccess(true)
				if (count <= 0) {
					clearInterval(timerID)
				}
				timerID = setInterval(() => {
					setCount(count - 1)
				}, 1000)
				const dataLogin = {
					username: data.Email,
					password: '123456'
				}
				handleLogin(dataLogin)
				localStorage.setItem('isNewUser', 'true')
			} else {
				showNoti('danger', 'Đường truyền mạng đang không ổn định')
			}
		} catch (error) {
			showNoti('danger', error.message)
		}
	}

	const handleLogin = (data) => {
		signIn('credentials-signin', {
			...data,
			callbackUrl: router.query?.callbackUrl ?? '/'
		})
	}

	const moveToSignIn = (e) => {
		e.preventDefault()
		router.push('/auth/signin')
	}

	return (
		<>
			<Toaster position="top-center" />
			<div className={styles.container}>
				<div className={styles.wrapBox}>
					<div className={styles.wrapForm}>
						<Form onFinish={handleSubmit(_Submit)} layout="vertical" className={`${styles.loginForm}`}>
							<div onClick={moveToSignIn} className={styles.btnBack}>
								<img src="/icons/arrow-left.svg" />
							</div>

							{!isSuccess && <h6 className={styles.title}>Tạo tài khoản mới</h6>}

							{!isSuccess ? (
								<>
									<Form.Item label="Tên đầy đủ" name="FullNameUnicode" rules={[{ required: true, message: 'Hãy điền họ và tên' }]}>
										<div className={clsx('form-control-input')}>
											<input
												className="pl-3"
												name="FullNameUnicode"
												placeholder="Nhập họ và tên.."
												defaultValue=""
												{...register('FullNameUnicode', { required: true })}
											/>
										</div>
									</Form.Item>

									<Form.Item
										label=" Email"
										name="Email"
										rules={[
											{ required: true, message: 'Hãy điền email!' },
											{ required: true, type: 'email', message: 'Hãy điền đúng định dạng email!' }
										]}
									>
										<div className={clsx('form-control-input', styles.inputIcon)}>
											<input name="Email" placeholder="Nhập Email" defaultValue="" {...register('Email', { required: true })} />
											<img src="/icons/icon-email.svg" className={styles.icon} />
										</div>
									</Form.Item>

									<Form.Item label=" Số điện thoại" name="Mobile" rules={[{ required: true, message: 'Hãy điền số điện thoại!' }]}>
										<div className={clsx('form-control-input', styles.inputIcon)}>
											<input
												type="number"
												name="Mobile"
												defaultValue=""
												placeholder="Nhập số điện thoại"
												{...register('Mobile', { required: true })}
											/>
											<img src="/icons/phone.svg" className={styles.icon} />
										</div>
									</Form.Item>

									<Form.Item label=" Ghi chú" name="Note" rules={[{ required: false }]}>
										<div className={clsx('form-control-input')}>
											<input
												name="Note"
												className="pl-3"
												defaultValue=""
												{...register('Note', { required: false })}
												placeholder="Ghi chú"
											/>
										</div>
									</Form.Item>

									<div className={styles.checkbox}>
										<input type="checkbox" checked={isAgreed} onChange={ToggleAgreed} />
										<label>Đồng ý với các điều khoản của chúng tôi</label>
									</div>

									<div className={styles.boxSubmit}>
										<button className="pt-1" type="submit">
											Tạo tài khoản mới {loading && <Spin className="loading-login ml-2" style={{ marginTop: 5 }} />}
										</button>
									</div>

									<div className={styles.boxSignup}>
										<span style={{ color: '#000' }}>Bạn đã có tài khoản?</span>{' '}
										<a href="" onClick={moveToSignIn}>
											Đăng nhập
										</a>
									</div>
								</>
							) : (
								<div className="success-reset mt-3">
									<CheckCircleOutlined />
									<p className="success-text">Tạo tài khoản thành công! </p>
									<p className="move-text">
										Hệ thống sẽ tự đăng nhập sau <span className="font-weight-primary">{count}s</span>..
									</p>
								</div>
							)}
						</Form>
					</div>
				</div>
			</div>
		</>
	)
}

export default RegisterForm
