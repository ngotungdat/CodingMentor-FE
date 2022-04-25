import { Image, Switch, Tooltip } from 'antd'
import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Eye } from 'react-feather'
import { packageApi } from '~/apiBase'
import SortBox from '~/components/Elements/SortBox'
import PowerTable from '~/components/PowerTable'
import FilterColumn from '~/components/Tables/FilterColumn'
import { useWrap } from '~/context/wrap'
import { numberWithCommas } from '~/utils/functions'
import PackageForm from './PackageForm/PackageForm'
import PackageFormFilterForm from './PackageForm/PakageFormFilterForm'

const paymentMethodOptionList = [
	{ label: 'Miễn phí', value: 1 },
	{ label: 'Cao cấp', value: 2 }
]

const typeFilterList = [
	{
		value: 1,
		title: 'Miễn phí'
	},
	{
		value: 2,
		title: 'Cao cấp'
	}
]

const levelFilterList = [
	{
		value: 1,
		title: 'HSK 1'
	},
	{
		value: 2,
		title: 'HSK 2'
	},
	{
		value: 3,
		title: 'HSK 3'
	},
	{
		value: 4,
		title: 'HSK 4'
	},
	{
		value: 5,
		title: 'HSK 5'
	},
	{
		value: 6,
		title: 'HSK 6'
	}
]

const sortOptionList = [
	{
		dataSort: {
			sort: 0,
			sortType: true
		},
		value: 1,
		text: 'Level tăng dần'
	},
	{
		dataSort: {
			sort: 0,
			sortType: false
		},
		value: 2,
		text: 'Level giảm dần'
	},
	{
		dataSort: {
			sort: 1,
			sortType: true
		},
		value: 3,
		text: 'Giá tăng dần'
	},
	{
		dataSort: {
			sort: 1,
			sortType: false
		},
		value: 4,
		text: 'Giá giảm dần'
	}
]

const defaultRefValue = {
	pageIndex: 1,
	pageSize: 10,
	sort: -1,
	sortType: false
}

type IPackageItem = {
	Name: string
	Level: number
	Type: number
	Avatar: string
	Price: string
	Description: string
}

