import React from 'react'
import { List, Tooltip } from 'antd'

const RenderItemContent = (props) => {
	const { item, data, onClick, currentVideo } = props

	const isFinal = () => {
		return data.indexOf(item) == data.length - 1 ? true : false
	}

	// RENDER
	return (
		<>
			<div
				onClick={() => onClick(item)}
				className="row m-0 pl-3 pr-3 item"
				style={{ borderBottomWidth: isFinal() ? 0 : 0.5, background: item?.ID == currentVideo?.ID ? '#d5d5d5' : '' }}
			>
				<div className="row m-0 ">
					<i className="fas fa-play-circle mt-1" />
					<span className="ml-3" style={{ flex: 1 }}>
						{item?.Title}
					</span>
				</div>
				<span className="ml-3">Thời lượng {item?.SecondVideo} giây</span>
			</div>
		</>
	)
}

const CourseDetailsPreview = (props) => {
	const { videoPreView, onClick, currentVideo } = props

	return (
		<div className="w-100 mt-3">
			<span className="total-student">{videoPreView.length} video có thể xem</span>
			<List
				header={null}
				footer={null}
				dataSource={videoPreView}
				className="w-100 mt-3 review"
				renderItem={(item) => <RenderItemContent currentVideo={currentVideo} onClick={onClick} item={item} data={videoPreView} />}
			/>
		</div>
	)
}

export default CourseDetailsPreview
