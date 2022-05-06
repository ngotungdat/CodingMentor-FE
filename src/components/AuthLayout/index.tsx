import React, { useState, useEffect } from 'react'
import { idiomsApi } from '~/apiBase/options/idioms'
import { createDateObject } from '~/utils/functions'
import styles from './AuthLayout.module.scss'
import _ from '~/appConfig'
import { Modal } from 'antd'
import ReactHtmlParser from 'react-html-parser'
import { rulesApi } from '~/apiBase'

const SHOW_FOOTER = false

function AuthLayout({ children }) {
	const [idiom, setIdiom] = useState<{ content: string; author: string }>({ content: '', author: '' })
	const [dateState, setDateState] = useState<any>(new Date())
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const [termContent, setTermContent] = useState<any>(null)

	async function getFirstIdiom() {
		try {
			const res: any = await idiomsApi.getRandom()
			if (res.status == 200) {
				const content: any = res?.data?.data?.Idioms
				const author: any = res?.data?.data?.CreatedBy
				setIdiom({ content, author })
			}
		} catch (error) {
			console.log(error)
		}
	}

	const getTermsInformation = async () => {
		try {
			let res = await rulesApi.getAll({})
			!!res?.status && setTermContent(res.data.data)
		} catch (error) {
			console.log('/api/Rules: ', error)
		}
	}

	useEffect(() => {
		const timeID = setInterval(() => {
			setDateState(createDateObject(new Date(), 'en'))
		}, 1000)
		return () => {
			clearInterval(timeID)
		}
	}, [])

	useEffect(() => {
		getFirstIdiom()
		getTermsInformation()
	}, [])

	return (
		<>
			<Modal
				style={{ overflow: 'hidden' }}
				zIndex={99999}
				width={1000}
				footer={false}
				visible={isVisible}
				onCancel={() => setIsVisible(false)}
			>
				<div className="row ">
					<div className="col-12 term__service mb-4">{ReactHtmlParser(termContent && termContent.RulesContent)}</div>
					<div className="col-12">
						<button className="btn btn-primary w-100" onClick={() => setIsVisible(false)}>
							Xác nhận
						</button>
					</div>
				</div>
			</Modal>

			<div className={styles.wrapper}>
				<div className={styles['image-wrapper']}>
					<div className={styles['calendar-wrapper']}>
						<div className={styles.calendar}>
							{dateState?.hour !== undefined ? (
								<>
									{/* <p className={styles.month_year}>{dateState.date}</p>
									<p className={styles.time}>
										{dateState.month} {dateState.year}
									</p>
									<p className={styles.month_year}>
										{dateState.hour} : {dateState.minute} : {dateState.second}
									</p> */}
								</>
							) : (
								<>
									{/* <p className={styles.month_year}>{dateState.getDate()}</p>
									<p className={styles.time}>
										{dateState.toLocaleDateString('en', { month: 'long' })} {dateState.getFullYear()}
									</p>
									<p className={styles.month_year}>
										{('0' + dateState.getHours()).slice(-2)} : {('0' + dateState.getMinutes()).slice(-2)} : 00
									</p> */}
								</>
							)}
							{/* <div className={styles.slogan}>
								<div className={styles.text}>
									{ReactHtmlParser(
										idiom.content
											.replace('rgb(0, 23, 55)', 'rgba(255, 255, 255, 0.9)')
											.replace('rgb(0, 23, 55)', 'rgba(255, 255, 255, 0.9)')
											.replace('rgb(0, 23, 55)', 'rgba(255, 255, 255, 0.9)')
									)}
								</div>
							</div> */}
						</div>
					</div>
				</div>
				<div className={styles.content}>{children}</div>
			</div>

			{SHOW_FOOTER && (
				<div className={`${styles.footer}${' row'}`}>
					<div className={`${styles.footer__left}`}>
						<i className="fas fa-map-marker-alt" style={{ color: '#fff' }}></i>
						<span className="ml-3">Địa chỉ</span>
					</div>
					<div className={`${styles.footer__left}`} style={{ cursor: 'pointer' }} onClick={() => setIsVisible(true)}>
						<i className="fas fa-book" style={{ color: '#fff' }}></i>
						<span className="ml-3">điều khoản</span>
					</div>
				</div>
			)}
		</>
	)
}

export default AuthLayout
