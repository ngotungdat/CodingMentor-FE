import React, { useState } from 'react'
import { List, Spin } from 'antd'
import { VideoCourseDetailApi } from '~/apiBase/video-course-details'
import { ChevronDown, ChevronRight } from 'react-feather'

const SHOW_TIME = false

const RenderSubItemContent = (props) => {
	const { item } = props
	return (
		<div className="row m-0 item sub-item" style={{ borderBottomWidth: 0.5 }}>
			<div className="row m-0">
				<i className="fas fa-play-circle" style={{marginTop: 5}} />
				<span className="ml-3" style={{ flex: 1 }}>
					{item?.Title}
				</span>
			</div>
			{SHOW_TIME && <span className="ml-3">{item?.SecondVideo} giây</span>}
		</div>
	)
}

const RenderItemContent = (props) => {
	const { item, data , Index} = props
	const [loading, setLoading] = useState(false)
	const [show, setShow] = useState(false)
	const [isFirst, setFirst] = useState(true)
	const [lessons, setLessons] = useState([])

	// CALL API LESSON
	const getCourseLesson = async (param) => {
		setLoading(true)
		try {
			const res = await VideoCourseDetailApi.getLesson(param)
			res.status == 200 && (setLessons(res.data.data), setShow(true), setFirst(false))
			res.status == 204 && (setLessons([]), setShow(true), setFirst(false))
		} catch (error) {
			console.log(error)
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
				<span className="ml-3">
					{loading ? <Spin size="small" /> : <>{show ? <ChevronDown/> : <ChevronRight/>}</>}
				</span>
			</div>
			{show && (
				<List
					header={null}
					footer={null}
					dataSource={lessons}
					className="list-content"
					renderItem={(item) => <RenderSubItemContent item={item} data={lessons} />}
				/>
			)}
		</div>
	)
}

const CourseDetailsContent = (props) => {
	const { contentData, loading } = props
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
				renderItem={(item, index) => <RenderItemContent Index={index} item={item} data={contentData.SectionModels} />}
			/>
		</div>
	)
}

export default CourseDetailsContent
