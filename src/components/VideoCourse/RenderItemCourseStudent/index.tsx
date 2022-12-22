import { Input, Spin } from 'antd'
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
		setAddToCardLoading,
		setByNowLoading,
		postAddToCard,
		showModal
	} = props
	const { userInformation, showNoti } = useWrap()

	const [showModalUpdate, setShowModalUpdate] = useState(false)
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
		}
	}

	return (
		<>
			<div className="vc-store_container">
				<div
					className="vc-store_item"
					// style={{ height: 260 }}
				>
					<div className="flip-card-front">
						<div className={item.MaxSold == item.TotalVideoCourseSold ? `tagSell best-seller` : `tagSell percent`}>
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
							<Link
								href={{
									pathname: '/video-course/[slug]',
									query: params
								}}
							>
								{item.ImageThumbnails === '' || item.ImageThumbnails === null || item.ImageThumbnails === undefined ? (
									<img src="/images/logo-thumnailx.jpg" />
								) : (
									<img src={item.ImageThumbnails} />
								)}
							</Link>
						</div>

						<div className="content">
							<>
								<h3 style={{ width: '90%' }} className="title m-0 in-1-line">
									{item.VideoCourseName}
								</h3>
								<div className="tags">
									<span>{item.TotalVideos} videos</span>
									{item.TotalVideoCourseSold != 0 && <span>{item.TotalVideoCourseSold} sold</span>}
									<span>{item.TotalVideoViews} views</span>
								</div>
							</>
							<>
								<h3 className="description in-3-line">{ReactHtmlParser(item.Description)}</h3>
							</>
							<>
								<div className="d-flex justify-content-start align-items-center mentor">
									<img src="/images/icons/UserUnknown.svg" />
									<p>{item.TeacherName ? `Mentor ${item.TeacherName}` : 'Chưa có Mentor'}</p>
								</div>
							</>
							<div className="price">
								{!!item.SellPrice ? <p>{numberWithCommas(item.SellPrice)} AUD</p> : <p>Free</p>}
								{!!item.OriginalPrice ? <p>{numberWithCommas(item.OriginalPrice)} AUD</p> : <></>}
							</div>
							<div className=" buttons d-flex justify-content-start align-items-center">
								{/* <button className="mr-2 btn btn-primary">Mua ngay</button>
								<button className="mr-2 btn btn-light">Thêm vào giỏ hàng</button>
								 */}
								{userInformation?.RoleID == 1 || userInformation?.RoleID == 2 ? (
									<div style={{ zIndex: 99999 }} className="d-flex w-100">
										{userInformation?.RoleID == 1 && (
											<button
												type="button"
												className=" btn btn-warning"
												onClick={(e) => {
													e.stopPropagation()
													setShowModalUpdate(true)
												}}
											>
												Chỉnh sửa
											</button>
										)}

										{userInformation !== null && (userInformation?.RoleID == 1 || userInformation?.RoleID == 2) && (
											<Link
												href={{
													pathname: '/video-learning',
													query: {
														ID: item.ID,
														course: item.ID,
														complete: 0 + '/' + 0,
														name: item.VideoCourseName
													}
												}}
											>
												<button className="btn btn-dark">Xem khóa học</button>
											</Link>
										)}
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
															onClick={() => {
																router.push({
																	pathname: '/video-course/[slug]',
																	query: params
																})
															}}
														>
															Xem chi tiết
														</button>
													</>
												) : (
													<Link
														href={{
															pathname: '/video-learning',
															query: {
																ID: item.ID,
																course: item.ID,
																complete: 0 + '/' + 0,
																name: item.VideoCourseName
															}
														}}
													>
														<button className="btn btn-primary">Xem khóa học</button>
													</Link>
												)}
												{/* <button
														onClick={(e) => {
															e.stopPropagation()
															addToCard(item, 0)
														}}
														className="btn btn-light btn-add mt-2"
													>
														Mua ngay {buyNowLoading && <Spin className="loading-base" />}
													</button> */}
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

					<div className="flip-card-back p-3 d-none" style={{}}>
						<Link
							href={{
								pathname: '/video-course/[slug]',
								query: params
							}}
						>
							<div
								className="rotate180"
								style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', cursor: 'pointer' }}
							>
								<div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
									<h3 className="title mb-2">{item.VideoCourseName}</h3>
									<span className="row mb-1 ">
										<div className="col-1">
											<i className="fas fa-certificate mr-2"></i>
										</div>

										<div className="col-10">
											<span className=" in-1-line">{item.CategoryName}</span>
										</div>
									</span>
									<span className="row mb-1 ">
										<div className="col-1">
											<i className="fas fa-graduation-cap" style={{ marginRight: 7, fontSize: 12 }}></i>
										</div>
										<div className="col-10">
											<span className="">{item.LevelName}</span>
										</div>
									</span>
									<span className="row mb-1 ">
										<div className="col-1">
											<i className="fas fa-clock mr-2"></i>
										</div>

										<div className="col-10">
											<span className=" in-1-line">
												Thời gian: {item?.ExpiryDays !== null || item?.ExpiryDays > 0 ? item?.ExpiryDays + ' ngày' : 'vĩnh viễn'}
											</span>
										</div>
									</span>
									<span className="row mb-1 ">
										<div className="col-1">
											<i className="fas fa-dollar-sign"></i>{' '}
										</div>
										<div className="col-10">
											<span
												className=" in-1-line"
												style={{
													textDecorationLine: 'line-through',
													marginRight: 4
												}}
											>
												{!!item.OriginalPrice ? `${parseToMoney(item.OriginalPrice)} AUD` : <></>}
											</span>
											{!!item.SellPrice ? (
												<span className="price font-weight-black">{parseToMoney(item.SellPrice)}</span>
											) : (
												<span className="price font-weight-black">Free</span>
											)}
										</div>
									</span>
									{/* <Link href={{ pathname: '/video-course/[slug]', query: params }}>
										<div className="ml-3 mb-3 price-group">
											<i
												className="price price-old"
												style={{
													textDecorationLine: 'line-through'
												}}
											></i>
											<span className="price">{parseToMoney(item.SellPrice)}đ</span>
										</div>
									</Link> */}

									<div style={{ flex: 1 }} />
									{userInformation?.RoleID == 1 || userInformation?.RoleID == 2 ? (
										<div style={{ zIndex: 99999 }}>
											{userInformation?.RoleID == 1 && (
												<button
													type="button"
													className=" btn btn-warning"
													style={{ width: '100%' }}
													onClick={(e) => {
														e.stopPropagation()
														setShowModalUpdate(true)
													}}
												>
													Chỉnh sửa
												</button>
											)}

											{userInformation !== null && (userInformation?.RoleID == 1 || userInformation?.RoleID == 2) && (
												<Link
													href={{
														pathname: '/video-learning',
														query: {
															ID: item.ID,
															course: item.ID,
															complete: 0 + '/' + 0,
															name: item.VideoCourseName
														}
													}}
												>
													<button className="btn btn-dark btn-add mt-2" style={{ width: '100%' }}>
														Xem khóa học
													</button>
												</Link>
											)}
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
														style={{ height: 36, borderRadius: 6 }}
													/>
													<button
														onClick={(e) => {
															e.stopPropagation()
															handleActive({ VdieoCourseID: item.ID, ActiveCode: code })
														}}
														className="btn btn-warning btn-add mt-2"
													>
														Kích hoạt {activeLoading && <Spin className="loading-base" />}
													</button>
													<button
														onClick={(e) => {
															e.stopPropagation()
															setActiving(false)
														}}
														className="btn btn-primary btn-add mt-2"
													>
														Huỷ
													</button>
												</>
											) : (
												<>
													<button
														onClick={(e) => {
															e.stopPropagation()
															addToCard(item, 1)
														}}
														className="btn btn-primary btn-add"
													>
														Thêm vào giỏ {isLoading && <Spin className="loading-base" />}
													</button>
													{item.StatusActive == 'activated' ? (
														<Link
															href={{
																pathname: '/video-learning',
																query: {
																	ID: item.ID,
																	course: item.ID,
																	complete: 0 + '/' + 0,
																	name: item.VideoCourseName
																}
															}}
														>
															<button className="btn btn-dark btn-add mt-2" style={{ width: '100%' }}>
																Xem khóa học
															</button>
														</Link>
													) : (
														<button
															onClick={(e) => {
																e.stopPropagation()
																setActiving(true)
															}}
															className="btn btn-warning btn-add mt-2"
														>
															Kích hoạt
														</button>
													)}
													{/* <button
														onClick={(e) => {
															e.stopPropagation()
															addToCard(item, 0)
														}}
														className="btn btn-light btn-add mt-2"
													>
														Mua ngay {buyNowLoading && <Spin className="loading-base" />}
													</button> */}
												</>
											)}
										</>
									)}
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>

			<ModalUpdateInfo
				dataTeacher={dataTeacher}
				_onSubmitEdit={(data: any) => updateCourse(data)}
				programID={item.ID}
				rowData={item}
				isModalVisible={showModalUpdate}
				setIsModalVisible={setShowModalUpdate}
				refeshData={() => refeshData()}
				dataCategory={dataCategory}
				dataLevel={categoryLevel}
				dataCurriculum={dataCurriculum}
				tags={tags}
				onRefeshTags={onRefeshTags}
			/>

			<ModalUpdateDetail programID={item.ID} isModalVisible={showModalEdit} setIsModalVisible={setShowModalEdit} />
		</>
	)
}

export default RenderItemCard
