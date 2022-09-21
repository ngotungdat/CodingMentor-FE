import { EyeOutlined } from '@ant-design/icons'
import { Popconfirm, Tooltip } from 'antd'
import moment from 'moment'
import router from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { areaApi } from '~/apiBase'
import { countryApi } from '~/apiBase/country/country'
import DeleteTableRow from '~/components/Elements/DeleteTableRow/DeleteTableRow'
import SortBox from '~/components/Elements/SortBox'
import PowerTable from '~/components/PowerTable'
import FilterColumn from '~/components/Tables/FilterColumn'
import { useWrap } from '~/context/wrap'
import AreaForm from './AreaForm'

const SHOW_SORT = false

const Area = () => {
	const [areaList, setAreaList] = useState<IArea[]>([])
	const [isLoading, setIsLoading] = useState({ type: '', status: false })
	const [totalPage, setTotalPage] = useState(null)
	const { showNoti, pageSize } = useWrap()
	const [activeColumnSearch, setActiveColumnSearch] = useState('')
	const [countryList, setCountryList] = useState<ICountry[]>([])

	// FILTER
	const listFieldInit = {
		pageIndex: 1,
		pageSize: pageSize,
		search: ''
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
			text: 'Tên tăng dần'
		},
		{
			dataSort: {
				sort: 0,
				sortType: false
			},
			value: 2,
			text: 'Tên giảm dần'
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
			// ...refValue.current,
			// pageIndex: 1,
			// [dataIndex]: valueSearch,
			pageSize: 99999,
			search: valueSearch
		})
	}

	const fetchCountryList = async () => {
		setIsLoading({
			type: 'GET_ALL',
			status: true
		})
		try {
			let res = await countryApi.getAll(filters)
			if (res.status === 200) {
				if (res.data.totalRow && res.data.data.length) {
					setCountryList(res.data.data)
					setTotalPage(res.data.totalRow)
				}
			} else if (res.status === 204) {
				setCountryList([])
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
	const fetchAreaList = async () => {
		setIsLoading({
			type: 'GET_ALL',
			status: true
		})
		try {
			let res = await areaApi.getAll(filters)
			if (res.status === 200) {
				if (res.data.totalRow && res.data.data.length) {
					setAreaList(res.data.data)
					setTotalPage(res.data.totalRow)
				}
			} else if (res.status === 204) {
				// showNoti('danger', 'Không tìm thấy')
				setAreaList([])
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
		// fetchAreaList()
		fetchCountryList()
	}, [filters])

	// CREATE
	const onCreateArea = async (data: any) => {
		setIsLoading({
			type: 'ADD_DATA',
			status: true
		})
		let res
		try {
			res = await areaApi.add({
				...data,
				Enable: true
			})
			res.status === 200 && showNoti('success', res.data.message)
			onResetSearch()
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
	const onUpdateArea = async (newObj: any, idx: number) => {
		setIsLoading({
			type: 'ADD_DATA',
			status: true
		})
		let res
		try {
			res = await areaApi.update(newObj)
			if (res.status === 200) {
				const newAreaList = [...areaList]
				newAreaList.splice(idx, 1, newObj)
				setAreaList(newAreaList)
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
	const onDeleteArea = (idx: number) => {
		return async () => {
			setIsLoading({
				type: 'GET_ALL',
				status: true
			})
			try {
				const delObj = areaList[idx]
				const res = await areaApi.delete({
					...delObj,
					Enable: false
				})
				res.status === 200 && showNoti('success', res.data.message)
				if (areaList.length === 1) {
					filters.pageIndex === 1
						? (setFilters({
								...listFieldInit,
								...refValue.current,
								pageIndex: 1
						  }),
						  setAreaList([]))
						: setFilters({
								...filters,
								...refValue.current,
								pageIndex: filters.pageIndex - 1
						  })
					return
				}
				fetchAreaList()
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
	// 		...FilterColumn('AreaName', onSearch, onResetSearch, 'text'),
	// 		className: activeColumnSearch === 'AreaName' ? 'active-column-search' : '',
	// 		render: (text) => <p className="font-weight-black">{text}</p>
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
	// 				<AreaForm isLoading={isLoading} isUpdate={true} updateObj={value} indexUpdateObj={idx} handleUpdateArea={onUpdateArea} />
	// 				<DeleteTableRow handleDelete={onDeleteArea(idx)} />
	// 				<Tooltip title="Xem danh sách quận / huyện">
	// 					<button
	// 						onClick={() =>
	// 							router.push({
	// 								pathname: '/option/district',
	// 								query: {
	// 									area: _.AreaID
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
			title: 'Quốc gia',
			dataIndex: 'Name',
			...FilterColumn('Name', onSearch, onResetSearch, 'text'),
			className: activeColumnSearch === 'Name' ? 'active-column-search' : '',
			render: (text) => <p className="font-weight-black">{text}</p>
		},
		{
			title: 'Ngày khởi tạo',
			dataIndex: 'ModifiedOn',
			render: (date) => moment(date).format('DD/MM/YYYY')
		},
		{
			title: 'Được tạo bởi',
			dataIndex: 'ModifiedBy'
		},
		{
			align: 'center',
			render: (value, _, idx) => {
				return (
					<div onClick={(e) => e.stopPropagation()}>
						{/* <AreaForm isLoading={isLoading} isUpdate={true} updateObj={value} indexUpdateObj={idx} handleUpdateArea={onUpdateArea} />
						<DeleteTableRow handleDelete={onDeleteArea(idx)} /> */}
						<Tooltip title="Xem danh sách thành phố">
							<button
								onClick={() =>
									router.push({
										pathname: '/option/district',
										query: {
											area: _.Iso
										}
									})
								}
								type="button"
								className="btn btn-icon delete"
							>
								<EyeOutlined />
							</button>
						</Tooltip>
					</div>
				)
			}
		}
	]

	// RETURN
	return (
		<PowerTable
			currentPage={filters.pageIndex}
			totalPage={totalPage}
			getPagination={getPagination}
			loading={isLoading}
			addClass="basic-header"
			TitlePage="Danh sách tỉnh"
			// TitleCard={<AreaForm isLoading={isLoading} isUpdate={false} handleCreateArea={onCreateArea} />}
			TitleCard={<></>}
			dataSource={countryList}
			columns={columns}
			Extra={
				SHOW_SORT && (
					<div className="extra-table">
						<SortBox handleSort={onSort} dataOption={sortOptionList} />
					</div>
				)
			}
		/>
	)
}

export default Area
