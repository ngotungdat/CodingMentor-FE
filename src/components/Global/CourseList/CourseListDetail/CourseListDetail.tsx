import { Spin, Tabs } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { Bell, Book, BookOpen, Calendar, CheckCircle, Edit, FileText, Flag, Users, Edit3, UserCheck } from 'react-feather'
import { courseApi, groupNewsFeedApi } from '~/apiBase'
import DocumentCourse from '~/components/Global/CourseList/CourseListDetail/Document/DocumentCourse'
import RollUp from '~/components/Global/CourseList/CourseListDetail/RollUp/RollUp'
import StudentsList from '~/components/Global/CourseList/CourseListDetail/StudentList/StudentList'
import { useWrap } from '~/context/wrap'
import LessionPage from '~/pages/course/lessons'
import CourseExamAdmin from '../../CourseExam/CourseExamAdmin'
import CourseExamStudent from '../../CourseExamStudent/CourseExamStudent'
import AddGroupFormFromCourseDetail from '../../NewsFeed/NewsFeedGroupComponents/AddGroupFormFromCourseDetail'
import LessonDetail from '../LessonDetail'
import CourseDetailCalendar from './CourseDetailCalendar/CourseDetailCalendar'
import Homework from './Homework/Homework'
import NotificationCourse from './NotificationCourse/NotificationCourse'
import TeacherRollUp from './TeacherRoleUp'
import TimelineCourse from './Timeline/Timeline'

