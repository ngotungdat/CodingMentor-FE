import { instance } from '../instance'

const url = '/api/Currency'
export const currencyApi = {
	getAll: () => {
		return instance.get<IGetAllCurrency<ICurrency[]>>(url)
	},
	update: (data) => {
		return instance.put(`${url}`, data)
	}
}
