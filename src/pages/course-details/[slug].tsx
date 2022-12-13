import { Modal } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { IVideoCourses } from '~/apiBase/types/video-course-list/video-course-list'
import { VideoCourseDetailApi } from '~/apiBase/video-course-details'
import { videoCoursesApi } from '~/apiBase/video-courses'
import { useWrap } from '~/context/wrap'
import CourseDetailsPreview from '~/components/VideoCourse/CourseDetailsPreview'
import MenuContainer from '~/components/VideoCourse/MenuContainer'
import DetailsCourse from '~/components/VideoCourse/DetailsCourse'
import HeaderNoLogin from '~/components/Header/indexNoLogin'
import { useSession } from 'next-auth/react'
import { VideoCourseCardApi } from '~/apiBase/video-course-store'

const CourseDetail = () => {
	const router = useRouter()
	const { slug } = router.query
	const { showNoti, getTitlePage } = useWrap()
	const { data: session } = useSession()
	const [details, setDetails] = useState<IVideoCourseDetails>()
	const [content, setContent] = useState({})
	const [feedBack, setFeedBack] = useState({})
	const [loadingFeedback, setLoadingFeedback] = useState(false)
	const [isLoading, setLoading] = useState(true)
	const [videoPreView, setVideoPreView] = useState([])
	const [showPreview, setShowPreview] = useState(false)
	const [videoCourseID, setVideoCourseID] = useState<IVideoCourses>()
	const [currentVideo, setCurrentVideo] = useState<any>('')
	const [showModal, setShowModal] = useState(false)
	const [isLoadingCart, setIsLoadingCart] = useState(false)

	const getCourseDetails = async (param) => {
		try {
			const res = await VideoCourseDetailApi.getDetails(param)
			if (res.status == 200) {
				setDetails(res.data.data)
				getCourseContent(res.data.data.CurriculumID)
				getCoursePreview(res.data.data.CurriculumID)
			}
		} catch (error) {
			showNoti('danger', error.message)
		}
	}

	const getCourseContent = async (param) => {
		try {
			const res = await VideoCourseDetailApi.getContent(param)
			if (res.status === 200) {
				setContent(res.data.data)
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			let temp = {
				videocourseId: slug,
				rating: 0,
				search: '',
				pageIndex: 1,
				pageSize: 10
			}
			getCourseFeedback(temp)
		}
	}

	// CALL API GET FEEDBACK
	const getCourseFeedback = async (param) => {
		setLoadingFeedback(true)
		try {
			const res = await VideoCourseDetailApi.getFeedback(param)
			if (res.status === 200) {
				setFeedBack(res.data.data)
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setLoadingFeedback(false)
		}
	}

	// CALL API GET FEEDBACK
	const getCoursePreview = async (param) => {
		setLoading(true)
		try {
			const res = await VideoCourseDetailApi.getLessonPreview(param)
			res.status == 200 && setVideoPreView(res.data.data)
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setLoading(false)
		}
	}

	const getVideoCourseByID = async (params) => {
		try {
			const res = await videoCoursesApi.getByID(params)
			if (res.status === 200) {
				setVideoCourseID(res.data.data)
			}
			if (res.status === 204) {
				setVideoCourseID(null)
			}
		} catch (error) {
			showNoti('danger', error.message)
		}
	}

	useEffect(() => {
		getTitlePage('Chi tiết khóa học video')
		if (!!slug) {
			getCourseDetails(slug)
			getVideoCourseByID(slug)
		}
	}, [slug])

	useEffect(() => {
		if (!!session) {
			localStorage.removeItem('path-cart-app')
		} else {
			localStorage.setItem('path-cart-app', window.location.href)
		}
	}, [session])

	function Iframe(props) {
		return (
			<div className="play-preview">
				<div className="video">
					{!!props?.iframe && (
						<iframe id="video__course__iframe" className="responsive-iframe" src={props?.iframe.toString()} allowFullScreen />
					)}
				</div>
			</div>
		)
	}

	useEffect(() => {
		if (videoPreView.length > 0) {
			handlePlayVideo(videoPreView[0])
		}
	}, [videoPreView])

	const handlePlayVideo = (e) => {
		setCurrentVideo(e)
	}

	const postAddToCard = async (data, type) => {
		setIsLoadingCart(true)
		try {
			const res = await VideoCourseCardApi.add(data)
			if (type == 1) {
				// res.status == 200 && setShowModal(true)
				// handleReloadNoti()
				if (res.status === 200) {
					setShowModal(true)
				}
			} else {
				router.push('/cart/check-out')
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setIsLoadingCart(false)
		}
	}

	// HANDLE AD TO CARD (STUDENT)
	const addToCard = (type) => {
		let temp = {
			VideoCourseID: router.query.slug,
			Quantity: 1
		}
		postAddToCard(temp, type)
	}

	const handleAddToCart = async () => {
		if (!!session) {
			addToCard(1)
			setShowModal(true)
		} else {
			router.push('/auth/signin')
		}
	}

	return (
		<>
			<HeaderNoLogin />
			<div className="wrapper-course-details">
				<div className="vc-details">
					<div className="m-0 p-0 main">
						<div className="menu">
							<MenuContainer videoCourseID={videoCourseID} handleAddToCart={handleAddToCart} isLoadingCart={isLoadingCart} />
						</div>
						{/*  custom-scroll-bar */}
						<div className="details">
							<DetailsCourse
								details={details}
								feedBack={feedBack}
								content={content}
								isLoading={isLoading}
								loadingFeedback={loadingFeedback}
								getCourseFeedback={getCourseFeedback}
								handleAddToCart={handleAddToCart}
								isLoadingCart={isLoadingCart}
							/>
						</div>
					</div>
				</div>
				<Modal
					title="Xem trước"
					visible={showPreview}
					confirmLoading={false}
					footer={null}
					onCancel={() => setShowPreview(false)}
					width={600}
					className="vc-details"
				>
					<Iframe iframe={currentVideo?.LinkVideo} />
					<CourseDetailsPreview currentVideo={currentVideo} videoPreView={videoPreView} onClick={handlePlayVideo} />
				</Modal>
				<Modal
					title="Thêm vào giỏ hàng"
					visible={showModal}
					confirmLoading={false}
					className="vc-store_modal"
					footer={null}
					onCancel={() => setShowModal(false)}
					width={500}
				>
					<div className="m-0 row vc-store-center vc-store-space-beetween">
						<div className="m-0 row vc-store-center">
							<i className="fas fa-check-circle vc-store_modal_icon"></i>
							<span className="vc-store_modal_title">Thêm thành công</span>
						</div>
						<a href="/cart/shopping-cart">
							<button type="button" className="btn btn-primary">
								Đến giỏ hàng
							</button>
						</a>
					</div>
				</Modal>
			</div>
		</>
	)
}

export default CourseDetail
