import React, { useState } from 'react'
import Router from 'next/router'
// import { accountApi } from '~/api/user'
import { Form, Input, Spin } from 'antd'
import AuthLayout from '~/components/AuthLayout'
import { useWrap } from '~/context/wrap'
import { resetPasswordApi } from '~/apiBase'

function ResetPasswordPage() {
	const [form] = Form.useForm()

	const { showNoti } = useWrap()

	const [textError, setTextError] = useState('')
	const [loading, setLoading] = useState(false)

	const postForgot = async (params) => {
		setLoading(true)
		try {
			const response = await resetPasswordApi.confirm(params)
			if (response.status === 200) {
				showNoti('success', 'Thành công, vui lòng đăng nhập!')
				Router.replace('/auth/signin')
			}
		} catch (error) {
			showNoti('error', error?.message)
			setTextError(error?.message)
		} finally {
			setLoading(false)
		}
	}

	function _submit(params) {
		const SUBMIT_DATA = { ...params, Key: Router.query?.key }
		console.log('SUBMIT DATA: ', SUBMIT_DATA)
		postForgot(SUBMIT_DATA)
	}

	return (
		<>
			<div
				className="w-full scrollable wrap-reset-form"
				style={{ height: '100vh', alignItems: 'center', display: 'flex', justifyContent: 'center' }}
			>
				<Form form={form} onFinish={_submit} style={{ maxWidth: 400, minWidth: 350 }}>
					<img className="logo-register" src="/images/logo-primary.png" alt="" />

					<h6 className="mt-5 mb-3" style={{ fontSize: 32, textAlign: 'center', color: '#c4203b' }}>
						Lấy lại mật khẩu
					</h6>

					<label style={{ color: '#333', fontWeight: 600 }}>Mật khẩu mới</label>
					<Form.Item name="NewPassword" rules={[{ required: true, message: 'Bạn không được để trống' }]}>
						<Input.Password
							className="input"
							type="password"
							prefix={<i className="fa fa-lock" aria-hidden="true" style={{ color: '#c4203b', marginRight: 8 }} />}
							placeholder="Nhập mật khẩu"
							style={{ borderRadius: 6 }}
						/>
					</Form.Item>

					<label style={{ color: '#333', fontWeight: 600 }}>Nhập lại mật khẩu</label>
					<Form.Item name="ConfirmNewPassword" rules={[{ required: true, message: 'Bạn không được để trống' }]}>
						<Input.Password
							className="input"
							type="password"
							prefix={<i className="fa fa-lock" aria-hidden="true" style={{ color: '#c4203b', marginRight: 8 }} />}
							placeholder="Nhập lại mật khẩu"
							style={{ borderRadius: 6 }}
						/>
					</Form.Item>

					{!!textError && <div style={{ color: 'red', marginBottom: 16 }}>{textError}</div>}

					<button disabled={loading} className="btn btn-primary w-100" type="submit">
						Gửi thông tin {loading && <Spin className="loading-white" />}
					</button>

					<div className="mt-4 register" style={{ fontSize: 16, textAlign: 'center' }}>
						Quay lại trang{' '}
						<a href="/login" style={{ color: 'blue' }}>
							Đăng nhập
						</a>
					</div>
				</Form>
			</div>
		</>
	)
}

ResetPasswordPage.layout = AuthLayout
export default ResetPasswordPage
