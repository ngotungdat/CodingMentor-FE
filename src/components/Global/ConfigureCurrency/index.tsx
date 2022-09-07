import React, { useEffect, useState } from 'react'
import { currencyApi } from '~/apiBase/currency'
import PowerTable from '~/components/PowerTable'
import { useWrap } from '~/context/wrap'
import FormUpdateCurrency from './FormUpdateCurrency'

const ConfigureCurrency = () => {
	const { pageSize, showNoti, getTitlePage } = useWrap()
	const [isLoading, setIsLoading] = useState(false)
	const [currency, setCurrency] = useState<ICurrency[]>()
	const [filters, setFilters] = useState({ pageSize: pageSize, pageIndex: 1 })

	const getPagination = (pageIndex: number) => {
		setFilters({ ...filters, pageIndex })
	}

	const getAllCurrency = async () => {
		try {
			const res = await currencyApi.getAll()
			if (res.status === 200) {
				setCurrency(res.data.data)
			}
		} catch (err) {
			showNoti('danger', err.message)
		}
	}

	useEffect(() => {
		getAllCurrency()
	}, [])

	const columns = [
		{
			title: 'Tiền tệ',
			dataIndex: 'CurrencyType',
			key: 'CurrencyType'
		},
		{
			title: 'Tỷ giá',
			dataIndex: 'ExchangeRate',
			key: 'ExchangeRate'
		},
		{
			title: '',
			dataIndex: '',
			key: '',
			width: 150,
			render: (text, data) => {
				return (
					<>
						<FormUpdateCurrency getAllCurrency={getAllCurrency} currencyData={data} />
					</>
				)
			}
		}
	]
	return (
		<div>
			{getTitlePage('Cấu hình tiền tệ')}
			<PowerTable
				loading={isLoading}
				totalPage={currency?.length}
				getPagination={getPagination}
				addClass="basic-header"
				Extra={<div className="extra-table">Danh sách tỷ giá tiền tệ</div>}
				TitleCard={<>{/* <FormCreateTimezone getTimeZones={getTimeZones} /> */}</>}
				dataSource={currency}
				columns={columns}
			/>
		</div>
	)
}

export default ConfigureCurrency
