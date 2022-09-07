import { Form, Modal, Spin, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useWrap } from '~/context/wrap'
import InputTextField from '~/components/FormControl/InputTextField'
import InputNumberField from '~/components/FormControl/InputNumberField'
import { timeZoneApi } from '~/apiBase/timezone'

const FormUpdateTimezone = (props) => {
	const { dataTimeZone, getTimeZones } = props
	const [openModal, setOpenModal] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const { showNoti } = useWrap()
	const showModal = () => {
		setOpenModal(true)
	}

	const handleCancel = () => {
		setOpenModal(false)
	}
	const handleSubmitTimeZone = async (data) => {
		try {
			setIsLoading(true)
			const dataUpdate = {
				Name: data.Name,
				Value: parseFloat(data.Value),
				ID: dataTimeZone.ID,
				Enable: true
			}
			const res = await timeZoneApi.update(dataUpdate)
			if (res.status === 200) {
				getTimeZones()
				showNoti('success', res.data.message)
			}
		} catch (err) {
			showNoti('danger', err.message)
		} finally {
			setOpenModal(false)
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

	useEffect(() => {
		if (dataTimeZone) {
			form.reset({
				...dataTimeZone
			})
		}
	}, [dataTimeZone])
	return (
		<>
			<button className="btn btn-icon edit" onClick={showModal}>
				<Tooltip title="Cập nhật">
					<i className="fas fa-edit" style={{ color: '#34c4a4', fontSize: 16, marginBottom: -1 }}></i>
				</Tooltip>
			</button>
			<Modal title="Cập nhật Timezone" visible={openModal} onCancel={handleCancel} footer={null}>
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
						Cập nhật {isLoading && <Spin className="loading-base" />}
					</button>
				</Form>
			</Modal>
		</>
	)
}

export default FormUpdateTimezone
