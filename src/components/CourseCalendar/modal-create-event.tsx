import { Modal, Select, Spin, TimePicker } from 'antd'
import moment, { Moment } from 'moment'
import React, { useState, useEffect } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useWrap } from '~/context/wrap'
import _ from '~/appConfig'
import { CalendarApi } from '~/apiBase/Calendar/calendar'

const { Option } = Select
moment.locale('vi')

const ModalCreateEvent = (props: any) => {
	const { visible, setVisible, date, courses, getData, event, teacherChangeData } = props
	const { showNoti, userInformation } = useWrap()

	console.log('date: ', date)

	const [selected, setSelected] = useState<any>({})
	const [startTime, setStartTime] = useState<any>('')
	const [endTime, setEndTime] = useState<any>('')
	const [loading, setLoading] = useState<boolean>(true)

	const [errorText, setErrorText] = useState<any>('')

	useEffect(() => {
		!visible && setSelected({}), setStartTime(''), setEndTime('')
	}, [visible])

	const onChange = (value: string) => {
		let indexSelected = courses.findIndex((e: any) => e?.VideoCourseID == value)
		setSelected(courses[indexSelected])
		return null
	}

	useEffect(() => {
		if (visible && !!event?.id) {
			getDataDetails()
		} else {
			setLoading(false)
		}
	}, [visible])

	const [details, setDetails] = useState<any>('')

	const getDataDetails = async () => {
		try {
			const res: any = await CalendarApi.getByID(event?.id)
			if (res.status == 200) {
				setDetails(res.data.data)
				setStartTime(res.data.data?.sTime)
				let index = courses.findIndex((e) => e.VideoCourseID == res.data.data?.VideoCourseID)
				index !== -1 && setSelected(courses[index])
			}
		} catch (error) {
			showNoti('danger', error?.message)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (!!startTime) {
			const tempMoment: any = moment(startTime, 'HH:mm')
			const temp: any = new Date(startTime)
			const timestamp = Math.floor(!!temp && temp != 'Invalid date' && temp != 'Invalid Date' ? temp / 1000 : tempMoment / 1000)
			var tempDate = new Date((timestamp + parseInt(selected?.LimitMinutes) * 60) * 1000)
			setEndTime(tempDate)
		}
	}, [startTime, selected])

	useEffect(() => {
		setErrorText('')
	}, [selected, startTime])

	const _createEvent = async () => {
		setLoading(true)
		if (!selected?.VideoCourseID) {
			setErrorText('Vui l??ng ch???n kh??a h???c')
		} else {
			if (!startTime) {
				setErrorText('Vui l??ng ch???n ng??y b???t ?????u')
			} else {
				let sTemp = moment(startTime).format('HH:mm')
				let oDate = moment(date?.start).format('YYYY/MM/DD')

				let temp = {
					VideoCourseID: selected?.VideoCourseID,
					OpenDate: !!oDate && oDate != 'Invalid date' && oDate != 'Invalid Date' ? oDate : moment(details?.OpenDate).format('YYYY/MM/DD'),
					sTime: !!sTemp && sTemp != 'Invalid date' && sTemp != 'Invalid Date' ? sTemp : startTime,
					eTime: moment(endTime).format('HH:mm')
				}

				try {
					const res: any = await (!event?.start
						? CalendarApi.add(temp)
						: CalendarApi.update({ ...temp, ID: event?.id, Status: details?.Status }))
					if (res.status == 200 || res.status == 204) {
						showNoti('success', 'Th??nh c??ng')
						getData()
						setVisible(false)
						teacherChangeData({ Teacher: userInformation.UserInformationID })
					}
				} catch (error) {
					showNoti('danger', error?.message)
				} finally {
					setLoading(false)
				}
			}
		}
	}

	return (
		<div>
			<Modal
				className="wrap-calendar-x"
				title={
					!event?.start
						? 'Th??m l???ch ng??y: ' + moment(date?.start).format('DD-MM-YYYY')
						: 'S???a l???ch ng??y: ' + moment(event?.start).format('DD-MM-YYYY')
				}
				visible={visible}
				onCancel={() => setVisible(false)}
				onOk={() => _createEvent()}
				cancelText={<div className="">Hu???</div>}
				okText={<div className="btn-primary save">L??u l???i {loading && <Spin className="ml-2" size="small" />}</div>}
				centered
			>
				<div className="col-md-12 col-12">
					<div className="mb-2">
						Ch???n kh??a h???c <span style={{ color: 'red' }}> *</span>
					</div>
					<Select
						disabled={loading}
						className="w-100"
						showSearch
						value={selected?.VideoCourseID || null}
						placeholder="Ch???n kh??a h???c"
						optionFilterProp="children"
						onChange={onChange}
						filterOption={(input, option: any) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
					>
						{!!courses && courses.map((item: any) => <Option value={item?.VideoCourseID}>{item?.VideoCourseName}</Option>)}
					</Select>
				</div>

				<div className="row col-12 m-0 p-0">
					<div className="col-md-6 col-12">
						<div className="mb-2 mt-4">
							Ch???n gi??? b???t ?????u <span style={{ color: 'red' }}> *</span>
						</div>
						<TimePicker
							disabled={loading}
							value={!!startTime ? moment(startTime, 'HH:mm') : null}
							onChange={(e: any) => setStartTime(e?._d)}
							className="ant-input"
							placeholder="B???t ?????u"
							format={'HH:mm'}
						/>
					</div>

					<div className="col-md-6 col-12">
						<div className="mb-2 mt-4">Gi??? k???t th??c</div>
						<TimePicker
							value={!!endTime && endTime != 'Invalid Date' ? moment(endTime, 'HH:mm') : null}
							disabled
							className="ant-input"
							placeholder="H??y ch???n gi??? b???t ?????u"
							format={'HH:mm'}
						/>
					</div>
				</div>

				{!!errorText && (
					<div className="col-md-6 col-12 mt-3">
						<div style={{ color: 'red' }}>{errorText}</div>
					</div>
				)}
			</Modal>
		</div>
	)
}

export default ModalCreateEvent
