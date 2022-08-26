import { Card, Checkbox, Spin, Table, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { gradeApi, teacherApi } from '~/apiBase'
import { useWrap } from '~/context/wrap'
import ExpandTable from '../../ExpandTable'
import ConfirmAssignModal from './Teacher/ConfirmAssignModal'

const TeacherProfile = (props) => {
	const [loading, setLoading] = useState({ type: '', status: false })
	const { setValue } = useForm()
	const { showNoti } = useWrap()

	const { isLoading, userID, dataSubject, updateTeacherForSubject, onFetchData } = props

	const [grades, setGrades] = useState([])

	useEffect(() => {
		getGrades()
	}, [])

	const getGrades = async () => {
		setLoading({ type: '', status: true })
		try {
			let res = await gradeApi.getAll({ selectAll: true })
			if (res.status === 200) {
				const result = res.data.data.map((item, i) => ({
					value: item.ID,
					text: item.GradeName
				}))
				setGrades(result)
			} else if (res.status === 204) {
				setGrades([])
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setLoading({ type: '', status: false })
		}
	}

	const columns: any = [
		{
			title: 'Chương trình',
			dataIndex: 'ProgramName',
			render: (text) => <p className="font-weight-primary">{text}</p>
		},
		{
			width: 200,
			title: 'Chuyên môn',
			dataIndex: 'GradeName',
			filters: grades,
			onFilter: (value, record) => record.GradeID === value,
			render: (text) => <p className="font-weight-primary">{text}</p>
		},
		{
			title: 'Trạng thái',
			dataIndex: 'IsSelected',
			render: (text, data) => (
				<p className={data.IsSelected ? 'tag green' : 'tag red'}>{data.IsSelected ? 'Dạy tất cả' : 'Không được dạy tất cả'}</p>
			)
		},
		{
			title: 'Thao tác',
			align: 'center',
			render: (text, data) => {
				return <ConfirmAssignModal data={data} _onSubmit={(info) => handleSubmitAssignment(info)} loading={loading} />
			}
		}
	]

	const handleSubmitAssignment = async (info) => {
		setLoading({ type: 'ASSIGN_TEACHER', status: true })
		try {
			let res = await teacherApi.updateTeacherForAllSubject({
				teacherId: userID,
				programId: info.ProgramID,
				IsSelected: info.IsSelected ? false : true
			})
			if (res.status === 200) {
				showNoti('success', res.data.message)
				onFetchData && onFetchData()
				return true
			}
			if (res.status === 204) {
				// showNoti('danger', 'Chưa có môn học trong chương trình này!')
				onFetchData && onFetchData()
				return true
			}
		} catch (error) {
		} finally {
			setLoading({ type: 'ASSIGN_TEACHER', status: false })
		}
	}

	const expandedRowRender = (record) => {
		const columns = []
		const data = [{ Subject: 'Subject' }]

		console.log('record: ', record)

		for (let i = 0; i < Object.keys(record.Subject).length; i++) {
			columns.push({
				key: record.Subject[i].SubjectID,
				title: record.Subject[i].SubjectName,
				dataIndex: 'Subject',
				render: () => (
					<Checkbox value={record.Subject[i].SubjectID} checked={record.Subject[i].IsSelected ? true : false} onChange={onChangeCheckBox} />
				)
			})
		}

		const onChangeCheckBox = (e) => {
			const data = { UserInformationID: userID, SubjectID: e.target.value }
			let res = updateTeacherForSubject(data)
			res.then(function (rs: any) {
				rs && rs.status == 200
			})
		}

		if (Object.keys(record.Subject).length) {
			return (
				<div className="mini-table">
					<Table columns={columns} dataSource={data} pagination={false} className="tb-expand" />
				</div>
			)
		} else {
			return <p>Chưa có môn học</p>
		}
	}

	useEffect(() => {
		setValue('UserInformationID', userID)
	}, [])

	if (isLoading.status == true) {
		return (
			<Card className="space-top-card text-center">
				<Spin />
			</Card>
		)
	} else {
		return (
			<ExpandTable
				loading={isLoading}
				addClass="basic-header"
				TitlePage=""
				dataSource={dataSubject}
				columns={columns}
				TitleCard={null}
				Extra="Chi tiết giảng dạy"
				expandable={{ expandedRowRender }}
			/>
		)
	}
}

export default TeacherProfile
