import { Form, Modal, Spin } from 'antd'
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useWrap } from '~/context/wrap'
import InputTextField from '~/components/FormControl/InputTextField'
import InputNumberField from '~/components/FormControl/InputNumberField'
import { timeZoneApi } from '~/apiBase/timezone'

const FormCreateTimezone = (props) => {
	const { getTimeZones } = props
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const { showNoti } = useWrap()

	const showModal = () => {
		setIsModalOpen(true)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	const handleSubmitTimeZone = async (data) => {
		const newData = {
			...data,
			Value: parseFloat(data.Value)
		}
		try {
			setIsLoading(true)
			const res = await timeZoneApi.create(newData)
			if (res.status === 200) {
				getTimeZones()
				showNoti('success', res.data.message)
			}
		} catch (err) {
			showNoti('danger', err.message)
		} finally {
			setIsModalOpen(false)
			setIsLoading(false)
		}
	}

	const schema = yup.object().shape({
		Name: yup.string().required('Bạn không được để trống'),
		Value: yup.string().required('Bạn không được để trống')
	})
	const defaultValuesInit = {
		Name: '',
		Value: ''
	}
	const form = useForm({
		defaultValues: defaultValuesInit,
		resolver: yupResolver(schema)
	})
	return (
		<>
			<button
				className="btn btn-warning add-new"
				onClick={() => {
					showModal()
				}}
			>
				Thêm mới
			</button>
			<Modal title="Tạo Timezone" visible={isModalOpen} onCancel={handleCancel} footer={null}>
				<Form layout="vertical" onFinish={form.handleSubmit(handleSubmitTimeZone)}>
					<div className="row">
						<div className="col-12">
							<InputTextField form={form} name="Name" label="TimeZone" placeholder="VD: (UTC-12:00) International Date Line West" />
						</div>
						<div className="col-12">
							<InputNumberField form={form} name="Value" label="Giá trị" placeholder="VD: +7" />
						</div>
					</div>
					<button type="submit" className="btn btn-primary w-100">
						Thêm mới {isLoading && <Spin className="loading-base" />}
					</button>
				</Form>
			</Modal>
		</>
	)
}

export default FormCreateTimezone
