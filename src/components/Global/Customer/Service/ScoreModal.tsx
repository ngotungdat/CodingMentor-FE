import { Input, InputNumber, Modal, Spin, Tooltip } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { Edit3 } from 'react-feather'
import NumberFormat from 'react-number-format'
import { testCustomerApi } from '~/apiBase'
import { useWrap } from '~/context/wrap'

type IScoreModal = {
	data: ITestCustomer
	onRefresh: Function
}

const ScoreModal: FC<IScoreModal> = (props) => {
	const { data, onRefresh } = props
	const { userInformation, showNoti } = useWrap()
	const [isVisible, setVisible] = useState(false)

	const [speaking, setSpeaking] = useState<string>('')
	const [reading, setReading] = useState<string>('')
	const [listening, setListening] = useState<string>('')
	const [writing, setWriting] = useState<string>('')
	const [vocab, setVocab] = useState<string>('')
	const [tuitionfee, setTuitionfee] = useState<string>('')
	const [note, setNote] = useState<string>('')

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		initData()
	}, [data])

	const initData = () => {
		setSpeaking(data?.SpeakingPoint)
		setReading(data?.ReadingPoint)
		setListening(data?.ListeningPoint)
		setWriting(data?.WritingPoint)
		setNote(data?.Note)
	}

	const onSubmit = () => {
		const DATA_SUBMIT = {
			ID: data.ID,
			ListeningPoint: listening,
			SpeakingPoint: speaking,
			ReadingPoint: reading,
			WritingPoint: writing,
			Vocab: vocab,
			Tuitionfee: tuitionfee,
			Note: note
		}
		console.log('DATA_SUBMIT: ', DATA_SUBMIT)
		fetchApi(DATA_SUBMIT)
	}

	async function fetchApi(params) {
		setLoading(true)
		try {
			const response = await testCustomerApi.updateResult(params)
			if (response.status == 200) {
				showNoti('success', 'Thành công')
				setVisible(false)
				!!onRefresh && onRefresh()
			}
		} catch (error) {
			showNoti('danger', error?.message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<Tooltip title="Nhập điểm thủ công">
				<button onClick={() => setVisible(true)} type="button" className="btn btn-icon">
					<Edit3 size={18} style={{ marginBottom: -1 }} />
				</button>
			</Tooltip>

			<Modal
				className="wrap-score"
				width={800}
				onCancel={() => setVisible(false)}
				title="Nhập điểm thủ công"
				visible={isVisible}
				cancelText="Huỷ"
				okText={
					<div style={{ display: 'flex', alignItems: 'center' }}>
						Lưu {loading && <Spin className="loading-base" style={{ marginTop: 1 }} />}
					</div>
				}
				onOk={onSubmit}
			>
				<div className="header">
					<div className="item mr-2">
						<div>Listening</div>
						<input
							value={listening}
							disabled={userInformation?.RoleID == 3}
							className="style-input html-input"
							onChange={(e) => setListening(e.target.value)}
						/>
					</div>
					<div className="item mr-2">
						<div>Speaking</div>
						<input
							value={speaking}
							disabled={userInformation.RoleID == 3}
							className="style-input html-input"
							onChange={(e) => setSpeaking(e.target.value)}
						/>
					</div>
					<div className="item mr-2">
						<div>Reading</div>
						<input
							value={reading}
							disabled={userInformation.RoleID == 3}
							className="style-input html-input"
							onChange={(e) => setReading(e.target.value)}
						/>
					</div>
					<div className="item mr-2">
						<div>Writing</div>
						<input
							value={writing}
							disabled={userInformation.RoleID == 3}
							className="style-input html-input"
							onChange={(e) => setWriting(e.target.value)}
						/>
					</div>
					<div className="item mr-2">
						<div>Vocab</div>
						<input
							value={vocab}
							disabled={userInformation.RoleID == 3}
							className="style-input html-input"
							onChange={(e) => setVocab(e.target.value)}
						/>
					</div>
					<div className="item">
						<div>Học phí tư vấn</div>
						<NumberFormat
							value={tuitionfee}
							disabled={userInformation.RoleID == 3}
							className="style-input html-input"
							onChange={(e) => setTuitionfee(e.target.value)}
							thousandSeparator
						/>
					</div>
				</div>

				<div className="mt-3 title">Nhận xét</div>
				<Input.TextArea className="mt-2" value={note} onChange={(e) => setNote(e.target.value)} />
			</Modal>
		</>
	)
}

export default ScoreModal
