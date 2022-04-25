import { Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { VideoCourseLevelApi } from '~/apiBase/video-course-store/level'
import { useWrap } from '~/context/wrap'

type Props = {
	typeOfModal: string
	dataItem?: {
		ID: number
		CategoryName: string
		LevelName: string
		CurriculumName: string
	}
	onFetchData: Function
}

const ModalLevelVideoCourse = (props: Props) => {
	const [isLoading, setIsLoading] = useState(false)
	const { typeOfModal, dataItem, onFetchData } = props
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [form] = Form.useForm()
	const { showNoti } = useWrap()

	const handleSubmit = async (data) => {
		setIsLoading(true)
		try {
			let res = await VideoCourseLevelApi.add({
				ID: typeOfModal === 'add' ? null : dataItem.ID,
				LevelName: data.LevelName,
				Enable: true
			})
			if (res.status === 200) {
				showNoti('success', typeOfModal === 'add' ? 'Thêm thành công!' : 'Sửa thành công!')
				onFetchData && onFetchData()
				setIsModalVisible(false)
				form.resetFields()
			}
		} catch (error) {
		} finally {
			setIsLoading(false)
		}
	}
	return (
		<>
			{typeOfModal === 'add' ? (
				<button
					className="btn btn-warning"
					onClick={() => {
						setIsModalVisible(true)
					}}
				>
					Thêm trình độ
				</button>
			) : (
				<button
					type="button"
					className="btn btn-icon edit"
					onClick={() => {
						setIsModalVisible(true)
						form.resetFields()
					}}
				>
					<i className="fas fa-edit" style={{ color: '#34c4a4', fontSize: 16, marginBottom: -1 }}></i>
				</button>
			)}

			<Modal
				visible={isModalVisible}
				footer={null}
				onCancel={() => {
					setIsModalVisible(false)
				}}
				title={typeOfModal === 'add' ? 'Thêm trình độ video' : 'Sửa trình độ video'}
			>
				<Form onFinish={handleSubmit} form={form} layout="vertical">
					<div className="row">
						<div className="col-12">
							<Form.Item
								label="Trình độ video"
								name="LevelName"
								initialValue={dataItem && dataItem.LevelName}
								rules={[{ required: true, message: 'Vui lòng điền đủ thông tin!' }]}
							>
								<Input className="style-input" placeholder="Thêm tên trình độ" />
							</Form.Item>
						</div>
						<div className="col-12">
							<button className="btn btn-primary w-100" type="submit" disabled={isLoading}>
								Xác nhận
							</button>
						</div>
					</div>
				</Form>
			</Modal>
		</>
	)
}

export default ModalLevelVideoCourse
