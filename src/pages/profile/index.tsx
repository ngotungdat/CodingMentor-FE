import React from 'react'
import ProfileBase from '~/components/Profile'
import LayoutBase from '~/components/LayoutBase'
import { useWrap } from '~/context/wrap'

const ProFileStaff = () => {
	const { userInformation } = useWrap()

	// function parseJwt(token) {
	// 	var base64Url = token.split('.')[1]
	// 	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
	// 	var jsonPayload = decodeURIComponent(
	// 		atob(base64)
	// 			.split('')
	// 			.map(function (c) {
	// 				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
	// 			})
	// 			.join('')
	// 	)

	// 	return JSON.parse(jsonPayload)
	// }

	// if (session !== undefined) {
	// 	let token = session.accessToken
	// 	dataUser = parseJwt(token)
	// }

	return <ProfileBase dataUser={userInformation} />
}

ProFileStaff.layout = LayoutBase
export default ProFileStaff
