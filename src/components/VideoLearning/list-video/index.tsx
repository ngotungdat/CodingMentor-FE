import React, { FC, useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { List } from 'antd'
import RenderItem from '~/components/VideoLearning/list-video/render-item'
import { useRouter } from 'next/router'

type IProps = {
	videos: any[]
	onPress: any
	subVideosByVideo: any[]
	getSubVideosByVideo: Function
}

// LIST VIDEOS
const VideoList: FC<IProps> = ({ videos, onPress, subVideosByVideo, getSubVideosByVideo }) => {
	const router = useRouter()
	const [watching, setWatching] = useState(0)
	const [playing, setPlaying] = useState<any>('')

	useEffect(() => {
		if (!!videos) {
			getWatchingVideo()
		}
	}, [videos])

	const getWatchingVideo = () => {
		const indexAPI = videos.findIndex((item: any) => item?.IsWatching == true)
		if (indexAPI > -1) {
			setWatching(videos[indexAPI].ID)
		} else {
			let flag = 0
			for (let i = 0; i < videos.length; i++) {
				const item = videos[i]
				if (item?.CompleteVsTotalLesson != '0/0') {
					flag == 0 && setWatching(item?.ID)
					flag = 1
				}
			}
		}
	}

	const _playVideo = (param) => {
		onPress(param)
		setPlaying(param.ID)
	}

	return (
		<>
			<div className="video-course-information">
				<p>Front End w React Native</p>
				<p>Use XD to get a job in UI Design, User Interface, User Experience design, UX design and Web Design</p>
				<div className="mentor">
					<img src="/images/icons/UserUnknown.svg" alt="user icon" />
					{router.query.teacherName === '' ? <p>Chưa có mentor</p> : <p>{router.query.teacherName}</p>}
				</div>
			</div>

			<hr className="on-desktop" />

			<h4 className="none-selection on-desktop horizontal-video-course">Nội dung khóa học</h4>
			{watching !== 0 && (
				<List
					itemLayout="horizontal"
					dataSource={videos}
					className="w-100"
					renderItem={(item: any) => (
						<RenderItem
							subVideosByVideo={subVideosByVideo}
							getSubVideosByVideo={getSubVideosByVideo}
							playing={playing}
							setPlaying={(e: number) => setPlaying(e)}
							watching={watching}
							data={videos}
							item={item}
							onPress={_playVideo}
						/>
					)}
				/>
			)}
		</>
	)
}

export default VideoList
