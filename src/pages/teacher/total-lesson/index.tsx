import React, { useEffect, useState } from 'react'
import { DatePicker, Radio, Spin, Button } from 'antd'
import { useWrap } from '~/context/wrap'
import { statisticalApi } from '~/apiBase/statistical/statistical-total'
import moment from 'moment'
import LayoutBase from '~/components/LayoutBase'
import ExpandTable from '~/components/ExpandTable'
import NestedTable from '~/components/Elements/NestedTable'
import XLSX from 'xlsx'

const TeacherTotalLesson = () => {
	const [teacherLessons, setTeacherLessons] = useState<IStatTotalLessonOfTeacher[]>()
	const { pageSize, showNoti, userInformation } = useWrap()
	const [isLoading, setIsLoading] = useState({ type: '', status: false })
	const [totalPage, setTotalPage] = useState(null)
	const [typeView, setTypeView] = useState(1)
	const [filters, setFilters] = useState({
		pageSize: pageSize,
		pageIndex: 1,
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1
	})

	// PAGINATION
	const getPagination = (pageIndex: number) => {
		setFilters({ ...filters, pageIndex })
	}

	// Call Api Get Data
	const getTeacherLesson = async () => {
		setIsLoading({ type: 'GET_ALL', status: true })
		try {
			let res = await statisticalApi.getStatisticalTotalLessonsOfTeacher(filters)
			if (res.status === 200) {
				setTeacherLessons(res.data.data)
				setTotalPage(res.data.totalRow)
			}
			if (res.status === 204) {
				setTeacherLessons([])
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setIsLoading({ type: 'GET_ALL', status: false })
		}
	}

	useEffect(() => {
		if (!!userInformation && userInformation?.RoleID == 1) {
			getTeacherLesson()
		}
	}, [filters, userInformation])

	const columns = [
		{
			title: 'Ảnh đại diện',
			width: 120,
			dataIndex: 'Avatar',
			render: (text, data) => (
				<img
					style={{ width: 40, height: 40, borderRadius: '100%' }}
					src={data.Avatar.length > 0 ? data.Avatar : '/icons/default-avatar.svg'}
					alt="avatar img"
				/>
			)
		},
		{ title: 'Họ tên', width: 150, dataIndex: 'FullNameUnicode' },
		{ title: 'Tổng số buổi dạy', width: 180, dataIndex: 'TotalLesson' },
		{ title: 'Email', width: 150, dataIndex: 'Email' },
		{ title: 'Số điện thoại', width: 150, dataIndex: 'Mobile' }
	]

	const handleChangeDate = (value) => {
		if (typeView == 1) {
			setFilters({ ...filters, month: Number(moment(value).format('MM')), year: Number(moment(value).format('YYYY')) })
		} else if (typeView == 2) {
			setFilters({ ...filters, month: 0, year: Number(moment(value).format('YYYY')) })
		}
	}

	const renderExtra = () => {
		if (typeView == 1) {
			return (
				<DatePicker
					placeholder="Chọn tháng"
					onChange={handleChangeDate}
					picker="month"
					className="ml-2 style-input"
					style={{ width: 130 }}
					defaultValue={moment(moment().format('YYYY-MM'), 'YYYY-MM')}
				/>
			)
		} else if (typeView == 2) {
			return (
				<DatePicker
					placeholder="Chọn năm"
					onChange={handleChangeDate}
					picker="year"
					className="ml-2 style-input"
					style={{ width: 130 }}
					defaultValue={moment(moment().format('YYYY'), 'YYYY')}
				/>
			)
		}
	}

	const onChange = (event) => {
		setTypeView(event.target.value)
	}

	const [details, setDetails] = useState<Array<ILessonDetailsOfTeacher>>([])

	// Get Details Of Lesson
	const getDetails = async (param) => {
		setDetails([])
		setIsLoading({ type: 'GET_ALL', status: true })
		try {
			const response = await statisticalApi.getTotalLessonsDetails({
				teacherId: param.UserInformationID,
				year: filters.year,
				month: filters.month
			})
			if (response.status == 200) {
				setDetails(response.data.data)
			}
		} catch (error) {
			showNoti('danger', error?.message)
		} finally {
			setIsLoading({ type: 'GET_ALL', status: false })
		}
	}

	// Render Expand Row
	const expandedRowRender = () => {
		const subColumns = [
			{
				title: 'Ngày dạy',
				dataIndex: 'Date',
				render: (text, data) => {
					return <>{!!data.Date && <>{moment(data.Date).format('DD/MM/YYYY')}</>}</>
				}
			},
			{
				title: 'Bắt đầu',
				dataIndex: 'TimeStart',
				render: (text) => <span className="bold">{text}</span>
			},
			{
				title: 'Kết thúc',
				dataIndex: 'TimeEnd',
				render: (text) => <span className="bold">{text}</span>
			},
			{
				title: 'Thời gian dạy',
				dataIndex: 'Time',
				align: 'center',
				render: (text) => <>{text}</>
			},
			{
				title: 'Trung tâm',
				dataIndex: 'BranchName',
				render: (text) => <p>{text}</p>
			},
			{
				title: 'Khóa học',
				dataIndex: 'CourseName',
				render: (text) => <>{text}</>
			}
		]

		return (
			<>
				{isLoading.status && (
					<div>
						<Spin />
					</div>
				)}
				{!isLoading.status && (
					<NestedTable
						totalPage={1 && 1}
						loading={isLoading}
						addClass="basic-header"
						TitlePage=""
						dataSource={details}
						columns={subColumns}
					/>
				)}
			</>
		)
	}

	const [loadingExport, setLoadingExport] = useState(false)

	async function downloadFile() {
		setLoadingExport(true)
		try {
			const response = await statisticalApi.getStatisticalTotalLessonsOfTeacher({ ...filters, pageSize: 999999999, pageIndex: 1 })
			console.log('response.data.data: ', response.data)

			if (response.status == 200) {
				// const url = window.URL.createObjectURL(new Blob([response.data]))
				// const link = document.createElement('a')

				// link.href = url
				// link.setAttribute('download', `coding-mentor-students-${Date.now()}.xlsx`)

				// document.body.appendChild(link)
				// link.click()

				// link.remove()
				let temp = []
				response.data.data.forEach((item, index) =>
					temp.push({
						A: index + 1,
						B: item.FullNameUnicode,
						C: item.Email,
						D: item.Mobile,
						E: item.TotalLesson
					})
				)
				createExcelFile1(temp)
			}
		} catch (error) {
			showNoti('danger', error?.message)
		} finally {
			setLoadingExport(false)
		}
	}

	const createExcelFile1 = async (data) => {
		let wb = XLSX.utils.book_new()

		/* Initial row */
		var ws = XLSX.utils.json_to_sheet([], {
			header: ['Thống kê số buổi dạy của giáo viên'],
			skipHeader: false
		})
		/* Write data starting at E2 */
		XLSX.utils.sheet_add_json(
			ws,
			[
				{
					A: 'STT',
					B: 'Họ và tên',
					C: 'Email',
					D: 'Số điện thoại',
					E: 'Tổng số buổi dạy'
				}
			],
			{ skipHeader: true, origin: 'A2' }
		)

		/* Write data starting at A2 */
		XLSX.utils.sheet_add_json(ws, data, { skipHeader: true, origin: 'A3' })

		// set width
		let wscols = [{ wch: 8 }, { wch: 20 }, { wch: 22 }, { wch: 32 }, { wch: 18 }, { wch: 24 }, { wch: 22 }, { wch: 22 }]
		let wsrows = [{ hpt: 22 }]
		ws['!cols'] = wscols
		ws['!rows'] = wsrows
		// });
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
		XLSX.writeFile(wb, 'excel.xlsx', { type: 'binary', bookType: 'xlsx' })
	}

	// Render Screen
	return (
		<>
			{!!userInformation && userInformation?.RoleID == 1 && (
				<ExpandTable
					loading={isLoading}
					totalPage={totalPage}
					dataSource={teacherLessons}
					getPagination={getPagination}
					columns={columns}
					Extra={<h4 style={{ textTransform: 'uppercase' }}>Thông kê số buổi dạy của giáo viên</h4>}
					TitleCard={
						<div style={{ height: 36, display: 'flex', alignItems: 'center' }}>
							<Button onClick={downloadFile} className="btn btn-primary">
								Tải danh sách {loadingExport && <Spin />}
							</Button>
							{renderExtra()}
							{/* <Radio.Group onChange={onChange} optionType="button" buttonStyle="solid" value={typeView} style={{ height: 36 }}>
								<Radio.Button value={1} style={{ height: 36, borderRadius: '0.375rem' }}>
									Tháng
								</Radio.Button>
								<Radio.Button value={2} style={{ height: 36, paddingTop: 2, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}>
									Năm
								</Radio.Button>
							</Radio.Group> */}
						</div>
					}
					handleExpand={(data) => getDetails(data)}
					expandable={{ expandedRowRender }}
				/>
			)}
		</>
	)
}

TeacherTotalLesson.layout = LayoutBase
export default TeacherTotalLesson
