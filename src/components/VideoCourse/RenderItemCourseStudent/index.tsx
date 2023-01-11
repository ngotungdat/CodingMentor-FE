import { Button, Input, Modal, Spin } from 'antd'
import 'antd/dist/antd.css'
import Link from 'next/link'
import router from 'next/router'
import { useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { VideoCourseStoreApi } from '~/apiBase/video-course-store'
import { useWrap } from '~/context/wrap'
import ModalUpdateDetail from '~/lib/video-course/modal-update-details'
import ModalUpdateInfo from '~/lib/video-course/modal-update-info'
import { numberWithCommas, parseToMoney } from '~/utils/functions'

// CARD ITEM ON VIDEO COURSE
const RenderItemCard = (props) => {
	const {
		item,
		// addToCard,
		dataCategory,
		categoryLevel,
		dataCurriculum,
		loading,
		activeLoading,
		handleActive,
		buyNowLoading,
		dataTeacher,
		refeshData,
		tags,
		onRefeshTags,
		onRefeshLevel,
		onRefeshCategory,
		setAddToCardLoading,
		setByNowLoading,
		postAddToCard,
		showModal
	} = props
	const { userInformation, showNoti } = useWrap()

	const [showModalEdit, setShowModalEdit] = useState(false)
	const [activing, setActiving] = useState(false)
	const [code, setCode] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const params = {
		Category: item.CategoryName,
		CategoryID: item.CategoryID,
		Level: item.LevelName,
		Create: item.CreatedOn,
		Thum: item.ImageThumbnails,
		AverageRating: item.AverageRating,
		TotalFeedBack: item.TotalFeedBack,
		slug: item.ID,
		Original: item.OriginalPrice,
		Sell: item.SellPrice,
		Active: item.StatusActive,
		TotalVideo: item.TotalVideoCourseSold,
		TotalVideoViews: item?.TotalVideoViews,
		TeacherID: item?.TeacherID,
		CurriculumID: item?.CurriculumID,
		LimitBooking: item?.LimitBooking
	}

	// HANDLE AD TO CARD (STUDENT)
	const addToCard = (p, type) => {
		setIsLoading(true)
		type == 1 ? setAddToCardLoading(true) : setByNowLoading(true)

		let temp = {
			VideoCourseID: p.ID,
			Quantity: 1
		}
		postAddToCard(temp, type)
	}

	useEffect(() => {
		setIsLoading(false)
	}, [showModal])

	// UPDATE COURSE
	const updateCourse = async (param: any) => {
		try {
			const res = await VideoCourseStoreApi.update(param)
			res.status == 200 && showNoti('success', res.data.message)
			// res.status !== 200 && showNoti('danger', 'Thêm không thành công')
		} catch (error) {
			showNoti('danger', 'Thêm không thành công')
		} finally {
			setShowModalEdit(false)
			refeshData()
			setDeleting(false)
		}
	}

	const [deleteVisible, setDeleteVisible] = useState(false)
	const [deleting, setDeleting] = useState(false)

	return (
		<>
			<div className="vc-store_container">
				<div className="vc-store_item">
					<div className="flip-card-front">
						<div
							style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
							className={item.MaxSold == item.TotalVideoCourseSold ? `tagSell best-seller` : `tagSell percent`}
						>
							<span>
								{item.MaxSold == item.TotalVideoCourseSold
									? 'Best Seller'
									: `-${(((item.OriginalPrice - item.SellPrice) / item.OriginalPrice) * 100).toFixed(0)}%`}
							</span>
						</div>

						{userInformation && userInformation.RoleID === 3 && item && item.isBought && (
							<div className="course-paid-icon">
								<img src="/images/paid.png" alt="paid icon" />
							</div>
						)}

						<div className="warp-image">
							<Link href={{ pathname: '/video-course/[slug]', query: params }}>
								{item.ImageThumbnails === '' || item.ImageThumbnails === null || item.ImageThumbnails === undefined ? (
									<img src="/images/logo-thumnailx.jpg" />
								) : (
									<img src={item.ImageThumbnails} />
								)}
							</Link>
						</div>

						<div className="content">
							<h3 style={{ width: '90%' }} className="title m-0 in-1-line">
								{item.VideoCourseName}
							</h3>
							<div className="tags">
								<span>{item.TotalVideos} videos</span>
								{item.TotalVideoCourseSold != 0 && <span>{item.TotalVideoCourseSold} sold</span>}
								<span>{item.TotalVideoViews} views</span>

								<span style={{ background: item.Active ? '#199d3d' : '', color: item.Active ? '#fff' : '#000' }}>
									{item.Active ? 'Hiển thị' : 'Ẩn'}
								</span>
							</div>

							{!!item?.Description && <h3 className="description in-3-line">{ReactHtmlParser(item.Description)}</h3>}

							<div className="d-flex justify-content-start align-items-center mentor">
								<img src="/images/icons/UserUnknown.svg" />
								<p>{item.TeacherName ? `Mentor ${item.TeacherName}` : 'Chưa có Mentor'}</p>
							</div>

							<div className="price">
								{!!item.SellPrice ? <p>{numberWithCommas(item.SellPrice)} AUD</p> : <p>Free</p>}
								{!!item.OriginalPrice ? <p>{numberWithCommas(item.OriginalPrice)} AUD</p> : <></>}
							</div>

							<div className="buttons d-flex justify-content-start align-items-center cc-vc-group-button">
								{userInformation?.RoleID == 1 || userInformation?.RoleID == 2 ? (
									<div style={{ zIndex: 99999 }} className="d-flex w-100">
										{userInformation?.RoleID == 1 && (
											<ModalUpdateInfo
												defaultData={item}
												onRefesh={refeshData}
												dataTeacher={dataTeacher}
												programID={item.ID}
												rowData={item}
												dataCategory={dataCategory}
												dataLevel={categoryLevel}
												dataCurriculum={dataCurriculum}
												tags={tags}
												onRefeshTags={onRefeshTags}
												onRefeshLevel={onRefeshLevel}
												onRefeshCategory={onRefeshCategory}
											/>
										)}

										{userInformation !== null && (userInformation?.RoleID == 1 || userInformation?.RoleID == 2) && (
											<Link
												href={{
													pathname: '/video-learning',
													query: { ID: item.ID, course: item.ID, complete: 0 + '/' + 0, name: item.VideoCourseName }
												}}
											>
												<button className="btn btn-dark" style={{ flexShrink: 0 }}>
													<div className="in-1-line">Xem khóa học</div>
												</button>
											</Link>
										)}

										<button type="button" onClick={() => setDeleteVisible(true)} className="btn btn-danger" style={{ flexShrink: 0 }}>
											<div className="in-1-line">Xoá</div>
										</button>

										<Modal
											confirmLoading={deleting}
											onCancel={() => setDeleteVisible(false)}
											visible={deleteVisible}
											centered
											footer={null}
											title="Cảnh báo"
										>
											<div style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>
												Sau khi xóa, toàn bộ học viên đã mua sẽ không thể tìm thấy khóa học này
											</div>
											<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 32 }}>
												<button
													type="button"
													onClick={() => setDeleteVisible(false)}
													className="btn btn-light mr-3"
													style={{ flexShrink: 0 }}
												>
													<div className="in-1-line">Đóng</div>
												</button>
												<button
													type="button"
													onClick={() => {
														setDeleting(true)
														updateCourse({ ID: item?.ID, Enable: false })
													}}
													className="btn btn-danger"
													style={{ flexShrink: 0 }}
												>
													{deleting && <Spin className="loading-base mr-2" />}
													<div className="in-1-line">Xoá khóa học</div>
												</button>
											</div>
										</Modal>
									</div>
								) : (
									<>
										{activing ? (
											<>
												<Input
													onClick={(e) => e.stopPropagation()}
													value={code}
													onChange={(e) => setCode(e.target.value)}
													placeholder="Mã kích hoạt"
													style={{ height: 36, borderRadius: 6, marginRight: 4, width: 200 }}
												/>
												<button
													onClick={(e) => {
														e.stopPropagation()
														handleActive({ VdieoCourseID: item.ID, ActiveCode: code })
													}}
													className="btn btn-light btn-add"
												>
													Kích hoạt {activeLoading && <Spin className="loading-base" />}
												</button>
												<button
													onClick={(e) => {
														e.stopPropagation()
														setActiving(false)
													}}
													className="btn btn-primary btn-add"
												>
													Huỷ
												</button>
											</>
										) : (
											<>
												{item.StatusActive == 'notactivated' ? (
													<>
														<button
															onClick={(e) => {
																e.stopPropagation()
																addToCard(item, 1)
															}}
															className="btn btn-primary"
														>
															Thêm vào giỏ {isLoading && <Spin className="loading-base" />}
														</button>
														<button
															onClick={(e) => {
																e.stopPropagation()
																setActiving(true)
															}}
															className="btn btn-dark"
														>
															Kích hoạt
														</button>
														<button
															className="mr-2 btn btn-blue"
															onClick={() => router.push({ pathname: '/video-course/[slug]', query: params })}
														>
															Xem chi tiết
														</button>
													</>
												) : (
													<Link
														href={{
															pathname: '/video-learning',
															query: { ID: item.ID, course: item.ID, complete: 0 + '/' + 0, name: item.VideoCourseName }
														}}
													>
														<button className="btn btn-primary" style={{ flexShrink: 0 }}>
															<div className="in-1-line">Xem khóa học</div>
														</button>
													</Link>
												)}
											</>
										)}
									</>
								)}
							</div>
						</div>

						<div className="price">
							{!!item.SellPrice ? <p>{numberWithCommas(item.SellPrice)} AUD</p> : <p>Free</p>}
							{!!item.OriginalPrice ? <p>{numberWithCommas(item.OriginalPrice)} AUD</p> : <></>}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default RenderItemCard
