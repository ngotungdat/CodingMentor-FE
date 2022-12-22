import { Card } from 'antd'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { VideoCourseCardApi } from '~/apiBase/video-course-store'
import { useWrap } from '~/context/wrap'
import { parseToMoney } from '~/utils/functions'

const MenuContainer = (props) => {
	const { videoCourseID, handleAddToCart, isLoadingCart } = props
	const { showNoti } = useWrap()
	const { data: session } = useSession()
	const router = useRouter()
	// const _watchDemo = () => {
	// 	videoPreView.length > 0 ? setShowPreview(true) : showNoti('danger', 'Không có video xem trước')
	// }

	return (
		<Card className="w-100 card">
			<div className="main-thum center-column w-100">
				<img
					className="thum w-100 h-100"
					src={!!videoCourseID && !!videoCourseID.ImageThumbnails ? videoCourseID.ImageThumbnails : '/images/logo-thumnail.jpg'}
				/>
				{/* <div className="thum-mark w-100 h-100 flex-center">
					<i className="far fa-play-circle"></i>
				</div> */}
			</div>
			<div className="center-column">
				<div className="price">
					{!!videoCourseID && !!videoCourseID.SellPrice ? (
						<p className="m-0 p-0">{parseToMoney(videoCourseID.SellPrice)} AUD</p>
					) : (
						<p className="m-0 p-0">Free</p>
					)}
					{!!videoCourseID && !!videoCourseID.OriginalPrice ? (
						<p className="m-0 p-0">{parseToMoney(videoCourseID.OriginalPrice)} AUD</p>
					) : (
						<></>
					)}
				</div>
				<div className="buttons">
					<button className="btn btn-primary" onClick={handleAddToCart} disabled={isLoadingCart}>
						Mua khóa học
					</button>
				</div>
			</div>
		</Card>
	)
}

export default MenuContainer
