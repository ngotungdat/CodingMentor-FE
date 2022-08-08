import { Form, Input, InputNumber, Modal, Select, Spin, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { teacherSalaryApi } from '~/apiBase/staff-manage/teacher-salary'
import { useWrap } from '~/context/wrap'
import { numberWithCommas, parsePriceStrToNumber } from '~/utils/functions'

const { TextArea } = Input
const { Option } = Select

const initDataForm = {
	ID: '',
	AdvanceSalary: '',
	Bonus: '',
	NoteBonus: '',
	isClosing: false,
	StatusID: 0,
	isDonePaid: false
}

const ConfirmForm = ({ isLoading, record, userInformationID, setParams, params }) => {
	const { Option } = Select
	const [isVisible, setIsVisible] = useState(false)
	const [form] = Form.useForm()
	const { showNoti } = useWrap()
	const [submitLoading, setSubmitLoading] = useState({ type: '', loading: false })
	const [errorMess, setErrorMess] = useState({
		AdvanceSalary: '',
		Bonus: ''
	})
	const { TextArea } = Input

	const [dataForm, setDataForm] = useState({
		ID: null,
		AdvanceSalary: null,
		Bonus: null,
		NoteBonus: null,
		isClosing: null, //true- chốt lương (khi chốt lương thì mặc định status là 3)
		StatusID: null, //4-Đã xác nhận
		isDonePaid: null //true-thanh toán lương (khi thanh toán trang thái là 5)
	})

	useEffect(() => {
		setDataForm({
			ID: record.ID,
			AdvanceSalary: record.AdvanceSalary,
			Bonus: record.Bonus,
			NoteBonus: record.NoteBonus,
			isClosing: true, //true- chốt lương (khi chốt lương thì mặc định status là 3)
			StatusID: record.StatusID, //4-Đã xác nhận
			isDonePaid: record.isDonePaid //true-thanh toán lương (khi thanh toán trang thái là 5)
		})
	}, [record])

	const _onSubmit = async (value) => {
		setSubmitLoading({ type: 'UPLOADING', loading: true })
		console.log({ value })
		try {
			let res = await teacherSalaryApi.update({
				...dataForm
				// StatusID: reConfirm.StatusID == 1 ? 3 : reConfirm.StatusID == 3 ? 3 : 5
			})
			// let res = await teacherSalaryApi.update({ ...dataForm, StatusID: 1 });
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

	// const onChangeReConfirm = () => {
	//     if (reConfirm.StatusID == 3) {
	//         setReConfirm({
	//             type: false,
	//             StatusID: 4
	//         })
	//     }
	//     if (reConfirm.StatusID == 4) {
	//         setReConfirm({
	//             type: true,
	//             StatusID: 3
	//         })
	//     }
	// }

	// const selectStatus =
	//     (reConfirm.StatusID == 1 && 'Yêu cầu xác nhận') ||
	//     (reConfirm.StatusID == 3 && 'Yêu cầu xác nhận') ||
	//     (reConfirm.StatusID == 4 && 'Đã xác nhận') ||
	//     (reConfirm.StatusID == 5 && 'Đã thanh toán')

	return (
		<>
			<button
				className="btn btn-icon edit"
				onClick={() => {
					setIsVisible(true)
				}}
			>
				{/* {record.StatusID == 1 && ( */}
				<Tooltip title="Cập nhật lương">
					<i className="fas fa-edit" style={{ color: '#34c4a4', fontSize: 16, marginBottom: -1 }}></i>
				</Tooltip>
				{/* )} */}
				{/* {record.StatusID == 3 && (
                    <Tooltip title="Cập nhật lại lương">
                        <i className="fas fa-edit" style={{ color: '#34c4a4', fontSize: 16, marginBottom: -1 }}></i>
                    </Tooltip>
                )}
                {record.StatusID == 4 && (
                    <Tooltip title="Gửi yêu cầu xác nhận lại">
                        <i className="fas fa-edit" style={{ color: '#34c4a4', fontSize: 16, marginBottom: -1 }}></i>
                    </Tooltip>
                )} */}
			</button>

			<Modal title={'Cập nhật lương'} onCancel={() => setIsVisible(false)} visible={isVisible} footer={false}>
				<Form form={form} layout="vertical" onFinish={_onSubmit}>
					<div className="row">
						{/* {reConfirm.StatusID == 4 ? (
                            <>
                                <div className="col-12 mb-3">
                                    <h4 className="font-weight-primary">Xác nhận thanh toán lương cho giáo viên!</h4>
                                </div>
                            </>
                        ) : ( */}
						<>
							<div className="col-12">
								<Form.Item label="Trừ tạm ứng" name="AdvanceSalary">
									{/* <Input
										onChange={(event) => {
											setDataForm({ ...dataForm, AdvanceSalary: parsePriceStrToNumber(event.target.value) })
										}}
										name="AdvanceSalary"
										placeholder="Trừ  lương tạm ứng"
										className="style-input"
										value={numberWithCommas(dataForm.AdvanceSalary)}
										defaultValue={numberWithCommas(dataForm.AdvanceSalary)}
									/> */}

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
									<Input
										onChange={(event) => {
											setDataForm({ ...dataForm, Bonus: parsePriceStrToNumber(event.target.value) })
										}}
										name="Bonus"
										placeholder="Thêm tiền thưởng"
										className="style-input"
										value={numberWithCommas(dataForm.Bonus)}
										defaultValue={numberWithCommas(dataForm.Bonus)}
									/>
									<p className="font-weight-primary">{errorMess.Bonus}</p>
								</Form.Item>
							</div>
							<div className="col-12">
								<Form.Item label="Ghi chú " name="NoteBonus">
									<TextArea
										rows={4}
										onChange={(event) => {
											setDataForm({ ...dataForm, NoteBonus: event.target.value })
										}}
										name="NoteBonus"
										placeholder="Thêm ghi chú"
										defaultValue={numberWithCommas(dataForm.NoteBonus)}
									/>
								</Form.Item>
							</div>
							<div className="col-12">
								<Form.Item label="Trạng thái" name="StatusID">
									<Select
										// disabled={true}
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
							{/* <div className="col-12">
                                    <Form.Item label="Trạng Thái Thanh Toán" name="isDonePaid">
                                        <Select
                                            // disabled={true}
                                            style={{ width: '100%' }}
                                            className="style-input"
                                            defaultValue={record.isDonePaid ? 'Đã Thanh Toán' : 'Chưa Thanh Toán'}
                                        >
                                            <Option value={record.isDonePaid}>
                                                {record.isDonePaid ? 'Đã Thanh Toán' : 'Chưa Thanh Toán'}
                                            </Option>
                                        </Select>
                                    </Form.Item>
                                </div> */}
						</>
						{/* )} */}

						{/* {record.StatusID == 4 &&
                            (reConfirm.StatusID == 3 ? (
                                <div className="col-12 ">
                                    <a className="font-weight-primary" onClick={onChangeReConfirm}>
                                        Hủy gửi yêu cầu xác nhận lại
                                    </a>
                                </div>
                            ) : (
                                <div className="col-12 ">
                                    <a className="font-weight-primary" onClick={onChangeReConfirm}>
                                        Gửi yêu cầu xác nhận lại
                                    </a>
                                </div>
                            ))} */}
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
