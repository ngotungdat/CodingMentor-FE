import { instance } from '~/apiBase/instance'

const url = '/api/Voucher'

class Voucher {
	getAll = (Params: any) =>
		instance.get<IApiResultData<IVoucher[]>>(url, {
			params: Params
		})

	getDetail = (id: number) => instance.get<IApiResultData<IVoucher>>(`${url}/${id}`)

	update = (data) => instance.put(url, data, {})

	export = (id) => instance.get<IApiResultData>(`/api/ExportVoucher/${id}`)

	sendMail = (id) => instance.post(`api/SendMailVoucher/${id}`)

	add = (data) => instance.post(url, data)
}

export const voucherApi = new Voucher()
