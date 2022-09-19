import { DeploymentUnitOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { Divider, Form, Modal, Spin, Tooltip } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { countryApi } from '~/apiBase/country/country'
import { timeZoneApi } from '~/apiBase/timezone'
import DateField from '~/components/FormControl/DateField'
import InputPassField from '~/components/FormControl/InputPassField'
import InputTextField from '~/components/FormControl/InputTextField'
import SelectField from '~/components/FormControl/SelectField'
import TextAreaField from '~/components/FormControl/TextAreaField'
import UploadAvatarField from '~/components/FormControl/UploadAvatarField'
import { useWrap } from '~/context/wrap'
import { fmSelectArr } from '~/utils/functions'
import { optionCommonPropTypes } from '~/utils/proptypes'

SalerListForm.propTypes = {
	isUpdate: PropTypes.bool,
	updateObj: PropTypes.shape({}),
	isLoading: PropTypes.shape({
		type: PropTypes.string.isRequired,
		status: PropTypes.bool.isRequired
	}),
	optionStatusList: optionCommonPropTypes,
	optionGenderList: optionCommonPropTypes,
	optionAreaSystemList: PropTypes.shape({
		areaList: optionCommonPropTypes,
		districtList: optionCommonPropTypes,
		wardList: optionCommonPropTypes
	}),
	handleFetchDistrict: PropTypes.func,
	handleFetchWard: PropTypes.func,
	optionBranchList: optionCommonPropTypes,
	handleFetchBranch: PropTypes.func,
	handleSubmit: PropTypes.func,
	countryList: PropTypes.shape({})
}

function SalerListForm(props) {
	const {
		isUpdate,
		updateObj,
		isLoading,
		optionStatusList,
		optionGenderList,
		optionAreaSystemList,
		handleFetchDistrict,
		handleFetchWard,
		handleFetchBranch,
		handleSubmit
	} = props

	const { userInformation, showNoti } = useWrap()

	const { areaList, districtList, wardList } = optionAreaSystemList
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [timezone, setTimezone] = useState([])
	const [country, setCountry] = useState([])
	const [cityByCountry, setCityByCountry] = useState([])
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

	// GET Country
	const fetchCountryList = async () => {
		try {
			const res = await countryApi.getAll({ pageSize: 99999 })
			if (res.status === 200 && res.data.totalRow && res.data.data.length) {
				const newCountryList = fmSelectArr(res.data.data, 'Name', 'ID')
				setCountry(newCountryList)
			}
		} catch (error) {}
	}

	const onChangeSelect = async (value) => {
		try {
			const res = await countryApi.getAll({ pageSize: 99999 })
			if (res.status === 200) {
				const getCountry = res.data.data.find((country) => country.ID === value)
				if (getCountry) {
					const response = await countryApi.getByCity({ iso: getCountry.Iso })
					if (response.status === 200) {
						const newData = response.data.data.map((data) => {
							return {
								title: data.Name,
								value: data.ID
							}
						})
						setCityByCountry(newData)
					}
					if (response.status === 204) {
						setCityByCountry([])
					}
				}
			}
		} catch (err) {
			showNoti('danger', err.message)
		}
	}

	const openModal = () => {
		fetchCountryList()
		getAllTimeZone()
		onChangeSelect(updateObj?.CountryID)
		setIsModalVisible(true)
		handleFetchBranch()

		if (isUpdate && updateObj && updateObj.AreaID) {
			if (handleFetchDistrict) {
				handleFetchDistrict(updateObj.AreaID)
			}
			if (handleFetchWard && updateObj.DistrictID) {
				handleFetchWard(updateObj.DistrictID)
			}
		}
	}

	const closeModal = () => setIsModalVisible(false)

	const schema = yup.object().shape({
		FullNameUnicode: yup.string().required('Bạn không được để trống'),
		Email: yup.string().email('Email không đúng định dạng').required('Bạn không được để trống'),
		Mobile: yup
			.string()
			.required('Bạn không được để trống')
			.matches(
				/^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/,
				'Số điện thoại không đúng định dạng'
			),
		TimeZoneId: yup.mixed().nullable().required('Bạn không được để trống')
	})

	const defaultValuesInit = {
		FullNameUnicode: '',
		Jobdate: '',
		Email: '',
		Mobile: '',
		Address: '',
		AreaID: null,
		DistrictID: null,
		WardID: null,
		HouseNumber: '',
		Avatar: '',
		DOB: '',
		Gender: 0,
		CMND: '',
		CMNDDate: '',
		CMNDRegister: '',
		Extension: '',
		StatusID: 0,
		Password: '',
		UserName: null,
		TimeZoneId: null,
		CountryID: null,
		CityID: null
	}

	const form = useForm({
		defaultValues: defaultValuesInit,
		resolver: yupResolver(schema)
	})

	useEffect(() => {
		if (isUpdate && updateObj) {
			form.reset({ ...updateObj, Branch: updateObj.Branch.map((obj) => obj.ID) })
		}
	}, [updateObj])

	const checkHandleFetchBranch = (value) => {
		if (!handleFetchBranch) return
		form.setValue('DistrictID', null)
		form.setValue('WardID', null)
		handleFetchBranch(value)
	}
	const checkHandleFetchDistrict = (value) => {
		if (!handleFetchDistrict) return
		handleFetchDistrict(value)
	}
	const checkHandleFetchWard = (value) => {
		if (!handleFetchWard) return
		form.setValue('WardID', null)
		handleFetchWard(value)
	}

	const teacherSwitchFunc = (data) => {
		if (!handleSubmit) return
		handleSubmit(data).then((res) => {
			if (res) {
				closeModal()
				if (!isUpdate) {
					form.reset({ ...defaultValuesInit })
				}
			}
		})
	}

	return (
		<>
			{isUpdate ? (
				<button className="btn btn-icon edit" onClick={openModal}>
					<Tooltip title="Cập nhật">
						<i className="fas fa-edit" style={{ color: '#34c4a4', fontSize: 16, marginBottom: -1 }}></i>
					</Tooltip>
				</button>
			) : (
				<button className="btn btn-warning add-new" onClick={openModal}>
					Thêm mới
				</button>
			)}
			<Modal
				style={{ top: 20 }}
				title={isUpdate ? 'Cập nhật tư vấn viên' : 'Thêm tư vấn viên'}
				visible={isModalVisible}
				onCancel={closeModal}
				footer={
					<div className="row">
						<div className="col-12 d-flex justify-content-center">
							<button
								type="submit"
								className="btn btn-primary w-100"
								onClick={form.handleSubmit(teacherSwitchFunc)}
								disabled={isLoading.type == 'ADD_DATA' && isLoading.status}
							>
								{isUpdate ? 'Cập nhật' : 'Thêm mới'}
								{isLoading.type === 'ADD_DATA' && isLoading.status && <Spin className="loading-base" />}
							</button>
						</div>
					</div>
				}
				className="modal-50 modal-scroll"
			>
				<div className="box-form">
					<Form layout="vertical" onFinish={form.handleSubmit(teacherSwitchFunc)}>
						<div className="row">
							<div className="col-12">
								<div className="info-modal">
									<div className="info-modal-avatar">
										<UploadAvatarField style={{ marginBottom: 0 }} form={form} name="Avatar" />
									</div>
									<div className="info-modal-content">
										{isUpdate && (
											<div className="box-info-modal">
												<p className="name">{updateObj.FullNameUnicode}</p>
												<p className="detail">
													<span className="icon role">
														<DeploymentUnitOutlined />
													</span>
													<span className="text">{updateObj.Branch.map((b) => b.BranchName).join(', ')}</span>
												</p>
												<p className="detail">
													<span className="icon mobile">
														<WhatsAppOutlined />
													</span>
													<span className="text">{updateObj.Mobile}</span>
												</p>
												<p className="detail">
													<span className="icon email">
														<MailOutlined />
													</span>
													<span className="text">{updateObj.Email}</span>
												</p>
											</div>
										)}
									</div>
								</div>
							</div>
							<div className="col-12">
								<Divider orientation="center">Thông tin cơ bản</Divider>
							</div>
							{isUpdate && (
								<div className="col-12">
									<InputTextField form={form} name="UserName" label="Tên đăng nhập" disabled={true} />
								</div>
							)}
							<div className="col-md-6 col-12">
								<InputTextField form={form} name="Email" label="Email" placeholder="Nhập email" />
							</div>
							<div className="col-md-6 col-12">
								<InputTextField form={form} name="FullNameUnicode" label="Họ và tên" placeholder="Nhập họ và tên" />
							</div>
							<div className="col-md-6 col-12">
								<InputTextField form={form} name="Mobile" label="Số điện thoại" placeholder="Nhập số điện thoại" />
							</div>
							<div className="col-md-6 col-12">
								<SelectField
									form={form}
									name="TimeZoneId"
									label="Timezone"
									optionList={timezone}
									placeholder="Chọn Timezone"
									isRequired={true}
								/>
							</div>
							<div className="col-md-6 col-12">
								<DateField form={form} name="DOB" label="Ngày sinh" placeholder="Chọn ngày sinh" />
							</div>
							<div className="col-md-6 col-12">
								<InputTextField form={form} name="CMND" label="Số CMND" placeholder="Nhập số CMND" />
							</div>
							<div className="col-md-6 col-12">
								<InputTextField form={form} name="CMNDRegister" label="Nơi cấp CMND" placeholder="Nhập nơi cấp CMND" />
							</div>
							<div className="col-md-6 col-12">
								<DateField form={form} name="CMNDDate" label="Ngày cấp CMND" placeholder="Chọn ngày cấp CMND" />
							</div>
							<div className="col-md-6 col-12">
								<SelectField form={form} name="Gender" label="Giới tính" optionList={optionGenderList} placeholder="Chọn giới tính" />
							</div>
							<div className="col-md-6 col-12">
								<SelectField
									form={form}
									name="StatusID"
									label="Trạng thái hoạt động"
									optionList={optionStatusList}
									placeholder="Chọn trạng thái hoạt động"
									disabled={!isUpdate ? true : userInformation?.RoleID === 1 ? false : true}
								/>
							</div>
							<div className="col-md-6 col-12">
								<InputPassField form={form} name="Mật khẩu" label="Mật khẩu" placeholder="Nhập mật khẩu" />
							</div>
							<div className="col-12">
								<Divider orientation="center">Địa chỉ</Divider>
							</div>
							<div className="col-md-6 col-12">
								<SelectField
									onChangeSelect={onChangeSelect}
									form={form}
									name="CountryID"
									label="Quốc gia"
									optionList={country}
									placeholder="Chọn quốc gia"
								/>
							</div>
							<div className="col-md-6 col-12">
								<SelectField form={form} name="CityID" label="Thành phố" optionList={cityByCountry} placeholder="Chọn thành phố" />
							</div>

							<div className="col-12">
								<InputTextField form={form} name="HouseNumber" label="Số nhà/Tên đường" placeholder="Nhập số nhà/tên đường" />
							</div>
							<div className="col-12 mb-4">
								<TextAreaField form={form} name="Extension" label="Mô tả thêm" placeholder="Nhập mô tả thêm" />
							</div>
							<div className="col-12 mt-2">
								<Divider orientation="center">Khác</Divider>
							</div>
							<div className="col-md-6 col-12">
								<DateField form={form} name="Jobdate" label="Ngày nhận việc" placeholder="Chọn ngày nhận việc" />
							</div>
							<div className="col-md-6 col-12">
								<InputTextField form={form} name="Address" label="Địa chỉ" placeholder="Nhập địa chỉ" />
							</div>
						</div>
					</Form>
				</div>
			</Modal>
		</>
	)
}

SalerListForm.defaultProps = {
	isUpdate: false,
	updateObj: {},
	isLoading: { type: '', status: false },
	optionStatusList: [],
	optionGenderList: [],
	optionAreaSystemList: {
		areaList: [],
		districtList: [],
		wardList: []
	},
	handleFetchDistrict: null,
	handleFetchWard: null,
	optionBranchList: [],
	handleFetchBranch: null,
	handleSubmit: null
}

export default SalerListForm
