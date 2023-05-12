import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Input, List, Modal, Progress, Rate, Tooltip, Popover, Button, Spin } from 'antd'
import 'antd/dist/antd.css'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { VideoCourseListApi } from '~/apiBase'
import CourseVideoTable from '~/components/CourseVideoTable'
import LayoutBase from '~/components/LayoutBase'
import { useWrap } from '~/context/wrap'
import NumberFormat from 'react-number-format'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import ReactHtmlParser from 'react-html-parser'
import router from 'next/router'

const { TextArea, Search } = Input

const ItemVideo = ({ item, onRate }) => {
	const [rerender, setRender] = useState('')
	const { userInformation } = useWrap()

	useEffect(() => {
		setRender(item)
	}, [item])

	return (
		<>
			<div className="video-course-list__item">
				<Link
					href={{
						pathname: '/video-learning',
						query: {
							ID: userInformation.RoleID == 3 ? item.ID : item.VideoCourseID,
							course: item.VideoCourseID,
							complete: item.Complete + '/' + item.TotalLesson,
							name: item.VideoCourseName
						}
					}}
				>
					<div className="video-course-list__item_warp-image">
						<Link
							href={{
								pathname: '/video-learning',
								query: {
									ID: userInformation.RoleID == 3 ? item.ID : item.VideoCourseID,
									course: item.VideoCourseID,
									complete: item.Complete + '/' + item.TotalLesson,
									name: item.VideoCourseName
								}
							}}
						>
							{item.ImageThumbnails === '' || item.ImageThumbnails === null || item.ImageThumbnails === undefined ? (
								<img src="/images/logo-thumnail.jpg" />
							) : (
								<img src={item.ImageThumbnails} />
							)}
						</Link>
					</div>
				</Link>

				<Link
					href={{
						pathname: '/video-learning',
						query: {
							ID: userInformation.RoleID == 3 ? item.ID : item.VideoCourseID,
							course: item.VideoCourseID,
							complete: item.Complete + '/' + item.TotalLesson,
							name: item.VideoCourseName
						}
					}}
				>
					<div className="p-3 video-course-list__item__content">
						<div className="d-flex flex-column justify-content-between" style={{ height: '100%' }}>
							<div className="course-description in-3-line">
								<Tooltip title={item.VideoCourseName} style={{ width: '100%' }}>
									<span className="title in-2-line" style={{ width: '100%' }}>
										{item.VideoCourseName}
									</span>
								</Tooltip>
								<p>{ReactHtmlParser(item.Description)}</p>
							</div>

							<div className="d-flex justify-content-start align-items-center mentor">
								<img src="/images/icons/UserUnknown.svg" />
								<p>{item.TeacherName ? item.TeacherName : 'Chưa có Mentor'}</p>
							</div>
							{/* <div className="course-description" style={{ color: '#8E8E93' }}>Số lần đặt lịch còn lại: {item?.LeftLimitBooking}</div> */}

							{/* <div className="pr-3 pl-3 pt-3 row rate-container">
							<Rate className="rate-start" disabled value={item.RatingNumber} />
							<a
								onClick={(e) => {
									e.stopPropagation()
									onRate(item)
								}}
								className="none-selection btn-rate "
							>
								Đánh giá
							</a>
						</div> */}
						</div>
					</div>
				</Link>
				<div className="video-course__hover">
					<div className="content">
						{/* <p>
							Tiến độ: {item.Complete}/{item.TotalLesson}
						</p>
						<Progress
							className="text-process"
							percent={(item.Complete / item.TotalLesson) * 100} // 10 - CHANGE TO TOTALESSION
							status="active"
							showInfo={false}
						/> */}
						<div className="buttons">
							<button
								onClick={() => {
									router.push({
										pathname: '/video-learning',
										query: {
											ID: userInformation.RoleID == 3 ? item.ID : item.VideoCourseID,
											course: item.VideoCourseID,
											complete: item.Complete + '/' + item.TotalLesson,
											name: item.VideoCourseName,
											teacherName: item.TeacherName
										}
									})
								}}
								className="btn btn-primary"
							>
								Tiếp tục
							</button>
							<button
								onClick={() => {
									router.push({
										pathname: '/video-course/[slug]',
										query: {
											Category: item.CategoryName,
											Level: item.LevelName,
											Create: item.CreatedOn,
											Thum: item.ImageThumbnails,
											slug: item.VideoCourseID,
											Active: item.StatusName,
											TeacherID: item?.TeacherID,
											LimitBooking: item?.LimitBooking,
											CategoryID: item.CategoryID,
											AverageRating: item.AverageRating,
											TotalFeedBack: item.TotalFeedBack,
											Original: item.OriginalPrice,
											Sell: item.SellPrice,
											TotalVideo: item.TotalVideoCourseSold,
											TotalVideoViews: item?.TotalVideoViews,
											CurriculumID: item?.CurriculumID
										}
									})
								}}
								className="btn btn-light"
							>
								Xem chi tiết
							</button>
							<button
								onClick={() => {
									onRate(item)
								}}
								className="btn btn-outline"
							>
								Viết đánh giá
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

let pageIndex = 1

const VideoCourseList = () => {
	const { userInformation, pageSize, showNoti, getTitlePage } = useWrap()

	const [data, setData] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [rerender, setRender] = useState('')
	const [loading, setLoading] = useState(true)
	const [totalPage, setTotalPage] = useState(null)

	const listTodoApi = {
		pageSize: pageSize,
		pageIndex: pageIndex,
		search: ''
	}
	const [todoApi, setTodoApi] = useState(listTodoApi)

	const [state, dispatch] = React.useReducer(
		(prevState, action) => {
			switch (action.type) {
				case 'ID':
					return {
						...prevState,
						ID: action.ID
					}
				case 'RatingNumber':
					return {
						...prevState,
						RatingNumber: action.RatingNumber
					}
				case 'RatingComment':
					return {
						...prevState,
						RatingComment: action.RatingComment
					}
			}
		},
		{
			ID: '',
			RatingNumber: 0,
			RatingComment: ''
		}
	)

	useEffect(() => {
		if (userInformation) {
			getAllArea()
			getTitlePage()
			userInformation?.RoleID == 1 ? getTitlePage('Khóa học video đã bán') : getTitlePage('Khóa học video đã sở hữu')
		}
	}, [userInformation])

	//GET DATA
	const getAllArea = async () => {
		setLoading(true)
		try {
			const res = userInformation?.RoleID == 1 ? await VideoCourseListApi.getAll(todoApi) : await VideoCourseListApi.getByUser(todoApi)
			res.status == 200 && (setData(res.data.data), setTotalPage(res.data.data.length))
			res.status == 204 && setData([])
			setRender(res + '')
		} catch (err) {
			showNoti('danger', err?.message)
		} finally {
			setLoading(false)
		}
	}

	//GET DATA
	const updateRate = async () => {
		let temp = {
			ID: state.ID,
			RatingNumber: state.RatingNumber,
			RatingComment: state.RatingComment
		}
		try {
			await VideoCourseListApi.update(temp)
		} catch (err) {
			showNoti('danger', err.message)
		}
		getAllArea()
	}

	const [num, setNum] = useState('')

	const columnsVideoCourse = [
		{
			title: 'Tên khóa học',
			dataIndex: 'VideoCourseName',
			key: 'VideoCourseName'
		},
		{
			title: 'Người mua',
			dataIndex: 'StudentName',
			key: 'StudentName',
			render: (value, item, index) => <div style={{ width: 200, fontWeight: '600' }}>{value}</div>
		},
		{
			title: 'Điện thoại',
			dataIndex: 'Phone',
			key: 'Phone'
		},
		{
			title: 'Ngày kích hoạt',
			dataIndex: 'CreatedOn',
			key: 'CreatedOn',
			render: (Action, data, index) => <div>{data.CreatedOn}</div>
		}
	]

	useEffect(() => {
		todoApi !== listTodoApi && getAllArea()
	}, [todoApi])

	// HANDLE SEARCH
	const handleSearch = (e) => {
		let newTodoApi = { ...listTodoApi, pageIndex: 1, search: e }
		;(pageIndex = 1), setTodoApi(newTodoApi)
	}

	// HANDLE CHANGE PAGE
	const getPagination = (pageNumber: number) => {
		pageIndex = pageNumber
		setTodoApi({ ...todoApi, pageIndex: pageIndex })
	}

	// CARD EXTRA
	const Extra = () => {
		return (
			<div className="row m-0 vc-store_extra-table">
				<div className="row m-0">
					<div className="row m-0 st-fb-100w ">
						<Search
							className="fb-btn-search style-input vc-teach-modal_search"
							size="large"
							placeholder="Tìm kiếm"
							onSearch={(e) => handleSearch(e)}
						/>
					</div>
				</div>
			</div>
		)
	}

	// RENDER
	return (
		<div className="">
			<Card title={Extra()} className="video-course-list" style={{ width: '100%' }}>
				{userInformation !== null && (
					<>
						{userInformation?.RoleID == 1 ? (
							<CourseVideoTable
								totalPage={totalPage && totalPage}
								getPagination={(pageNumber: number) => getPagination(pageNumber)}
								currentPage={pageIndex}
								columns={columnsVideoCourse}
								dataSource={data}
								loading={{ type: 'GET_ALL', status: loading }}
								TitleCard={null}
							/>
						) : (
							<List
								pagination={{
									onChange: getPagination,
									total: totalPage,
									size: 'small',
									current: pageIndex,
									showTotal: () =>
										totalPage && (
											<p className="font-weight-black" style={{ marginTop: 2, color: '#000' }}>
												Tổng cộng: {totalPage}
											</p>
										)
								}}
								loading={loading}
								itemLayout="horizontal"
								dataSource={data}
								grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 4, xxl: 5 }}
								renderItem={(item) => (
									<ItemVideo
										onRate={(p) => {
											dispatch({ type: 'ID', ID: p.ID })
											dispatch({ type: 'RatingNumber', RatingNumber: p.RatingNumber })
											dispatch({ type: 'RatingComment', RatingComment: p.RatingComment })
											setShowModal(true)
										}}
										item={item}
									/>
								)}
							/>
						)}
					</>
				)}

				<Modal
					title="Đánh giá"
					visible={showModal}
					onOk={() => {
						setShowModal(false)
						updateRate()
					}}
					okText="Đánh giá"
					cancelText="Hủy"
					confirmLoading={false}
					onCancel={() => setShowModal(false)}
				>
					<Rate
						value={parseInt(state.RatingNumber)}
						style={{ color: '#FFBA0A', fontSize: 20 }}
						onChange={(e) => dispatch({ type: 'RatingNumber', RatingNumber: e })}
					/>
					<TextArea
						value={state.RatingComment}
						onChange={(p) => dispatch({ type: 'RatingComment', RatingComment: p.target.value })}
						rows={4}
						className="mt-4"
					/>
				</Modal>
			</Card>
		</div>
	)
}

VideoCourseList.layout = LayoutBase
export default VideoCourseList
