import PropTypes from 'prop-types'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import { Card, Avatar, Rate } from 'antd'
import { useWrap } from '~/context/wrap'
import ReactHtmlParser from 'react-html-parser'
import EditorSimple from '~/components/Elements/EditorSimple'

import { UserOutlined, DeploymentUnitOutlined, WhatsAppOutlined, MailOutlined, AimOutlined } from '@ant-design/icons'
import LayoutBase from '~/components/LayoutBase'
import { FeedbackApi } from '~/apiBase'
import { userApi } from '~/apiBase/user/user'
import { FeedbackReplyApi } from '~/apiBase/feed-back/feedback-reply'

const initData = { CreatedBy: '', Rate: 0, Title: '', ContentFeedBack: '', UID: 0, CreatedOn: '', StatusID: 3 }

const FeedbackListDetail = () => {
	// Get path and slug
	const router = useRouter()
	const slug = router.query.slug
	let path: string = router.pathname
	let pathString: string[] = path.split('/')
	path = pathString[pathString.length - 2]

	const { showNoti, userInformation } = useWrap()
	const [currentInfomation, setCurrentInfomation] = useState(initData)
	const [isImportant, setImportant] = useState(false)
	const [reply, setReply] = useState([])
	const [isReset, setReset] = useState(false)
	const [content, setContent] = useState('')
	const [loading, setLoading] = useState(true)

	const [createdBy, setCreateBy] = useState({
		AcademicPurposesName: '',
		CMNDRegister: '',
		FullNameUnicode: '',
		JobName: '',
		Mobile: '',
		Email: '',
		WardName: '',
		Branch: [],
		CounselorsName: '',
		Avatar: ''
	})

	useLayoutEffect(() => {
		getCurrentInfo(slug)
		getReply(slug)
	}, [])

	useLayoutEffect(() => {
		if (currentInfomation !== initData) {
			getStudent(currentInfomation.UID)
		}
	}, [currentInfomation])

	// CONVERT DATE TO  DD-MM-YYYY
	const getNum = (num) => {
		return num > 9 ? num : '0' + num
	}
	const getDateString = (date) => {
		let nDate = new Date(date)
		return getNum(nDate.getDate()) + '-' + getNum(nDate.getMonth() + 1) + '-' + nDate.getFullYear()
	}

	// CALL API UPDATE
	const updateCurrentFeedback = async (param) => {
		try {
			await FeedbackApi.update(param)
			getCurrentInfo(slug)
		} catch (error) {}
	}

	// GET INFO OF SELECTED FEEDBACK ITEM
	const getCurrentInfo = async (param) => {
		try {
			const res = await FeedbackApi.getByID(param)
			res.status == 200 && setCurrentInfomation(res.data.data)
		} catch (error) {}
	}

	// GET INFO STUDENT CREATED
	const getStudent = async (param) => {
		try {
			const res: any = await userApi.getByID(param)
			res.status == 200 && setCreateBy(res.data.data)
		} catch (error) {}
	}

	// GET DATA REPLY OF SELECTED FEEDBACK
	const getReply = async (param) => {
		setReset(true)
		try {
			const res = await FeedbackReplyApi.getByFeedbackID(param)
			res.status == 200 && setReply(res.data.data)
			setReset(false)
		} catch (error) {
		} finally {
			setLoading(false)
		}
	}

	// ADD DATA REPLY TO SELECTED FEEDBACK
	const addReply = async () => {
		try {
			await FeedbackReplyApi.add({ FeedbackID: slug, Content: content })
			getReply(slug)
		} catch (error) {}
	}

	// HANDLE RATE
	const onChangeRate = (e) => {
		updateCurrentFeedback({ ID: slug, Rate: e })
	}

	return (
		<>
			<div className="row feedback-user">
				<div className="col-md-3 col-12">
					<Card loading={loading} className="info-profile-left">
						<div className="row">
							<div className="col-12 d-flex align-items-center justify-content-center flex-wrap">
								{createdBy.Avatar !== null && createdBy.Avatar !== '' ? (
									<Avatar size={64} src={<img src={createdBy.Avatar} />} />
								) : (
									<Avatar size={64} src={<img src="/images/user.png" alt="" />} />
								)}
							</div>
						</div>

						{createdBy.FullNameUnicode !== null && createdBy.FullNameUnicode !== undefined && (
							<div className="row pt-3 st-fb-center ">
								<div className="col-2">
									<UserOutlined />
								</div>
								<div className="col-10  d-flex ">{createdBy.FullNameUnicode}</div>
							</div>
						)}

						{createdBy.JobName !== null && createdBy.JobName !== undefined && (
							<div className="row pt-4 st-fb-center ">
								<div className="col-2">
									<DeploymentUnitOutlined />
								</div>
								<div className="col-10  d-flex ">{createdBy?.JobName}</div>
							</div>
						)}

						{createdBy.Mobile !== null && createdBy.Mobile !== undefined && (
							<div className="row pt-4 st-fb-center ">
								<div className="col-2">
									<WhatsAppOutlined />
								</div>
								<div className="col-10  d-flex ">{createdBy.Mobile}</div>
							</div>
						)}

						{createdBy.Email !== null && createdBy.Email !== undefined && (
							<div className="row pt-4 st-fb-center">
								<div className="col-2">
									<MailOutlined />
								</div>
								<div className="col-10  d-flex ">{createdBy.Email}</div>
							</div>
						)}

						{!!createdBy.WardName && !!createdBy.CMNDRegister && (
							<div className="row pt-4 st-fb-center ">
								<div className="col-2">
									<AimOutlined />
								</div>
								<div className="col-10  d-flex ">
									{createdBy?.WardName} {createdBy.CMNDRegister !== null ? ', ' + createdBy?.CMNDRegister : ''}
								</div>
							</div>
						)}

						{!!createdBy.CounselorsName && (
							<>
								<hr />
								<div className="row">
									<ul className="list-info-bonus">
										{createdBy.CounselorsName !== null && (
											<li>
												<b>Cố vấn:</b> <span>{createdBy.CounselorsName !== null ? createdBy.CounselorsName : 'Không có'}</span>
											</li>
										)}
									</ul>
								</div>
							</>
						)}
					</Card>
				</div>

				<div className="col-md-9 col-12">
					<Card loading={loading} className="space-top-card">
						<div className="card-newsfeed-wrap__label">
							<div className="m-feedback st-fb-100w">
								<div className="row m-0 mb-3 st-fb-rsb st-fb-100w  m-feedback__head">
									<div className="st-fb-column">
										<span className="m-feedback__date">{getDateString(currentInfomation.CreatedOn)}</span>
										<span className="m-feedback__name">{currentInfomation.Title}</span>
										<span className="m-feedback__content">{ReactHtmlParser(currentInfomation.ContentFeedBack)}</span>
									</div>

									<div style={{ flex: 1 }} />
									<div className="st-fb-column st-fb-flex-end">
										<Rate onChange={onChangeRate} value={currentInfomation.Rate} className="st-fb-star m-0" />
									</div>
								</div>
							</div>
						</div>

						<hr />

						{currentInfomation.StatusID !== 3 && (
							<>
								<div className="box-comment">
									<EditorSimple
										handleChange={(value) => {
											setContent(value)
										}}
										isReset={isReset}
										questionContent={content}
									/>

									<div className="row m-0 st-fb-100w st-fb-flex-end-row">
										<button
											onClick={() => {
												addReply()
											}}
											className="btn ml-3 mt-3 btn-primary"
										>
											<i className="fas fa-plus-circle mr-2"></i>Thêm nhận xét
										</button>
									</div>
								</div>
								<hr />
							</>
						)}

						<div className="list-comment">
							<ul className="m-feedback__list-group-nf">
								{reply.map((item, index) => (
									<li key={index} className={slug === item.ID ? 'active' : ''} onClick={() => {}}>
										<div className="row m-0 student-fb__i-fb">
											{item.Avatar !== undefined && item.Avatar !== null && item.Avatar !== '' ? (
												<img className="student-fb__i-avt mr-3" src={item.Avatar} alt="" width="50" height="50" />
											) : (
												<img className="student-fb__i-avt mr-3" src="/images/user.png" width="50" height="50" />
											)}
											<div className="st-fb-colum st-fb-fw">
												<div className="row m-0 st-fb-rsb">
													<span className="student-fb__i-name">{item.CreateBy}</span>
													<span className="student-fb__i-name">{getDateString(item.CreateDate)}</span>
												</div>
												<span className="student-fb__i-content">{ReactHtmlParser(item.Content)}</span>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</Card>
				</div>
			</div>
		</>
	)
}

FeedbackListDetail.propTypes = {}

FeedbackListDetail.layout = LayoutBase

export default FeedbackListDetail
