import { Switch } from 'antd'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { studentCertificateApi } from '~/apiBase/student-certificate/student-certificate'
import ModalEditCertificateOfStudent from '~/components/Global/CourseList/CourseListDetail/StudentList/ModalEditCertificateOfStudent'
import LayoutBase from '~/components/LayoutBase'
import PowerTable from '~/components/PowerTable'
import { useWrap } from '~/context/wrap'

function StudentCertificates() {
	const [dataSource, setDataSource] = useState<IStudentCertificate[]>([])
	const { showNoti, pageSize, userInformation } = useWrap()
	const [isLoading, setIsLoading] = useState({
		type: '',
		status: false
	})
	const [totalPage, setTotalPage] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)

	const listTodoApi = {
		pageSize: pageSize,
		pageIndex: 1
	}
	const [todoApi, setTodoApi] = useState(listTodoApi)

	// -------------- GET PAGE_NUMBER -----------------
	const getPagination = (pageNumber: number) => {
		setCurrentPage(pageNumber)

		setTodoApi({
			...todoApi,
			pageIndex: pageNumber
		})
	}

	const getDataSource = async () => {
		setIsLoading({
			type: 'GET_ALL',
			status: true
		})
		try {
			let res = await studentCertificateApi.getAll(todoApi)
			if (res.status === 200) {
				setDataSource(res.data.data)
				setTotalPage(res.data.totalRow)
			}
		} catch (err) {
			showNoti('danger', err.message)
		} finally {
			setIsLoading({
				type: 'GET_ALL',
				status: false
			})
		}
	}

	const getDataSourceNoLoading = async () => {
		try {
			let res = await studentCertificateApi.getAll(todoApi)
			if (res.status === 200) {
				setDataSource(res.data.data)
				setTotalPage(res.data.totalRow)
			}
		} catch (err) {
			showNoti('danger', err.message)
		} finally {
		}
	}

	const changeStatus = async (data) => {
		try {
			let res = await studentCertificateApi.update({ ID: data.ID, Enable: !data.Enable })
			if (res.status === 200) {
				showNoti('success', res.data.message)
				getDataSourceNoLoading()
			}
		} catch (err) {
			showNoti('danger', err.message)
		}
	}

	useEffect(() => {
		getDataSource()
	}, [todoApi])

	const columns =
		userInformation && userInformation.RoleID === 3
			? [
					{
						title: 'Môn học',
						width: 150,
						dataIndex: 'CourseName',
						render: (text) => <p className="font-weight-primary">{text}</p>
					},
					{
						title: 'Học viên',
						width: 150,
						dataIndex: 'StudentName',
						render: (text) => <p className="font-weight-primary">{text}</p>
					},
					{
						title: 'Ngày bắt đầu',
						width: 150,
						dataIndex: 'StartDay',
						render: (text) => <p>{moment(text).format('DD-MM-YYYY')}</p>
					},
					{
						title: 'Ngày kết thúc',
						width: 150,
						dataIndex: 'EndDay',
						render: (text) => <p>{moment(text).format('DD-MM-YYYY')}</p>
					}
			  ]
			: [
					{
						title: 'Môn học',
						width: 150,
						dataIndex: 'CourseName',
						render: (text) => <p className="font-weight-primary">{text}</p>
					},
					{
						title: 'Học viên',
						width: 150,
						dataIndex: 'StudentName',
						render: (text) => <p className="font-weight-primary">{text}</p>
					},
					{
						title: 'Ngày bắt đầu',
						width: 150,
						dataIndex: 'StartDay',
						render: (text) => <p>{moment(text).format('DD-MM-YYYY')}</p>
					},
					{
						title: 'Ngày kết thúc',
						width: 150,
						dataIndex: 'EndDay',
						render: (text) => <p>{moment(text).format('DD-MM-YYYY')}</p>
					},
					{
						title: 'Trạng thái',
						width: 100,
						dataIndex: 'Enable',
						render: (text, data) => (
							<Switch
								checkedChildren="Hiện"
								unCheckedChildren="Ẩn"
								checked={data.Enable}
								size="default"
								onChange={() => changeStatus(data)}
							/>
						)
					},
					{
						title: 'Thao tác',
						width: 100,
						dataIndex: 'Active',
						render: (text, data) => {
							return (
								<>
									<ModalEditCertificateOfStudent data={data} />
								</>
							)
						}
					}
			  ]

	return (
		<>
			<PowerTable
				Extra={<></>}
				currentPage={currentPage}
				totalPage={totalPage && totalPage}
				getPagination={(pageNumber: number) => getPagination(pageNumber)}
				loading={isLoading}
				addClass="basic-header"
				TitlePage="Bài kiểm tra"
				dataSource={dataSource}
				columns={columns}
			/>
		</>
	)
}

StudentCertificates.layout = LayoutBase
export default StudentCertificates
