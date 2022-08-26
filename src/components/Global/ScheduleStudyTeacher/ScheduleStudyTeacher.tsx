import { Card } from 'antd'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { scheduleZoomApi, zoomRoomApi } from '~/apiBase'
import TitlePage from '~/components/TitlePage'
import { useDebounce } from '~/context/useDebounce'
import { useWrap } from '~/context/wrap'
import CDCalendar from '../CourseList/CourseListDetail/CourseDetailCalendar/Calendar'

const ScheduleStudyTeacher = () => {
	const { showNoti } = useWrap()
	const [isLoading, setIsLoading] = useState({
		type: '',
		status: false
	})
	const [scheduleTeacherList, setScheduleTeacherList] = useState<IScheduleZoom[]>([])
	const [filters, setFilters] = useState({
		StartTime: moment().startOf('month').format('YYYY/MM/DD'),
		EndTime: moment().endOf('month').format('YYYY/MM/DD')
	})

	const fetchScheduleStudyTeacher = async () => {
		try {
			setIsLoading({
				type: 'FETCH_SCHEDULE_TEACHER',
				status: true
			})
			const res = await scheduleZoomApi.getAll(filters)
			if (res.status === 200) {
				setScheduleTeacherList(res.data.data)
			}
			if (res.status === 204) {
				// showNoti('danger', 'Lịch dạy trống')
				setScheduleTeacherList([])
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setIsLoading({
				type: 'FETCH_SCHEDULE_TEACHER',
				status: false
			})
		}
	}

	useEffect(() => {
		fetchScheduleStudyTeacher()
	}, [filters])

	const fetchNewScheduleList = (date) => {
		let fmDate
		if (date?.start && date?.end) {
			fmDate = {
				StartTime: moment(date.start).format('YYYY/MM/DD'),
				EndTime: moment(date.end).format('YYYY/MM/DD')
			}
		}
		if (Array.isArray(date) && date.length >= 1) {
			fmDate = {
				StartTime: moment(date[0]).format('YYYY/MM/DD'),
				EndTime: moment(date[date.length - 1]).format('YYYY/MM/DD')
			}
		}
		setFilters(fmDate || { ...filters })
	}
	const debounceFetchScheduleList = useDebounce(fetchNewScheduleList, 200, [])

	const onHandleZoom = async (data: {
		idx: number
		btnID: number
		isOutside?: boolean
		btnName?: string
		scheduleID: number
		CourseID: number
	}) => {
		console.log('🚀 ~ file: ScheduleStudyTeacher.tsx ~ line 68 ~ ScheduleStudyTeacher ~ data', data)
		try {
			//0 - ,1-Bắt đầu , 2-Vào lớp học, 3-Kết thúc
			const { idx, btnID, btnName, isOutside, scheduleID, CourseID } = data
			if (btnID === 1) {
				if (isOutside) {
					window.open(`https://school.anhngupea.edu.vn`)
				} else {
					setIsLoading({
						type: 'FETCH_SCHEDULE_TEACHER',
						status: true
					})
					const res = await zoomRoomApi.createRoom(scheduleID)
					if (res.status === 200) {
						const newScheduleTeacherList = [...scheduleTeacherList]
						const newScheduleTeacher: IScheduleZoom = {
							...newScheduleTeacherList[idx],
							ButtonName: 'Vào lớp học',
							ButtonID: 2
						}
						newScheduleTeacherList.splice(idx, 1, newScheduleTeacher)
						setScheduleTeacherList(newScheduleTeacherList)
						setIsLoading({
							type: 'FETCH_SCHEDULE_TEACHER',
							status: false
						})
						if (scheduleID) {
							window.open(`/course/zoom-view/${scheduleID}?CourseID=${CourseID}`)
						}
					}
				}
			}
			if (btnID === 2 && scheduleID) {
				if (isOutside) {
					window.open(`https://school.anhngupea.edu.vn`)
				} else {
					window.open(`/course/zoom-view/${scheduleID}?CourseID=${CourseID}`)
				}
			}
			if (btnID === 3 && scheduleID) {
				setIsLoading({
					type: 'FETCH_SCHEDULE_TEACHER',
					status: true
				})
				const res = await zoomRoomApi.closeRoom(scheduleID)
				if (res.status === 200) {
					const newScheduleTeacherList = [...scheduleTeacherList]
					const newScheduleTeacher: IScheduleZoom = {
						...newScheduleTeacherList[idx],
						ButtonName: 'Kết thúc',
						ButtonID: 3
					}
					newScheduleTeacherList.splice(idx, 1, newScheduleTeacher)
					setScheduleTeacherList(newScheduleTeacherList)
					setIsLoading({
						type: 'FETCH_SCHEDULE_TEACHER',
						status: false
					})
				}
			}
		} catch (error) {
			showNoti('danger', error.message)
			console.log('fetchConfigAccount', error.message)
		} finally {
			setIsLoading({
				type: 'FETCH_SCHEDULE_TEACHER',
				status: false
			})
		}
	}

	// CALENDAR FORMAT
	const calendarFm = (calendarArr: IScheduleZoom[]) => {
		const rs = calendarArr.map((c, idx) => {
			const {
				ID,
				Title,
				CourseID,
				BranchName,
				RoomName,
				SubjectName,
				StartTime,
				EndTime,
				//
				ButtonID,
				ButtonName,
				IsExam,
				TeacherAttendanceID, // @ts-ignore
				isOutside
			} = c
			const studyTimeStart = moment(StartTime).format('HH:mm')
			const studyTimeEnd = moment(EndTime).format('HH:mm')
			const studyTime = `${studyTimeStart} - ${studyTimeEnd}`

			return {
				id: +ID,
				title: '',
				start: moment(StartTime).toDate(),
				end: moment(EndTime).toDate(),
				resource: {
					ID,
					CourseID,
					isOutside,
					CourseName: Title,
					RoomName,
					BranchName,
					SubjectName,
					//
					StudyTimeName: studyTime,
					//
					ButtonID,
					ButtonName,
					idx,
					IsExam,
					TeacherAttendanceID
				}
			}
		})
		return rs
	}

	return (
		<div className="row">
			<TitlePage title="Lịch dạy giáo viên" />
			<div className="col-12 hide-rbc-event">
				<Card>
					<CDCalendar
						isLoaded={isLoading.type === 'FETCH_SCHEDULE_TEACHER' && isLoading.status ? false : true}
						eventList={calendarFm(scheduleTeacherList)}
						isStudyZoom={true}
						fetchStudyZoom={debounceFetchScheduleList}
						handleStudyZoom={onHandleZoom}
					/>
				</Card>
			</div>
		</div>
	)
}
export default ScheduleStudyTeacher
