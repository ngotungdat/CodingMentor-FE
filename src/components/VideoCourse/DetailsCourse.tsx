import React from 'react'
import CourseDetailsFeedBack from './CourseDetailsFeedBack'
import ReactHtmlParser from 'react-html-parser'
import { Card, Rate } from 'antd'
import CourseDetailsContent from './CourseDetailsContent/CourseDetailsContent'
import { useRouter } from 'next/router'

const DetailsCourse = (props) => {
	const { details, feedBack, content, isLoading, getCourseFeedback, handleAddToCart, isLoadingCart, loadingFeedback } = props
	const router = useRouter()
	const { slug } = router.query

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
	// HANDLE SEARCH
	const onSearchFeedback = (e) => {
		let temp = {
			videocourseId: slug,
			rating: 0,
			search: e,
			pageIndex: 1,
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
			pageIndex: 1,
			pageSize: 10
		}
		getCourseFeedback(temp)
	}
	return (
		<Card className="card w-100">
			<div className="header">
				<p className="name">{!!details && details.VideoCourseName}</p>
				<span className="slogan mt-2">{!!details && ReactHtmlParser(details.Slogan)}</span>
				<div className="mentor">
					<img src={(!!details && details.Avatar) || '/images/icons/UserUnknown.svg'} />
					<span>{(!!details && details.TeacherName) || 'Chưa có mentor'}</span>
				</div>
				<div className="rating">
					<div className="stars">
						<Rate
							disabled
							style={{ color: '#FFBA0A', fontSize: 20 }}
							value={(!!details && Math.round((details.RatingNumber * 10) / 5) * 5) / 10}
							className="rate"
							allowHalf={true}
						/>
					</div>
					<p className="rating-text">
						{(!!details && Math.round((details.RatingNumber * 10) / 5) * 5) / 10} stars ({!!details && details.TotalFeedback} lượt đánh giá)
					</p>
				</div>
			</div>

			<div className="object-of-course">
				<p className="text">Đối tượng học</p>
				<div className="mt-2">{!!details && ReactHtmlParser(details.CourseForObject)}</div>
			</div>

			<hr />

			<div className="contents">
				<p className="title">Nội dung khóa học</p>
				<CourseDetailsContent loading={isLoading} contentData={content} handleAddToCart={handleAddToCart} isLoadingCart={isLoadingCart} />
			</div>

			<hr />

			<div className="require">
				<p className="title">Yêu cầu</p>
				<div className="mt-2">{!!details && ReactHtmlParser(details.Requirements)}</div>
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
					pageIndex={1}
				/>
			</div>
		</Card>
	)
}

export default DetailsCourse
