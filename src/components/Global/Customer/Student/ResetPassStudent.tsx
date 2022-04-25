import { RetweetOutlined } from '@ant-design/icons'
import { Modal, Tooltip } from 'antd'
import React, { useState } from 'react'
import { studentApi } from '~/apiBase'
import { useWrap } from '~/context/wrap'

const ResetPassStudent = (props) => {
	const { dataRow } = props
	const { showNoti } = useWrap()
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [loading, setLoading] = useState(false)

	const showModal = () => {
		setIsModalVisible(true)
	}

	const handleOk = () => {
		resetPassword()
	}

	// -------------- RESET PASSWORD ----------------
	const resetPassword = async () => {
		let dataSubmit = {
			UserInformationID: dataRow.UserInformationID,
			Password: '123456'
		}
		setLoading(true)
		try {
			let res = await studentApi.update(dataSubmit)
			if (res.status === 200) {
				showNoti('success', 'Khôi phục thành công')
				setIsModalVisible(false)
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setLoading(false)
		}
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}

	return (
		<>
			<Tooltip title="Khôi phục mật khẩu">
				<button className="btn btn-icon" onClick={showModal}>
					<RetweetOutlined />
				</button>
			</Tooltip>
			<Modal
				okButtonProps={{ loading: loading }}
				title="Khôi phục mật khẩu"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p style={{ fontWeight: 500 }}>Khôi phục mật khẩu cho học viên này?</p>
			</Modal>
		</>
	)
}

export default ResetPassStudent
