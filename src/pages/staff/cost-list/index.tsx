import React, { useState } from 'react'
import PowerTable from '~/components/PowerTable'
import SortBox from '~/components/Elements/SortBox'
import FilterTable from '~/components/Global/CostList/FilterTable'
import FilterColumn from '~/components/Tables/FilterColumn'
import LayoutBase from '~/components/LayoutBase'

const dataOption = [
	{
		text: 'Option 1',
		value: 'option 1'
	},
	{
		text: 'Option 2',
		value: 'option 2'
	},
	{
		text: 'Option 3',
		value: 'option 3'
	}
]

const CostList = () => {
	const [showFilter, showFilterSet] = useState(false)
	const funcShowFilter = () => {
		showFilter ? showFilterSet(false) : showFilterSet(true)
	}

	const dataSource = []

	for (let i = 0; i < 50; i++) {
		dataSource.push({
			key: i,
			FullName: 'Hoàng Linh',
			Email: 'hoanglinh@gmail.com',
			CurrentCourse: '1',
			LessonLeft: '10',
			Salary: '250,000',
			TotalPrice: '2,500,000'
		})
	}

	const columns = [
		{
			title: 'Họ và tên',
			dataIndex: 'FullName',
			key: 'fullname',
			...FilterColumn('FullName'),
			render: (text) => <p className="font-weight-primary">{text}</p>
		},
		{
			title: 'Email',
			dataIndex: 'Email',
			key: 'email',
			...FilterColumn('Email'),
			render: (text) => <p className="font-weight-black">{text}</p>
		},
		{
			title: 'Khóa học hiện tại',
			dataIndex: 'CurrentCourse',
			key: 'currentcourse'
		},
		{
			title: 'Lesson Left',
			dataIndex: 'LessonLeft',
			key: 'checker'
		},

		{
			title: 'Salary',
			dataIndex: 'Salary',
			key: 'salary'
		},
		{
			title: 'TotalPrice',
			dataIndex: 'TotalPrice',
			key: 'totalprice'
		}
	]

	return (
		<>
			<PowerTable
				columns={columns}
				dataSource={dataSource}
				TitlePage="Giá vốn hàng bán"
				TitleCard=""
				Extra={
					<div className="extra-table">
						<FilterTable />
						<SortBox dataOption={dataOption} />
					</div>
				}
			></PowerTable>
		</>
	)
}

CostList.layout = LayoutBase
export default CostList
