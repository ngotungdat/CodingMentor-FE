import { instance } from '../instance'

const url = '/api/CourseSchedule'
export const zoomRoomApiNew = {
	// Lấy tất cả data
	createZoom(ID) {
		return instance.post<IApiResultData<any>>(`${url}/create-zoom/${ID}`)
	},
	closeZoom(ID) {
		return instance.post<IApiResultData<IZoomRoom>>(`${url}/close-zoom/${ID}`)
	}
}
