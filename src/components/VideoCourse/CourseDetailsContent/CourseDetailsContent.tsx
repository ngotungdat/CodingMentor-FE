import React, { useState } from 'react'
import { List, Modal, Spin } from 'antd'
import { VideoCourseDetailApi } from '~/apiBase/video-course-details'
import { ChevronDown, ChevronRight } from 'react-feather'
import { useWrap } from '~/context/wrap'
import { videoCoursesApi } from '~/apiBase/video-courses'
import Lottie from 'react-lottie-player'

const SHOW_TIME = false
import cartAnimation from '~/components/json/shopping-cart.json'

const RenderSubItemContent = (props) => {
	const { item, isLoadingCart, handleAddToCart } = props
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isModalOpenBuyCourse, setIsModalOpenBuyCourse] = useState(false)
	const { showNoti } = useWrap()
	const [lessonDetail, setLessonDetail] = useState<any>({})
	const handleGetVideo = async () => {
		try {
			const res = await videoCoursesApi.getLessonDetail({ VideoCourseOfStudentID: 0, LessonID: item.ID })
			if (res.status === 200) {
				setLessonDetail(res.data.data)
				setIsModalOpen(true)
			}
			if (res.status === 204) {
				setLessonDetail({})
			}
		} catch (err) {
			showNoti('danger', err.message)
		}
	}

	return (
		<>
			<div
				onClick={!item.IsPreview ? () => setIsModalOpenBuyCourse(true) : () => {}}
				className="row item sub-item"
				style={{ borderBottomWidth: 0.5, justifyContent: 'space-between', height: '44px', margin: '6px 0' }}
			>
				<div className="row m-0">
					<i className="fas fa-play-circle" style={{ marginTop: 5 }} />
					<span className="ml-3" style={{ flex: 1 }}>
						{item?.Title}
					</span>
				</div>
				{SHOW_TIME && <span className="ml-3">{item?.SecondVideo} giây</span>}
				<div className="btn-view-desktop">
					{!!item.IsPreview && (
						<button
							onClick={(e) => {
								handleGetVideo()
							}}
							className="btn btn-primary"
							style={{ padding: '0 8px' }}
						>
							Xem giới thiệu
						</button>
					)}
				</div>
				<div className="btn-view-mobile">
					{!!item.IsPreview && (
						<button
							onClick={(e) => {
								handleGetVideo()
							}}
							className="btn btn-primary"
							style={{ padding: '0 8px' }}
						>
							Xem
						</button>
					)}
				</div>
			</div>
			<Modal title="Xem video giới thiệu" visible={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null}>
				<iframe
					id="video__course__iframe"
					// ref={lessonDetail.LinkVideo}
					width="100%"
					height={350}
					src={lessonDetail.LinkVideo}
					frameBorder="0"
					allow="autoplay; clipboard-write; picture-in-picture"
					allowFullScreen
				/>
			</Modal>
			<Modal title="Mua khóa học" visible={isModalOpenBuyCourse} onCancel={() => setIsModalOpenBuyCourse(false)} footer={null}>
				<div className="wrapper-noti-buy-video-course">
					<Lottie loop animationData={cartAnimation} play className="inner" />
					<p>Bạn hãy mua khóa học để xem video</p>
					<button
						disabled={isLoadingCart}
						onClick={() => {
							handleAddToCart()
							setIsModalOpenBuyCourse(false)
						}}
						className="btn btn-primary"
					>
						Mua khóa học
					</button>
				</div>
			</Modal>
		</>
	)
}

const RenderItemContent = (props) => {
	const { item, data, Index, handleAddToCart, isLoadingCart } = props
	const [loading, setLoading] = useState(false)
	const [show, setShow] = useState(false)
	const [isFirst, setFirst] = useState(true)
	const [lessons, setLessons] = useState([])
	const { showNoti } = useWrap()

	// CALL API LESSON
	const getCourseLesson = async (param) => {
		setLoading(true)
		try {
			const res = await VideoCourseDetailApi.getLesson(param)
			res.status == 200 && (setLessons(res.data.data), setShow(true), setFirst(false))
			res.status == 204 && (setLessons([]), setShow(true), setFirst(false))
		} catch (error) {
			console.log(error)
			showNoti('danger', error.message)
		} finally {
			setLoading(false)
		}
	}

	const isFinal = () => {
		return data.indexOf(item) == data.length - 1 ? true : false
	}

	// RENDER
	return (
		<div className="section">
			<div
				onClick={() => (isFirst ? getCourseLesson(item.ID) : setShow(!show))}
				className={`m-0 item ${show && 'border-bottom'}`}
				style={{ borderBottomWidth: isFinal() ? 0 : 0.5 }}
			>
				<div className="m-0 titles">
					<p>
						Section {Index + 1}: {item?.SectionName}
					</p>
					<p>
						{item?.TotalLesson} bài giảng {SHOW_TIME && `• thời lượng ${item.TotalLesson} giây`}
					</p>
				</div>
				{/*  */}
				<span className="ml-3">{loading ? <Spin size="small" /> : <>{show ? <ChevronDown /> : <ChevronRight />}</>}</span>
			</div>
			{show && (
				<List
					header={null}
					footer={null}
					dataSource={lessons}
					className="list-content"
					renderItem={(item) => (
						<RenderSubItemContent isLoadingCart={isLoadingCart} handleAddToCart={handleAddToCart} item={item} data={lessons} />
					)}
				/>
			)}
		</div>
	)
}

const CourseDetailsContent = (props) => {
	const { contentData, loading, handleAddToCart, isLoadingCart } = props
	return (
		<div className="content">
			<span className="total-student">
				{contentData.TotalSections} chương • {contentData.TotalLessons} bài giảng{' '}
				{SHOW_TIME && `• thời lượng ${contentData.TotalSecondVideos} giây`}
			</span>
			<List
				header={null}
				footer={null}
				dataSource={contentData.SectionModels}
				className="list-content mt-3"
				renderItem={(item, index) => (
					<RenderItemContent
						handleAddToCart={handleAddToCart}
						isLoadingCart={isLoadingCart}
						Index={index}
						item={item}
						data={contentData.SectionModels}
					/>
				)}
			/>
		</div>
	)
}

export default CourseDetailsContent
