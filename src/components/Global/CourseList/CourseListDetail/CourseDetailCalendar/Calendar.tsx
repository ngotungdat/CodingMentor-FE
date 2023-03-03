import { Button, Popover, Spin } from 'antd'
import moment from 'moment'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import CloseZoomRoom from '~/components/Global/ManageZoom/ZoomRoom/CloseZoomRoom'
import ZoomRecordModal from '~/components/Global/ManageZoom/ZoomRoom/ZoomRecordModal'
import { useWrap } from '~/context/wrap'
import CourseDetailUploadFile from './CourseDetailUploadFile'
import { Cast, LogIn, Power } from 'react-feather'
import { rollUpApi } from '~/apiBase'
import { zoomRoomApiNew } from '~/apiBase/zoom/new-zoom'

moment.locale('vi-VN')

const localizer = momentLocalizer(moment)

CDCalendar.propTypes = {
	isLoading: PropTypes.shape({
		type: PropTypes.string.isRequired,
		status: PropTypes.bool.isRequired
	}),
	eventList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			start: PropTypes.instanceOf(Date).isRequired,
			end: PropTypes.instanceOf(Date).isRequired,
			resource: PropTypes.object
		})
	).isRequired,
	isLoaded: PropTypes.bool,
	isUploadDocument: PropTypes.bool,
	handleUploadDocument: PropTypes.func,
	isGetRecordList: PropTypes.bool,
	isStudyZoom: PropTypes.bool,
	fetchStudyZoom: PropTypes.func,
	handleStudyZoom: PropTypes.func,
	handleEndStudyZoom: PropTypes.func,
	isBranch: PropTypes.bool,
	fetchScheduleStudyTeacher: PropTypes.func,
	setIsLoadingCalendar: PropTypes.func,
	isLoadingCalendar: PropTypes.bool
}

CDCalendar.defaultProps = {
	isLoading: { type: '', status: false },
	isLoadingCalendar: false,
	eventList: [],
	isLoaded: false,
	isUploadDocument: false,
	handleUploadDocument: null,
	isGetRecordList: false,
	isStudyZoom: false,
	fetchStudyZoom: null,
	handleStudyZoom: null,
	handleEndStudyZoom: null,
	isBranch: false,
	fetchScheduleStudyTeacher: null
}

