import React from 'react'
import LayoutBase from '~/components/LayoutBase'
import ChangePassword from '~/components/Global/ChangePassword'
import { useWrap } from '~/context/wrap'

const ChangePasswordUser = () => {
	const { userInformation } = useWrap()
	return <ChangePassword dataUser={userInformation} />
}

ChangePasswordUser.layout = LayoutBase
export default ChangePasswordUser
