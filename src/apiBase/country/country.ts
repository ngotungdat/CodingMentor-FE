import { instance } from '../instance'

const url = '/api/Country'

export const countryApi = {
	// Lấy tất cả data
	getAll(params) {
		console.log('Params: ', params)
		return instance.get<IGetAllCountry<ICountry[]>>(url, { params })
		// return instance.get<IGetAllCountry<ICountry[]>>(`${url}?search.pageSize=${params.pageSize}&search.search=${params.search}`)
	},
	getByCity(params) {
		return instance.get<IGetAllCity<ICity[]>>(`${url}/City`, { params })
	}
}
