import React, { useState } from 'react'
import { Modal, Form, Input, Tooltip } from 'antd'
import { useWrap } from '~/context/wrap'
import { VideoCuorseTag } from '~/apiBase/video-course-store/level'

const FORM_REQUIRED = [{ required: true, message: 'Không được để trống' }]

const CreateTag = (props) => {
	const { onRefeshTags, onCancel } = props

	const { showNoti } = useWrap()

	const [form] = Form.useForm()

	const [visible, setVisible] = useState(false)
	const [loading, setLoading] = useState(false)

	const onSubmit = async (e) => {
		setLoading(true)
		try {
			const res = await VideoCuorseTag.add({ ...e })
			if (res.status == 200) {
				showNoti('success', 'Thêm thành công')
				onRefeshTags()
				form.resetFields()
				setVisible(false)
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

	// RENDER
	return (
		<>
			<button type="button" onClick={() => setVisible(true)} className="btn btn-primary btn-vc-create ml-1">
				<div style={{ marginTop: -2, marginLeft: 1 }}>+</div>
			</button>

			<Modal
				confirmLoading={loading}
				title="Thêm từ khóa tìm kiếm"
				width={400}
				visible={visible}
				onCancel={_cancel}
				onOk={() => form.submit()}
				okText="Lưu"
				cancelText="Hủy"
			>
				<Form form={form} layout="vertical" onFinish={onSubmit}>
					<div className="col-md-12 col-12">
						<Form.Item name="Name" label="Từ khóa tìm kiếm mới" rules={FORM_REQUIRED}>
							<Input className="style-input" onChange={(e) => form.setFieldsValue({ Name: e.target.value })} />
						</Form.Item>
					</div>
				</Form>
			</Modal>
		</>
	)
}

export default CreateTag
