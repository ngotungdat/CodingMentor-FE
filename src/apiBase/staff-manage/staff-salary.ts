import { instance } from '~/apiBase/instance'

class StaffSalaryApi {
	getAll = (Params: any) => instance.get<IApiResultData<IStaffSalary[]>>('/api/SalaryOfStaff', { params: Params })
	postSalaryClosing = () => instance.post(`/api/SalaryOfStaffClosing`)
	update = (data) => instance.put('/api/SalaryOfStaff', data)
	exportExcel = (params) => instance.get<IApiResultData<IStaffExportExcel[]>>('/api/ExportSalaryStaff', { params: params })
}
export const staffSalaryApi = new StaffSalaryApi()
