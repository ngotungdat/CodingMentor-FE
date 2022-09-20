import React, { useState, useEffect } from 'react'
import { Tooltip, Modal } from 'antd'
import { numberWithCommas } from '~/utils/functions'
import { useWrap } from '~/context/wrap'
import { teacherSalaryApi } from '~/apiBase/staff-manage/teacher-salary'
import PowerTable from '~/components/PowerTable'
import moment from 'moment'

const SalaryOfTeacherDetail = ({ price, record }) => {
	const [visible, setVisible] = useState(false)
	const [dataSource, setDataSource] = useState<ITeacherSalaryDetail[]>([])
	const { showNoti, pageSize } = useWrap()
	const defaultParams = {
		pageIndex: 1,
		pageSize: pageSize,
		sortType: true,
		SalaryOfTeacherID: record.ID
	}

	const getNum = (num) => {
		return num < 10 ? '0' + num : num
	}

	const getStrDate = (date) => {
		const nDate = new Date(date)
		return getNum(nDate.getDate()) + '-' + getNum(nDate.getMonth() + 1) + '-' + nDate.getFullYear()
	}

	const columns = [
		{
			title: 'Ngày',
			dataIndex: 'SalaryOfTeacherID',
			render: (item, record) => <p className="font-weight-primary">{moment(item).format('DD/MM/YYYY')}</p>
		},
		{
			title: 'Bắt đầu',
			dataIndex: 'StartTime',
			width: 100,
			render: (item, record) => <p className="font-weight-primary">{moment(item).format('HH:mm')}</p>
		},
		{
			title: 'Kết thúc',
			dataIndex: 'EndTime',
			width: 100,
			render: (item, record) => <p className="font-weight-primary">{moment(item).format('HH:mm')}</p>
		},
		{
			title: 'Khóa học',
			dataIndex: 'CourseName',
			align: 'left',
			render: (item, record) => <p className="font-weight-primary">{item}</p>
		}
		// {
		// 	title: 'Trạng thái',
		// 	dataIndex: 'StatusName',
		// 	align: 'right',
		// 	render: (item, record) => <p className="font-weight-primary">{item}</p>
		// }
	]

	const getDataSource = async () => {
		try {
			let res = await teacherSalaryApi.getDetail(defaultParams)
			console.log(res.data.data)
			if (res.status == 200) {
				setDataSource(res.data.data)
			}
			if (res.status == 204) {
				setDataSource([])
			}
		} catch (error) {}
	}

	useEffect(() => {
		if (visible) {
			getDataSource()
		}
	}, [visible])

	return (
		<>
			<button className="font-weight-primary btn btn-icon edit" onClick={() => setVisible(true)}>
				<Tooltip title="Xem chi tiết">
					<button className="custom-btn-shit">{!!price ? numberWithCommas(price) : 0} AUD</button>
				</Tooltip>
			</button>

			<Modal width={1200} title="Chi tiết lương giáo viên" visible={visible} onCancel={() => setVisible(false)} footer={false}>
				<PowerTable columns={columns} dataSource={dataSource}></PowerTable>
			</Modal>
		</>
	)
}

export default SalaryOfTeacherDetail
