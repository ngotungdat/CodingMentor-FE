import { Checkbox, Tooltip } from 'antd'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Eye } from 'react-feather'
import { branchApi, programApi } from '~/apiBase'
import { courseRegistrationApi } from '~/apiBase/customer/student/course-registration'
import FilterBase from '~/components/Elements/FilterBase/FilterBase'
import SortBox from '~/components/Elements/SortBox'
import CourseRegForm from '~/components/Global/Customer/Student/CourseRegistration/CourseRegForm'
import LayoutBase from '~/components/LayoutBase'
import PowerTable from '~/components/PowerTable'
import FilterColumn from '~/components/Tables/FilterColumn'
import { useWrap } from '~/context/wrap'

const CourseRegistration = () => {
	const [listStudent, setListStudent] = useState([])
	const [listChecked, setListChecked] = useState([])
	const [isPickedProgramID, setIsPickedProgramID] = useState(null)
	const { userInformation, showNoti } = useWrap()

	const onSearch = (data) => {
		setCurrentPage(1)
		setParams({
			...listParamsDefault,
			FullNameUnicode: data
		})
	}

	const handleReset = () => {
		setCurrentPage(1)
		setParams(listParamsDefault)
	}

	function onChange(e, data) {
		const checked = e.target.checked
		let indexStudent = listChecked.findIndex((item) => item.id == data.ID)
		listChecked[indexStudent].checked = checked

		if (checked) {
			if (isPickedProgramID === null || isPickedProgramID === data.ProgramID) {
				listStudent.push(data.ID)
			}

			if (isPickedProgramID === null) {
				setIsPickedProgramID(data.ProgramID)
			} else if (data.ProgramID !== isPickedProgramID) {
				showNoti('danger', 'Chương trình học không trùng khớp!')
			}
			console.log('iprogram id checked: ', isPickedProgramID)
			console.log('list student: ', listStudent)
		} else {
			let index = listStudent.indexOf(data.ID)
			listStudent.splice(index, 1)
			if (listStudent.length === 0) {
				setIsPickedProgramID(null)
			}
			console.log('iprogram id unchecked: ', isPickedProgramID)
			console.log('list student: ', listStudent)
		}

		setListStudent([...listStudent])
		setListChecked([...listChecked])
	}

	const columns =
		userInformation && userInformation?.RoleID !== 10
			? [
					{
						title: 'Học viên',
						dataIndex: 'FullNameUnicode',
						...FilterColumn('FullNameUnicode', onSearch, handleReset, 'text'),
						render: (text) => <p className="font-weight-primary">{text}</p>
					},
					{
						title: 'Trung tâm',
						dataIndex: 'BranchName',
						render: (text) => <p className="font-weight-black">{text}</p>
					},
					{
						title: 'Chương trình học',
						dataIndex: 'ProgramName',
						render: (text) => <p className="font-weight-black">{text}</p>
					},
					{
						render: (text, data, index) => (
							<div className="d-flex align-items-center">
								<Link
									href={{
										pathname: '/customer/student/student-appointment/student-detail/[slug]',
										query: { slug: data.UserInformationID }
									}}
								>
									<Tooltip title="Xem chi tiết">
										<button className="btn btn-icon">
											<Eye />
										</button>
									</Tooltip>
								</Link>

								<Checkbox
									style={{ marginLeft: '5px' }}
									onChange={(value) => onChange(value, data)}
									checked={listStudent.findIndex((item) => item === data.ID) !== -1 && data.ProgramID === isPickedProgramID}
								></Checkbox>
							</div>
						)
					}
			  ]
			: [
					{
						title: 'Học viên',
						dataIndex: 'FullNameUnicode',
						...FilterColumn('FullNameUnicode', onSearch, handleReset, 'text'),
						render: (text) => <p className="font-weight-primary">{text}</p>
					},
					{
						title: 'Trung tâm',
						dataIndex: 'BranchName',
						render: (text) => <p className="font-weight-black">{text}</p>
					},
					{
						title: 'Chương trình học',
						dataIndex: 'ProgramName',
						render: (text) => <p className="font-weight-black">{text}</p>
					}
			  ]

	const [currentPage, setCurrentPage] = useState(1)
	const { pageSize, isAdmin } = useWrap()
	const listParamsDefault = {
		pageSize: pageSize,
		pageIndex: currentPage,
		sort: null,
		sortType: null,
		fromDate: null,
		toDate: null,
		BranchID: null,
		ProgramID: null,
		StudyTimeID: null,
		FullNameUnicode: null
	}

	const sortOption = [
		{
			dataSort: {
				sortType: null
			},
			value: 1,
			text: 'Mới cập nhật'
		},
		{
			dataSort: {
				sortType: true
			},
			value: 2,
			text: 'Từ dưới lên'
		}
	]

	const [dataFilter, setDataFilter] = useState([
		{
			name: 'BranchID',
			title: 'Trung tâm',
			col: 'col-12',
			type: 'select',
			optionList: null,
			value: null
		},
		{
			name: 'ProgramID',
			title: 'Chương trình học',
			col: 'col-12',
			type: 'select',
			optionList: null,
			value: null
		},
		{
			name: 'date-range',
			title: 'Ngày tạo',
			col: 'col-12',
			type: 'date-range',
			value: null
		}
	])

	const handleFilter = (listFilter) => {
		let newListFilter = {
			pageIndex: 1,
			fromDate: null,
			toDate: null,
			BranchID: null,
			ProgramID: null
		}
		listFilter.forEach((item, index) => {
			let key = item.name
			Object.keys(newListFilter).forEach((keyFilter) => {
				if (keyFilter == key) {
					newListFilter[key] = item.value
				}
			})
		})
		setParams({ ...listParamsDefault, ...newListFilter, pageIndex: 1 })
	}

	const handleSort = async (option) => {
		setParams({
			...listParamsDefault,
			sortType: option.title.sortType
		})
	}

	const [params, setParams] = useState(listParamsDefault)

	const [totalPage, setTotalPage] = useState(null)
	const [courseReg, setCourseReg] = useState<ICourseRegistration[]>([])
	const [isLoading, setIsLoading] = useState({
		type: 'GET_ALL',
		status: false
	})

	const setDataFunc = (name, data) => {
		dataFilter.every((item, index) => {
			if (item.name == name) {
				item.optionList = data
				return false
			}
			return true
		})
		setDataFilter([...dataFilter])
	}

	const getDataCenter = async () => {
		try {
			let res = await branchApi.getAll({ pageSize: 99999, pageIndex: 1 })
			if (res.status == 200) {
				const newData = res.data.data.map((item) => ({
					title: item.BranchName,
					value: item.ID
				}))
				setDataFunc('BranchID', newData)
			}

			res.status == 204 && console.log('Trung tâm Không có dữ liệu')
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
		}
	}

	const getDataProgram = async () => {
		try {
			let res = await programApi.getAll({ pageSize: 99999, pageIndex: 1 })
			if (res.status == 200) {
				const newData = res.data.data.map((item) => ({
					title: item.ProgramName,
					value: item.ID
				}))
				setDataFunc('ProgramID', newData)
			}

			res.status == 204 && console.log('Chương trình Không có dữ liệu')
		} catch (error) {
			// showNoti('danger', error.message);
		} finally {
		}
	}

	useEffect(() => {
		if (isAdmin) {
			getDataCenter()
			getDataProgram()
		}
	}, [isAdmin])

	const getPagination = (pageNumber: number) => {
		setCurrentPage(pageNumber)
		setParams({
			...params,
			pageIndex: currentPage
		})
	}

	const getDataCourseReg = (page: any) => {
		setIsLoading({
			type: 'GET_ALL',
			status: true
		})
		;(async () => {
			try {
				let res = await courseRegistrationApi.getAll({
					...params,
					pageIndex: page
				})
				//@ts-ignore
				if (res.status == 200) {
					setCourseReg(res.data.data)
					res.data.data.forEach((item) => {
						listChecked.push({
							id: item.ID,
							checked: false
						})
						setListChecked([...listChecked])
						setListStudent([])
					})
				}

				if (res.status == 204) {
					setCurrentPage(1)
					setCourseReg([])
				} else setTotalPage(res.data.totalRow)
			} catch (error) {
				showNoti('danger', error.message)
			} finally {
				setIsLoading({
					type: 'GET_ALL',
					status: false
				})
			}
		})()
	}

	useEffect(() => {
		getDataCourseReg(currentPage)
	}, [params])

	return (
		<PowerTable
			currentPage={currentPage}
			loading={isLoading}
			totalPage={totalPage && totalPage}
			getPagination={(pageNumber: number) => getPagination(pageNumber)}
			addClass="basic-header"
			TitlePage="DANH SÁCH HỌC VIÊN hẹn đăng kí"
			dataSource={courseReg}
			columns={columns}
			Extra={
				<div className="extra-table">
					<FilterBase dataFilter={dataFilter} handleFilter={(listFilter: any) => handleFilter(listFilter)} handleReset={handleReset} />

					<SortBox dataOption={sortOption} handleSort={(value) => handleSort(value)} />
				</div>
			}
			TitleCard={
				isAdmin && (
					<CourseRegForm
						setPickedProgramID={setIsPickedProgramID}
						pickedProgramID={isPickedProgramID}
						listStudent={listStudent}
						reloadData={(firstPage) => {
							getDataCourseReg(firstPage)
						}}
						currentPage={currentPage}
					/>
				)
			}
		/>
	)
}
CourseRegistration.layout = LayoutBase
export default CourseRegistration
