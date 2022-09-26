import { Avatar, List } from 'antd'
import moment from 'moment'
import Link from 'next/link'
import router from 'next/router'
import PropTypes from 'prop-types'
import { cloneElement, useEffect, useState } from 'react'
import { useWrap } from '~/context/wrap'
import { numberWithCommas } from '~/utils/functions'

export const ItemCourse = (props) => {
	const { Item } = props
	const [userNumber, setUserNumber] = useState([])
	const { userInformation } = useWrap()

	useEffect(() => {
		if (Item) {
			if (Item.TotalStudents > 0) {
				let temp = []
				for (let i = 0; i < Item.TotalStudents; i++) {
					temp.push(i)
				}
				setUserNumber(temp)
			}
		}
	}, [Item])

	const returnPathName = (ID, TypeCourse, CourseName, TeacherName) => {
		if (!userInformation) return ''
		let role = userInformation?.RoleID
		let path = null
		if (role == 1 || role == 5) {
			path = {
				pathname: '/course/course-list/course-list-detail/[slug]',
				query: { slug: ID, type: TypeCourse, CourseName, TeacherName }
			}
		} else {
			path = {
				pathname: '/course/course-list/course-list-detail/[slug]',
				query: { slug: ID, courseID: ID, CourseName, TeacherName }
			}
		}
		return path
	}

	const RenderUserItem = () => {
		return userNumber.map((item, index) => {
			return (
				<span
					className={item == 0 ? 'first-avatar' : item > 0 && item < 5 ? 'middle-avatar' : item == 5 ? 'last-avatar' : 'invisible-avatar'}
				>
					<img src="/images/icons/UserUnknown.svg" />
				</span>
			)
		})
	}

	return (
		<>
			<div className="course-item-wrap">
				<div className="course-item-avatar">
					<img src={Item.Avatar || '/images/course-alt.jpg'} />
					<span>{Item.StatusName}</span>
				</div>
				{/*  */}
				<div className="course-item-content">
					<p className="course-item-content-name in-2-line">{Item.CourseName}</p>
					{/*  */}
					<div className="course-item-content-tags">
						<span>{Item.TypeCourseName}</span>
						{Item.CurriculumName && <span>{Item.CurriculumName}</span>}
						{Item.ProgramName && <span>{Item.ProgramName}</span>}
					</div>
					{/*  */}
					<p className="course-item-content-description">{Item.ProgramName ? Item.ProgramName : ''}</p>
					<p className="course-item-content-description">{Item.CurriculumName ? Item.CurriculumName : ''}</p>
					{/*  */}
					<div className="course-item-content-mentor">
						<img src={Item.TeacherAvatar || '/images/icons/UserUnknown.svg'} />
						<span>{Item.TeacherName || 'Chưa có mentor'}</span>
					</div>
					{/*  */}
					{userInformation?.RoleID !== 3 && (
						<div className="course-item-price-inline">
							<p>{numberWithCommas(Item.Price) === '' ? `${numberWithCommas(Item.Price)}` : `${numberWithCommas(Item.Price)} AUD`}</p>
						</div>
					)}
					{/*  */}
					<div className="course-item-content-buttons">
						<button
							className="btn btn-primary"
							onClick={() => {
								let temp = returnPathName(Item?.ID, Item?.TypeCourse, Item?.CourseName, Item?.TeacherName)
								router.push(temp)
							}}
						>
							Detail: {Item.TotalStudents}/{Item.MaximumStudent}
						</button>
						{Item.TotalStudents > 0 && <div className="course-item-content-list-user">{RenderUserItem()}</div>}
					</div>
				</div>
				{/*  */}
				{userInformation.RoleID === 3 ? (
					<></>
				) : (
					<div className="course-item-price">
						<>
							{console.log(numberWithCommas(Item.Price))}
							<p>{numberWithCommas(Item.Price) === '' ? `${numberWithCommas(Item.Price)}` : `${numberWithCommas(Item.Price)} AUD`}</p>
						</>
					</div>
				)}
			</div>
		</>
	)
}

