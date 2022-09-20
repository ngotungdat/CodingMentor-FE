import { EyeOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import moment from 'moment'
import router from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { areaApi, districtApi } from '~/apiBase'
import { countryApi } from '~/apiBase/country/country'
import DeleteTableRow from '~/components/Elements/DeleteTableRow/DeleteTableRow'
import SortBox from '~/components/Elements/SortBox'
import PowerTable from '~/components/PowerTable'
import FilterColumn from '~/components/Tables/FilterColumn'
import { useWrap } from '~/context/wrap'
import { fmSelectArr } from '~/utils/functions'
import DistrictForm from './DistrictForm'

const District = () => {
	const [districtList, setDistrictList] = useState<IDistrict[]>([])
	const [cityList, setCityList] = useState<ICity[]>([])
	const [isLoading, setIsLoading] = useState({
		type: '',
		status: false
	})
	const [totalPage, setTotalPage] = useState(null)
	const { showNoti, pageSize } = useWrap()
	const [areaList, setAreaList] = useState([])
	const [activeColumnSearch, setActiveColumnSearch] = useState('')
	const area = router.query.area
	// FILTER
	const listFieldInit = {
		pageIndex: 1,
		pageSize: pageSize,
		sort: -1,
		sortType: false,
		AreaName: '',
		AreaID: null,
		DistrictName: ''
	}
	let refValue = useRef({
		pageIndex: 1,
		pageSize: 10,
		sort: -1,
		sortType: false
	})
	const [filters, setFilters] = useState(listFieldInit)
	// SORT OPTION
	const sortOptionList = [
		{
			dataSort: {
				sort: 0,
				sortType: true
			},
			value: 1,
			text: 'Tỉnh/tp tăng dần'
		},
		{
			dataSort: {
				sort: 0,
				sortType: false
			},
			value: 2,
			text: 'Tỉnh/tp giảm dần'
		},
		{
			dataSort: {
				sort: 1,
				sortType: true
			},
			value: 3,
			text: 'Quận tăng dần'
		},
		{
			dataSort: {
				sort: 1,
				sortType: false
			},
			value: 4,
			text: 'Quận giảm dần'
		}
	]
	// PAGINATION
	const getPagination = (pageIndex: number, pageSize: number) => {
		if (!pageSize) pageSize = 10
		refValue.current = {
			...refValue.current,
			pageSize,
			pageIndex
		}
		setFilters({
			...filters,
			...refValue.current
		})
	}
	// SORT
	const onSort = (option) => {
		refValue.current = {
			...refValue.current,
			sort: option.title.sort,
			sortType: option.title.sortType
		}
		setFilters({
			...listFieldInit,
			...refValue.current
		})
	}
	// RESET SEARCH
	const onResetSearch = () => {
		setActiveColumnSearch('')
		setFilters({
			...listFieldInit,
			pageSize: refValue.current.pageSize
		})
	}
	// ACTION SEARCH
	const onSearch = (valueSearch, dataIndex) => {
		setActiveColumnSearch(dataIndex)
		setFilters({
			...listFieldInit,
			...refValue.current,
			pageIndex: 1,
			[dataIndex]: valueSearch
		})
	}
	const fetchCityList = async () => {
		setIsLoading({
			type: 'GET_ALL',
			status: true
		})
		try {
			let res = await countryApi.getByCity({ iso: area, pageSize: 99999 })
			if (res.status === 200) {
				if (res.data.totalRow && res.data.data.length) {
					setCityList(res.data.data)
					setTotalPage(res.data.totalRow)
				}
			} else if (res.status === 204) {
				// showNoti('danger', 'Không tìm thấy')
				setCityList([])
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setIsLoading({
				type: 'GET_ALL',
				status: false
			})
		}
	}

	// GET DATA IN FIRST TIME
	const fetchDistrictList = async () => {
		setIsLoading({
			type: 'GET_ALL',
			status: true
		})
		try {
			let res = await districtApi.getAll({ ...filters, areaID: area })
			if (res.status === 200) {
				if (res.data.totalRow && res.data.data.length) {
					setDistrictList(res.data.data)
					setTotalPage(res.data.totalRow)
				}
			} else if (res.status === 204) {
				// showNoti('danger', 'Không tìm thấy')
				setDistrictList([])
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setIsLoading({
				type: 'GET_ALL',
				status: false
			})
		}
	}
	useEffect(() => {
		// fetchDistrictList()
		fetchCityList()
	}, [filters])

	const fetchAreaList = async () => {
		setIsLoading({
			type: 'GET_ALL',
			status: true
		})
		try {
			let res = await areaApi.getAll({
				selectAll: true
			})
			if (res.status === 200) {
				const newAreaList = fmSelectArr(res.data.data, 'AreaName', 'AreaID')
				setAreaList(newAreaList)
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setIsLoading({
				type: 'GET_ALL',
				status: false
			})
		}
	}

	// CREATE
	const onCreateDistrict = async (data: any) => {
		setIsLoading({
			type: 'ADD_DATA',
			status: true
		})
		let res
		try {
			res = await districtApi.add({
				...data,
				Enable: true
			})
			res.status === 200 && showNoti('success', res.data.message)
			onResetSearch() // <== khi tạo xong r trở về trang đầu tiên
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setIsLoading({
				type: 'ADD_DATA',
				status: false
			})
		}
		return res
	}
	// UPDATE
	const onUpdateDistrict = async (newObj: any, idx: number) => {
		setIsLoading({
			type: 'ADD_DATA',
			status: true
		})
		let res
		try {
			res = await districtApi.update(newObj)
			if (res.status === 200) {
				const newDistrictList = [...districtList]
				newDistrictList.splice(idx, 1, {
					...newObj,
					AreaName: areaList.find((a) => a.value === newObj.AreaID).title
				})
				setDistrictList(newDistrictList)
				showNoti('success', res.data.message)
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setIsLoading({
				type: 'ADD_DATA',
				status: false
			})
		}
		return res
	}
	// DELETE
	const onDeleteDistrict = (idx: number) => {
		return async () => {
			setIsLoading({
				type: 'GET_ALL',
				status: true
			})
			try {
				const delObj = districtList[idx]
				const res = await districtApi.delete({
					...delObj,
					Enable: false
				})
				res.status === 200 && showNoti('success', res.data.message)
				if (districtList.length === 1) {
					filters.pageIndex === 1
						? (setFilters({
								...listFieldInit,
								...refValue.current,
								pageIndex: 1
						  }),
						  setDistrictList([]))
						: setFilters({
								...filters,
								...refValue.current,
								pageIndex: filters.pageIndex - 1
						  })
					return
				}
				fetchDistrictList()
			} catch (error) {
				showNoti('danger', error.message)
			} finally {
				setIsLoading({
					type: 'GET_ALL',
					status: false
				})
			}
		}
	}
	// COLUMN FOR TABLE
	// const columns = [
	// 	{
	// 		title: 'Tên tỉnh/thành phố',
	// 		dataIndex: 'AreaName',
	// 		...FilterColumn('AreaID', onSearch, onResetSearch, 'select', areaList),
	// 		className: activeColumnSearch === 'AreaID' ? 'active-column-search' : ''
	// 	},
	// 	{
	// 		title: 'Tên quận',
	// 		dataIndex: 'DistrictName',
	// 		...FilterColumn('DistrictName', onSearch, onResetSearch, 'text'),
	// 		className: activeColumnSearch === 'DistrictName' ? 'active-column-search' : ''
	// 	},
	// 	{
	// 		title: 'Ngày khởi tạo',
	// 		dataIndex: 'ModifiedOn',
	// 		render: (date) => moment(date).format('DD/MM/YYYY')
	// 	},
	// 	{
	// 		title: 'Được tạo bởi',
	// 		dataIndex: 'ModifiedBy'
	// 	},

	// 	{
	// 		align: 'center',
	// 		render: (value, _, idx) => (
	// 			<div onClick={(e) => e.stopPropagation()}>
	// 				<DistrictForm
	// 					optionAreaList={areaList}
	// 					isLoading={isLoading}
	// 					isUpdate={true}
	// 					updateObj={value}
	// 					indexUpdateObj={idx}
	// 					handleUpdateDistrict={onUpdateDistrict}
	// 				/>
	// 				<DeleteTableRow handleDelete={onDeleteDistrict(idx)} />

	// 				<Tooltip title="Xem danh sách quận / huyện">
	// 					<button
	// 						onClick={() =>
	// 							router.push({
	// 								pathname: '/option/ward',
	// 								query: {
	// 									dis: _.ID
	// 								}
	// 							})
	// 						}
	// 						type="button"
	// 						className="btn btn-icon delete"
	// 					>
	// 						<EyeOutlined />
	// 					</button>
	// 				</Tooltip>
	// 			</div>
	// 		)
	// 	}
	// ]

	const columns = [
		{
			title: 'Tên thành phố',
			dataIndex: 'Name',
			...FilterColumn('Name', onSearch, onResetSearch, 'select', areaList),
			className: activeColumnSearch === 'AreaID' ? 'active-column-search' : ''
		},
		{
			title: 'Ngày khởi tạo',
			dataIndex: 'ModifiedOn',
			render: (date) => moment(date).format('DD/MM/YYYY')
		},
		{
			title: 'Được tạo bởi',
			dataIndex: 'ModifiedBy'
		}

		// {
		// 	align: 'center',
		// 	render: (value, _, idx) => (
		// 		<div onClick={(e) => e.stopPropagation()}>
		// 			<DistrictForm
		// 				optionAreaList={areaList}
		// 				isLoading={isLoading}
		// 				isUpdate={true}
		// 				updateObj={value}
		// 				indexUpdateObj={idx}
		// 				handleUpdateDistrict={onUpdateDistrict}
		// 			/>
		// 			<DeleteTableRow handleDelete={onDeleteDistrict(idx)} />

		// 			<Tooltip title="Xem danh sách quận / huyện">
		// 				<button
		// 					onClick={() =>
		// 						router.push({
		// 							pathname: '/option/ward',
		// 							query: {
		// 								dis: _.ID
		// 							}
		// 						})
		// 					}
		// 					type="button"
		// 					className="btn btn-icon delete"
		// 				>
		// 					<EyeOutlined />
		// 				</button>
		// 			</Tooltip>
		// 		</div>
		// 	)
		// }
	]
	// RETURN
	return (
		<PowerTable
			currentPage={filters.pageIndex}
			totalPage={totalPage}
			getPagination={getPagination}
			loading={isLoading}
			addClass="basic-header"
			TitlePage="Danh sách thành phố"
			// TitleCard={<DistrictForm optionAreaList={areaList} isLoading={isLoading} isUpdate={false} handleCreateDistrict={onCreateDistrict} />}
			TitleCard={<></>}
			dataSource={cityList}
			columns={columns}
			// Extra={
			// 	<div className="extra-table">
			// 		<SortBox handleSort={onSort} dataOption={sortOptionList} />
			// 	</div>
			// }
		/>
	)
}

export default District
