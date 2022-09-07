import React, { useEffect, useState } from 'react'
import { timeZoneApi } from '~/apiBase/timezone'
import PowerTable from '~/components/PowerTable'
import { useWrap } from '~/context/wrap'
import FormCreateTimezone from './FormCreateTimezone'
import FormDeleteTimezone from './FormDeleteTimezone'
import FormUpdateTimezone from './FormUpdateTimezone'

const TimeZone = () => {
	const { pageSize, showNoti, getTitlePage } = useWrap()
	const [timeZones, setTimeZones] = useState<ITimeZone[]>()
	const [totalPage, setTotalPage] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [filters, setFilters] = useState({ pageSize: pageSize, pageIndex: 1 })
	// PAGINATION
	const getPagination = (pageIndex: number) => {
		setFilters({ ...filters, pageIndex })
	}
	const getTimeZones = async () => {
		try {
			setIsLoading(true)
			const res = await timeZoneApi.getAll(filters)
			if (res.status === 200) {
				setTimeZones(res.data.data)
				setTotalPage(res.data.totalRow)
			}
		} catch (err) {
			showNoti('danger', err.message)
		} finally {
			setIsLoading(false)
		}
	}
	useEffect(() => {
		getTimeZones()
	}, [filters])

	const getPagination1 = document.querySelector('.ant-pagination-options') as HTMLElement
	if (getPagination1) {
		getPagination1.style.display = 'none'
	}

	const columns = [
		{
			title: 'Tên',
			dataIndex: 'Name',
			key: 'Name'
		},
		{
			title: 'Giá trị',
			dataIndex: 'Value',
			key: 'Value',
			width: 150
		},
		{
			title: '',
			dataIndex: '',
			key: '',
			width: 150,
			render: (text, data) => {
				return (
					<>
						<FormUpdateTimezone getTimeZones={getTimeZones} dataTimeZone={data} />
						<FormDeleteTimezone getTimeZones={getTimeZones} dataTimeZone={data} />
					</>
				)
			}
		}
	]
	return (
		<>
			{getTitlePage('Cấu hình Timezone')}

			<PowerTable
				loading={isLoading}
				currentPage={filters.pageIndex}
				totalPage={totalPage}
				getPagination={getPagination}
				addClass="basic-header"
				Extra={<div className="extra-table">Danh sách Timezone</div>}
				TitleCard={
					<>
						<FormCreateTimezone getTimeZones={getTimeZones} />
					</>
				}
				dataSource={timeZones}
				columns={columns}
			/>
		</>
	)
}

export default TimeZone
