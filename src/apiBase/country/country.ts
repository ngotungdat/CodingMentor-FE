import { instance } from '../instance'

const url = '/api/Country'

export const countryApi = {
	// Lấy tất cả data
	getAll(params) {
		return instance.get<IGetAllCountry<ICountry[]>>(url, { params: params })
	},
	getByCity(params) {
		return instance.get<IGetAllCity<ICity[]>>(`${url}/City`, { params })
	}
}
