import React from 'react'
import { Popconfirm } from 'antd'
import { X } from 'react-feather'
import { useWrap } from '~/context/wrap'
import { timeZoneApi } from '~/apiBase/timezone'
const FormDeleteTimezone = (props) => {
	const { showNoti } = useWrap()
	const { dataTimeZone, getTimeZones } = props
	const handleDeleteTimeZone = async () => {
		try {
			const dataDelete = {
				ID: dataTimeZone.ID,
				Enable: false
			}
			const res = await timeZoneApi.update(dataDelete)
			if (res.status === 200) {
				getTimeZones()
				showNoti('success', res.data.message)
			}
		} catch (err) {
			showNoti('danger', err.message)
		}
	}
	return (
		<Popconfirm
			placement="bottomLeft"
			title={'Bạn muốn xóa Timezone: ' + dataTimeZone?.Name + '?'}
			onConfirm={handleDeleteTimeZone}
			cancelText="Hủy"
			okText="Xóa"
		>
			<button type="button" className="btn btn-icon delete">
				<X />
			</button>
		</Popconfirm>
	)
}

export default FormDeleteTimezone
