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
moment.locale('vi-VN')
console.log("🚀 ~ file: Calendar.tsx ~ line 13 ~ moment.locale('vi-VN')", moment.locale('vi-VN'))
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
	isBranch: PropTypes.bool
}

CDCalendar.defaultProps = {
	isLoading: { type: '', status: false },
	eventList: [],
	isLoaded: false,
	isUploadDocument: false,
	handleUploadDocument: null,
	isGetRecordList: false,
	isStudyZoom: false,
	fetchStudyZoom: null,
	handleStudyZoom: null,
	handleEndStudyZoom: null,
	isBranch: false
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
		fetchStudyZoom,
		handleStudyZoom,
		handleEndStudyZoom,
		isBranch
	} = props

	const [courseScheduleID, setCourseScheduleID] = useState(0)
	const [isModalVisible, setIsModalVisible] = useState<{
		type: 'record' | 'document' | ''
		status: boolean
	}>({
		type: '',
		status: false
	})
	const openModal = (type: 'record' | 'document') =>
		setIsModalVisible({
			type,
			status: true
		})
	const closeModal = () =>
		setIsModalVisible({
			type: '',
			status: false
		})
	const { userInformation } = useWrap()

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

	const checkTypeButtonStudyZoom = (data: { idx: number; btnID: number; btnName: string; scheduleID: number; dataDetail: any }) => {
		const { btnID, btnName, dataDetail } = data
		if (!btnID) return
		// HỌC VIÊN
		if (userInformation?.RoleID === 3) {
			if (btnID === 2) {
				return (
					<Button
						size="middle"
						className="mt-3 btn-success w-100"
						onClick={() => {
							checkHandleStudyZoom(data)
						}}
					>
						{btnName}
					</Button>
				)
			}
			if (btnID === 3) {
				return (
					<Button disabled size="middle" className="mt-3 btn-light w-100">
						{btnName}
					</Button>
				)
			}
			if (btnID === 4) {
				return (
					<Button
						size="middle"
						className="mt-3 btn-success w-100"
						onClick={() => {
							moveToTest(dataDetail)
						}}
					>
						{btnName}
					</Button>
				)
			}
		}
		// GIÁO VIÊN
		if (userInformation?.RoleID === 2 || userInformation?.RoleID === 5) {
			if (btnID === 1) {
				return (
					<Button
						size="middle"
						className="mt-3 btn-warning w-100"
						onClick={() => {
							checkHandleStudyZoom(data)
						}}
					>
						{btnName}
					</Button>
				)
			}
			if (btnID === 2) {
				return (
					<>
						<Button
							size="middle"
							className="mt-3 btn-success w-100"
							onClick={() => {
								checkHandleStudyZoom(data)
							}}
						>
							{btnName}
						</Button>
						<Button
							size="middle"
							className="btn-primary w-100"
							onClick={() => {
								if (typeof window !== 'undefined') {
									const url = window.location.origin
									navigator.clipboard.writeText(`${url}/course/zoom-view/${data.scheduleID}`)
								}
							}}
							style={{ marginTop: 4 }}
						>
							Sao chép link zoom
						</Button>
						<CloseZoomRoom
							isIcon={false}
							handleClose={() => {
								checkHandleStudyZoom({ ...data, btnID: 3 })
							}}
						/>
					</>
				)
			}
			if (btnID === 3) {
				return (
					<Button disabled size="middle" className="mt-3 btn-light w-100">
						{btnName}
					</Button>
				)
			}
		}
	}

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

		const {
			ID,
			CourseID,
			CourseName,
			RoomName,
			BranchName,
			TeacherName,
			SubjectName,
			LinkDocument,
			//
			StudyTimeName,
			// ZOOM
			ButtonID: btnID,
			ButtonName: btnName,
			idx,
			IsExam,
			CurriculumDetailID,
			TeacherAttendanceID,
			data
		} = event.resource

		const dataDetail = event.resource
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
					{isStudyZoom && (
						<li>
							{checkTypeButtonStudyZoom({
								idx,
								btnID,
								btnName,
								scheduleID: ID,
								dataDetail
							})}
						</li>
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
		const {
			ID,
			RoomName,
			CourseName,
			BranchName,
			TeacherName,
			SubjectName,
			LinkDocument,
			//
			StudyTimeName,
			// ZOOM
			ButtonID: btnID,
			ButtonName: btnName,
			idx,
			IsExam,
			CurriculumsDetailID
		} = event.resource

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
						{isStudyZoom && (
							<li>
								{checkTypeButtonStudyZoom({
									idx,
									btnID,
									btnName,
									scheduleID: ID,
									dataDetail
								})}
							</li>
						)}
					</ul>
				</div>
			</div>
		)
	}

	const styleDay = ({ event }) => {
		const dataDetail = event.resource

		const {
			ID,
			CourseID,
			CourseName,
			RoomName,
			BranchName,
			TeacherName,
			SubjectName,
			LinkDocument,
			StudyTimeName,
			ButtonID: btnID,
			ButtonName: btnName,
			idx,
			IsExam,
			CurriculumsDetailID
		} = event.resource
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
					{isStudyZoom && (
						<li>
							{checkTypeButtonStudyZoom({
								idx,
								btnID,
								btnName,
								scheduleID: ID,
								dataDetail
							})}
						</li>
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
				onClick={(e) => {
					e.stopPropagation()
					e.nativeEvent.stopImmediatePropagation()
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
			<Spin spinning={!isLoaded} size="large" wrapperClassName="calendar-loading">
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
