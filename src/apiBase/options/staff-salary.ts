import { instance } from '~/apiBase/instance'

class StaffSalary {
	// Lấy tất cả data
	getAll = (todoApi: object) =>
		instance.get<IApiResultData<IStaffSalary[]>>('/api/Salary', {
			params: todoApi
		})

	// Lấy dât theo id

	getByID = (id: number) => instance.get<IApiResultData<IStaffSalary[]>>(`/api/Salary/${id}`)

	getHistory = (id: number) => instance.get<IApiResultData<IStaffSalaryHistory[]>>(`/api/salary/history/${id}`)

	// Thêm mới data
	add = (data: IStaffSalary) => instance.post('/api/Salary', data)

	// Thêm mới data no type
	addData = (data) => instance.post('/api/Salary', data)

	// Cập nhật data
	update = (data: any) => instance.put('/api/Salary', data, {})
	// Lấy danh sách nhân viên chưa được thêm lương
	getNotExists = (search: string) => instance.get<IApiResultData<IStaffNotHaveSalary[]>>(`/api/Salary/GetNotExist?search=${search}`)
}

export const staffSalaryApi = new StaffSalary()
