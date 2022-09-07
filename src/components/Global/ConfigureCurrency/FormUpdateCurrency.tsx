import { Form, Modal, Spin, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { useWrap } from '~/context/wrap'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputNumberField from '~/components/FormControl/InputNumberField'
import { currencyApi } from '~/apiBase/currency'

const FormUpdateCurrency = (props) => {
	const { currencyData, getAllCurrency } = props
	const [openModal, setOpenModal] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const { showNoti } = useWrap()
	const showModal = () => {
		setOpenModal(true)
	}

	const handleCancel = () => {
		setOpenModal(false)
	}
	const schema = yup.object().shape({
		ExchangeRate: yup.string().required('Bạn không được để trống')
	})
	const defaultValuesInit = {
		ExchangeRate: ''
	}
	const form = useForm({
		defaultValues: defaultValuesInit,
		resolver: yupResolver(schema)
	})

	const handleSubmitCurrency = async (data) => {
		try {
			setIsLoading(true)
			const dataUpdate = {
				ID: data.ID,
				ExchangeRate: parseFloat(data.ExchangeRate)
			}
			const res = await currencyApi.update(dataUpdate)
			if (res.status === 200) {
				getAllCurrency()
				showNoti('success', res.data.message)
			}
		} catch (err) {
			showNoti('danger', err.message)
		} finally {
			setOpenModal(false)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		if (currencyData) {
			form.reset({
				...currencyData
			})
		}
	}, [currencyData])
	return (
		<div>
			<button className="btn btn-icon edit" onClick={showModal}>
				<Tooltip title="Cập nhật">
					<i className="fas fa-edit" style={{ color: '#34c4a4', fontSize: 16, marginBottom: -1 }}></i>
				</Tooltip>
			</button>
			<Modal title="Cập nhật tỷ giá" visible={openModal} onCancel={handleCancel} footer={null}>
				<Form layout="vertical" onFinish={form.handleSubmit(handleSubmitCurrency)}>
					<div className="row">
						<div className="col-12">
							<InputNumberField form={form} name="ExchangeRate" label="Tỷ giá" placeholder="VD: 1.1" />
						</div>
					</div>
					<button type="submit" className="btn btn-primary w-100">
						Cập nhật {isLoading && <Spin className="loading-base" />}
					</button>
				</Form>
			</Modal>
		</div>
	)
}

export default FormUpdateCurrency
