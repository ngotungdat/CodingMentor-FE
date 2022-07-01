import React, { useEffect, useState } from 'react'
import { Modal, Form, Input, Switch, Tooltip, Select, DatePicker, InputNumber, Spin } from 'antd'
import { useForm } from 'react-hook-form'
import moment from 'moment'
import { parseToMoney } from '~/utils/functions'
import NumberFormat from 'react-number-format'

const dateFormat = 'YYYY/MM/DD'

const DiscountForm = (props) => {
	const { Option } = Select
	const { TextArea } = Input
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [form] = Form.useForm()
	const status = [
		{
			id: 1,
			text: 'Chưa kích hoạt'
		},
		{
			id: 2,
			text: 'Đã kích hoạt'
		},
		{
			id: 3,
			text: 'Hết hạn'
		}
	]
	const packages = [
		{
			id: 1,
			text: 'Gói lẻ'
		},
		{
			id: 2,
			text: 'Gói combo'
		}
	]
	const percentList = [
		{ title: 'Giảm theo phần trăm', value: 1 },
		{ title: 'Giảm tiền mặt', value: 2 }
	]

	const { handleSubmit, setValue } = useForm()
	const [percent, setPercent] = useState(false)
	const [visibleTypeSelect, setVisibleTypeSelect] = useState(false)

	const onChange = () => {
		setPercent(!percent)
		setVisibleTypeSelect(true)
	}

	const onSubmit = handleSubmit((data: any) => {
		if (!props.rowData) {
			if (percent) {
				data.DiscountType = 2
			} else {
				data.DiscountType = 1
			}
		}
		let res = props._onSubmit({
			...data,
			Discount: !!data?.Discount ? data?.Discount.toString().replace(',', '').replace(',', '').replace(',', '').replace(',', '') : '',
			MaxDiscountPrice: !!data?.MaxDiscount
				? data?.MaxDiscount.toString().replace(',', '').replace(',', '').replace(',', '').replace(',', '')
				: ''
		})
		res.then(function (rs: any) {
			rs && rs.status == 200 && setIsModalVisible(false), form.resetFields()
		})
	})

	useEffect(() => {
		if (isModalVisible) {
			if (props.rowData) {
				setValue('ID', props.rowData.ID)
				setValue('Discount', props.rowData.Discount)
				setValue('DiscountType', props.rowData.DiscountType)
				setValue('Status', props.rowData.Status)
				setValue('Note', props.rowData.Note)
				setValue('DeadLine', props.rowData.DeadLine)
				setValue('Quantity', props.rowData.Quantity)
				setValue('Style', props.rowData.Style)
			}
		}
	}, [isModalVisible])

	return (
		<>
			{props.showIcon && (
				<button
					className="btn btn-icon edit"
					onClick={() => {
						setIsModalVisible(true)
					}}
				>
					<Tooltip title="Cập nhật">
						<i className="fas fa-edit" style={{ color: '#34c4a4', fontSize: 16, marginBottom: -1 }}></i>
					</Tooltip>
				</button>
			)}
			{props.showAdd && (
				<button
					className="btn btn-warning add-new"
					onClick={() => {
						setIsModalVisible(true)
					}}
				>
					Thêm mới
				</button>
			)}

			{/*  */}
			<Modal
				title={<>{props.showAdd ? 'Thêm mã khuyến mãi' : 'Cập nhật mã khuyến mãi'}</>}
				visible={isModalVisible}
				onCancel={() => setIsModalVisible(false)}
				footer={null}
			>
				<div className="container-fluid">
					<Form form={form} layout="vertical" onFinish={onSubmit}>
						{props.showAdd ? (
							<div className="row">
								<div className="col-12">
									<Form.Item label="Mã khuyến mãi" name="DiscountCode" rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}>
										<Input
											onChange={(value) => setValue('DiscountCode', value.target.value)}
											placeholder="Mã khuyến mãi"
											className="style-input"
										/>
									</Form.Item>
								</div>
								<div className="col-12">
									<Form.Item label="Loại khuyến mãi">
										<Select onChange={onChange} style={{ width: '100%' }} placeholder="Chọn loại khuyến mãi" className="style-input mr-2">
											{percentList.map((item) => {
												return <Option value={item.value}>{item.title}</Option>
											})}
										</Select>
									</Form.Item>
								</div>
								{visibleTypeSelect ? (
									<div className="col-12">
										{percent ? (
											<>
												<Form.Item label="Khuyến mãi %" name="Discount" rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}>
													<InputNumber
														className="ant-input style-input w-100"
														min={0}
														max={100}
														onChange={(value) => setValue('Discount', value)}
													/>
												</Form.Item>
												<Form.Item
													label="Khuyến mãi tối đa"
													name="MaxDiscount"
													rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}
												>
													<NumberFormat
														className="ant-input style-input w-100"
														onChange={(e: any) => setValue('MaxDiscount', e.target.value)}
														thousandSeparator={true}
													/>
												</Form.Item>
											</>
										) : (
											<Form.Item
												label="Giá trị khuyến mãi"
												name="Discount"
												rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}
											>
												<NumberFormat
													className="ant-input style-input w-100"
													onChange={(e: any) => setValue('Discount', e.target.value)}
													thousandSeparator={true}
												/>
											</Form.Item>
										)}
									</div>
								) : (
									<></>
								)}
							</div>
						) : (
							<div className="row">
								{props.rowData.DiscountType == 1 ? (
									<>
										<div className="col-6">
											<Form.Item
												label="Mã khuyến mãi"
												name="DiscountCode"
												rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}
												initialValue={props.rowData?.DiscountCode}
											>
												<Input placeholder="" className="style-input" readOnly={true} />
											</Form.Item>
										</div>
										<div className="col-6">
											<Form.Item
												label="Giá trị khuyến mãi"
												name="Discount"
												rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}
												initialValue={parseToMoney(props.rowData?.Discount)}
											>
												<NumberFormat
													className="ant-input style-input w-100"
													onChange={(e: any) => setValue('Discount', e.target.value)}
													thousandSeparator={true}
													value={props.rowData?.Discount}
												/>
											</Form.Item>
										</div>
									</>
								) : (
									<>
										<div className="col-12">
											<Form.Item
												label="Mã khuyến mãi"
												name="DiscountCode"
												rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}
												initialValue={props.rowData?.DiscountCode}
											>
												<Input placeholder="" className="style-input" readOnly={true} />
											</Form.Item>
										</div>
										<div className="col-6">
											<Form.Item
												label="Khuyến mãi %"
												name="Discount"
												rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}
												initialValue={props.rowData?.Discount}
											>
												<Input placeholder="" className="style-input" onChange={(e) => setValue('Discount', e.target.value)} />
											</Form.Item>
										</div>
										<div className="col-6">
											<Form.Item
												label="Khuyến mãi tối đa"
												name="MaxDicount"
												rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}
												initialValue={props.rowData?.MaxDiscountPrice}
											>
												<NumberFormat
													className="ant-input style-input w-100"
													onChange={(e: any) => setValue('MaxDiscount', e.target.value)}
													thousandSeparator={true}
													value={props.rowData?.MaxDiscountPrice}
												/>
											</Form.Item>
										</div>
									</>
								)}
							</div>
						)}

						{/*  */}
						<div className="row">
							<div className="col-6">
								<Form.Item
									label="Số lượng"
									name="Quantity"
									rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}
									initialValue={props.rowData?.Quantity}
								>
									<Input placeholder="" className="style-input" type="number" onChange={(e) => setValue('Quantity', e.target.value)} />
								</Form.Item>
							</div>
							<div className="col-6">
								{props.showAdd ? (
									<Form.Item label="Thời hạn" name="DeadLine" rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}>
										<DatePicker
											placeholder="Chọn ngày"
											className="style-input"
											format={dateFormat}
											onChange={(date, dateSting) => setValue('DeadLine', dateSting)}
										/>
									</Form.Item>
								) : (
									<Form.Item
										label="Thời hạn"
										name="DeadLine"
										rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}
										initialValue={moment(`${props.rowData?.DeadLine}`, dateFormat)}
									>
										<DatePicker
											placeholder="Chọn ngày"
											className="style-input"
											format={dateFormat}
											onChange={(date, dateSting) => setValue('DeadLine', dateSting)}
										/>
									</Form.Item>
								)}
							</div>
						</div>
						{/*  */}
						<div className="row">
							<div className="col-6">
								<Form.Item
									label="Trạng thái"
									name="Status"
									rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}
									initialValue={props.rowData?.StatusName}
								>
									<Select className="style-input" allowClear={true} onChange={(value) => setValue('Status', value)}>
										{status.map((row) => (
											<Option key={row.id} value={row.id}>
												{row.text}
											</Option>
										))}
									</Select>
								</Form.Item>
							</div>
							<div className="col-6">
								{props.showAdd ? (
									<Form.Item label="Gói" name="Packages" rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}>
										<Select className="style-input" allowClear={true} onChange={(value) => setValue('Style', value)}>
											{packages.map((row) => (
												<Option key={row.id} value={row.id}>
													{row.text}
												</Option>
											))}
										</Select>
									</Form.Item>
								) : (
									<Form.Item
										label="Gói"
										name="Packages"
										rules={[{ required: true, message: 'Bạn không được bỏ trống' }]}
										initialValue={props.rowData?.Style}
									>
										<Select className="style-input" allowClear={true} onChange={(value) => setValue('Style', value)}>
											{packages.map((row) => (
												<Option key={row.id} value={row.id}>
													{row.text}
												</Option>
											))}
										</Select>
									</Form.Item>
								)}
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<Form.Item name="Note" label="Ghi chú" initialValue={props.rowData?.Note}>
									<TextArea placeholder="" rows={2} allowClear={true} onChange={(e) => setValue('Note', e.target.value)} />
								</Form.Item>
							</div>
						</div>
						{/*  */}
						<div className="row mt-5">
							<div className="col-12 mt-3">
								<button type="submit" className="btn btn-primary w-100">
									Lưu
									{props.isLoading.type == 'ADD_DATA' && props.isLoading.status && <Spin className="loading-base" />}
								</button>
							</div>
						</div>
					</Form>
				</div>
			</Modal>
		</>
	)
}

export default DiscountForm
