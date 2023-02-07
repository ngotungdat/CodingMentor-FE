import { instance } from '~/apiBase/instance'

const url = '/api/KeyForgotPassword'
export const resetPasswordApi = {
	// Gửi email
	sendEmail(data) {
		return instance.post(url, data)
	},

	// Xác nhận
	confirm(data) {
		return instance.post('/api/ResetPassword', data)
	}
}
