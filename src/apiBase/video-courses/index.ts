import { instance } from '~/apiBase/instance'
import { IVideoCourses } from '../types/video-course-list/video-course-list'

const url = '/api/VideoCourses'
class VideoCoursesApi {
	// Lấy tất cả data
	getByID = (ID) => instance.get<IApiResultData<IVideoCourses>>(`${url}/${ID}`)
	getLessonDetail = (params) => instance.get<IApiResultData<IVideoCourses>>(`${url}/LessonDetail`, params)
}

export const videoCoursesApi = new VideoCoursesApi()
