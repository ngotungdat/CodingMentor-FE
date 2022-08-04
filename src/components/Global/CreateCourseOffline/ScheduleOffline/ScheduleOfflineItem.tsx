import { yupResolver } from '@hookform/resolvers/yup'
import { Collapse, Spin } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { roomCheckApi } from '~/apiBase/options/room-check'
import SelectField from '~/components/FormControl/SelectField'
import { useWrap } from '~/context/wrap'
import { fmSelectArr } from '~/utils/functions'
import { optionCommonPropTypes } from '~/utils/proptypes'
import { Form } from 'antd'
const { Panel } = Collapse

const ScheduleOfflineItem = (props) => {
	const {
		handleChangeStatusSchedule,
		handleChangeValueSchedule,
		handleAheadSchedule,
		scheduleObj,
		isLoading,
		isUnavailable,
		isEditView,
		isClickAheadSchedule,
		optionTeacherList,
		optionStudyTime,
		saveBeforeAheadSchedule,
		listRoomID,
		branchID
	} = props
	// IF NOT OWNER SCHEDULE < LOCK
	const [isLockSchedule, setIsLockSchedule] = useState(false)
	const { showNoti, userInformation } = useWrap()
	const [listRoom, setListRoom] = useState([
		{
			title: scheduleObj.RoomName,
			value: scheduleObj.RoomID
		}
	])

	const {
		ID,
		eventName,
		Tiet,
		CaID,
		TeacherID,
		// EDIT
		Date,
		RoomID,
		TeacherName,
		SubjectName,
		StudyTimeID
	} = scheduleObj

	const defaultValuesInit = {
		TeacherID: TeacherID,
		StudyTimeID: CaID || StudyTimeID,
		RoomID: null
	}
	const schema = yup.object().shape({
		StudyTimeID: yup.number().min(1, 'Bạn cần chọn ca học').required('Bạn không được để trống'),
		TeacherID: yup.number().min(1, 'Bạn cần chọn giáo viên').required('Bạn không được để trống'),
		RoomID: yup.number().min(1, 'Bạn cần chọn giáo viên').required('Bạn không được để trống')
	})
	const form = useForm({
		defaultValues: defaultValuesInit,
		resolver: yupResolver(schema),
		mode: 'all'
	})

	const checkHandleChangeStatusSchedule = (vl, type) => {
		if (!handleChangeStatusSchedule) return
		handleChangeStatusSchedule(vl, type)
	}
	const checkHandleChangeValueSchedule = (uid, key, vl, CaID) => {
		if (!handleChangeValueSchedule) return
		handleChangeValueSchedule(uid, key, vl, CaID)
	}
	const setSiblingsFieldToDefault = () => {
		form.setValue('TeacherID', 0)
	}
	const checkHandleAheadSchedule = (courseScheduleId: number, teacherId: number) => {
		if (!handleAheadSchedule) return
		handleAheadSchedule(courseScheduleId, teacherId)
	}
	// CHECK IF VALUE DO NOT IN THE SELECT => CHANGE VALUE TO DEFAULT (0)
	// useEffect(() => {
	// 	form.clearErrors()
	// 	if (
	// 		(isLoading.type === 'CHECK_SCHEDULE' || isLoading.type === 'ADD_DATA') &&
	// 		!isLoading.status &&
	// 		Array.isArray(optionTeacherList) &&
	// 		optionTeacherList.length > 0
	// 	) {
	// 		if (isEditView) {
	// 			form.setValue('TeacherID', TeacherID)
	// 		} else {
	// 			form.setValue('TeacherID', optionTeacherList[0].value)
	// 		}
	// 		form.setValue('StudyTimeID', CaID || StudyTimeID)
	// 	}
	// }, [scheduleObj, optionTeacherList, isLoading])

	useEffect(() => {
		if (scheduleObj) {
			form.setValue('StudyTimeID', CaID || StudyTimeID)
			form.setValue('TeacherID', optionTeacherList[0]?.value != 0 ? TeacherID : 0)
			form.setValue('RoomID', RoomID)
		}

		fetchCheckRoom()

		setIsLockSchedule(false)
		if (userInformation?.RoleID === 2 && TeacherID !== 0 && TeacherID !== userInformation?.UserInformationID) {
			setIsLockSchedule(true)
		}
		if (scheduleObj?.TeacherAttendanceID !== 0 && scheduleObj?.TeacherAttendanceID !== undefined) {
			setIsLockSchedule(true)
		}
	}, [scheduleObj])

	const fetchCheckRoom = async () => {
		try {
			const res = await roomCheckApi.getAll({
				BranchID: branchID,
				Rooms: listRoomID.toString(),
				StudyTimeID: scheduleObj.CaID,
				Date: scheduleObj.date,
				CourseID: 0
			})
			if (res.status === 200) {
				const newRoomList = fmSelectArr(res.data.data, 'name', 'id')
				newRoomList.forEach((item) => {
					delete item.options
				})
				setListRoom(newRoomList)
			}
			if (res.status === 204) {
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
		}
	}

	return (
		<Panel
			{...props}
			header={
				<div className="info-course-item">
					{(scheduleObj?.TeacherAttendanceID == 0 || scheduleObj?.TeacherAttendanceID == undefined) && (
						<Checkbox
							onChange={() => {
								if (isUnavailable) {
									checkHandleChangeStatusSchedule(scheduleObj, 2)
								} else {
									checkHandleChangeStatusSchedule(scheduleObj, 1)
								}
							}}
							checked={isUnavailable}
							disabled={isLockSchedule}
						/>
					)}
					<p className="title">{eventName || `${moment(Date).format('DD/MM')} - ${TeacherName}`}</p>
					<ul className="info-course-list">
						<li>{Tiet?.CurriculumsDetailName || SubjectName}</li>
					</ul>
				</div>
			}
		>
			<div className="info-course-select">
				<Form layout="vertical">
					<div className="row">
						<div className="col-12">
							<SelectField
								form={form}
								name="StudyTimeID"
								label="Ca học"
								placeholder="Chọn ca"
								optionList={optionStudyTime}
								onChangeSelect={(value) => {
									setSiblingsFieldToDefault()
									checkHandleChangeValueSchedule(ID, 'CaID', value, scheduleObj.CaID)
								}}
								disabled={isLockSchedule}
							/>
						</div>
						<div className="col-12">
							<SelectField
								form={form}
								name="TeacherID"
								label="Giáo viên"
								isLoading={isLoading.type === 'CHECK_SCHEDULE' && isLoading.status}
								placeholder="Chọn giáo viên"
								optionList={optionTeacherList}
								onChangeSelect={(value) => {
									if (isEditView) {
										checkHandleChangeValueSchedule(ID, 'TeacherID', value, scheduleObj.CaID)
									}
								}}
								disabled={isLockSchedule}
							/>
						</div>
						<div className="col-12">
							<SelectField
								form={form}
								name="RoomID"
								label="Phòng học"
								placeholder="Chọn phòng học"
								optionList={listRoom}
								onChangeSelect={(value) => {
									checkHandleChangeValueSchedule(ID, 'RoomID', value, scheduleObj.CaID)
								}}
								disabled={isLockSchedule}
							/>
						</div>
						{isEditView &&
							!isClickAheadSchedule &&
							typeof ID === 'number' &&
							saveBeforeAheadSchedule &&
							scheduleObj?.TeacherAttendanceID == 0 && (
								<div className="col-12 text-right">
									<button
										className="btn btn-secondary"
										disabled={(isLoading.type === 'AHEAD_SCHEDULE' && isLoading.status) || isLockSchedule}
										onClick={() => checkHandleAheadSchedule(ID, TeacherID)}
									>
										Lùi buổi học
										{isLoading.type === 'AHEAD_SCHEDULE' && isLoading.status && <Spin className="loading-base" />}
									</button>
								</div>
							)}
						{scheduleObj?.TeacherAttendanceID !== 0 && scheduleObj?.TeacherAttendanceID !== undefined && (
							<div style={{ color: '#dd4667', fontSize: 14, width: '100%', textAlign: 'left' }}>Đã điểm danh</div>
						)}
					</div>
				</Form>
			</div>
		</Panel>
	)
}

ScheduleOfflineItem.defaultProps = {
	handleChangeValueSchedule: null,
	handleChangeStatusSchedule: null,
	handleAheadSchedule: null,
	scheduleObj: {},
	isUnavailable: false,
	isEditView: false,
	isLoading: { type: '', status: false },
	isClickAheadSchedule: false,
	optionTeacherList: [],
	optionStudyTime: [],
	saveBeforeAheadSchedule: true
}

export default ScheduleOfflineItem