const PowerList = (props) => {
	const { dataSource, isLoading, totalPage, currentPage, getPagination, children } = props
	const { userInformation } = useWrap()
	const checkGetPagination = (page) => {
		if (!getPagination) return
		getPagination(page)
	}

	const checkStatus = (vl, ctn, Avatar) => {
		const rs = ['yellow', 'green', 'gray']
		return (
			<div className="">
				<span className={`tag ${rs[vl]}`} style={{ width: '100%', textAlign: 'center' }}>
					{ctn}
				</span>

				<img
					style={{ width: 100, height: 100, borderRadius: 10, marginTop: 5, objectFit: 'contain' }}
					src={Avatar !== null && Avatar !== undefined && Avatar !== '' ? Avatar : '/images/study01.png'}
					alt="logo course img"
				/>
			</div>
		)
	}

	const returnPathName = (ID, TypeCourse, CourseName) => {
		if (!userInformation) return ''
		let role = userInformation?.RoleID
		let path = null
		if (role == 1 || role == 5) {
			path = {
				pathname: '/course/course-list/course-list-detail/[slug]',
				query: { slug: ID, type: TypeCourse, CourseName }
			}
		} else {
			path = {
				pathname: '/course/course-list/course-list-detail/[slug]',
				query: { slug: ID, courseID: ID, CourseName }
			}
		}
		return path
	}

	return (
		<List
			loading={isLoading?.type === 'GET_ALL' && isLoading?.status}
			pagination={{
				onChange: checkGetPagination,
				total: totalPage,
				size: 'small',
				current: currentPage,
				showTotal: () => <div className="font-weight-black">Tổng cộng: {props.totalPage}</div>
			}}
			itemLayout="horizontal"
			dataSource={dataSource}
			renderItem={({
				ID,
				Status,
				StatusName,
				CourseName,
				AcademicName,
				AcademicUID,
				TeacherLeaderName,
				TeacherLeaderUID,
				TeacherName,
				Price,
				TotalDays,
				StartDay,
				EndDay,
				TotalStudents,
				TypeCourse,
				TypeCourseName,
				BranchID,
				MaximumStudent,
				SalaryOfLesson,
				Avatar
			}: ICourse) => (
				<ItemCourse
					Item={{
						ID,
						Status,
						StatusName,
						CourseName,
						AcademicName,
						AcademicUID,
						TeacherLeaderName,
						TeacherLeaderUID,
						TeacherName,
						Price,
						TotalDays,
						StartDay,
						EndDay,
						TotalStudents,
						TypeCourse,
						TypeCourseName,
						BranchID,
						MaximumStudent,
						SalaryOfLesson,
						Avatar
					}}
				/>
				// <List.Item
				// 	extra={cloneElement(children, {
				// 		courseObj: { ID, BranchID, AcademicUID, TeacherLeaderUID, SalaryOfLesson }
				// 	})}
				// >
				// 	<List.Item.Meta
				// 		avatar={checkStatus(Status, StatusName, Avatar)}
				// 		title={
				// 			<Link href={returnPathName(ID, TypeCourse, CourseName)}>
				// 				<a>{CourseName}</a>
				// 			</Link>
				// 		}
				// 		description={
				// 			<div className="content-body">
				// 				<ul className="list-ver">
				// 					<li>
				// 						<span>Quản lý: </span> <span>{TeacherLeaderName || 'Trống'}</span>
				// 					</li>
				// 					<li>
				// 						<span>Giáo viên: </span> <span>{TeacherName || 'Trống'}</span>
				// 					</li>
				// 					<li>
				// 						<span>Hình thức: </span> <span>{TypeCourseName || 'Trống'}</span>
				// 					</li>
				// 					<li>
				// 						<span>Học phí: </span> <span>{numberWithCommas(Price)} VNĐ</span>
				// 					</li>
				// 					{userInformation?.RoleID === 1 && (
				// 						<li>
				// 							<span>Lương/Buổi: </span> <span>{numberWithCommas(SalaryOfLesson)} VNĐ</span>
				// 						</li>
				// 					)}
				// 				</ul>
				// 				<ul className="list-hor">
				// 					<li>
				// 						Số buổi học: <span>{TotalDays}</span>
				// 					</li>
				// 					<li>
				// 						Khai giảng: <span>{moment(StartDay).format('DD/MM/YYYY')}</span>
				// 					</li>
				// 					<li>
				// 						Bế giảng: <span>{moment(EndDay).format('DD/MM/YYYY')}</span>
				// 					</li>
				// 					<li>
				// 						Số học viên: <span>{TotalStudents}</span>
				// 					</li>
				// 					{MaximumStudent && (
				// 						<li>
				// 							Số học viên tối đa: <span>{MaximumStudent}</span>
				// 						</li>
				// 					)}
				// 				</ul>
				// 			</div>
				// 		}
				// 	/>
				// </List.Item>
			)}
		/>
	)
}

PowerList.propTypes = {
	dataSource: PropTypes.array.isRequired,
	totalPage: PropTypes.number,
	currentPage: PropTypes.number,
	isLoading: PropTypes.shape({
		type: PropTypes.string.isRequired,
		status: PropTypes.bool.isRequired
	}),
	children: PropTypes.element,
	getPagination: PropTypes.func
}
PowerList.defaultProps = {
	totalPage: 1,
	currentPage: 1,
	isLoading: { type: '', status: false },
	getPagination: null
}

export default PowerList
