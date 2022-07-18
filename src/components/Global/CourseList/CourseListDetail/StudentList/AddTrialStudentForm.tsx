import { Form, Modal, Select, Spin, Input, Checkbox, InputNumber } from 'antd'
import React, { useState, useEffect } from 'react'
import { studentApi, courseDetailApi, branchApi } from '~/apiBase'
import { useWrap } from '~/context/wrap'
import { rollUpApi } from '~/apiBase/course-detail/roll-up'
import moment from 'moment'
import { courseOfStudentApi } from '~/apiBase/customer/parents/courses-of-student'
import { courseOfStudentPriceApi } from '~/apiBase/course/course-of-student-price'
import { PaymentMethod } from '~/lib/payment-method/payment-method'
import { numberWithCommas } from '~/utils/functions'
import { billCourseApi } from '~/apiBase/course/bill-course'

const AddTrialStudentForm = (props) => {
	const { CourseID, onFetchData, coursePrice, ProgramID } = props
	const [visible, setVisible] = useState(false)
	const [isLoading, setIsLoading] = useState({ type: '', status: false })
	const [branch, setBranch] = useState<IBranch[]>()
	const [form] = Form.useForm()
	const { showNoti, pageSize, userInformation } = useWrap()
	const [filterStudent, setFilterStudent] = useState({ pageindex: 1, pageSize: pageSize })
	const [students, setStudents] = useState<IStudent[]>(null)
	const [scheduleList, setScheduleList] = useState(null)
	const [filtersSchedule, setFiltersSchedule] = useState({
		pageSize: 10,
		pageIndex: 1,
		CourseID: CourseID
	})
	const [userDetail, setUserDetail] = useState<IStudent>()
	const [isLoadingX, setIsLoadingx] = useState(false)
	const [isTrial, setIsTrial] = useState(false)

	const { Option } = Select
	const { TextArea } = Input

	const handleChangeUser = (value) => {
		setIsLoadingx(true)
		;(async () => {
			try {
				const _detail = await studentApi.getWithID(value)
				//@ts-ignore
				_detail.status == 200 && setUserDetail(_detail.data.data)
				//@ts-ignore
				_detail.status == 200 &&
					(setUserDetail(_detail.data.data), form.setFieldsValue({ UserInformationID: _detail.data.data.UserInformationID }))
			} catch (err) {
				showNoti('danger', err.message)
			} finally {
				setIsLoadingx(false)
			}
		})()
	}

	const [params, setParams] = useState({
		CourseID: CourseID,
		UserInformationID: null,
		Note: '',
		TrialStart: null,
		TrialEnd: null
	})

	useEffect(() => {
		fetchDataSelectList()
	}, [])

	const fetchDataSelectList = async () => {
		try {
			const _branch = await branchApi.getAll({
				pageIndex: 1,
				pageSize: 99999,
				Enable: true
			})

			_branch.status == 200 && setBranch(_branch.data.data)
		} catch (err) {
			showNoti('danger', err.message)
		}
	}

	const getStudents = async () => {
		setIsLoading({ type: 'GET_STUDENT', status: true })
		try {
			let res = await studentApi.getAll(filterStudent)
			if ((res.status = 200)) {
				setStudents(res.data.data)
			}
		} catch (err) {
		} finally {
			setIsLoading({ type: 'GET_STUDENT', status: false })
		}
	}

	const getCourseSchedule = async () => {
		setIsLoading({ type: 'GET_SCHEDULE', status: true })
		try {
			const res = await courseDetailApi.getAll(filtersSchedule)
			if ((res.status = 200)) {
				const fmScheduleList = res.data.data.map((item, index) => {
					const date = moment(item.StartTime).format('DD/MM/YYYY')
					const startTime = moment(item.StartTime).format('HH:mm')
					const endTime = moment(item.EndTime).format('HH:mm')
					return {
						value: item.ID,
						title: `Buổi ${index + 1} [${date}] ${startTime} - ${endTime}`
					}
				})
				setScheduleList(fmScheduleList)
			}
		} catch (err) {
		} finally {
			setIsLoading({ type: 'GET_SCHEDULE', status: false })
		}
	}

	useEffect(() => {
		getStudents()
		getCourseSchedule()
	}, [])

	const handleChangeSelect = (value) => {
		setParams({ ...params, UserInformationID: value })
	}

	const onSelectCourseScheduleStart = () => {}
	const onSelectCourseScheduleEnd = () => {}

	const _onSubmit = async (data) => {
		console.log('🚀 ~ file: AddTrialStudentForm.tsx ~ line 127 ~ const_onSubmit= ~ data', data)
		setIsLoading({ type: 'SUBMIT', status: true })
		if (isTrial) {
			try {
				let res = await courseOfStudentApi.createTrial({ ...data, CourseID: CourseID })
				if (res.status == 200) {
					showNoti('success', 'Thêm học viên thành công!')
					setVisible(false)
					form.resetFields()
					onFetchData()
				}
			} catch (err) {
				showNoti('danger', err.message)
			} finally {
				setIsLoading({ type: 'SUBMIT', status: false })
			}
		} else {
			try {
				let res = await billCourseApi.add({
					...data,
					Course: CourseID,
					DiscountCode: '',
					StudentID: data.UserInformationID,
					isContract: false,
					billCourseDetails: [
						{
							BranchID: data.BranchID,
							CourseID: CourseID,
							ProgramID: ProgramID
						}
					]
				})
				if (res.status == 200) {
					showNoti('success', 'Thêm học viên thành công!')
					setVisible(false)
					form.resetFields()
					onFetchData()
				}
			} catch (err) {
				showNoti('danger', err.message)
			} finally {
				setIsLoading({ type: 'SUBMIT', status: false })
			}
		}
	}

	return (
		<>
			<button
				onClick={() => {
					setVisible(true)
				}}
				className="btn btn-warning"
				type="button"
			>
				Thêm học viên
			</button>

			<Modal
				footer={null}
				onCancel={() => {
					setVisible(false)
				}}
				title="Thêm học viên"
				visible={visible}
				width={700}
			>
				<Form form={form} onFinish={_onSubmit} layout="vertical">
					<div className="row">
						{!isTrial && (
							<div className="col-12">
								<p className="font-weight-green">Giá khóa học: {numberWithCommas(coursePrice)}vnd</p>
							</div>
						)}
						<div className="row m-0" style={{ width: '100%' }}>
							<div className="col-md-6 col-12">
								<Form.Item name="isTrial" label="" required={false} style={{ height: 30, marginTop: isTrial ? 0 : 20 }}>
									<Checkbox checked={isTrial} onChange={() => setIsTrial(!isTrial)}>
										Học thử
									</Checkbox>
								</Form.Item>
							</div>
						</div>
						<div className="row m-0" style={{ width: '100%' }}>
							<div className="col-md-6 col-12">
								<Form.Item
									name="UserInformationID"
									label="Email"
									rules={[
										{
											required: true,
											message: 'Vui lòng điền đủ thông tin!'
										}
									]}
								>
									<Select
										placeholder="Chọn học viên"
										className="style-input"
										style={{ width: '100%' }}
										onChange={(value) => handleChangeUser(value)}
										size="large"
										showSearch
										filterOption={(input: any, option: any) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
									>
										{students &&
											students.map((item, index) => (
												<Option key={index} value={item.UserInformationID}>
													{item.Email}
												</Option>
											))}
									</Select>
								</Form.Item>
							</div>

							<div className="col-md-6 col-12">
								<Form.Item label="Họ và tên">
									<Select
										className="style-input"
										showSearch
										optionFilterProp="children"
										value={userDetail ? userDetail.UserInformationID : ''}
										onChange={(value) => handleChangeUser(value)}
									>
										{students?.map((item, index) => (
											<Option key={index} value={item.UserInformationID}>
												{item.FullNameUnicode}
											</Option>
										))}
									</Select>
								</Form.Item>
							</div>
						</div>
						{/*  */}
						{/*  */}
						<div className="row m-0" style={{ width: '100%' }}>
							<div className="col-md-6 col-12">
								<Form.Item label="Ngày sinh">
									<Input readOnly={true} className="style-input" value={userDetail ? moment(userDetail.DOB).format('DD/MM/YYYY') : ''} />
								</Form.Item>
							</div>
							<div className="col-md-6 col-12">
								<Form.Item label="Số điện thoại">
									<Select
										className="style-input"
										showSearch
										optionFilterProp="children"
										value={userDetail ? userDetail.UserInformationID : ''}
										onChange={(value) => handleChangeUser(value)}
									>
										{students?.map((item, index) => (
											<Option key={index} value={item.UserInformationID}>
												{item.Mobile}
											</Option>
										))}
									</Select>
								</Form.Item>
							</div>
						</div>
						{/*  */}
						{/*  */}
						<div className="row m-0" style={{ width: '100%' }}>
							<div className="col-md-6 col-12">
								<Form.Item label="Tỉnh/Thành phố">
									<Input readOnly={true} className="style-input" value={userDetail ? userDetail.AreaName : ''} />
								</Form.Item>
							</div>
							{/* <div className="col-md-6 col-12">
								<Form.Item label="Quận/Huyện">
									<Input readOnly={true} value={userDetail ? userDetail.DistrictName : ''} className="style-input" />
								</Form.Item>
							</div> */}
							<div className="col-md-6 col-12">
								<Form.Item label="Tư vấn viên">
									<Input
										className="style-input"
										readOnly={true}
										//@ts-ignore
										value={userDetail ? userDetail.CounselorsName : ''}
									/>
								</Form.Item>
							</div>
						</div>
						{/*  */}
						{/*  */}
						{/* <div className="row m-0" style={{ width: '100%' }}>
							<div className="col-md-6 col-12">
								<Form.Item label="Phường xã">
									<Input readOnly={true} value={userDetail ? userDetail.WardName : ''} className="style-input" />
								</Form.Item>
							</div>
							<div className="col-md-6 col-12">
								<Form.Item label="Địa chỉ - Mô tả">
									<Input
										readOnly={true}
										value={
											userDetail
												? `${userDetail.HouseNumber ? userDetail.HouseNumber : ''} ${
														userDetail.Address ? userDetail.Address : ''
												  }`
												: ''
										}
										className="style-input"
									/>
								</Form.Item>
							</div>
						</div> */}
						{/*  */}
						{/*  */}
						{/* <div className="row m-0" style={{ width: '100%' }}>
							<div className="col-md-6 col-12">
								<Form.Item label="CMND">
									<Input readOnly={true} value={userDetail ? userDetail.CMND : ''} className="style-input" />
								</Form.Item>
							</div>
							<div className="col-md-6 col-12">
								<Form.Item label="Nơi cấp">
									<Input readOnly={true} value={userDetail ? userDetail.CMNDRegister : ''} className="style-input" />
								</Form.Item>
							</div>
						</div> */}
						{/*  */}
						{/*  */}
						{/* <div className="row m-0" style={{ width: '100%' }}>
							<div className="col-md-6 col-12">
								<Form.Item label="Ngày cấp">
									<Input
										readOnly={true}
										value={userDetail?.CMNDDate ? moment(userDetail.CMNDDate).format('DD/MM/YYYY') : ''}
										className="style-input"
									/>
								</Form.Item>
							</div>
							<div className="col-md-6 col-12">
								<Form.Item label="Công việc">
									<Input readOnly={true} className="style-input" value={userDetail ? userDetail.JobName : ''} />
								</Form.Item>
							</div>
						</div> */}
						{/*  */}
						{/*  */}
						{/* <div className="row m-0" style={{ width: '100%' }}>
							<div className="col-md-6 col-12">
								<Form.Item label="Người nhà, liên hệ">
									<Input className="style-input" readOnly={true} value={userDetail ? userDetail.ParentsNameOf : ''} />
								</Form.Item>
							</div>
							<div className="col-md-6 col-12">
								<Form.Item label="Tư vấn viên">
									<Input
										className="style-input"
										readOnly={true}
										//@ts-ignore
										value={userDetail ? userDetail.CounselorsName : ''}
									/>
								</Form.Item>
							</div>
						</div> */}
						{/*  */}
						{/*  */}
						<div className="row m-0" style={{ width: '100%' }}>
							<div className="col-md-6 col-12">
								<Form.Item label="Nguồn khách">
									<Input readOnly={true} className="style-input" value={userDetail ? userDetail.SourceInformationName : ''} />
								</Form.Item>
							</div>
							<div className="col-md-6 col-12">
								<Form.Item label="Mục đích học">
									<Input readOnly={true} className="style-input" value={userDetail ? userDetail.AcademicPurposesName : ''} />
								</Form.Item>
							</div>
						</div>

						{isTrial && (
							<div className="row m-0" style={{ width: '100%' }}>
								<div className="col-md-6 col-12">
									<Form.Item label="Chọn ngày bắt đầu" name="TrialStart" rules={[{ required: true, message: 'Bạn không được để trống' }]}>
										<Select
											placeholder="Chọn ngày bắt đầu"
											className="style-input"
											style={{ width: '100%' }}
											onChange={onSelectCourseScheduleStart}
										>
											{scheduleList &&
												scheduleList.map((o, idx) => (
													<Option key={idx} value={o.value}>
														{o.title}
													</Option>
												))}
										</Select>
									</Form.Item>
								</div>

								<div className="col-md-6 col-12">
									<Form.Item label="Chọn ngày kết thúc" name="TrialEnd" rules={[{ required: true, message: 'Bạn không được để trống' }]}>
										<Select
											placeholder="Chọn ngày kết thúc"
											className="style-input"
											style={{ width: '100%' }}
											onChange={onSelectCourseScheduleEnd}
										>
											{scheduleList &&
												scheduleList.map((o, idx) => (
													<Option key={idx} value={o.value}>
														{o.title}
													</Option>
												))}
										</Select>
									</Form.Item>
								</div>
							</div>
						)}

						{!isTrial && (
							<>
								{userInformation && userInformation.RoleID !== 2 && userInformation.RoleID !== 6 && (
									<div className="row m-0" style={{ width: '100%' }}>
										<div className="col-md-6 col-12">
											<Form.Item name="Paid" label="Thanh toán" rules={[{ required: true, message: 'Bạn không được để trống' }]}>
												<InputNumber
													placeholder="Số tiền thanh toán"
													className="style-input"
													style={{ borderRadius: 5 }}
													formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
													parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
													precision={2}
												/>
											</Form.Item>
										</div>
										<div className="col-md-6 col-12">
											<Form.Item
												name="PaymentMethodsID"
												label="Hình thức thanh toán"
												rules={[
													{
														required: true,
														message: 'Vui lòng điền đủ thông tin!'
													}
												]}
											>
												<Select className="style-input">
													{PaymentMethod?.map((item, index) => (
														<Option key={index} value={item.id}>
															{item.Name}
														</Option>
													))}
												</Select>
											</Form.Item>
										</div>
									</div>
								)}
								<div className="row m-0" style={{ width: '100%' }}>
									<div className="col-md-6 col-12">
										<Form.Item
											name="BranchID"
											label="Trung tâm đăng ký học"
											rules={[
												{
													required: true,
													message: 'Vui lòng điền đủ thông tin!'
												}
											]}
										>
											<Select className="style-input" showSearch optionFilterProp="children">
												{branch?.map((item, index) => (
													<Option key={index} value={item.ID}>
														{item.BranchName}
													</Option>
												))}
											</Select>
										</Form.Item>
									</div>
									{userInformation && userInformation.RoleID !== 2 && userInformation.RoleID !== 6 && (
										<div className="col-md-6 col-12">
											<Form.Item
												name="PayBranchID"
												label="Trung tâm thanh toán"
												rules={[
													{
														required: true,
														message: 'Vui lòng điền đủ thông tin!'
													}
												]}
											>
												<Select className="style-input" showSearch optionFilterProp="children">
													{branch?.map((item, index) => (
														<Option key={index} value={item.ID}>
															{item.BranchName}
														</Option>
													))}
												</Select>
											</Form.Item>
										</div>
									)}
								</div>
							</>
						)}

						<div className="col-12 mb-2">
							<Form.Item label={!isTrial ? 'Ghi chú thanh toán' : 'Ghi chú'} name="Note">
								<TextArea rows={5} placeholder="Thêm ghi chú" />
							</Form.Item>
						</div>

						{!isTrial && (
							<>
								<div className="col-12 mb-2">
									<Form.Item label="Ghi chú học viên" name="StudentNote">
										<TextArea rows={5} placeholder="Thêm ghi chú học viên" />
									</Form.Item>
								</div>
								<div className="col-12 mb-2">
									<Form.Item label="Cam kết" name="Commitment">
										<TextArea rows={5} placeholder="Thêm cam kết" />
									</Form.Item>
								</div>
							</>
						)}

						<div className="col-12">
							<button type="submit" className="btn btn-primary w-100" disabled={isLoading.type == 'SUBMIT' && isLoading.status}>
								Lưu
								{isLoading.type == 'SUBMIT' && isLoading.status && <Spin className="loading-base" />}
							</button>
						</div>
					</div>
				</Form>
			</Modal>
		</>
	)
}

export default AddTrialStudentForm
