import React from 'react'
import { Avatar, Rate, Progress, Input, Select, List } from 'antd'
import ReactHtmlParser from 'react-html-parser'
import { Star } from 'react-feather'

const { Search } = Input
const { Option } = Select

const RenderItemFeedback = (props) => {
	const { item, data } = props

	const isFinal = () => {
		return data.indexOf(item) == data.length - 1 ? true : false
	}

	// RENDER
	return (
		<div
			className="item-fb mb-4"
			// style={{ borderBottomWidth: isFinal() ? 0 : 0.5 }}
		>
			{item.Avatar !== undefined && item.Avatar !== null && item.Avatar !== '' ? (
				<div className="avatar">
					<Avatar className="" src={item.Avatar || '/images/icons/UserUnknown.svg'} alt="avt" />
				</div>
			) : (
				<div className="avatar">
					<Avatar className="" src="/images/icons/UserUnknown.svg" alt="avt" />
				</div>
			)}
			<div className="content">
				<div className="main">
					<div className="name-status">
						<p>{item?.FullNameUnicode}</p>
						<span>Ngày: {item?.CreatedOn}</span>
					</div>
					<Rate style={{ color: '#FFBA0A', fontSize: 20, marginBottom: 8 }} allowHalf value={item?.RatingNumber} disabled />
				</div>
				<span className="comment">{ReactHtmlParser(item?.RatingComment)}</span>
			</div>
		</div>
	)
}

const CourseDetailsFeedBack = (props) => {
	const { feedBack, onSearchFeedback, onFilterFeedback, getPagination, pageIndex,loadingFeedback } = props

	return (
		<>
			<div className="fb-header w-100">
				<div className="number">
					<p>{feedBack?.StarModel?.Average == 'NaN' ? 0 : feedBack?.StarModel?.Average || 0}</p>
					<Rate
						className="sum-rate"
						allowHalf
						value={feedBack?.StarModel?.Average == 'NaN' ? 0 : feedBack?.StarModel?.Average || 0}
						disabled
						style={{ color: '#FFBA0A', fontSize: 20 }}
					/>
					<p>Đánh giá trung bình</p>
				</div>

				<div className="stars">
					<div
						className="star-row"
						onClick={() => {
							onFilterFeedback(5)
						}}
					>
						<Progress
							className="progress mr-3"
							strokeColor="#0A89FF"
							percent={feedBack?.StarModel?.PersentStar5 == 'NaN' ? 0 : feedBack?.StarModel?.PersentStar5}
							showInfo={false}
						/>
						<Rate disabled style={{ color: '#FFBA0A', fontSize: 20 }} value={5} className="start mr-3" allowHalf={true} />
						<span className="percent">{feedBack?.StarModel?.PersentStar5 == 'NaN' ? 0 : feedBack?.StarModel?.PersentStar5}%</span>
					</div>
					<div
						className="star-row"
						onClick={() => {
							onFilterFeedback(4)
						}}
					>
						<Progress
							className="progress mr-3"
							strokeColor="#0A89FF"
							percent={feedBack?.StarModel?.PersentStar4 == 'NaN' ? 0 : feedBack?.StarModel?.PersentStar4}
							showInfo={false}
						/>
						<Rate style={{ color: '#FFBA0A', fontSize: 20 }} className="start mr-3" allowHalf value={4} disabled />
						<span className="percent">{feedBack?.StarModel?.PersentStar4 == 'NaN' ? 0 : feedBack?.StarModel?.PersentStar4}%</span>
					</div>
					<div
						className="star-row"
						onClick={() => {
							onFilterFeedback(3)
						}}
					>
						<Progress
							className="progress mr-3"
							strokeColor="#0A89FF"
							percent={feedBack?.StarModel?.PersentStar3 == 'NaN' ? 0 : feedBack?.StarModel?.PersentStar3}
							showInfo={false}
						/>
						<Rate style={{ color: '#FFBA0A', fontSize: 20 }} className="start mr-3" allowHalf value={3} disabled />
						<span className="percent">{feedBack?.StarModel?.PersentStar3 == 'NaN' ? 0 : feedBack?.StarModel?.PersentStar3}%</span>
					</div>
					<div
						className="star-row"
						onClick={() => {
							onFilterFeedback(2)
						}}
					>
						<Progress
							className="progress mr-3"
							strokeColor="#0A89FF"
							percent={feedBack?.StarModel?.PersentStar2 == 'NaN' ? 0 : feedBack?.StarModel?.PersentStar2}
							showInfo={false}
						/>
						<Rate style={{ color: '#FFBA0A', fontSize: 20 }} className="start mr-3" allowHalf value={2} disabled />
						<span className="percent">{feedBack?.StarModel?.PersentStar2 == 'NaN' ? 0 : feedBack?.StarModel?.PersentStar2}%</span>
					</div>
					<div
						className="star-row"
						onClick={() => {
							onFilterFeedback(1)
						}}
					>
						<Progress
							className="progress mr-3"
							strokeColor="#0A89FF"
							percent={feedBack?.StarModel?.PersentStar1 == 'NaN' ? 0 : feedBack?.StarModel?.PersentStar1}
							showInfo={false}
						/>
						<Rate style={{ color: '#FFBA0A', fontSize: 20 }} className="start mr-3" allowHalf value={1} disabled />
						<span className="percent">{feedBack?.StarModel?.PersentStar1 == 'NaN' ? 0 : feedBack?.StarModel?.PersentStar1}%</span>
					</div>
				</div>
			</div>

			{/* <div className="w-100 row-center m-0 mt-3">
				<Select className="style-input ml-3" defaultValue="0" style={{ width: 120 }} onChange={(e) => onFilterFeedback(e)}>
					<Option value="0">Tất cả</Option>
					<Option value="1">1 sao</Option>
					<Option value="2">2 sao</Option>
					<Option value="3">3 sao</Option>
					<Option value="4">4 sao</Option>
					<Option value="5">5 sao</Option>
				</Select>
			</div> */}

			<List
				pagination={{
					onChange: getPagination,
					total: feedBack.TotalRow,
					size: 'small',
					current: pageIndex,
					pageSize: 10
				}}
				header={null}
				loading={loadingFeedback}
				footer={null}
				dataSource={feedBack.VideoCourseFeedBack}
				className="list-content mt-4"
				renderItem={(item) => <RenderItemFeedback item={item} data={feedBack.VideoCourseFeedBack} />}
			/>
		</>
	)
}

export default CourseDetailsFeedBack
