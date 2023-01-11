import React, { useState } from 'react'
import { Modal, Form, Input } from 'antd'
import { useWrap } from '~/context/wrap'
import { VideoCourseCategoryApi } from '~/apiBase/video-course-store/category'

const FORM_REQUIRED = [{ required: true, message: 'Không được để trống' }]

const CreateCategory = (props) => {
	const { onRefeshCategory, onCancel } = props

	const { showNoti } = useWrap()

	const [form] = Form.useForm()

	const [visible, setVisible] = useState(false)
	const [loading, setLoading] = useState(false)

	const onSubmit = async (e) => {
		setLoading(true)
		try {
			const res = await VideoCourseCategoryApi.add({ ...e, Enable: 'True' })
			if (res.status == 200) {
				setVisible(false)
				!!onRefeshCategory && onRefeshCategory()
				showNoti('success', res.data.message)
				form.resetFields()
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setLoading(false)
		}
	}

	function _cancel() {
		!!onCancel && onCancel()
		setVisible(false)
	}

	return (
		<>
			<button type="button" onClick={() => setVisible(true)} className="btn btn-primary btn-vc-create ml-1">
				<div style={{ marginTop: -2, marginLeft: 1 }}>+</div>
			</button>

			<Modal
				confirmLoading={loading}
				title="Thêm trình độ"
				width={400}
				visible={visible}
				onCancel={_cancel}
				onOk={() => form.submit()}
				okText="Lưu"
				cancelText="Hủy"
			>
				<Form form={form} layout="vertical" onFinish={onSubmit}>
					<div className="col-md-12 col-12">
						<Form.Item name="CategoryName" label="Tên trình độ" rules={FORM_REQUIRED}>
							<Input className="style-input" onChange={(e) => form.setFieldsValue({ CategoryName: e.target.value })} />
						</Form.Item>
					</div>
				</Form>
			</Modal>
		</>
	)
}

export default CreateCategory
