import React, { useEffect, useState } from 'react'
import { Modal, Form, Input, Select } from 'antd'
import { studentApi } from '~/apiBase'
import { useWrap } from '~/context/wrap'
import { timeZoneApi } from '~/apiBase/timezone'

const CreateCustomer = (props) => {
	const [visible, setVisible] = useState(false)
	const { showNoti } = useWrap()
	const [isLoading, setIsLoading] = useState({
		status: '',
		loading: false
	})
	const { Option } = Select
	const [timezone, setTimezone] = useState([])

	const getAllTimeZone = async () => {
		try {
			const res = await timeZoneApi.getAll()
			if (res.status === 200) {
				const converTimezone = res.data.data.map((timezone) => ({
					value: timezone.ID,
					title: timezone.Name
				}))
				setTimezone(converTimezone)
			}
		} catch (err) {
			showNoti('danger', err.message)
		}
	}
	useEffect(() => {
		getAllTimeZone()
	}, [])
	const [form] = Form.useForm()

	const handleCancel = () => {
		setVisible(false)
	}

	const _onSubmit = async (data) => {
		setIsLoading({ status: 'CREATE_ACC', loading: true })
		try {
			let res = await studentApi.createAccount(data)
			if (res.status == 200) {
				props.fetchDataUser()
				setVisible(false)
				form.resetFields()
				showNoti('success', 'Thêm học viên thành công!')
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setIsLoading({ status: 'CREATE_ACC', loading: false })
		}
	}

	return (
		<>
			<button type="button" className="btn btn-warning" onClick={() => setVisible(true)}>
				Tạo Học Viên
			</button>
			<Modal title="Thêm Học Viên" footer={null} visible={visible} onCancel={handleCancel}>
				<Form form={form} onFinish={_onSubmit} layout="vertical">
					<div className="row">
						<div className="col-12">
							<Form.Item label="Tên Học Viên" name="FullNameUnicode" rules={[{ required: true, message: 'Bạn không được để trống' }]}>
								<Input placeholder="Nhập tên học viên" allowClear size="large" className="style-input" />
							</Form.Item>
						</div>
						<div className="col-12">
							<Form.Item label="Email" name="Email" rules={[{ required: true, message: 'Bạn không được để trống' }]}>
								<Input placeholder="Nhập Email" allowClear size="large" className="style-input" />
							</Form.Item>
						</div>
						<div className="col-12">
							<Form.Item label="Số Điện Thoại" name="Mobile" rules={[{ required: true, message: 'Bạn không được để trống' }]}>
								<Input placeholder="Số điện thoại học viên" allowClear size="large" className="style-input" />
							</Form.Item>
						</div>
						<div className="col-12">
							<Form.Item label="Timezone" name="TimeZoneId" rules={[{ required: true, message: 'Bạn không được để trống' }]}>
								<Select
									className="style-input"
									showSearch
									placeholder="Chọn Timezone"
									optionFilterProp="children"
									onChange={(value) => form.setFieldsValue({ TimeZoneId: value })}
									filterOption={(input, option) => (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())}
								>
									{timezone.map((item) => (
										<Option value={item.value}>{item.title}</Option>
									))}
								</Select>
							</Form.Item>
						</div>

						<div className="col-12">
							<Form.Item label="Mật Khẩu" name="Password" rules={[{ required: true, message: 'Bạn không được để trống' }]}>
								<Input.Password placeholder="Mật Khẩu" allowClear size="large" className="style-input" />
							</Form.Item>
						</div>

						<div className="col-12">
							<button className="btn btn-primary w-100" type="submit" disabled={isLoading.status == 'CREATE_ACC' && isLoading.loading}>
								Lưu
							</button>
						</div>
					</div>
				</Form>
			</Modal>
		</>
	)
}

export default CreateCustomer
