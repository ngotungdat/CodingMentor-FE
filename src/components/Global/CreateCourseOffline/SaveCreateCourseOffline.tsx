import { Modal, Spin } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { numberWithCommas } from '~/utils/functions'
const SaveCreateCourseOffline = (props) => {
	const { isLoading, isEdit, saveInfo, handleFetchDataToSave, handleSaveCourse, scheduleShow } = props
	const [isModalVisible, setIsModalVisible] = useState(false)
	const openModal = () => setIsModalVisible(true)
	const closeModal = () => setIsModalVisible(false)
	const checkHandleFetchDataToSave = () => {
		if (!handleFetchDataToSave) return
		handleFetchDataToSave()
	}
	const checkHandleSaveCourse = () => {
		if (!handleSaveCourse) return
		handleSaveCourse().then((res) => {
			if (res && res.status === 200) {
				closeModal()
			}
		})
	}
	const renderScheduleList = () => {
		return Object.keys(scheduleShow).map((date, idx) => (
			<div
				className={`create-course-save-list-item ${
					scheduleShow[date].some((obj) => obj.isValid) ? 'create-course-save-list-item-error' : ''
				}`}
				key={idx}
			>
				<span>
					{scheduleShow[date][0]?.dayOffWeek} - {moment(date).format('DD/MM/YYYY')}: {}
				</span>
				<ul>
					{scheduleShow[date]
						.sort((a, b) => a.StudyTimeID - b.StudyTimeID)
						.map((s, idx) => (
							<li key={idx}>
								<span>{s.studyTimeName}</span>
								<p className="mb-0">Giáo viên: {s.teacherName}</p>
								<p className="mb-0">Phòng học: {s.RoomName}</p>
							</li>
						))}
				</ul>
			</div>
		))
	}
	return (
		<>
			<button
				type="button"
				className="btn btn-success"
				onClick={() => {
					openModal()
					checkHandleFetchDataToSave()
				}}
			>
				Lưu
			</button>
			{
				// isEdit ? (
				<Modal
					style={{ top: 20 }}
					className={`${!isEdit ? 'create-course-save modal-scroll' : ''}`}
					title={isEdit ? 'Cập nhật lớp học' : 'Thông tin lớp học'}
					visible={isModalVisible}
					onCancel={closeModal}
					footer={
						<button
							className="btn btn-primary w-100"
							onClick={checkHandleSaveCourse}
							disabled={isLoading.type == 'SAVE_COURSE' && isLoading.status}
						>
							{isEdit ? 'Cập nhật' : 'Lưu tất cả'}
							{isLoading.type == 'SAVE_COURSE' && isLoading.status && <Spin className="loading-base" />}
						</button>
					}
					width={isEdit ? 600 : 800}
				>
					<div className={`create-course-save-info ${!isEdit ? 'box-form' : ''}`}>
						<div className="row">
							{!isEdit && (
								<>
									{!!saveInfo?.isTutoring && (
										<div className="col-md-12 col-12">
											<div className="item">
												<p>
													<span>Loại:</span>
													<span>Khoá dạy kèm</span>
												</p>
											</div>
										</div>
									)}
									<div className="col-md-12 col-12">
										<div className="item">
											<p>
												<span>Tên lớp học:</span>
												<span>{saveInfo.CourseName}</span>
											</p>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="item">
											<p>
												<span>Trung tâm:</span>
												<span>{saveInfo.BranchName}</span>
											</p>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="item">
											<p>
												<span>Ca:</span>
												<span>{saveInfo.StudyTimeName}</span>
											</p>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="item">
											<p>
												<span>Thứ:</span>
												<span>{saveInfo.DaySelectedName}</span>
											</p>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="item">
											<p>
												<span>Giáo trình:</span>
												<span>{saveInfo.CurriculumName}</span>
											</p>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="item">
											<p>
												<span>Chương trình học:</span>
												<span>{saveInfo.ProgramName}</span>
											</p>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="item">
											<p>
												<span>Giáo viên:</span>
												<span>{saveInfo.TeacherName}</span>
											</p>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="item">
											<p>
												<span>Giá lớp học:</span>
												<span>{numberWithCommas(saveInfo.Price)} AUD</span>
											</p>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="item">
											<p>
												<span>Lương/buổi:</span>
												<span>{numberWithCommas(saveInfo.SalaryOfLesson)} AUD</span>
											</p>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="item">
											<p>
												<span>Ngày bắt đầu:</span>
												<span>{moment(saveInfo.StartDay).format('DD/MM/YYYY')}</span>
											</p>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="item">
											<p>
												<span>Ngày kết thúc:</span>
												<span>{moment(saveInfo.EndDay).format('DD/MM/YYYY')}</span>
											</p>
										</div>
									</div>
								</>
							)}
							{isEdit ? (
								<div className="col-md-12 col-12">
									<div className="item">
										<p style={{ marginBottom: 0 }}>
											<span>Những buổi học đã thay đổi:</span>
										</p>
										<div className="create-course-save-list">{renderScheduleList()}</div>
									</div>
								</div>
							) : (
								<div className="col-md-12 col-12">
									<div className="item">
										<p style={{ marginBottom: 0 }}>
											<span>Lịch học tổng quát:</span>
										</p>
										<div className="create-course-save-list">{renderScheduleList()}</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</Modal>
			}
		</>
	)
}

SaveCreateCourseOffline.propTypes = {
	isLoading: PropTypes.shape({
		type: PropTypes.string.isRequired,
		status: PropTypes.bool.isRequired
	}),
	isEdit: PropTypes.bool,
	scheduleShow: PropTypes.shape({}),
	saveInfo: PropTypes.shape({
		CourseName: PropTypes.string,
		BranchName: PropTypes.string,
		ProgramName: PropTypes.string,
		TeacherName: PropTypes.string,
		CurriculumName: PropTypes.string,
		DaySelectedName: PropTypes.string,
		StudyTimeName: PropTypes.string,
		EndDay: PropTypes.string
	}),
	handleSaveCourse: PropTypes.func,
	handleFetchDataToSave: PropTypes.func
}
SaveCreateCourseOffline.defaultProps = {
	isLoading: { type: '', status: false },
	isEdit: false,
	scheduleShow: {},
	saveInfo: {},
	handleSaveCourse: null,
	handleFetchDataToSave: null
}
export default SaveCreateCourseOffline
