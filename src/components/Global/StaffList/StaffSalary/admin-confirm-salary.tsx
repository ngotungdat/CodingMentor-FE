import { Form, Input, InputNumber, Modal, Select, Spin, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { staffSalaryApi } from '~/apiBase/staff-manage/staff-salary'
import { useWrap } from '~/context/wrap'
import { numberWithCommas, parsePriceStrToNumber } from '~/utils/functions'

const ConfirmForm = ({ isLoading, record, userInformationID, setParams, params }) => {
	const { Option } = Select
	const [isVisible, setIsVisible] = useState(false)
	const [form] = Form.useForm()
	const { showNoti } = useWrap()
	const [submitLoading, setSubmitLoading] = useState({ type: '', loading: false })
	const [errorMess, setErrorMess] = useState({ AdvanceSalary: '', CountOff: '', Bonus: '', BtnDisable: true })
	const { TextArea } = Input

	const [dataForm, setDataForm] = useState({
		ID: null,
		AdvanceSalary: null,
		Bonus: null,
		NoteBonus: null,
		isClosing: null, //true- chốt lương (khi chốt lương thì mặc định status là 3)
		StatusID: null, //4-Đã xác nhận
		CountOff: null,
		isDonePaid: null //true-thanh toán lương (khi thanh toán trang thái là 5)
	})

	useEffect(() => {
		setDataForm({
			ID: record.ID,
			AdvanceSalary: record.AdvanceSalary,
			Bonus: record.Bonus,
			CountOff: record.CountOff,
			NoteBonus: record.NoteBonus,
			isClosing: true, //true- chốt lương (khi chốt lương thì mặc định status là 3)
			StatusID: record.StatusID, //4-Đã xác nhận
			isDonePaid: record.isDonePaid //true-thanh toán lương (khi thanh toán trang thái là 5)
		})
	}, [record])

	const _onSubmit = async (value) => {
		setSubmitLoading({ type: 'UPLOADING', loading: true })
		try {
			let res = await staffSalaryApi.update({ ...dataForm })
			if (res.status == 200) {
				form.resetFields()
				params && setParams({ ...params })
				setIsVisible(false)
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setSubmitLoading({ type: 'UPLOADING', loading: false })
			console.log(dataForm)
		}
	}

	return (
		<>
			<button
				className="btn btn-icon edit"
				onClick={() => {
					setIsVisible(true)
				}}
			>
				<Tooltip title="Cập nhật lương">
					<i className="fas fa-edit" style={{ color: '#34c4a4', fontSize: 16, marginBottom: -1 }}></i>
				</Tooltip>
			</button>

			<Modal title={'Cập nhật lương'} onCancel={() => setIsVisible(false)} visible={isVisible} footer={false}>
				<Form form={form} layout="vertical" onFinish={_onSubmit}>
					<div className="row">
						<>
							<div className="col-12">
								<Form.Item label="Trừ tạm ứng" name="AdvanceSalary">
									<InputNumber
										placeholder=""
										className="style-input"
										style={{ borderRadius: 5 }}
										formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
										precision={2}
										onChange={(value) => setDataForm({ ...dataForm, AdvanceSalary: value })}
										value={numberWithCommas(dataForm.AdvanceSalary)}
										defaultValue={numberWithCommas(dataForm.AdvanceSalary)}
									/>
									<p className="font-weight-primary">{errorMess.AdvanceSalary}</p>
								</Form.Item>
							</div>
							<div className="col-12">
								<Form.Item label="Thưởng" name="Bonus">
									<InputNumber
										placeholder=""
										className="style-input"
										style={{ borderRadius: 5 }}
										formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
										precision={2}
										onChange={(value) => setDataForm({ ...dataForm, Bonus: value })}
										value={numberWithCommas(dataForm.AdvanceSalary)}
										defaultValue={numberWithCommas(dataForm.AdvanceSalary)}
									/>
									<p className="font-weight-primary">{errorMess.Bonus}</p>
								</Form.Item>
							</div>
							<div className="col-12">
								<Form.Item label="Ghi chú" name="NoteBonus">
									<TextArea
										rows={4}
										onChange={(event) => {
											setDataForm({ ...dataForm, NoteBonus: event.target.value })
										}}
										name="NoteBonus"
										placeholder="Thêm ghi chú"
										defaultValue={dataForm.NoteBonus}
									/>
								</Form.Item>
							</div>
							<div className="col-12">
								<Form.Item label="Trạng thái" name="StatusID">
									<Select
										style={{ width: '100%' }}
										className="style-input"
										defaultValue={dataForm.StatusID}
										onChange={(value) => {
											console.log({ statusValue: value })
											setDataForm((preState) => ({ ...dataForm, StatusID: value }))
										}}
									>
										<Option value={1}>Chưa chốt lương</Option>
										<Option value={2}>Đã chốt lương</Option>
										<Option value={3}>Đã thanh toán lương</Option>
									</Select>
								</Form.Item>
							</div>
						</>

						<div className="col-12 mt-3">
							<button type="submit" className="btn btn-primary w-100">
								Lưu
								{submitLoading.type == 'UPLOADING' && submitLoading.loading && <Spin className="loading-base" />}
							</button>
						</div>
					</div>
				</Form>
			</Modal>
		</>
	)
}

export default ConfirmForm
