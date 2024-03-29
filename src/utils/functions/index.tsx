import moment from 'moment'
import { getSession } from 'next-auth/react'
import React, { useEffect, useRef } from 'react'

//  ---------EXPORT TO ARRAY FOR SELECT FIELD---------
export const fmSelectArr = (arr: Array<{ [key: string]: any }>, title: string, value: string, options = []) => {
	if (Array.isArray(arr) && arr.length > 0) {
		return arr
			.filter((x) => (x.Enable === false ? false : x))
			.map((x) => ({
				title: x[title],
				value: x[value],
				options: options.reduce((obj, o) => ({ ...obj, [o]: x[o] }), {})
			}))
	}
	return []
}
export function removeRepeatElementSorted(arr, n) {
	if (n == 0 || n == 1) return n

	let temp = [arr[0]]
	// Start traversing elements
	let j = 0
	for (let i = 0; i < n - 1; i++) if (arr[i] != arr[i + 1]) temp.push(arr[i + 1])
	return temp
}

export const clearOptionsDuplicate = (arr: IOptionCommon[]) => {
	return arr.reduce((newArr, o) => {
		if (!newArr.some((o2) => o2.value === o.value)) {
			newArr.push(o)
		}
		return newArr
	}, [])
}
export const fmArrayToObjectWithSpecialKey = (arr, key) => {
	return arr.reduce((newObj, s) => {
		newObj[s[key]] ? newObj[s[key]].push(s) : (newObj[s[key]] = [s])
		return newObj
	}, {})
}
export const numberWithCommas = (number: any) => {
	if (number == '' || number == undefined || number == null) {
		return ''
	}

	number += ''
	let x = number.split('.')
	let x1 = x[0]
	let x2 = x.length > 1 ? '.' + x[1] : ''
	let rgx = /(\d+)(\d{3})/
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + '.' + '$2')
	}
	return x1 + x2
}
export const mathRound = (number) => {
	return Math.round(number * 100) / 100
}
export const fmDateFromNow = (date) => {
	const local = moment(date).local()
	let formattedDate = ''
	const days = moment().diff(local, 'days')
	if (days >= 2) {
		formattedDate = local.locale('vi').format('DD/MM/YYYY HH:mm')
	} else {
		formattedDate = local.locale('vi').fromNow()
	}
	return formattedDate
}
export const parsePriceStrToNumber = (str: number | string) => parseInt(str?.toString().replace(/\D/g, '')) || 0

export const copyRightLog = () => {
	console.log('----------------------------------------------------')
	console.log('----------                                ----------')
	console.log('----------   LMS - © 2022 • NGUYEN CHAU   ----------')
	console.log('----------                                ----------')
	console.log('----------------------------------------------------')
}

export function parseJwt(token) {
	var base64Url = token.split('.')[1]
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
	var jsonPayload = decodeURIComponent(
		atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
			})
			.join('')
	)
	return JSON.parse(jsonPayload)
}

export const getLocalUser = async () => {
	const session: any = await getSession()
	let token = session.accessToken
	let userInfor = parseJwt(token)

	return userInfor
}

// GET VISIBLE STATUS
export function usePageVisibility(cb) {
	const timeoutId = useRef(null)

	let delay = 0

	const browserCompatApi = () => {
		let hidden, visibilityChange
		if ('hidden' in document) {
			hidden = 'hidden'
			visibilityChange = 'visibilitychange'
		} else if ('mozHidden' in document) {
			// Firefox up to v17
			hidden = 'mozHidden'
			visibilityChange = 'mozvisibilitychange'
		} else if ('webkitHidden' in document) {
			// Chrome up to v32, Android up to v4.4, Blackberry up to v10
			hidden = 'webkitHidden'
			visibilityChange = 'webkitvisibilitychange'
		}
		return {
			hidden,
			visibilityChange
		}
	}

	const cleanupTimeout = () => clearTimeout(timeoutId.current)

	useEffect(() => {
		const { hidden, visibilityChange } = browserCompatApi()

		if (typeof cb !== 'function') throw new Error('callback must be a function')

		const handleVisibilityChange = () => {
			if (delay) {
				if (typeof delay !== 'number' || delay < 0) {
					throw new Error('delay must be a positive integer')
				}

				if (timeoutId.current) cleanupTimeout()
				timeoutId.current = setTimeout(() => cb(!document[hidden]), delay)
			} else {
				cb(!document[hidden])
			}
		}

		document.addEventListener(visibilityChange, handleVisibilityChange)

		return () => {
			document.removeEventListener(visibilityChange, handleVisibilityChange)
		}
	}, [cb])
}

export const parseToMoney = (value: any) => {
	if (value == '' || value == undefined || value == null) {
		return ''
	}

	value += ''
	let x = value.split('.')
	let x1 = x[0]
	let x2 = x.length > 1 ? '.' + x[1] : ''
	let rgx = /(\d+)(\d{3})/
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2')
	}
	return x1 + x2
}

export const createDateObject = (dateState, locale) => {
	const year = dateState.getFullYear()
	const month = dateState.toLocaleDateString(locale, { month: 'long' })
	const date = dateState.getDate()
	const hour = ('0' + dateState.getHours()).slice(-2)
	const minute = ('0' + dateState.getMinutes()).slice(-2)
	const second = ('0' + dateState.getSeconds()).slice(-2)
	return { year, month, date, hour, minute, second }
}

export const getTypeURL = (param: any) => {
	if (param !== undefined && param !== null && param !== '') {
		if (param[4] == ':') {
			return 'LOCALHOST'
		} else {
			if (param[4] == 's' && param[8] == 'a' && param[9] == 'p' && param[10] == 'p') {
				return 'LIVE'
			} else {
				return 'HEROKU'
			}
		}
	}
}
