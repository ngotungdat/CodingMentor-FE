import React, { FC, useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { Button, List, Tooltip, Input } from 'antd'
import EditorSimple from '~/components/Elements/EditorSimple'
import ReactHtmlParser from 'react-html-parser'
import { VideoCourseInteraction } from '~/apiBase'
import { useRouter } from 'next/router'
import { useWrap } from '~/context/wrap'
import { VideoNoteApi } from '~/apiBase/video-learning/video-note'

type itemProps = {
	id: ''
	Title: ''
	subTitle: ''
	TextContent: ''
	TimeNote: ''
}

type iProps = {
	onPress: any
	item: itemProps
	onDelete: any
	onEdit: any
}

type props = {
	lession: any
}

const RenderItem: FC<iProps> = ({ item, onPress, onDelete, onEdit }) => {
	const formatTime = (seconds) => {
		let minutes: any = Math.floor(seconds / 60)
		minutes = minutes >= 10 ? minutes : '0' + minutes
		seconds = Math.floor(seconds % 60)
		seconds = seconds >= 10 ? seconds : '0' + seconds
		return minutes + ':' + seconds
	}

	return (
		<div className="pt-3 pb-3 vocab-item">
			<span className="row vocab-item__title">
				<div className="ml-3">
					{/* <a
						onClick={() => {
							onPress(item)
						}}
						className="mr-3 vocab-item__time"
					>
						{formatTime(item.TimeNote)}
					</a> */}
					<i className="far fa-file-alt mr-3"></i>
					{ReactHtmlParser(item.Title)}
				</div>

				<div className="row mr-3 ml-3 vocab-item__menu">
					<Tooltip title="Sửa">
						<button
							onClick={() => {
								onEdit(item)
							}}
							className="btn btn-icon edit"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
								<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
							</svg>
						</button>
					</Tooltip>

					<Tooltip title="Xóa">
						<button
							onClick={() => {
								onDelete(item)
							}}
							className="btn btn-icon delete"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<polyline points="3 6 5 6 21 6"></polyline>
								<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
								<line x1="10" y1="11" x2="10" y2="17"></line>
								<line x1="14" y1="11" x2="14" y2="17"></line>
							</svg>
						</button>
					</Tooltip>
				</div>
			</span>
			<span className="mt-3 pt-3 pb-3 pr-3 vocab-item__content">{ReactHtmlParser(item.TextContent)}</span>
		</div>
	)
}

const VocabularyTab: FC<props> = ({ lession }) => {
	const [showAdd, setShowAdd] = useState(false)
	const [newContent, setContent] = useState('')
	const [title, setTitle] = useState('')
	const [isReset, setReset] = useState(false)
	const [typeInput, setTypeInput] = useState(0)
	const [itemEdit, setItemEdit] = useState<any>([])

	const router = useRouter()
	const { userInformation, showNoti } = useWrap()

	const [notes, setNotes] = useState([])

	useEffect(() => {
		if (!!lession?.ID) {
			_getNotes(lession?.ID)
		}
	}, [lession])

	// CALL API GET NOTES
	const _getNotes = async (ID) => {
		const temp = {
			pageIndex: 1,
			pageSize: 999,
			VideoCourseID: router.query.course,
			LessonDetailID: ID,
			searchCreateby: userInformation?.UserAccountID,
			sort: 0
		}
		try {
			const res = await VideoCourseInteraction.ListNote(temp)
			res.status == 200 && setNotes(res.data.data)
		} catch (err) {}
	}

	// CREATE NEW NOTE
	const _createNote = async () => {
		try {
			let temp = {
				VideoCourseID: router.query.course,
				LessonDetailID: lession.ID,
				Title: title,
				TextContent: newContent,
				TimeNote: 0,
				Type: 2
			}
			const res = await VideoCourseInteraction.add(temp)
			res.status == 200 && _getNotes(lession?.ID), reset()
		} catch (error) {
			showNoti('danger', error?.message)
		}
	}

	// DELETE NOTE
	const _deleteNote = async (item) => {
		try {
			const res = await VideoNoteApi.delete({ ID: item?.ID })
			res.status == 200 && _getNotes(lession?.ID)
		} catch (error) {
			showNoti('danger', error?.message)
		}
	}

	// POST DATA EDIT NOTE
	const _editNote = async (param) => {
		try {
			const res = await VideoNoteApi.update(param)
			res.status == 200 && _getNotes(lession?.ID), reset()
		} catch (error) {
			showNoti('danger', error?.message)
		}
	}

	const reset = () => {
		setTitle('')
		setReset(true)
		setTimeout(() => {
			setReset(false)
		}, 200)
	}

	const handleSubmitEdit = () => {
		setTitle('')
		_editNote({ ID: itemEdit.ID, Title: title, TextContent: newContent })
		setShowAdd(false)
		setContent('')
		setTimeout(() => {
			setTypeInput(0)
			setShowAdd(true)
		}, 0)
	}

	return (
		<div className="pr-5 pl-5 wrap-vocab">
			{!showAdd ? (
				<Button
					onClick={() => {
						setTypeInput(0)
						setShowAdd(true)
					}}
					className="row wrap-vocab__create-new-button"
				>
					<span>Thêm mới</span>
					<i className="fas fa-plus-circle" style={{ color: 'gray' }}></i>
				</Button>
			) : (
				<div className="wrap-vocab__create-new">
					<Input
						placeholder="Tiêu đề"
						className="mb-3 mt-3"
						value={title}
						onChange={(t) => {
							setTitle(t.target.value)
						}}
					/>
					<EditorSimple
						handleChange={(value) => {
							setContent(value)
						}}
						isReset={isReset}
						questionContent={newContent}
					/>
					<div className="row wrap-vocab__create-new__button-group">
						<Tooltip title="Đóng khung nhập liệu">
							<button
								onClick={() => {
									setTitle('')
									setContent('')
									setTypeInput(0)
									setShowAdd(false)
								}}
								className="btn ml-3 mt-3 btn-primary"
							>
								<i className="far fa-times-circle mr-2"></i>Hủy
							</button>
						</Tooltip>

						<Tooltip title="Thêm ghi chú">
							<button onClick={typeInput === 0 ? _createNote : handleSubmitEdit} className="btn ml-3 mt-3 btn-success">
								<i className="fas fa-plus-circle mr-2"></i>
								{typeInput === 0 ? 'Thêm' : 'Lưu'}
							</button>
						</Tooltip>
					</div>
				</div>
			)}

			<List
				itemLayout="horizontal"
				dataSource={notes}
				className="mt-3 wrap-vocab__list"
				renderItem={(item: itemProps) => (
					<RenderItem
						onPress={(p) => {}}
						item={item}
						onDelete={(e: any) => _deleteNote({ ID: e.ID })}
						onEdit={(p) => {
							setItemEdit(p)
							setTypeInput(1)
							setShowAdd(false)
							setTitle(p.Title)
							setContent(p.TextContent)
							setTimeout(() => {
								setShowAdd(true)
							}, 0)
						}}
					/>
				)}
			/>
		</div>
	)
}

export default VocabularyTab
