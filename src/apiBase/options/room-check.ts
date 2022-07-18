import { instance } from '~/apiBase/instance'

class RoomCheckApi {
	// Lấy tất cả
	getAll = (todoApi: object) =>
		instance.get<IApiResultData<ICheckRoom[]>>('/api/CheckRoom', {
			params: todoApi
		})
}

export const roomCheckApi = new RoomCheckApi()
