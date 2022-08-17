import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { Card, Rate, Modal, Spin, Input, Button } from 'antd'
import { useWrap } from '~/context/wrap'
import ReactHtmlParser from 'react-html-parser'
import LayoutBase from '~/components/LayoutBase'
import { parseToMoney } from '~/utils/functions'
import { VideoCourseDetailApi } from '~/apiBase/video-course-details'
import CourseDetailsContent from '~/components/VideoCourse/CourseDetailsContent/CourseDetailsContent'
import CourseDetailsFeedBack from '~/components/VideoCourse/CourseDetailsFeedBack'
import { VideoCourseCardApi } from '~/apiBase/video-course-store'
import CourseDetailsPreview from '~/components/VideoCourse/CourseDetailsPreview'
import Link from 'next/link'
import { VideoCourseListApi } from '~/apiBase'
import _ from '~/appConfig'

const initDetails = {
	VideoCourseName: '',
	Slogan: '',
	Requirements: '',
	Description: '',
	ResultsAchieved: '',
	CourseForObject: '',
	TeacherName: '',
	Avatar: '',
	TotalRating: 0,
	RatingNumber: 0,
	TotalStudent: 0,
	TotalFeedback: 0,
	CreatedBy: ''
}

const VideoCourseDetail = (props) => {
	const router = useRouter()
	const slug = router.query.slug

	let path: string = router.pathname
	let pathString: string[] = path.split('/')
	path = pathString[pathString.length - 2]

	const [isLoading, setLoading] = useState(true)
	const { showNoti, getTitlePage, handleReloadNoti, userInformation } = useWrap()
	const [details, setDetails] = useState(initDetails)
	const [content, setContent] = useState({})

	const [showPreview, setShowPreview] = useState(false)
	const [buyLoading, setByLoading] = useState(false)

	useEffect(() => {
		getTitlePage('Khóa học video')
		if (userInformation !== null) {
			getCourseDetails(slug)
		}
	}, [userInformation])

	// CALL API DETAILS
	const getCourseDetails = async (param) => {
		try {
			const res = await VideoCourseDetailApi.getDetails(param)
			res.status == 200 && (setDetails(res.data.data), getCourseContent(res.data.data.CurriculumID))
		} catch (error) {
			console.log(error)
		}
	}

	const [feedBack, setFeedBack] = useState({})
	const [feedbackIndex, setIndex] = useState(1)
	const [loadingFeedback, setLoadingFeedback] = useState(false)

	// CALL API GET CONTENT
	const getCourseContent = async (param) => {
		try {
			const res = await VideoCourseDetailApi.getContent(param)
			res.status == 200 && setContent(res.data.data)
		} catch (error) {
			console.log(error)
		} finally {
			let temp = {
				videocourseId: slug,
				rating: 0,
				search: '',
				pageIndex: feedbackIndex,
				pageSize: 10
			}
			getCourseFeedback(temp)
			getCoursePreview(router.query?.CurriculumID)
		}
	}

	const [videoPreView, setVideoPreView] = useState([])

	useEffect(() => {
		if (videoPreView.length > 0) {
			handlePlayVideo(videoPreView[0])
		}
	}, [videoPreView])

	// CALL API GET FEEDBACK
	const getCourseFeedback = async (param) => {
		setLoadingFeedback(true)
		try {
			const res = await VideoCourseDetailApi.getFeedback(param)
			res.status == 200 && setFeedBack(res.data.data)
		} catch (error) {
			console.log(error)
		} finally {
			setLoadingFeedback(false)
		}
	}

	// CALL API GET FEEDBACK
	const getCoursePreview = async (param) => {
		try {
			const res = await VideoCourseDetailApi.getLessonPreview(param)
			res.status == 200 && setVideoPreView(res.data.data)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	// HANDLE SEARCH
	const onSearchFeedback = (e) => {
		let temp = {
			videocourseId: slug,
			rating: 0,
			search: e,
			pageIndex: feedbackIndex,
			pageSize: 10
		}
		getCourseFeedback(temp)
	}

	// HANDLE SEARCH
	const onFilterFeedback = (e) => {
		let temp = {
			videocourseId: slug,
			rating: e,
			search: '',
			pageIndex: feedbackIndex,
			pageSize: 10
		}
		getCourseFeedback(temp)
	}

	// HANDLE SEARCH
	const onChangeIndex = (index) => {
		let temp = {
			videocourseId: slug,
			rating: 0,
			search: '',
			pageIndex: index,
			pageSize: 10
		}
		getCourseFeedback(temp)
	}

	const [showModal, setShowModal] = useState(false)
	const [currentVideo, setCurrentVideo] = useState<any>('')

	// ADD COURSE VIDEO TO CART
	const postAddToCard = async (data, type) => {
		try {
			const res = await VideoCourseCardApi.add(data)
			if (type == 1) {
				res.status == 200 && setShowModal(true)
				handleReloadNoti()
			} else {
				router.push('/cart/check-out')
			}
		} catch (error) {
			showNoti('danger', 'Thêm không thành công')
		} finally {
			setByLoading(false)
		}
	}

	// HANDLE AD TO CARD (STUDENT)
	const addToCard = (type) => {
		let temp = {
			VideoCourseID: slug,
			Quantity: 1
		}
		postAddToCard(temp, type)
	}

	const handlePlayVideo = (e) => {
		setCurrentVideo(e)
	}

	const [activing, setActiving] = useState(false)
	const [code, setCode] = useState('')
	const [activeLoading, setActiveLoading] = useState(false)

	// UPDATE COURSE
	const handleActive = async (param) => {
		setActiveLoading(true)
		try {
			const res = await VideoCourseListApi.updateActiveCode(param)
			res.status == 200 && showNoti('success', 'Thành công')
			res.status === 204 && showNoti('success', 'Thành công')
			getCourseDetails(slug)
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setActiveLoading(false)
		}
	}

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

	const _watchDemo = () => {
		videoPreView.length > 0 ? setShowPreview(true) : showNoti('danger', 'Không có video xem trước')
	}

	const isAdmin = () => {
		return userInformation.RoleID == 1 ? true : false
	}

	const isAdOrTech = () => {
		return userInformation.RoleID == 1 || userInformation.RoleID == 2 ? true : false
	}

	const showLimitBooking = () => {
		return router.query.LimitBooking !== undefined && router.query.LimitBooking !== null ? true : false
	}

	const _addToCart = (e: any) => {
		e.stopPropagation()
		addToCard(1)
	}

	const GotoCourse = (props: any) => {
		const { className } = props
		return (
			<Link
				href={{
					pathname: '/video-learning',
					query: { ID: router.query.CategoryID, course: slug, complete: 0 + '/' + 0, name: details.VideoCourseName }
				}}
			>
				<button className={`${className} btn btn-warning w-100`} type="button">
					Xem khóa học
				</button>
			</Link>
		)
	}

	const ActiveCourse = () => {
		return (
			<>
				<Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Mã kích hoạt" style={{ height: 36, borderRadius: 6 }} />
				<Button onClick={() => handleActive({ VdieoCourseID: slug, ActiveCode: code })} className="btn btn-warning w-100 mt-2">
					Kích hoạt {activeLoading && <Spin className="loading-base" />}
				</Button>
				<Button onClick={() => setActiving(false)} className="btn btn-cancel w-100 mt-2">
					Huỷ
				</Button>
			</>
		)
	}

	const MenuContainer = () => {
		return (
			<Card className="w-100 card">
				<div onClick={_watchDemo} className="main-thum center-column w-100">
					<img className="thum w-100 h-100" src={!!router.query?.Thum ? router.query.Thum.toString() : '/images/logo-thumnail.jpg'} />
					<div className="thum-mark w-100 h-100 flex-center">
						<i className="far fa-play-circle"></i>
					</div>
				</div>
				<div className="center-column">
					<div className="price">
						{!!router.query.Sell && <p className="m-0 p-0">{parseToMoney(router.query.Sell)} AUD</p>}
						{!!router.query.Original && <p className="m-0 p-0">{parseToMoney(router.query.Original)} AUD</p>}
					</div>
					{/* {showLimitBooking() && <span className="mt-1 size-16">Số lượt đặt lịch: {router.query.LimitBooking}</span>} */}
					{!!userInformation && (
						<div className="buttons">
							{isAdmin() && (
								<>
									<GotoCourse className="" />
								</>
							)}

							{userInformation.UserInformationID.toString() == router.query.TeacherID && <GotoCourse className="" />}

							{!isAdOrTech() && (
								<>
									<div className=" w-100">
										{activing ? (
											<ActiveCourse />
										) : (
											<>
												<button onClick={_addToCart} className="btn btn-primary btn-add">
													Thêm vào giỏ {buyLoading && <Spin className="loading-base" />}
												</button>

												{router.query.Active == 'activated' ? (
													<GotoCourse className="mt-2" />
												) : (
													<button onClick={() => setActiving(true)} className="btn btn-light w-100 mt-2">
														Kích hoạt
													</button>
												)}
											</>
										)}
									</div>
								</>
							)}
						</div>
					)}
				</div>
				{/*<hr />
				 <div className="bold">
					Được <span className="purple">đặt lịch thực hành luyện tập phát âm, trao đổi trực tiếp với giáo viên</span> trên hệ thống phòng
					học online của
					<span className="orange"> IELTS Nguyễn Huyền</span>
				</div> */}
			</Card>
		)
	}

	const DetailsCourse = () => {
		return (
			<>
				<Card className="card w-100">
					<div className="header">
						<p className="name">{details.VideoCourseName}</p>
						<span className="slogan mt-2">{ReactHtmlParser(details.Slogan)}</span>
						{/* <div className="row-center mt-2 info row-center">
							<Rate disabled value={details.RatingNumber} className="rate" />
							<span className="ml-3">({details.TotalRating} lượt đánh giá)</span>
						</div> */}
						{/* <div className="mt-2">
							{details.TotalStudent} học sinh • {router.query?.TotalVideoViews || 0} lượt xem
						</div> */}
						<div className="mentor">
							<img src={details.Avatar || '/images/icons/UserUnknown.svg'} />
							<span>{details.TeacherName || 'Chưa có mentor'}</span>
						</div>
						<div className="rating">
							<div className="stars">
								<Rate
									disabled
									style={{ color: '#FFBA0A', fontSize: 20 }}
									value={(Math.round((details.RatingNumber * 10) / 5) * 5) / 10}
									className="rate"
									allowHalf={true}
								/>
							</div>
							<p className="rating-text">
								{(Math.round((details.RatingNumber * 10) / 5) * 5) / 10} stars ({details.TotalFeedback} lượt đánh giá)
							</p>
						</div>
					</div>

					<div className="object-of-course">
						<p className="text">Đối tượng học</p>
						<div className="mt-2">{ReactHtmlParser(details.CourseForObject)}</div>
					</div>

					<hr />

					<div className="contents">
						<p className="title">Nội dung khóa học</p>
						<CourseDetailsContent loading={isLoading} contentData={content} />
					</div>

					<hr />

					<div className="require">
						<p className="title">Yêu cầu</p>
						<div className="mt-2">{ReactHtmlParser(details.Requirements)}</div>
					</div>

					<hr />

					<div className="m-0 mb-3">
						<p className="title">Đánh giá của học viên</p>
						<CourseDetailsFeedBack
							feedBack={feedBack}
							loadingFeedback={loadingFeedback}
							onSearchFeedback={onSearchFeedback}
							onFilterFeedback={onFilterFeedback}
							getPagination={(e) => onChangeIndex(e)}
							pageIndex={feedbackIndex}
						/>
					</div>
					{/* <div className="m-0 mb-3">
						<div className="title">Giới thiệu</div>
						<div className="mt-2">{ReactHtmlParser(details.Description)}</div>
						<div className="title">Khóa học này có gì?</div>
						<div className="mt-2">{ReactHtmlParser(details.ResultsAchieved)}</div>
					</div>

					<hr />

				

					<hr /> */}

					{/* <hr /> */}
				</Card>
			</>
		)
	}

	return (
		<>
			<div className="vc-details">
				<div className="m-0 p-0 main">
					<div className="menu">
						<MenuContainer />
					</div>
					{/*  custom-scroll-bar */}
					<div className="details">
						<DetailsCourse />
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
		</>
	)
}

VideoCourseDetail.propTypes = {}
VideoCourseDetail.layout = LayoutBase

export default VideoCourseDetail