function Package() {
	const { showNoti, pageSize } = useWrap()

	const levelOptionList = useRef<IOptionCommon[]>([])
	const [packageList, setPackageList] = useState<IPackage[]>([])
	const [isLoading, setIsLoading] = useState({ type: '', status: false })
	const [totalPage, setTotalPage] = useState(null)
	const [activeColumnSearch, setActiveColumnSearch] = useState('')

	const listFieldInit = {
		pageIndex: 1,
		pageSize: pageSize,
		sort: -1,
		sortType: false,
		Type: null,
		Level: null,
		fromDate: '',
		toDate: ''
	}

	let refValue = useRef(defaultRefValue)

	const [filters, setFilters] = useState(listFieldInit)

	// PAGINATION
	const getPagination = (pageIndex: number, pageSize: number) => {
		if (!pageSize) pageSize = 10
		refValue.current = { ...refValue.current, pageSize, pageIndex }
		setFilters({ ...filters, ...refValue.current })
	}
	// SORT
	const onSort = (option) => {
		refValue.current = { ...refValue.current, sort: option.title.sort, sortType: option.title.sortType }
		setFilters({ ...listFieldInit, ...refValue.current })
	}

	// FILTER
	const onFilter = (obj) => {
		setFilters({ ...listFieldInit, ...refValue.current, pageIndex: 1, ...obj })
	}

	// RESET SEARCH
	const onResetSearch = () => {
		setActiveColumnSearch('')
		setFilters({ ...listFieldInit, pageSize: refValue.current.pageSize })
	}

	// ACTION SEARCH
	const onSearch = (valueSearch, dataIndex) => {
		setActiveColumnSearch(dataIndex)
		if (dataIndex === 'CreatedOn') {
			setFilters({ ...listFieldInit, ...refValue.current, pageIndex: 1, ...valueSearch })
		} else {
			setFilters({ ...listFieldInit, ...refValue.current, pageIndex: 1, [dataIndex]: valueSearch })
		}
	}

	// GET DATA IN FIRST TIME
	const formatLevelPackage = (arr: number[]) => {
		if (arr && arr.length) {
			const fmLevelOptionList = arr.map((l) => ({
				title: `Level ${l}`,
				value: l
			}))
			levelOptionList.current = fmLevelOptionList
		}
	}

	const fetchPackageList = async () => {
		setIsLoading({ type: 'GET_ALL', status: true })
		try {
			let res = await packageApi.getAll(filters)
			if (res.status === 200) {
				if (res.data.totalRow && res.data.data.length) {
					formatLevelPackage(res.data['ListLevel'])
					setPackageList(res.data.data)
					setTotalPage(res.data.totalRow)
				}
			} else if (res.status === 204) {
				showNoti('danger', 'Không tìm thấy')
				setPackageList([])
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setIsLoading({ type: 'GET_ALL', status: false })
		}
	}

	const fetchLevelPackageList = async () => {
		try {
			let res = await packageApi.getAll(filters)
			if (res.status === 200) {
				formatLevelPackage(res.data['ListLevel'])
			}
		} catch (error) {
			showNoti('danger', error.message)
		}
	}

	useEffect(() => {
		fetchPackageList()
	}, [filters])

	const onChangeStatus = async (checked: boolean, idRow: number, idx: number) => {
		setIsLoading({ type: 'GET_ALL', status: true })
		try {
			let res = await packageApi.update({ ID: idRow, Enable: checked })
			if (res.status === 200) {
				const newPackageList = [...packageList]
				const newPackage = { ...packageList[idx], Enable: checked }
				newPackageList.splice(idx, 1, newPackage)
				setPackageList(newPackageList)
			}
		} catch (error) {
			showNoti('danger', error.Message)
		} finally {
			setIsLoading({ type: 'GET_ALL', status: false })
		}
	}

	// CREATE
	const onCreatePackage = async (packageItem: IPackageItem) => {
		setIsLoading({ type: 'ADD_DATA', status: true })
		try {
			const { Type, Price } = packageItem
			const newPackageItem = { ...packageItem, Price: Type === 1 ? 0 : parseInt(Price.replace(/\D/g, '')) }
			const res = await packageApi.add(newPackageItem)
			if (res.status === 200) {
				showNoti('success', res.data.message)
				onResetSearch()
			}
			return res
		} catch (error) {
			showNoti('danger', error.Message)
		} finally {
			setIsLoading({ type: 'ADD_DATA', status: false })
		}
	}

	// UPDATE
	const onUpdatePackage = (idx: number) => {
		return async (packageItem: IPackage) => {
			setIsLoading({ type: 'ADD_DATA', status: true })
			try {
				const { Type, Price, Level } = packageItem
				const newPackageUpdate: IPackage = {
					...packageItem,
					Price: Type === 1 ? 0 : parseInt(Price.toString().replace(/\D/g, '')),
					TypeName: typeFilterList.find((t) => t.value === Type).title || ''
				}
				const res = await packageApi.update(newPackageUpdate)
				if (res.status === 200) {
					const newPackageList = [...packageList]
					newPackageList.splice(idx, 1, newPackageUpdate)
					setPackageList(newPackageList)
					fetchLevelPackageList()
					showNoti('success', res.data.message)
				}
				return res
			} catch (error) {
				showNoti('danger', error.message)
			} finally {
				setIsLoading({ type: 'ADD_DATA', status: false })
			}
		}
	}

	const columns = [
		{
			title: 'Ảnh bìa',
			dataIndex: 'Avatar',
			render: (url) => {
				return (
					<Image
						width={70}
						height={70}
						src={url === '' ? '/images/default-book.jpeg' : url}
						title="Ảnh bìa bộ đề"
						alt="Ảnh bìa bộ đề"
						style={{ objectFit: 'cover' }}
					/>
				)
			}
		},
		{
			title: 'Tên bộ đề',
			dataIndex: 'Name'
		},
		{
			title: 'Loại',
			dataIndex: 'TypeName',
			...FilterColumn('Type', onSearch, onResetSearch, 'select', typeFilterList),
			className: activeColumnSearch === 'Type' ? 'active-column-search' : ''
		},
		{
			title: 'Giá',
			dataIndex: 'Price',
			render: (price) => (!price ? 0 : numberWithCommas(price))
		},
		{
			title: 'Ngày tạo bộ đề',
			dataIndex: 'CreatedOn',
			...FilterColumn('CreatedOn', onSearch, onResetSearch, 'date-range'),
			render: (date) => moment(date).format('DD/MM/YYYY'),
			className: activeColumnSearch === 'CreatedOn' ? 'active-column-search' : ''
		},
		{
			title: 'Trạng thái',
			dataIndex: 'Enable',
			align: 'center',
			render: (Enable: boolean, record: IPackage, idx: number) => (
				<>
					<Switch
						checkedChildren="Hiện"
						unCheckedChildren="Ẩn"
						checked={Enable}
						size="default"
						onChange={(checked) => onChangeStatus(checked, record.ID, idx)}
					/>
				</>
			)
		},
		{
			align: 'center',
			render: (packageItem: IPackage, record, idx) => (
				<>
					<Link
						href={{
							pathname: '/package/package-list/package-list-detail/[slug]',
							query: { slug: packageItem.ID }
						}}
					>
						<Tooltip title="Chi tiết">
							<a className="btn btn-icon">
								<Eye />
							</a>
						</Tooltip>
					</Link>
					<PackageForm
						isLoading={isLoading}
						isUpdate={true}
						updateObj={packageItem}
						handleUpdatePackage={onUpdatePackage(idx)}
						paymentMethodOptionList={paymentMethodOptionList}
					/>
				</>
			)
		}
	]

	return (
		<>
			<PowerTable
				currentPage={filters.pageIndex}
				totalPage={totalPage}
				getPagination={getPagination}
				loading={isLoading}
				Size="package-list-table"
				addClass="basic-header"
				dataSource={packageList}
				columns={columns}
				TitlePage="Danh sách bộ đề"
				Extra={
					<div className="extra-table">
						<PackageFormFilterForm
							handleFilter={onFilter}
							handleResetFilter={onResetSearch}
							optionListForFilter={{
								levelFilterList: levelFilterList,
								typeFilterList: typeFilterList
							}}
						/>
						<SortBox dataOption={sortOptionList} handleSort={onSort} />
					</div>
				}
				TitleCard={
					<PackageForm isLoading={isLoading} handleCreatePackage={onCreatePackage} paymentMethodOptionList={paymentMethodOptionList} />
				}
			/>
		</>
	)
}

export default Package
