import React, { useState, useEffect } from 'react'
import { Modal, Form, Input, Spin, Upload, Button, Select, Image } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useWrap } from '~/context/wrap'
import { newsFeedApi } from '~/apiBase'
import { parseToMoney, wait } from '~/utils/functions'
import NumberFormat from 'react-number-format'
import { VideoCourseStoreApi } from '~/apiBase/video-course-store'
import CreateTag from './create-tag'
import CreateLevel from './create-level'
import CreateCategory from './create-category'
import UpdateDetails from './update-details'

import 'antd/dist/antd.css'

const { Option } = Select

const FORM_REQUIRED = [{ required: true, message: 'Không được để trống' }]

const ModalUpdateInfo = (props) => {
	const { dataCategory, dataLevel, dataCurriculum, tags, onRefeshTags, onRefeshCategory, defaultData, onRefesh } = props
	const { programID, rowData, onRefeshLevel } = props

	const { showNoti } = useWrap()

	const [form] = Form.useForm()

	const [visible, setVisible] = useState(false)
	const [loading, setLoading] = useState(true)
	const [submiting, setSubmiting] = useState(false)
	const [imageDeleted, setImageDeleted] = useState(false)

	const [imageSelected, setImageSelected] = useState<any>({ name: '' })
	const [previewImage, setPreviewImage] = useState('')
	const [tagArray, setTagArray] = useState('')

	useEffect(() => {
		if (visible) {
			console.log('-- defaultData: ', defaultData)
			initData()
		}
	}, [visible])

	async function initData() {
		form.setFieldsValue({
			...defaultData,
			SellPrice: parseToMoney(defaultData?.SellPrice || '0'),
			OriginalPrice: parseToMoney(defaultData?.OriginalPrice || '0'),
			TagArray: getDefault(defaultData?.TagArray)
		})

		setTagArray(rowData?.TagArray)

		await wait(200)
		setLoading(false)
	}

	function onCancel() {
		setVisible(false)
		setLoading(true)
		setImageSelected({ name: '' })
		form.resetFields()
	}

	// UPDATE VIDEO COURSE
	const putUpdate = async (params: any) => {
		console.log('-- onSubmit SUBMIT_DATA: ', params)
		try {
			const res = await VideoCourseStoreApi.update(params)
			res.status == 200 && showNoti('success', res.data.message)
			if (res.status == 200) {
				!!onRefesh && onRefesh()
				showNoti('success', res.data?.message)
			}
		} catch (error) {
			showNoti('danger', 'Thêm không thành công')
		} finally {
			setVisible(false)
		}
	}

	// HANDLE SUBMIT
	const onSubmit = async (value) => {
		setSubmiting(true)

		const SUBMIT_DATA = {
			...value,
			ID: defaultData?.ID,
			ImageThumbnails: !!imageDeleted ? '' : defaultData?.ImageThumbnails || null,
			OriginalPrice: value.OriginalPrice.replace(/[^0-9\.]+/g, ''),
			SellPrice: value.SellPrice.replace(/[^0-9\.]+/g, ''),
			TagArray: tagArray
		}

		if (!imageSelected?.name) {
			putUpdate(SUBMIT_DATA)
		}

		if (!!imageSelected?.name) {
			const linkThumb = await uploadThumbnail()
			putUpdate({ ...SUBMIT_DATA, ImageThumbnails: linkThumb || defaultData?.ImageThumbnails })
		}
	}

	const getDefault = (data) => {
		if (data !== '') {
			const temp = data.split(',')
			let tamp = []
			if (temp.length > 0) {
				for (let i = 0; i < temp.length; i++) {
					tamp.push(parseInt(temp[i]))
				}
			}
			return tamp
		}
		return []
	}

	// Call api upload image
	const uploadThumbnail = async () => {
		try {
			let res = await newsFeedApi.uploadFile(imageSelected?.originFileObj)
			if (res.status == 200) {
				return res.data.data
			}
		} catch (error) {
			showNoti('danger', error.message)
		}
	}

	// Upload file audio
	const onSelectFile = async (info) => {
		setImageSelected(info.file)
		setPreviewImage(URL.createObjectURL(info.file.originFileObj))
		setImageDeleted(false)
	}

	// Handle delete image
	const handleDeleteImage = () => {
		setImageSelected({ name: '' })
		setPreviewImage('')
		setImageDeleted(true)
	}

	function handleChange(value) {
		setTagArray(`${value}`)
		form.setFieldsValue({ newTag: `${value}` })
	}

	// RENDER
	return (
		<>
			<button type="button" className="btn btn-warning" onClick={() => setVisible(true)} style={{ flexShrink: 0 }}>
				<div className="in-1-line">Chỉnh sửa</div>
			</button>

			<Modal className="m-create-vc" title={`Sửa thông tin khoá học`} visible={visible} onCancel={() => setVisible(false)} footer={null}>
				<div className="row m-0 p-0">
					<Form form={form} layout="vertical" onFinish={onSubmit}>
						<div className="row p-0 m-0">
							<div className="row p-0 m-0 custom-scroll-bar col-md-12 col-12">
								<div className="row vc-e-d">
									<div className="row p-0 m-0 col-md-6 col-12">
										<div className="col-md-6 col-12">
											<Form.Item name="EnglishName" label="Tên tiếng Anh" rules={FORM_REQUIRED}>
												<Input className="style-input" onChange={(e) => form.setFieldsValue({ EnglishName: e.target.value })} />
											</Form.Item>
										</div>

										<div className="col-md-6 col-12">
											<Form.Item name="VideoCourseName" label="Tên tiếng Việt" rules={FORM_REQUIRED}>
												<Input className="style-input" onChange={(e) => form.setFieldsValue({ VideoCourseName: e.target.value })} />
											</Form.Item>
										</div>

										<div className="col-md-6 col-12">
											<Form.Item
												name="ExpiryDays"
												label=" " // CHỔ NÀY BÙA ĐỀ HIỆN CÁI TOOLTIP. XÓA KHOẢN TRẮNG MẤT LUÔN TOOLTIP
												tooltip={{
													title: 'Nhập 0 hoặc bỏ trống thì không có hạn sử dụng',
													icon: (
														<div className="row ">
															<span className="mr-1 mt-3" style={{ color: '#000' }}>
																Số ngày sử dụng
															</span>
															<i className="fas fa-question-circle"></i>
														</div>
													),
													zIndex: 9999
												}}
												rules={FORM_REQUIRED}
											>
												<NumberFormat
													placeholder="Số phút: 60"
													className="ant-input style-input"
													onChange={(e: any) => form.setFieldsValue({ ExpiryDays: e.target.value })}
												/>
											</Form.Item>
										</div>

										<div className="col-md-6 col-12">
											<Form.Item
												name="CurriculumID"
												label=" " // CHỔ NÀY BÙA ĐỀ HIỆN CÁI TOOLTIP. XÓA KHOẢN TRẮNG MẤT LUÔN TOOLTIP
												tooltip={{
													title: 'Chỉ hiển thị giáo trình có video',
													icon: (
														<div className="row ">
															<span className="mr-1 mt-3" style={{ color: '#000' }}>
																Giáo trình
															</span>
															<i className="fas fa-question-circle"></i>
														</div>
													),
													zIndex: 9999
												}}
												rules={FORM_REQUIRED}
											>
												<Select
													className="style-input"
													showSearch
													placeholder="Chọn loại"
													optionFilterProp="children"
													onChange={(e) => form.setFieldsValue({ Curriculum: e })}
												>
													{dataCurriculum.map((item, index) => (
														<Option key={index} value={item.ID}>
															{item.CurriculumName}
														</Option>
													))}
												</Select>
											</Form.Item>
										</div>

										<div className="col-md-6 col-12">
											<Form.Item
												name="CategoryID"
												rules={FORM_REQUIRED}
												label={
													<div className="row m-0">
														Loại <CreateCategory onRefeshCategory={onRefeshCategory} />
													</div>
												}
											>
												<Select
													className="style-input"
													showSearch
													placeholder="Chọn loại"
													optionFilterProp="children"
													onChange={(e) => form.setFieldsValue({ CategoryID: e })}
												>
													{dataCategory.map((item, index) => (
														<Option key={index} value={item.ID}>
															{item.CategoryName}
														</Option>
													))}
												</Select>
											</Form.Item>
										</div>

										<div className="col-md-6 col-12">
											<Form.Item
												name="LevelID"
												label={
													<div className="row m-0">
														Trình độ <CreateLevel onRefeshLevel={onRefeshLevel} />
													</div>
												}
												rules={FORM_REQUIRED}
											>
												<Select
													className="style-input"
													showSearch
													placeholder="Chọn trình độ"
													optionFilterProp="children"
													onChange={(e) => form.setFieldsValue({ LevelID: e })}
												>
													{dataLevel.map((item: any, index: number) => (
														<Option key={index} value={item.ID}>
															{item.LevelName}
														</Option>
													))}
												</Select>
											</Form.Item>
										</div>

										<div className="col-md-6 col-12">
											<Form.Item name="SellPrice" label="Giá bán" rules={FORM_REQUIRED}>
												<NumberFormat
													defaultValue={rowData.SellPrice}
													placeholder=""
													className="ant-input style-input w-100"
													onChange={(e: any) => form.setFieldsValue({ SellPrice: e.target.value })}
													thousandSeparator={true}
													decimalScale={2}
												/>
											</Form.Item>
										</div>

										<div className="col-md-6 col-12">
											<Form.Item name="OriginalPrice" label="Giá gốc" rules={FORM_REQUIRED}>
												<NumberFormat
													defaultValue={rowData.OriginalPrice}
													className="ant-input style-input w-100"
													onChange={(e: any) => form.setFieldsValue({ OriginalPrice: e.target.value })}
													thousandSeparator={true}
													decimalScale={2}
												/>
											</Form.Item>
										</div>

										{programID && (
											<div className="col-md-6 col-12">
												<Form.Item name="tesingImage" label="Hình ảnh thu nhỏ">
													<Upload style={{ width: 800 }} className="vc-e-upload" onChange={(e) => onSelectFile(e)} showUploadList={false}>
														<Button className="vc-e-upload" icon={<UploadOutlined style={{ marginTop: -2 }} />}>
															Bấm để tải hình ảnh
														</Button>
													</Upload>
													{(!!previewImage || defaultData?.ImageThumbnails) && !imageDeleted && (
														<div className="row m-0 mt-3 vc-store-center">
															<Button danger onClick={handleDeleteImage}>
																Xoá hình ảnh
															</Button>
														</div>
													)}
												</Form.Item>

												{(!!previewImage || !!defaultData?.ImageThumbnails) && !imageDeleted && (
													<div className="" style={{ marginTop: -10, marginBottom: 8 }}>
														<Image className="image_wrapper" src={previewImage || defaultData?.ImageThumbnails} />
													</div>
												)}

												<p className="font-weight-primary mb-4" style={{ color: 'red' }}>
													* Lưu ý: Upload tối đa 100Mb
												</p>
											</div>
										)}

										<div className="col-md-6 col-12">
											<Form.Item name="Active" label="Trạng thái" rules={FORM_REQUIRED}>
												<Select className="style-input" showSearch>
													<Option value={true}>Hiện</Option>
													<Option value={false}>Ẩn</Option>
												</Select>
											</Form.Item>
										</div>

										{!loading && (
											<div className="col-12">
												{tags.length > 0 && (
													<Form.Item
														name="TagArray"
														label={
															<div className="row m-0">
																Từ khóa tìm kiếm <CreateTag onRefeshTags={onRefeshTags} onCancel={() => setVisible(true)} />
																{tagArray !== '' && <div style={{ color: '#f44d4f', fontSize: 12, marginLeft: 5 }}>*</div>}
															</div>
														}
														rules={[{ required: tagArray == '' ? true : false, message: 'Bạn không được để trống' }]}
													>
														<Select
															mode="tags"
															className="style-input"
															style={{ width: '100%' }}
															placeholder="Từ khóa tìm kiếm"
															defaultValue={getDefault(tagArray)}
															onChange={(e) => handleChange(e)}
														>
															{tags.map((item, index) => (
																<Option key={index} value={item.ID}>
																	{item.Name}
																</Option>
															))}
														</Select>
													</Form.Item>
												)}
											</div>
										)}
									</div>

									<div className="row p-0 m-0 custom-scroll-bar col-md-6 col-12">
										<UpdateDetails
											loading={loading}
											form={form}
											height={!!imageSelected.name || !!defaultData?.ImageThumbnails ? 820 : 605}
										/>
									</div>
								</div>
							</div>
						</div>

						<div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
							<div className="m-0 p-0" style={{ justifyContent: 'flex-end', display: 'flex' }}>
								<button type="button" onClick={onCancel} className="btn btn-warning mr-3">
									Huỷ
								</button>
								<button type="submit" className="btn btn-primary">
									Lưu thay đổi
									{submiting && <Spin className="loading-base" />}
								</button>
							</div>
						</div>
					</Form>
				</div>
			</Modal>
		</>
	)
}

export default ModalUpdateInfo
