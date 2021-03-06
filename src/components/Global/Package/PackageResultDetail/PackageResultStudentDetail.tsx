import { ProfileOutlined, RedoOutlined } from '@ant-design/icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFileVideo, faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Skeleton, Spin } from 'antd'
import Link from 'next/link'
import router from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { Bookmark } from 'react-feather'
import ReactHtmlParser from 'react-html-parser'
import { doingTestApi } from '~/apiBase'
import { packageResultDetailApi } from '~/apiBase/package/package-result-detail'
import { VideoCourseStoreApi } from '~/apiBase/video-course-store'
import TitlePage from '~/components/Elements/TitlePage'
import ListQuestion from '~/components/Global/DoingTest/ListQuestion'
import { useDoneTest } from '~/context/useDoneTest'
import { useWrap } from '~/context/wrap'
import MainTest from '../../DoingTest/MainTest'
import TopPackageNewsFeed from '../../NewsFeed/TopPackageNewsFeed'

const PackageResultStudentDetail = () => {
	const { teacherMarking: teacherMarking, score: score } = router.query
	const { getDoneTestData, doneTestData, dataMarking, getDataMarking } = useDoneTest()
	const [detailResult, setDetailResult] = useState([])
	const [visibleNofi, setVisibleNofi] = useState(false)
	const boxEl = useRef(null)

	const paramsDefault = {
		pageSize: 999,
		pageIndex: 1,
		SetPackageResultID: parseInt(router.query.slug as string),
		ExerciseType: teacherMarking ? 2 : null
	}
	const [params, setParams] = useState(paramsDefault)
	const [loading, setLoading] = useState(false)
	const [listQuestionID, setListQuestionID] = useState([]) // Lấy tất cả ID đã có
	const [listGroupID, setListGroupID] = useState([]) // Lấy tất cả group ID đã có

	const [showMainTest, setShowMainTest] = useState(false)
	const { showNoti, userInformation } = useWrap()
	const [isShowAll, setIsShowAll] = useState(false)
	const [isMarked, setIsMarked] = useState(false)
	const [showNote, setShowNote] = useState(false)
	const [infoTest, setInfoTest] = useState(null)
	const [loadingInfoTest, setLoadingInfoTest] = useState(false)
	const [courses, setCourse] = useState<any>([])

	// ---- Get Router ----

	const { packageDetailID: packageDetailID, examID: examID } = router.query
	const SetPackageResultID = router.query.slug as string

	useEffect(() => {
		!!infoTest && getVideoCourse()
	}, [infoTest])

	const getInfoTest = async () => {
		setLoadingInfoTest(true)
		try {
			let res = await doingTestApi.getByID(SetPackageResultID)
			if (res.status === 200) {
				let dataInfo: any = { ...res.data.data }
				let totalQuestion = dataInfo.ListeningNumber + dataInfo.ReadingNumber
				setInfoTest({ ...res.data.data, TotalQuestion: totalQuestion })
			}
		} catch (error) {
			console.log('error', error.message)
		} finally {
			setLoadingInfoTest(false)
		}
	}

	const getVideoCourse = async () => {
		setLoading(true)
		try {
			const res = await VideoCourseStoreApi.getByPoint(infoTest?.PointTotal < 1 ? 1 : infoTest?.PointTotal)
			res.status == 200 && setCourse(res.data.data)
			setLoading(false)
		} catch (err) {
		} finally {
			setLoading(false)
		}
	}

	const getDataSetPackageResult = async () => {
		let cloneListQuestionID = [...listQuestionID]
		let cloneListGroupID = [...listGroupID]
		setLoading(true)

		try {
			let res = await packageResultDetailApi.getAll(params)
			if (res.status == 200) {
				convertDataDoneTest(res.data.data)
				setIsMarked(res.data.isDone)
				// Add to data marking if have teacher marking
				if (teacherMarking) {
					if (!dataMarking) {
						let newDataMarking = {
							SetPackageResultID: parseInt(router.query.slug as string),
							Note: '',
							setPackageExerciseStudentsList: []
						}
						res.data.data.forEach((item) => {
							if (item.ExerciseType == 2) {
								item.SetPackageExerciseStudent.forEach((ques) => {
									newDataMarking.setPackageExerciseStudentsList.push({
										ID: ques.ID,
										Point: 0
									})
								})
							}
						})
						getDataMarking({ ...newDataMarking })
					}
				}

				// Add questionid to list
				res.data.data.forEach((item, index) => {
					if (item.Enable) {
						item.ExerciseGroupID !== 0 && cloneListGroupID.push(item.ExerciseGroupID)
						item.SetPackageExerciseStudent.forEach((ques) => {
							cloneListQuestionID.push(ques.ExerciseID)
						})
					}
				})

				getDoneTestData(res.data.data)
				setListGroupID([...cloneListGroupID])
				setListQuestionID([...cloneListQuestionID])
			}

			if (res.status == 204) {
				showNoti('danger', 'Không tìm thấy dữ liệu!')
			}
		} catch (error) {
			showNoti('danger', error.message)
		} finally {
			setLoading(false)
		}
	}

	const convertDataDoneTest = (data) => {
		let cloneData = [...data]
		cloneData.forEach((item) => {
			item.ExerciseTopic = [...item.SetPackageExerciseStudent]
			item.ExerciseTopic.forEach((ques) => {
				ques.ExerciseAnswer = [...ques.SetPackageExerciseAnswerStudent]
			})
		})

		setDetailResult([...cloneData])
	}

	const returnSpaceQuestion = (data) => {
		let indexStart = listQuestionID.indexOf(data[0]?.ExerciseID)
		let indexEnd = listQuestionID.indexOf(data[data.length - 1]?.ExerciseID)

		let text = ''
		if (indexStart === indexEnd) {
			text = 'Câu ' + (indexStart + 1).toString()
		} else {
			text = 'Câu ' + (indexStart + 1).toString() + ' - ' + (indexEnd + 1).toString()
		}
		return <p className="space-question">{text}</p>
	}

	const showWritingQuestion = () => {
		if (isShowAll) {
			setParams({
				...paramsDefault,
				ExerciseType: 2
			})
		} else {
			setParams({
				...paramsDefault,
				ExerciseType: null
			})
		}
		setIsShowAll(!isShowAll)
	}

	useEffect(() => {
		getDataSetPackageResult()
	}, [params])

	useEffect(() => {
		if (dataMarking && !showNote) {
			if (dataMarking.setPackageExerciseStudentsList.length > 0) {
				dataMarking.setPackageExerciseStudentsList.every((item) => {
					if (item.Point) {
						setVisibleNofi(true)
						setShowNote(true)
						setTimeout(() => {
							setVisibleNofi(false)
						}, 5000)
						return false
					}
					return true
				})
			}
		}
	}, [dataMarking])

	useEffect(() => {
		getInfoTest()
	}, [])

	return (
		<>
			{showMainTest ? (
				<MainTest
					dataDoneTest={detailResult}
					isDone={true}
					listIDFromDoneTest={listQuestionID}
					listGroupIDFromDoneTest={listGroupID}
					closeMainTest={() => setShowMainTest(false)}
				/>
			) : (
				<div className="test-wrapper done-test m-0 p-0">
					<TitlePage title="Kết quả bộ đề chi tiết" />
					<div className="row w-100 m-0 p-0">
						<div className="col-md-8 col-12 m-0 p-0 mb-3 d-m-r">
							<Card
								className="table-medium w-100"
								title={
									<div className="title-question-bank">
										<h3 className="title-big">
											<Bookmark />
											Danh sách kết quả
										</h3>
									</div>
								}
								extra={
									<>
										<Link
											href={{
												pathname: '/doing-test',
												query: {
													examID: examID,
													packageDetailID: packageDetailID,
													type: 'examination'
												}
											}}
										>
											<a className="btn btn-warning">
												<span className="d-flex align-items-center">
													<RedoOutlined className="mr-2" />
													Làm lại đề
												</span>
											</a>
										</Link>

										<button className="btn btn-secondary ml-2" onClick={() => setShowMainTest(true)}>
											<span className="d-flex align-items-center">
												<ProfileOutlined className="mr-2" />
												Xem chi tiết
											</span>
										</button>
									</>
								}
							>
								<div className="test-body done-test-card " ref={boxEl}>
									<div className="wrap-box-info mb-2">
										<div className="box-info">
											<div className="box-info__item box-info__score">
												Số điểm
												<span className="number">
													{loadingInfoTest ? <Skeleton paragraph={false} loading={true} title={true} active /> : infoTest?.PointTotal}
												</span>
											</div>
											<div className="box-info__item box-info__correct">
												Số câu đúng
												<span className="number">
													{loadingInfoTest ? (
														<Skeleton paragraph={false} loading={true} title={true} active />
													) : infoTest ? (
														infoTest?.ReadingCorrect + infoTest?.ListeningCorrect + '/' + infoTest?.TotalQuestion
													) : (
														''
													)}
												</span>
											</div>
										</div>
									</div>

									{loading ? (
										<div className="text-center mt-5">
											<Spin />
										</div>
									) : detailResult?.length == 0 ? (
										<p className="text-center font-weight-bold">Không có dữ liệu</p>
									) : (
										doneTestData && (
											<>
												{detailResult.map((item, index) => {
													if (item.ExerciseGroupID !== 0) {
														return (
															<div className="wrap-group-list">
																<div className="box-detail">
																	<div className="row">
																		<div className="col-md-11">
																			{returnSpaceQuestion(item.ExerciseTopic)}
																			{item.Content && item.Content !== '' && (
																				<div className="box-content" key={index}>
																					{item.Content && ReactHtmlParser(item.Content)}
																				</div>
																			)}
																		</div>
																		<div className="col-md-1">
																			<div className="point-question text-right mt-4">{item.ExerciseTopic[0]?.Point}</div>
																		</div>
																	</div>

																	<div>
																		<ListQuestion
																			showScore={!!score}
																			isMarked={isMarked}
																			dataQuestion={item}
																			listQuestionID={listQuestionID}
																		/>
																	</div>
																</div>
															</div>
														)
													} else {
														return (
															<div key={index}>
																<ListQuestion showScore={!!score} isMarked={isMarked} dataQuestion={item} listQuestionID={listQuestionID} />
															</div>
														)
													}
												})}
											</>
										)
									)}
								</div>
							</Card>
						</div>

						<div className="col-md-4 col-12 m-0 p-0">
							<Card
								className="table-medium w-100"
								title={
									<div
										className="title-question-bank"
										style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
									>
										<h3 className="title-big" style={{ paddingTop: 8, paddingBottom: 8 }}>
											<FontAwesomeIcon icon={faFileVideo as IconProp} size="lg" />
											Gợi ý khóa học
										</h3>
										<Link href="/video-course">
											<a className="font-weight-black" style={{ width: 100, textAlign: 'right' }}>
												Xem thêm
											</a>
										</Link>
									</div>
								}
							>
								<div className="test-body done-test-card">
									<TopPackageNewsFeed isLoading={loading} topPackageList={courses} />
								</div>
							</Card>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default PackageResultStudentDetail