const { TabPane } = Tabs
const CourseListDetail = () => {
	const { userInformation, isAdmin } = useWrap()
	const [isLoading, setIsLoading] = useState({ type: '', status: false })
	const router = useRouter()
	const [isRollUpTeacher, setIsRollUpTeacher] = useState(false)
	const [isReloadRollUp, setIsReloadRollUp] = useState(false)
	const [groupID, setGroupID] = useState({ groupID: null, groupInfo: null })
	const [courseDetail, setCourseDetail] = useState<ICourseDetail>()
	const { showNoti, pageSize } = useWrap()
	const { slug: ID, type } = router.query
	const parseIntID = parseInt(ID as string)
	const ref = useRef(null)

	useEffect(() => {
		if (window.innerHeight) {
		}
	}, [window.innerHeight])

	const isStudent = () => {
		let role = userInformation?.RoleID
		if (role == 3) {
			return true
		} else {
			return false
		}
	}

	const getGroupNewsFeed = async () => {
		setIsLoading({
			type: 'GET_ALL',
			status: true
		})
		try {
			let res = await groupNewsFeedApi.getAll({ pageSize: pageSize, pageIndex: 1, CourseID: Number(router.query.slug) })
			if (res.status === 200) {
				if (res.data.totalRow && res.data.data.length) {
					setGroupID({ groupID: res.data.data[0].ID, groupInfo: res.data.data })
				}
			} else if (res.status === 204) {
				setGroupID(null)
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setIsLoading({
				type: 'GET_ALL',
				status: false
			})
		}
	}

	const getCourseDetail = async () => {
		setIsLoading({
			type: 'GET_ALL',
			status: true
		})
		try {
			let res = await courseApi.getById(Number(router.query.slug))
			if (res.status === 200) {
				setCourseDetail(res.data.data)
			} else if (res.status === 204) {
				setCourseDetail(null)
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setIsLoading({
				type: 'GET_ALL',
				status: false
			})
		}
	}

	useEffect(() => {
		getGroupNewsFeed()
		getCourseDetail()
	}, [router.query.slug])

	return (
		<div className="course-dt page-no-scroll" ref={ref}>
			<Tabs
				defaultActiveKey="1"
				// tabPosition={'right'}
				tabPosition={window.innerWidth < 1260 ? 'top' : 'right'}
				onTabClick={(key) => {
					if (parseInt(key) === 2) {
						const url = () => {
							if (parseInt(type as string) === 1 || courseDetail?.TypeCourse === 1) return `/course/course-list/edit-course/${parseIntID}`
							if (parseInt(type as string) === 2 || courseDetail?.TypeCourse === 2)
								return `/course/course-list/edit-course-online/${parseIntID}`
							if (parseInt(type as string) === 3 || courseDetail?.TypeCourse === 3)
								return `/course/course-list/edit-self-course/${parseIntID}`
						}
						router.push(url())
					}

					if (parseInt(key) === 5) {
						setIsRollUpTeacher(true)
					} else {
						setIsRollUpTeacher(false)
					}

					if (parseInt(key) === 4) {
						setIsReloadRollUp(true)
					} else {
						setIsReloadRollUp(false)
					}

					if (parseInt(key) === 9) {
						if (groupID) {
							router.push({ pathname: '/newsfeed/', query: { idGroup: groupID.groupID } })
						}
					}
				}}
				className="list-menu-course"
				// tabBarExtraContent={
				// 	<div className="course-mentor">
				// 		<img src="/images/icons/UserUnknown.svg" alt="user avatar" />
				// 		<p>Luan Mentor</p>
				// 	</div>
				// }
			>
				{window.innerWidth > 1260 && (
					<TabPane
						tab={
							<div className="course-mentor">
								<img src="/images/icons/UserUnknown.svg" alt="user avatar" />
								<p>Luan Mentor</p>
							</div>
						}
						key="0"
					>
						<CourseDetailCalendar courseID={parseIntID} isAdmin={isAdmin || userInformation?.RoleID === 2} />
					</TabPane>
				)}

				<TabPane
					tab={
						<div className="calendar-tab">
							<img src="/images/calendar.png" alt="calendar icon" />
							<span title="Lịch học"> Lịch học</span>
						</div>
					}
					key="1"
				>
					<CourseDetailCalendar courseID={parseIntID} isAdmin={isAdmin || userInformation?.RoleID === 2} />
				</TabPane>

				{/* <TabPane
					tab={
						<div className='calendar-tab'>
							<img src="/images/book.png" alt="calendar icon" />
							<span title="Giáo trình">Giáo trình</span>
						</div>
					}
					key="10"
				>
					<LessonDetail disable={true} />
				</TabPane> */}

				{/* {userInformation?.RoleID !== 6 && (
					<TabPane
						tab={
							<div className='calendar-tab'>
								<img src="/images/calendar.png" alt="calendar icon" />
								<span title="Giáo trình">Kiểm tra</span>
							</div>
						}
						key="11"
					>
						{!isAdmin ? <CourseExamStudent /> : <CourseExamAdmin />}
					</TabPane>
				)}

				{userInformation?.RoleID !== 6 && (
					<TabPane
						tab={
							<div className='calendar-tab'>
								<img src="/images/exercise.png" alt="calendar icon" />
								<span title="Giáo trình">Bài tập</span>
							</div>
						}
						key="12"
					>
						{!isAdmin ? (
							<Homework courseID={courseDetail?.ID} CurriculumID={courseDetail?.CurriculumID} />
						) : (
							<Homework courseID={courseDetail?.ID} CurriculumID={courseDetail?.CurriculumID} />
						)}
					</TabPane>
				)} */}

				<TabPane
					tab={
						<div className="calendar-tab">
							<img src="/images/courses.png" alt="calendar icon" />
							<span title="Giáo trình">Các buổi học</span>
						</div>
					}
					key="22"
				>
					{<LessionPage courseID={parseIntID} />}
				</TabPane>

				{courseDetail?.Status !== 2
					? (isAdmin || userInformation?.RoleID == 2 || (userInformation?.RoleID === 3 && courseDetail?.TypeCourse === 3)) && (
							<TabPane
								tab={
									<div className="calendar-tab">
										<img src="/images/pen-edit.png" alt="calendar icon" />
										<span title="Chỉnh sửa">
											{userInformation?.RoleID === 3 && courseDetail?.TypeCourse === 3 ? 'Đăng ký buổi học' : 'Chỉnh sửa'}
										</span>
									</div>
								}
								key="2"
							>
								<div className="d-flex align-items-center justify-content-center" style={{ height: 200 }}>
									<Spin size="large" />
								</div>
							</TabPane>
					  )
					: userInformation &&
					  userInformation?.RoleID === 1 && (
							<TabPane
								tab={
									<div className="calendar-tab">
										<img src="/images/pen-edit.png" alt="calendar icon" />
										<span title="Chỉnh sửa">Chỉnh sửa</span>
									</div>
								}
								key="2"
							>
								<div className="d-flex align-items-center justify-content-center" style={{ height: 200 }}>
									<Spin size="large" />
								</div>
							</TabPane>
					  )}

				{(isAdmin || userInformation?.RoleID == 2 || userInformation?.RoleID == 6) && (
					<TabPane
						tab={
							<div className="calendar-tab">
								<img src="/images/male-student.png" alt="calendar icon" />
								<span title="Học viên"> Học viên</span>
							</div>
						}
						key="3"
					>
						<StudentsList courseID={parseIntID} coursePrice={courseDetail?.Price} typeCourse={courseDetail?.TypeCourse}/>
					</TabPane>
				)}

				{userInformation?.RoleID !== 6 && (
					<TabPane
						tab={
							<div className="calendar-tab">
								<img src="/images/roll-up.png" alt="calendar icon" />
								<span title="Điểm danh"> Điểm danh</span>
							</div>
						}
						key="4"
					>
						<RollUp courseID={parseIntID} isReloadRollUp={isReloadRollUp} />
					</TabPane>
				)}

				{/* {userInformation?.RoleID !== 6 && (
					<TabPane
						tab={
							<>
								<img src="/images/contract-add-outline.png" alt="calendar icon" />
								<span title="Điểm danh giáo viên"> Điểm danh giáo viên</span>
							</>
						}
						key="5"
					>
						<TeacherRollUp courseID={parseIntID} isRollUpTeacher={isRollUpTeacher} />
					</TabPane>
				)} */}

				{userInformation?.RoleID !== 6 && (
					<TabPane
						tab={
							<div className="calendar-tab">
								<img src="/images/link.png" alt="calendar icon" />
								<span title="Tài liệu"> Tài liệu</span>
							</div>
						}
						key="6"
					>
						<DocumentCourse courseID={parseIntID} courseDetail={courseDetail} />
					</TabPane>
				)}

				{!isStudent() && userInformation?.RoleID !== 6 && (
					<TabPane
						tab={
							<div className="calendar-tab">
								<img src="/images/customer-feedback.png" alt="calendar icon" />
								<span title="Phản hồi">Phản hồi buổi học</span>
							</div>
						}
						key="7"
					>
						<TimelineCourse courseID={parseIntID} />
					</TabPane>
				)}

				{userInformation &&
					(userInformation?.RoleID == 1 || userInformation?.RoleID == 2 || userInformation?.RoleID == 5) &&
					(groupID ? (
						<TabPane
							tab={
								<div className="calendar-tab">
									<Users />
									<span title="Nhóm"> Nhóm</span>
								</div>
							}
							key="9"
						>
							<div className="d-flex align-items-center justify-content-center" style={{ height: 200 }}>
								<Spin size="large" />
							</div>
						</TabPane>
					) : (
						<TabPane
							tab={<AddGroupFormFromCourseDetail isCourseListDetail={true} courseDetail={courseDetail} isLoading={isLoading} />}
							key="9"
						>
							<div className="d-flex align-items-center justify-content-center" style={{ height: 200 }}>
								<Spin size="large" />
							</div>
						</TabPane>
					))}
				{userInformation?.RoleID !== 6 && (
					<TabPane
						tab={
							<div className="calendar-tab">
								<img src="/images/notification-bell.png" alt="calendar icon" />
								<span title="Thông báo"> Thông báo qua email</span>
							</div>
						}
						key="8"
					>
						<NotificationCourse courseID={parseIntID} />
					</TabPane>
				)}
			</Tabs>
		</div>
	)
}

export default CourseListDetail
