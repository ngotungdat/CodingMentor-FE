import { instance } from '~/apiBase/instance'

const url = '/api/TimeZone'
export const timeZoneApi = {
	getAll: (params) => {
		return instance.get<IGetAllTimeZone<ITimeZone[]>>(url, { params })
	},
	create: (data) => {
		return instance.post(url, data)
	},
	update: (data) => {
		return instance.put(url, data)
	}
}
