import React from 'react'
import AuthLayout from '~/components/AuthLayout'
import RegisterForm from '~/components/RegisterForm'

function Register({}) {
	return <RegisterForm />
}

Register.layout = AuthLayout

export default Register
