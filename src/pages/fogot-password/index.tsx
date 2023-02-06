import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Spin } from 'antd'
import { resetPasswordApi } from '~/apiBase'
import { useWrap } from '~/context/wrap'
import { CheckCircleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import AuthLayout from '~/components/AuthLayout'

const ResetPassword = () => {
	const [loading, setLoading] = useState(false)
	const { showNoti } = useWrap()
	const [isConfirmEmail, setIsConfirmEmail] = useState(true)
	const [valueEmail, setValueEmail] = useState(null)
	const [isSuccess, setIsSucess] = useState(false)
	const router = useRouter()

	const [formConfirm] = Form.useForm()
	const [formEmail] = Form.useForm()

	const resendEmail = (e) => {
		e.preventDefault()
		setIsConfirmEmail(true)
	}

	const onFinish_Email = async (email) => {
		setValueEmail(email.Email)

		setLoading(true)
		try {
			let res = await resetPasswordApi.sendEmail({ UserName: email.Email })

			if (res.status === 200) {
				showNoti('success', 'Gửi Email thành công')
				setIsConfirmEmail(false)
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setLoading(false)
		}
	}

	const onFinish_Update = async (dataConfirm) => {
		dataConfirm.verificationUser = parseInt(dataConfirm.verificationUser)

		setLoading(true)
		try {
			let res = await resetPasswordApi.confirm(dataConfirm)
			if (res.status === 200) {
				showNoti('success', 'Khôi phục thành công')
				setIsSucess(true)
				setTimeout(() => {
					router.push('/auth/signin')
				}, 2000)
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (!isConfirmEmail) {
			formConfirm.setFieldsValue({ mail: valueEmail })
		} else {
			if (valueEmail) {
				formEmail.setFieldsValue({ Email: valueEmail })
			}
		}
	}, [isConfirmEmail])

	return (
		<div className="wrap-reset-form">
			<div className="reset-form">
				<div onClick={() => router.back()} className="btn-back">
					<img src="/icons/arrow-left.svg" />
				</div>

				<h4 className="title">Khôi phục mật khẩu</h4>

				<p className="des mt-2">
					{!isSuccess
						? isConfirmEmail
							? 'Vui lòng gửi email của bạn để lấy mã xác nhận'
							: 'Kiểm tra email của bạn và lấy mã xác nhận để khôi phục mật khẩu'
						: 'Mật khẩu mới đã được gửi về Email của bạn, vui lòng kiểm tra email'}
				</p>
				{isConfirmEmail ? (
					<div className="confirm-email mt-4">
						<Form form={formEmail} name="basic" onFinish={onFinish_Email} layout="vertical">
							<Form.Item label="Email" name="Email" rules={[{ required: true, type: 'email', message: 'Email chưa đúng!' }]}>
								<div className="form-control-input inputIcon">
									<input name="Email" placeholder="Nhập Email" defaultValue="" />
									<img src="/icons/icon-email.svg" className="icon" />
								</div>
							</Form.Item>

							<Form.Item className="mb-0">
								<button type="submit" className="btn btn-primary w-100">
									Gửi mã xác nhận
									{loading && <Spin className="loading-base" />}
								</button>
							</Form.Item>
						</Form>
					</div>
				) : (
					<div className="success-reset mt-3">
						<CheckCircleOutlined />
						<p className="success-text">Đã gửi thông tin xác nhận vào email! </p>
						<p className="move-text">Vui lòng kiểm tra email của bạn!</p>
					</div>
				)}
			</div>
		</div>
	)
}

ResetPassword.layout = AuthLayout

export default ResetPassword