function CDCalendar(props) {
	const router = useRouter()
	const {
		isLoading,
		eventList,
		isLoaded,
		isUploadDocument,
		handleUploadDocument,
		isGetRecordList,
		isStudyZoom,
		handleStudyZoom,
		fetchStudyZoom,
		handleEndStudyZoom,
		isBranch,
		fetchScheduleStudyTeacher,
		setIsLoadingCalendar,
		isLoadingCalendar
	} = props

	const [courseScheduleID, setCourseScheduleID] = useState(0)
	const [isModalVisible, setIsModalVisible] = useState<{ type: 'record' | 'document' | ''; status: boolean }>({ type: '', status: false })

	const openModal = (type: 'record' | 'document') => setIsModalVisible({ type, status: true })

	const closeModal = () => setIsModalVisible({ type: '', status: false })

	const { userInformation, showNoti } = useWrap()

	const middlewareOpenModal = (ID: number, type: 'record' | 'document') => {
		setCourseScheduleID(ID)
		openModal(type)
	}

	const checkFetchStudyZoom = (date) => {
		if (!fetchStudyZoom) return
		fetchStudyZoom(date)
	}

	const checkHandleStudyZoom = (data: { idx: number; btnID: number; btnName: string; scheduleID: number }) => {
		if (!handleStudyZoom) return
		handleStudyZoom(data)
	}

	const moveToTest = (data) => {
		router.push({
			pathname: '/exam/exam-review',
			query: {
				examID: data.ExamTopicID,
				packageDetailID: data.CourseID,
				type: 'check', // Kiểm tra,
				CurriculumDetailID: data.CurriculumsDetailID
			}
		})
	}

	// const checkTypeButtonStudyZoom = (data: { idx: number; btnID: number; btnName: string; scheduleID: number; dataDetail: any }) => {
	// 	const { btnID, btnName, dataDetail } = data
	// 	if (!btnID) return
	// 	// HỌC VIÊN
	// 	if (userInformation?.RoleID === 3) {
	// 		if (btnID === 2) {
	// 			return (
	// 				<Button
	// 					size="middle"
	// 					className="mt-3 btn-success w-100"
	// 					onClick={() => {
	// 						checkHandleStudyZoom(data)
	// 					}}
	// 				>
	// 					{btnName}
	// 				</Button>
	// 			)
	// 		}
	// 		if (btnID === 3) {
	// 			return (
	// 				<Button disabled size="middle" className="mt-3 btn-light w-100">
	// 					{btnName}
	// 				</Button>
	// 			)
	// 		}
	// 		if (btnID === 4) {
	// 			return (
	// 				<Button
	// 					size="middle"
	// 					className="mt-3 btn-success w-100"
	// 					onClick={() => {
	// 						moveToTest(dataDetail)
	// 					}}
	// 				>
	// 					{btnName}
	// 				</Button>
	// 			)
	// 		}
	// 	}
	// 	// GIÁO VIÊN
	// 	if (userInformation?.RoleID === 2 || userInformation?.RoleID === 5) {
	// 		if (btnID === 1) {
	// 			return (
	// 				<Button
	// 					size="middle"
	// 					className="mt-3 btn-warning w-100"
	// 					onClick={() => {
	// 						checkHandleStudyZoom(data)
	// 					}}
	// 				>
	// 					{btnName}
	// 				</Button>
	// 			)
	// 		}
	// 		if (btnID === 2) {
	// 			return (
	// 				<>
	// 					<Button
	// 						size="middle"
	// 						className="mt-3 btn-success w-100"
	// 						onClick={() => {
	// 							checkHandleStudyZoom(data)
	// 						}}
	// 					>
	// 						{btnName}
	// 					</Button>
	// 					<Button
	// 						size="middle"
	// 						className="btn-primary w-100"
	// 						onClick={() => {
	// 							if (typeof window !== 'undefined') {
	// 								const url = window.location.origin
	// 								navigator.clipboard.writeText(`${url}/course/zoom-view/${data.scheduleID}`)
	// 							}
	// 						}}
	// 						style={{ marginTop: 4 }}
	// 					>
	// 						Sao chép link zoom
	// 					</Button>
	// 					<CloseZoomRoom
	// 						isIcon={false}
	// 						handleClose={() => {
	// 							checkHandleStudyZoom({ ...data, btnID: 3 })
	// 						}}
	// 					/>
	// 				</>
	// 			)
	// 		}
	// 		if (btnID === 3) {
	// 			return (
	// 				<Button disabled size="middle" className="mt-3 btn-light w-100">
	// 					{btnName}
	// 				</Button>
	// 			)
	// 		}
	// 	}
	// }

	const getStrDate = (date) => {
		const nDate = new Date(date)
		return nDate.getDate() + '-' + (nDate.getMonth() + 1) + '-' + nDate.getFullYear()
	}

	const compare = (dateTimeA, dateTimeB) => {
		var momentA = moment(dateTimeA, 'DD/MM/YYYY')
		var momentB = moment(dateTimeB, 'DD/MM/YYYY')
		if (momentA > momentB) return 1
		else if (momentA < momentB) return -1
		else return 0
	}

	const styleEvent = ({ event }) => {
		const date = new Date()
		let checkDate = compare(getStrDate(event.start), getStrDate(date)) // -1: qua roi, 0: hom nay, 1: chua qua

		const studyTimeStart = moment(event.start).add(-15, 'minutes').format('HH:mm')
		const studyTimeEnd = moment(event.end).add(15, 'minutes').format('HH:mm')
		const studyTime = moment(date).format('HH:mm')

		const checkCreateZoom = () => {
			if (studyTimeStart < studyTime && studyTime < studyTimeEnd) {
				return true
			} else {
				return false
			}
		}

		const { ButtonID: btnID, ButtonName: btnName, idx, IsExam } = event.resource
		const { CurriculumDetailID, TeacherAttendanceID, IsRoomStart, ZoomRoomID, SignatureTeacher } = event.resource
		const { ID, CourseID, CourseName, RoomName, BranchName, TeacherName, SubjectName, LinkDocument, StudyTimeName } = event.resource

		const dataDetail = event.resource
		const attendZoom = async () => {
			const DATA_SUBMIT = [
				{
					StudentID: userInformation.UserInformationID,
					CourseID: dataDetail.CourseID,
					CourseScheduleID: dataDetail.ID,
					Date: new Date(),
					Note: '',
					StatusID: 1,
					LearningStatusID: 1
				}
			]
			const res = await rollUpApi.add(DATA_SUBMIT)
			if (res.status === 200) {
				window.open(dataDetail.SignatureStudent, '_blank')
			}
		}

		const createZoom = async (ID) => {
			setIsLoadingCalendar(true)
			try {
				const res = await zoomRoomApiNew.createZoom(ID)
				if (res.status === 200) {
					window.open(res.data.data.SignatureTeacher, '_blank')
					fetchScheduleStudyTeacher()
				}
			} catch (err) {
				showNoti('danger', err.message)
			} finally {
				setIsLoadingCalendar(false)
			}
		}

		const closeZoom = async (ID) => {
			setIsLoadingCalendar(true)
			try {
				const res = await zoomRoomApiNew.closeZoom(ID)
				if (res.status === 200) {
					fetchScheduleStudyTeacher()
				}
			} catch (err) {
				showNoti('danger', err.message)
			} finally {
				setIsLoadingCalendar(false)
			}
		}

		const content = (
			<div className="course-dt-event-info" style={{ maxWidth: 300 }}>
				<ul>
					{CourseName && (
						<li>
							<span>Khóa học:</span> {CourseName}
						</li>
					)}
					{SubjectName && (
						<li>
							<span>{IsExam ? 'Kiểm tra môn:' : 'Bài học:'} </span> {SubjectName}
						</li>
					)}
					{RoomName && (
						<li>
							<span>Phòng:</span> {RoomName}
						</li>
					)}
					{TeacherName && (
						<li>
							<span>GV:</span> {TeacherName}
						</li>
					)}
					{BranchName && (
						<li>
							<span>Trung tâm:</span> {BranchName}
						</li>
					)}
					{LinkDocument && (
						<li>
							<span>Tài liệu: </span>
							{LinkDocument ? (
								<a href={LinkDocument} target="_blank" download>
									<i>Click to download</i>
								</a>
							) : (
								'Trống'
							)}
						</li>
					)}
					{isGetRecordList && (
						<li>
							<Button size="middle" className="mt-3 btn-success w-100" onClick={() => middlewareOpenModal(parseInt(ID), 'record')}>
								Bản ghi buổi học
							</Button>
						</li>
					)}
					{isUploadDocument && (
						<li>
							<Button size="middle" className="mt-2 btn-warning w-100" onClick={() => middlewareOpenModal(parseInt(ID), 'document')}>
								Thêm tài liệu
							</Button>
						</li>
					)}

					{!!userInformation && (userInformation?.RoleID === 1 || userInformation?.RoleID === 2) && checkDate === 0 && checkCreateZoom() && (
						<>
							<Button
								size="middle"
								style={{ marginTop: 8, width: '100%' }}
								onClick={() => {
									// checkHandleStudyZoom(data)
									createZoom(ID)
								}}
								className="btn-primary"
							>
								<LogIn className="mr-2" />
								{!!ZoomRoomID ? 'Tạo lại' : 'Tạo phòng'}
							</Button>
						</>
					)}

					{checkDate === 0 && checkCreateZoom() && !!IsRoomStart && (
						<>
							<Button
								size="middle"
								style={{ marginTop: 8, width: '100%' }}
								onClick={() => {
									// checkHandleStudyZoom(data)
									{
										!!userInformation && userInformation?.RoleID === 3 ? attendZoom() : window.open(dataDetail.SignatureStudent, '_blank')
									}
								}}
								className="btn-secondary"
							>
								<Cast className="mr-2" />
								Tham gia phòng
							</Button>

							{!!userInformation && (userInformation?.RoleID === 1 || userInformation?.RoleID === 2) && (
								<Button
									size="middle"
									style={{ marginTop: 8, width: '100%' }}
									onClick={() => {
										closeZoom(ID)
									}}
									className="btn-danger"
								>
									<Power className="mr-2" />
									Đóng phòng học
								</Button>
							)}
						</>
					)}
				</ul>
			</div>
		)

		const childBranchContent = (e) => (
			<div className="course-dt-event-info" style={{ maxWidth: 300 }}>
				<ul>
					{e?.CourseName && (
						<li>
							<span>Khóa học:</span> {e?.CourseName}
						</li>
					)}
					{StudyTimeName && <li className="text-center">{e?.StudyTimeName}</li>}
					{SubjectName && (
						<li>
							<span>Môn học:</span> {e?.SubjectName}
						</li>
					)}
				</ul>
			</div>
		)

		const contentBranch = (
			<div className="course-dt-event-info" style={{ maxWidth: 300 }}>
				<ul>
					{!!event.resource.data && (
						<>
							{event.resource.data.map((e, index) => {
								return (
									<li className="mb-1">
										<div
											className="calendar-item"
											onClick={(e) => {
												e.stopPropagation()
												e.nativeEvent.stopImmediatePropagation()
											}}
											style={{
												backgroundColor: '#dd4667'
											}}
										>
											<Popover
												zIndex={999}
												title={`GV: ${e?.TeacherName}`}
												content={childBranchContent(e)}
												placement="rightTop"
												trigger={window.matchMedia('(max-width: 1199px)').matches ? 'click' : 'hover'}
											>
												<div className="course-dt-event-2 custom-mouse">
													<div className="time">GV: {e?.TeacherName}</div>
												</div>
											</Popover>
										</div>
									</li>
								)
							})}
						</>
					)}
				</ul>
			</div>
		)

		return (
			<div
				className="calendar-item"
				onClick={(e) => {
					e.stopPropagation()
					e.nativeEvent.stopImmediatePropagation()
				}}
				// 0 - ,1-Bắt đầu , 2-Vào lớp học, 3-Kết thúc
				style={{
					backgroundColor:
						TeacherAttendanceID !== 0
							? '#4DF6A5'
							: IsExam !== undefined && IsExam == true
							? '#C74AC9'
							: checkDate == 0
							? btnID == undefined || btnID == null || btnID == ''
								? '#333333'
								: btnID == 3
								? '#C94A4F'
								: '#333333'
							: checkDate == -1
							? '#C94A4F'
							: '#0A89FF',
					color: '#fff'
				}}
			>
				<Popover
					zIndex={999}
					title={`Ca: ${StudyTimeName}`}
					content={isBranch ? contentBranch : content}
					placement="rightTop"
					trigger={window.matchMedia('(max-width: 1199px)').matches ? 'click' : 'hover'}
				>
					<div className="course-dt-event">
						<div className="time text-center">{StudyTimeName}</div>
					</div>
				</Popover>
			</div>
		)
	}

	const styleAgenda = ({ event }) => {
		const { StudyTimeName, ButtonID: btnID, ButtonName: btnName, IsExam, CurriculumsDetailID, ZoomRoomID, IsRoomStart } = event.resource
		const { ID, RoomName, idx, CourseName, BranchName, TeacherName, SubjectName, LinkDocument } = event.resource

		const date = new Date()
		let checkDate = compare(getStrDate(event.start), getStrDate(date)) // -1: qua roi, 0: hom nay, 1: chua qua

		const studyTimeStart = moment(event.start).add(-15, 'minutes').format('HH:mm')
		const studyTimeEnd = moment(event.end).add(15, 'minutes').format('HH:mm')
		const studyTime = moment(date).format('HH:mm')

		const checkCreateZoom = () => {
			if (studyTimeStart < studyTime && studyTime < studyTimeEnd) {
				return true
			} else {
				return false
			}
		}
		const attendZoom = async () => {
			const DATA_SUBMIT = [
				{
					StudentID: userInformation.UserInformationID,
					CourseID: dataDetail.CourseID,
					CourseScheduleID: dataDetail.ID,
					Date: new Date(),
					Note: '',
					StatusID: 1,
					LearningStatusID: 1
				}
			]
			const res = await rollUpApi.add(DATA_SUBMIT)
			if (res.status === 200) {
				window.open(dataDetail.SignatureStudent, '_blank')
			}
		}

		const createZoom = async (ID) => {
			setIsLoadingCalendar(true)
			try {
				const res = await zoomRoomApiNew.createZoom(ID)
				if (res.status === 200) {
					window.open(res.data.data.SignatureTeacher, '_blank')
					fetchScheduleStudyTeacher()
				}
			} catch (err) {
				showNoti('danger', err.message)
			} finally {
				setIsLoadingCalendar(false)
			}
		}

		const closeZoom = async (ID) => {
			setIsLoadingCalendar(true)
			try {
				const res = await zoomRoomApiNew.closeZoom(ID)
				if (res.status === 200) {
					fetchScheduleStudyTeacher()
				}
			} catch (err) {
				showNoti('danger', err.message)
			} finally {
				setIsLoadingCalendar(false)
			}
		}

		const dataDetail = event.resource
		return (
			<div className="course-dt-event">
				<div className="time text-center">{StudyTimeName}</div>
				<div className="course-dt-event-info">
					<ul>
						{CourseName && (
							<li>
								<span>Khóa học:</span> {CourseName}
							</li>
						)}
						{SubjectName && (
							<li>
								<span>{IsExam ? 'Kiểm tra môn:' : 'Môn:'} </span> {SubjectName}
							</li>
						)}
						{RoomName && (
							<li>
								<span>Phòng:</span> {RoomName}
							</li>
						)}
						{TeacherName && (
							<li>
								<span>GV:</span> {TeacherName}
							</li>
						)}
						{BranchName && (
							<li>
								<span>Trung tâm:</span> {BranchName}
							</li>
						)}
						{LinkDocument && (
							<li>
								<span>Tài liệu: </span>
								{LinkDocument ? (
									<a href={LinkDocument} target="_blank" download>
										<i>Click to download</i>
									</a>
								) : (
									'Trống'
								)}
							</li>
						)}
						{isGetRecordList && (
							<li>
								<Button size="middle" className="mt-3 btn-success w-100" onClick={() => middlewareOpenModal(parseInt(ID), 'record')}>
									Bản ghi buổi học
								</Button>
							</li>
						)}
						{isUploadDocument && (
							<li>
								<Button size="middle" className="mt-2 btn-warning w-100" onClick={() => middlewareOpenModal(parseInt(ID), 'document')}>
									Thêm tài liệu
								</Button>
							</li>
						)}
						{!!userInformation && (userInformation?.RoleID === 1 || userInformation?.RoleID === 2) && checkDate === 0 && checkCreateZoom() && (
							<>
								<Button
									size="middle"
									style={{ marginTop: 8, width: '100%' }}
									onClick={() => {
										// checkHandleStudyZoom(data)
										createZoom(ID)
									}}
									className="btn-primary"
								>
									<LogIn className="mr-2" />
									{!!ZoomRoomID ? 'Tạo lại' : 'Tạo phòng'}
								</Button>
							</>
						)}

						{checkDate === 0 && checkCreateZoom() && !!IsRoomStart && (
							<>
								<Button
									size="middle"
									style={{ marginTop: 8, width: '100%' }}
									onClick={() => {
										// checkHandleStudyZoom(data)
										{
											!!userInformation && userInformation?.RoleID === 3 ? attendZoom() : window.open(dataDetail.SignatureStudent, '_blank')
										}
									}}
									className="btn-secondary"
								>
									<Cast className="mr-2" />
									Tham gia phòng
								</Button>

								{!!userInformation && (userInformation?.RoleID === 1 || userInformation?.RoleID === 2) && (
									<Button
										size="middle"
										style={{ marginTop: 8, width: '100%' }}
										onClick={() => {
											closeZoom(ID)
										}}
										className="btn-danger"
									>
										<Power className="mr-2" />
										Đóng phòng học
									</Button>
								)}
							</>
						)}
					</ul>
				</div>
			</div>
		)
	}

	const styleDay = ({ event }) => {
		const dataDetail = event.resource

		const {
			StudyTimeName,
			ButtonID: btnID,
			ButtonName: btnName,
			CurriculumsDetailID,
			TeacherAttendanceID,
			ZoomRoomID,
			IsRoomStart
		} = event.resource
		const { ID, CourseID, LinkDocument, IsExam, idx, CourseName, RoomName, BranchName, TeacherName, SubjectName } = event.resource

		const date = new Date()
		let checkDate = compare(getStrDate(event.start), getStrDate(date)) // -1: qua roi, 0: hom nay, 1: chua qua

		const studyTimeStart = moment(event.start).add(-15, 'minutes').format('HH:mm')
		const studyTimeEnd = moment(event.end).add(15, 'minutes').format('HH:mm')
		const studyTime = moment(date).format('HH:mm')

		console.log('studyTimeStart: ', studyTimeStart)
		console.log('studyTimeEnd: ', studyTimeEnd)
		console.log('studyTime: ', studyTime)
		console.log('checkDate: ', checkDate)
		console.log('studyTimeStart < studyTime: ', studyTimeStart < studyTime)
		console.log('studyTime < studyTimeEnd: ', studyTime < studyTimeEnd)

		const checkCreateZoom = () => {
			if (studyTimeStart < studyTime && studyTime < studyTimeEnd) {
				return true
			} else {
				return false
			}
		}
		const attendZoom = async () => {
			const DATA_SUBMIT = [
				{
					StudentID: userInformation.UserInformationID,
					CourseID: dataDetail.CourseID,
					CourseScheduleID: dataDetail.ID,
					Date: new Date(),
					Note: '',
					StatusID: 1,
					LearningStatusID: 1
				}
			]
			const res = await rollUpApi.add(DATA_SUBMIT)
			if (res.status === 200) {
				window.open(dataDetail.SignatureStudent, '_blank')
			}
		}

		const createZoom = async (ID) => {
			setIsLoadingCalendar(true)
			try {
				const res = await zoomRoomApiNew.createZoom(ID)
				if (res.status === 200) {
					window.open(res.data.data.SignatureTeacher, '_blank')
					fetchScheduleStudyTeacher()
				}
			} catch (err) {
				showNoti('danger', err.message)
			} finally {
				setIsLoadingCalendar(false)
			}
		}

		const closeZoom = async (ID) => {
			setIsLoadingCalendar(true)
			try {
				const res = await zoomRoomApiNew.closeZoom(ID)
				if (res.status === 200) {
					fetchScheduleStudyTeacher()
				}
			} catch (err) {
				showNoti('danger', err.message)
			} finally {
				setIsLoadingCalendar(false)
			}
		}

		const content = (
			<div className="course-dt-event-info" style={{ maxWidth: 300 }}>
				<ul>
					{CourseName && (
						<li>
							<span>Khóa học:</span> {CourseName}
						</li>
					)}
					{SubjectName && (
						<li>
							<span>{IsExam ? 'Kiểm tra môn:' : 'Môn:'} </span> {SubjectName}
						</li>
					)}
					{RoomName && (
						<li>
							<span>Phòng:</span> {RoomName}
						</li>
					)}
					{TeacherName && (
						<li>
							<span>GV:</span> {TeacherName}
						</li>
					)}
					{BranchName && (
						<li>
							<span>Trung tâm:</span> {BranchName}
						</li>
					)}
					{LinkDocument && (
						<li>
							<span>Tài liệu: </span>
							{LinkDocument ? (
								<a href={LinkDocument} target="_blank" download>
									<i>Click to download</i>
								</a>
							) : (
								'Trống'
							)}
						</li>
					)}
					{isGetRecordList && (
						<li>
							<Button size="middle" className="mt-3 btn-success w-100" onClick={() => middlewareOpenModal(parseInt(ID), 'record')}>
								Bản ghi buổi học
							</Button>
						</li>
					)}
					{isUploadDocument && (
						<li>
							<Button size="middle" className="mt-2 btn-warning w-100" onClick={() => middlewareOpenModal(parseInt(ID), 'document')}>
								Thêm tài liệu
							</Button>
						</li>
					)}
					{!!userInformation && (userInformation?.RoleID === 1 || userInformation?.RoleID === 2) && checkDate === 0 && checkCreateZoom() && (
						<>
							<Button
								size="middle"
								style={{ marginTop: 8, width: '100%' }}
								onClick={() => {
									// checkHandleStudyZoom(data)
									createZoom(ID)
								}}
								className="btn-primary"
							>
								<LogIn className="mr-2" />
								{!!ZoomRoomID ? 'Tạo lại' : 'Tạo phòng'}
							</Button>
						</>
					)}

					{checkDate === 0 && checkCreateZoom() && !!IsRoomStart && (
						<>
							<Button
								size="middle"
								style={{ marginTop: 8, width: '100%' }}
								onClick={() => {
									!!userInformation && userInformation?.RoleID === 3 ? attendZoom() : window.open(dataDetail.SignatureStudent, '_blank')
								}}
								className="btn-secondary"
							>
								<Cast className="mr-2" />
								Tham gia phòng
							</Button>

							{!!userInformation && (userInformation?.RoleID === 1 || userInformation?.RoleID === 2) && (
								<Button
									size="middle"
									style={{ marginTop: 8, width: '100%' }}
									onClick={() => {
										closeZoom(ID)
									}}
									className="btn-danger"
								>
									<Power className="mr-2" />
									Đóng phòng học
								</Button>
							)}
						</>
					)}
				</ul>
			</div>
		)

		const childBranchContent = (e) => (
			<div className="course-dt-event-info" style={{ maxWidth: 300 }}>
				<ul>
					{e?.CourseName && (
						<li>
							<span>Khóa học:</span> {e?.CourseName}
						</li>
					)}
					{StudyTimeName && <li className="text-center">{e?.StudyTimeName}</li>}
					{SubjectName && (
						<li>
							<span>Môn học:</span> {e?.SubjectName}
						</li>
					)}
				</ul>
			</div>
		)

		const contentBranch = (
			// <div className="course-dt-event-info" style={{ maxWidth: 300 }}>
			// 	<ul>
			// 		{!!event.resource.data && (
			// 			<>
			// 				{event.resource.data.map((e, index) => {
			// 					return (
			// 						<li className="mb-1">
			// 							<div
			// 								className="calendar-item"
			// 								onClick={(e) => {
			// 									e.stopPropagation()
			// 									e.nativeEvent.stopImmediatePropagation()
			// 								}}
			// 								style={{
			// 									backgroundColor: '#dd4667'
			// 								}}
			// 							>
			// 								<Popover
			// 									zIndex={999}
			// 									title={`GV: ${e?.TeacherName}`}
			// 									content={() => childBranchContent(e)}
			// 									placement="rightTop"
			// 									trigger={window.matchMedia('(max-width: 1199px)').matches ? 'click' : 'hover'}
			// 								>
			// 									<div className="course-dt-event-2 custom-mouse">
			// 										<div className="time">GV: {e?.TeacherName}</div>
			// 									</div>
			// 								</Popover>
			// 							</div>
			// 						</li>
			// 					)
			// 				})}
			// 			</>
			// 		)}
			// 	</ul>
			// </div>

			<div className="course-dt-event-info" style={{ maxWidth: 300 }}>
				<ul>
					{CourseName && (
						<li>
							<span>Khóa học:</span> {CourseName}
						</li>
					)}
					{StudyTimeName && (
						<li>
							<span>Ca:</span> {StudyTimeName}
						</li>
					)}
					{SubjectName && (
						<li>
							<span>Môn học:</span> {SubjectName}
						</li>
					)}
					{TeacherName && (
						<li>
							<span>GV:</span> {TeacherName}
						</li>
					)}
					{LinkDocument && (
						<li>
							<span>Tài liệu: </span>
							{LinkDocument ? (
								<a href={LinkDocument} target="_blank" download>
									<i>Click to download</i>
								</a>
							) : (
								'Trống'
							)}
						</li>
					)}
					{isGetRecordList && (
						<li>
							<Button size="middle" className="mt-3 btn-success w-100" onClick={() => middlewareOpenModal(parseInt(ID), 'record')}>
								Bản ghi buổi học
							</Button>
						</li>
					)}
					{isUploadDocument && (
						<li>
							<Button size="middle" className="mt-2 btn-warning w-100" onClick={() => middlewareOpenModal(parseInt(ID), 'document')}>
								Thêm tài liệu
							</Button>
						</li>
					)}
					{!!userInformation && (userInformation?.RoleID === 1 || userInformation?.RoleID === 2) && checkDate === 0 && checkCreateZoom() && (
						<>
							<Button
								size="middle"
								style={{ marginTop: 8, width: '100%' }}
								onClick={() => {
									// checkHandleStudyZoom(data)
									createZoom(ID)
								}}
								className="btn-primary"
							>
								<LogIn className="mr-2" />
								{!!ZoomRoomID ? 'Tạo lại' : 'Tạo phòng'}
							</Button>
						</>
					)}

					{checkDate === 0 && checkCreateZoom() && !!IsRoomStart && (
						<>
							<Button
								size="middle"
								style={{ marginTop: 8, width: '100%' }}
								onClick={() => {
									!!userInformation && userInformation?.RoleID === 3 ? attendZoom() : window.open(dataDetail.SignatureStudent, '_blank')
								}}
								className="btn-secondary"
							>
								<Cast className="mr-2" />
								Tham gia phòng
							</Button>

							{!!userInformation && (userInformation?.RoleID === 1 || userInformation?.RoleID === 2) && (
								<Button
									size="middle"
									style={{ marginTop: 8, width: '100%' }}
									onClick={() => {
										closeZoom(ID)
									}}
									className="btn-danger"
								>
									<Power className="mr-2" />
									Đóng phòng học
								</Button>
							)}
						</>
					)}
				</ul>
			</div>
		)

		return (
			<div
				className="calendar-item"
				onClick={(e) => {
					e.stopPropagation()
					e.nativeEvent.stopImmediatePropagation()
				}}
				style={{
					backgroundColor:
						!!TeacherAttendanceID && TeacherAttendanceID !== 0
							? '#80DEEA'
							: IsExam !== undefined && IsExam == true
							? '#FF9800'
							: checkDate == 0
							? btnID == undefined || btnID == null || btnID == ''
								? '#fac10a'
								: btnID == 3
								? '#bdbdbd'
								: '#fac10a'
							: checkDate == -1
							? '#bdbdbd'
							: '#3174ad'
				}}
			>
				<Popover
					zIndex={999}
					title={`Ca: ${StudyTimeName}`}
					content={isBranch ? contentBranch : content}
					placement="bottomLeft"
					trigger={window.matchMedia('(max-width: 1199px)').matches ? 'click' : 'hover'}
				>
					<div className="course-dt-event">
						<div className="time text-center">{StudyTimeName}</div>
					</div>
				</Popover>
			</div>
		)
	}
	const customEventPropGetter = (event, start, end, isSelected) => {
		if (event.resource.IsExam) {
			return {
				className: 'bg-warning text-dark'
			}
		}
	}

	useEffect(() => {
		const nodes = document.getElementsByClassName('rbc-toolbar')

		if (nodes.length > 0) {
			const newDiv = document.createElement('div')
			// newDiv.add
		}
	}, [])

	return (
		<div className="wrap-calendar">
			<Spin spinning={!!isLoadingCalendar} size="large" wrapperClassName="calendar-loading">
				{/* @ts-ignore */}
				<Calendar
					className="custom-calendar"
					localizer={localizer}
					messages={{
						week: 'Tuần',
						work_week: '',
						day: 'Ngày',
						month: 'Tháng',
						previous: 'Trước',
						next: 'Sau',
						today: 'Hôm nay',
						agenda: 'Agenda',
						showMore: (total) => `+${total} Xem thêm`
					}}
					events={eventList}
					startAccessor="start"
					endAccessor="end"
					style={{ minHeight: 600 }}
					popup
					defaultView="month"
					showMultiDayTimes={false}
					onRangeChange={checkFetchStudyZoom}
					eventPropGetter={customEventPropGetter}
					handleDragStart={() => null}
					formats={{
						agendaDateFormat: 'DD/MM/YYYY',
						monthHeaderFormat: (date) => {
							moment.locale('en')
							return moment(date).format('MMMM YYYY')
						},
						dayHeaderFormat: (date) => {
							const dayArr = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']
							const dayOffWeek = dayArr[moment(date).day()]
							return `${dayOffWeek} - ${moment(date).format('DD/MM')}`
						},
						dayRangeHeaderFormat: ({ start, end }) => `${moment(start).format('DD/MM')} - ${moment(end).format('DD/MM')}`
					}}
					components={{
						event: styleEvent,
						day: {
							event: styleDay
						},
						agenda: { event: styleAgenda }
					}}
					// messages={{}}
				/>
			</Spin>
			{isUploadDocument && (
				<CourseDetailUploadFile
					isLoading={isLoading}
					isModalVisible={isModalVisible.type === 'document' && isModalVisible.status}
					handleCloseModal={closeModal}
					handleUploadDocument={handleUploadDocument}
					courseScheduleID={courseScheduleID}
				/>
			)}
			{isGetRecordList && (
				<ZoomRecordModal
					scheduleID={courseScheduleID}
					isOpenModal={isModalVisible.type === 'record' && isModalVisible.status}
					onCloseModal={closeModal}
				/>
			)}

			<div className="row m-0 p-0 pt-3" style={{ alignItems: 'center' }}>
				<div style={{ width: 15, height: 15, backgroundColor: '#0A89FF', marginRight: 10, borderRadius: 4 }} />
				<div>Chưa học</div>
				<div style={{ width: 15, height: 15, backgroundColor: '#333333', marginRight: 10, marginLeft: 10, borderRadius: 4 }} />
				<div>Buổi học trong ngày</div>
				<div style={{ width: 15, height: 15, backgroundColor: '#C74AC9', marginRight: 10, marginLeft: 10, borderRadius: 4 }} />
				<div>Kiểm tra</div>
				<div style={{ width: 15, height: 15, backgroundColor: '#C94A4F', marginRight: 10, marginLeft: 10, borderRadius: 4 }} />
				<div>Chưa điểm danh</div>
				<div style={{ width: 15, height: 15, backgroundColor: '#4DF6A5', marginRight: 10, marginLeft: 10, borderRadius: 4 }} />
				<div>Đã điểm danh</div>
			</div>
		</div>
	)
}
export default CDCalendar
